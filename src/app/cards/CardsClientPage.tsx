"use client";

import { useState, useEffect } from "react";
import { Search, Filter, X, Grid, List, Check, Car } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allCards } from "@/data/cards";
import CardPreview from "@/components/card/card-preview";
import CardListItem from "@/components/card/card-list-item";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { CardCategory } from "@/lib/types";

const allCategories: CardCategory[] = [
    CardCategory.ATTACK,
    CardCategory.DEFAULT,
    CardCategory.DEFENSE,
    CardCategory.HEALING,
    CardCategory.UTILITY,
    CardCategory.BLOCK,
];

export default function CardsClientPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [emojiFilter, setEmojiFilter] = useState<string | null>(null);
    const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
    const [categoryFilters, setCategoryFilters] = useState<CardCategory[]>([]);
    const [filteredCards, setFilteredCards] = useState(allCards);
    const [activeFilters, setActiveFilters] = useState(0);
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");

    // Get unique emojis for filtering
    const uniqueEmojis = Array.from(new Set(allCards.map((item) => item.card.emoji)));

    // Toggle a category in the filter
    const toggleCategory = (category: CardCategory) => {
        setCategoryFilters((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    // Apply filters whenever filter states change
    useEffect(() => {
        let result = [...allCards];

        // Apply search term filter
        if (searchTerm) {
            result = result.filter(
                (item) =>
                    item.card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (typeof item.card.getDescription === "function"
                        ? item.card.getDescription().toLowerCase().includes(searchTerm.toLowerCase())
                        : item.card
                              .description(item.card.effects.map((e) => e.toString()))
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()))
            );
        }

        // Apply emoji filter
        if (emojiFilter) {
            result = result.filter((item) => item.card.emoji === emojiFilter);
        }

        // Apply priority filter
        if (priorityFilter) {
            if (priorityFilter === "has-priority") {
                result = result.filter((item) => item.card.priority > 0);
            } else if (priorityFilter === "no-priority") {
                result = result.filter((item) => !item.card.priority || item.card.priority === 0);
            }
        }

        // Apply category filters (multi-select)
        if (categoryFilters.length > 0) {
            result = result.filter((item) =>
                item.card.cardCategories.some((category) => categoryFilters.includes(category as CardCategory))
            );
        }

        setFilteredCards(result);

        // Count active filters
        let count = 0;
        if (searchTerm) count++;
        if (emojiFilter) count++;
        if (priorityFilter) count++;
        if (categoryFilters.length > 0) count++;
        setActiveFilters(count);
    }, [searchTerm, emojiFilter, priorityFilter, categoryFilters]);

    // Reset all filters
    const resetFilters = () => {
        setSearchTerm("");
        setEmojiFilter(null);
        setPriorityFilter(null);
        setCategoryFilters([]);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Cards</h1>
                    <p className="text-muted-foreground">Browse all cards in the Frieren TCG</p>
                </div>

                <div className="mt-4 md:mt-0">
                    <ToggleGroup
                        type="single"
                        value={viewMode}
                        onValueChange={(value) => value && setViewMode(value as "grid" | "list")}
                    >
                        <ToggleGroupItem value="grid" aria-label="Grid view">
                            <Grid className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="list" aria-label="List view">
                            <List className="h-4 w-4" />
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="w-full md:w-2/3 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Search cards..."
                            className="pl-10 bg-white"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7"
                                onClick={() => setSearchTerm("")}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>

                    <div className="w-full md:w-1/3 shrink flex gap-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="w-full flex items-center gap-2">
                                    <Filter className="h-4 w-4" />
                                    Filters
                                    {activeFilters > 0 && (
                                        <Badge variant="secondary" className="ml-2">
                                            {activeFilters}
                                        </Badge>
                                    )}
                                </Button>
                            </SheetTrigger>

                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Filter Cards</SheetTitle>
                                    <SheetDescription>Refine your card search with these filters</SheetDescription>
                                </SheetHeader>

                                <div className="py-6 space-y-6 px-3">
                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">Card Type</h3>
                                        <Select
                                            value={emojiFilter || "all"}
                                            onValueChange={(value) => setEmojiFilter(value === "all" ? null : value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="All types" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All types</SelectItem>
                                                {uniqueEmojis.map((emoji, index) => (
                                                    <SelectItem key={index} value={emoji}>
                                                        <Image
                                                            src={emoji || "/placeholder.svg"}
                                                            alt={emoji}
                                                            width={20}
                                                            height={20}
                                                        />
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">Priority</h3>
                                        <Select
                                            value={priorityFilter || "all"}
                                            onValueChange={(value) => setPriorityFilter(value === "all" ? null : value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="All priorities" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All cards</SelectItem>
                                                <SelectItem value="has-priority">Has priority</SelectItem>
                                                <SelectItem value="no-priority">No priority</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-sm font-medium">Categories</h3>
                                            {categoryFilters.length > 0 && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-8 text-xs"
                                                    onClick={() => setCategoryFilters([])}
                                                >
                                                    Clear
                                                </Button>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            {allCategories.map((category) => (
                                                <div key={category} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={`category-${category}`}
                                                        checked={categoryFilters.includes(category)}
                                                        onCheckedChange={() => toggleCategory(category)}
                                                    />
                                                    <label
                                                        htmlFor={`category-${category}`}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                                    >
                                                        {category}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button variant="outline" onClick={resetFilters}>
                                            Reset Filters
                                        </Button>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Button>Apply Filters</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                    {uniqueEmojis.map((emoji, index) => (
                        <Badge
                            key={index}
                            className={`text-black bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer ${
                                emojiFilter === emoji ? "ring-2 ring-primary" : ""
                            }`}
                            onClick={() => setEmojiFilter(emojiFilter === emoji ? null : emoji)}
                        >
                            <Image src={emoji || "/placeholder.svg"} alt={emoji} width={40} height={40} />
                        </Badge>
                    ))}
                </div> */}

                {/* Category quick filters */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {allCategories.map((category) => (
                        <Badge
                            key={category}
                            variant={categoryFilters.includes(category) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => toggleCategory(category)}
                        >
                            {category}
                            {categoryFilters.includes(category) && <Check className="ml-1 h-3 w-3" />}
                        </Badge>
                    ))}
                </div>

                <div className="flex justify-end">
                    <div className="text-sm text-muted-foreground">
                        Showing: {filteredCards.length} of {allCards.length} unique cards
                    </div>
                </div>
            </div>

            {activeFilters > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {searchTerm && (
                        <Badge variant="outline" className="flex items-center gap-1">
                            Search: {searchTerm}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-4 w-4 ml-1 p-0"
                                onClick={() => setSearchTerm("")}
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </Badge>
                    )}

                    {emojiFilter && (
                        <Badge variant="outline" className="flex items-center gap-1">
                            Type:{" "}
                            <Image
                                src={emojiFilter || "/placeholder.svg"}
                                alt={emojiFilter}
                                width={16}
                                height={16}
                                className="mx-1"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-4 w-4 ml-1 p-0"
                                onClick={() => setEmojiFilter(null)}
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </Badge>
                    )}

                    {priorityFilter && (
                        <Badge variant="outline" className="flex items-center gap-1">
                            Priority: {priorityFilter === "has-priority" ? "Yes" : "No"}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-4 w-4 ml-1 p-0"
                                onClick={() => setPriorityFilter(null)}
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </Badge>
                    )}

                    {categoryFilters.length > 0 && (
                        <Badge variant="outline" className="flex items-center gap-1">
                            Categories: {categoryFilters.length}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-4 w-4 ml-1 p-0"
                                onClick={() => setCategoryFilters([])}
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </Badge>
                    )}

                    <Button variant="ghost" size="sm" className="text-xs" onClick={resetFilters}>
                        Clear all
                    </Button>
                </div>
            )}

            {filteredCards.length === 0 ? (
                <div className="text-center py-12">
                    <h3 className="text-lg font-medium mb-2">No cards found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your filters or search term</p>
                    <Button onClick={resetFilters}>Reset All Filters</Button>
                </div>
            ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredCards.map((item, index) => (
                        <CardPreview key={index} card={item.card} count={item.count} />
                    ))}
                </div>
            ) : (
                <div>
                    {filteredCards.map((item, index) => (
                        <CardListItem key={index} card={item.card} count={item.count} />
                    ))}
                </div>
            )}
        </div>
    );
}
