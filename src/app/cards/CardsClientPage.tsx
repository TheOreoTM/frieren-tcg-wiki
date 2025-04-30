"use client";

import { useState, useEffect } from "react";
import { Search, Filter, X, Grid, List, Check, Heart, ChevronDown, ChevronUp } from "lucide-react"; // Added Chevron icons
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allCards } from "@/data/cards"; // Assuming this path is correct
import CardPreview from "@/components/card/card-preview"; // Assuming this path is correct
import CardListItem from "@/components/card/card-list-item"; // Assuming this path is correct
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"; // Added Collapsible components

// Assuming these types/enums exist and paths are correct
import { CardCategory } from "@/lib/types";
import { CharacterID, CharacterIdToName } from "@/lib/enums";
import { cn } from "@/lib/utils";

// --- Mock Data & Constants (Keep as they are or replace with actual imports) ---
// Example structure for allCards if needed for testing
// const allCards = [
//   { card: { id: '1', title: 'Card One', deck: CharacterID.Frieren, priority: 1, hpCost: 0, cardCategories: [CardCategory.ATTACK], description: (args) => `Attack card`, effects: ['Effect1'], getId: () => '1' }, count: 3 },
//   { card: { id: '2', title: 'Card Two', deck: CharacterID.Himmel, priority: 0, hpCost: 5, cardCategories: [CardCategory.DEFENSE, CardCategory.HEALING], description: (args) => `Defense/Healing card`, effects: ['Effect2'], getId: () => '2' }, count: 2 },
//   { card: { id: '3', title: 'Card Three', deck: CharacterID.Frieren, priority: 2, hpCost: 2, cardCategories: [CardCategory.UTILITY], description: (args) => `Utility card`, effects: ['Effect3'], getId: () => '3' }, count: 1 },
// ];

const allCategories: CardCategory[] = [
    CardCategory.ATTACK,
    CardCategory.DEFAULT,
    CardCategory.DEFENSE,
    CardCategory.HEALING,
    CardCategory.UTILITY,
    CardCategory.BLOCK,
];

const allCharacters: CharacterID[] = [
    CharacterID.Denken,
    CharacterID.Frieren,
    CharacterID.Himmel,
    CharacterID.Laufen,
    CharacterID.Linie,
    CharacterID.Sein,
    CharacterID.Sense,
    CharacterID.Serie,
    CharacterID.Stark,
    CharacterID.Stille,
];

type HpCostFilterComparisonType = "=" | "<" | ">" | "<=" | ">=";
// --- Component ---

export default function CardsClientPage() {
    // --- State Variables ---
    const [searchTerm, setSearchTerm] = useState("");
    const [characterFilter, setCharacterFilter] = useState<string | null>(null);
    const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
    const [hpCostFilter, setHpCostFilter] = useState<number | null>(null);
    const [hpCostFilterComparison, setHpCostFilterComparison] = useState<HpCostFilterComparisonType>(">=");
    const [categoryFilters, setCategoryFilters] = useState<CardCategory[]>([]);
    const [filteredCards, setFilteredCards] = useState(allCards);
    const [activeFilters, setActiveFilters] = useState(0);
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State for Collapsible

    // --- Helper Functions ---

    // Toggle a category in the filter
    const toggleCategory = (category: CardCategory) => {
        setCategoryFilters((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    // Reset all filters
    const resetFilters = () => {
        setSearchTerm("");
        setCharacterFilter(null);
        setPriorityFilter(null);
        setCategoryFilters([]);
        setHpCostFilter(null);
        setHpCostFilterComparison(">=");
    };

    // --- Effects ---

    // Apply filters whenever filter states change (NO CHANGE IN LOGIC)
    useEffect(() => {
        let result = [...allCards];

        // Apply search term filter
        if (searchTerm) {
            result = result.filter(
                (item) =>
                    item.card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (typeof item.card.getDescription === "function"
                        ? item.card.getDescription().toLowerCase().includes(searchTerm.toLowerCase())
                        : // Ensure item.card.description exists and is a function before calling
                        typeof item.card.description === "function"
                        ? item.card
                              .description(item.card.effects?.map((e) => e.toString()) ?? [])
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                        : false) // Handle cases where description is not a function
            );
        }

        // Apply character filter
        if (characterFilter) {
            result = result.filter((item) => item.card.deck === characterFilter);
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
                item.card.cardCategories?.some(
                    (
                        category // Add optional chaining
                    ) => categoryFilters.includes(category as CardCategory)
                )
            );
        }

        // Apply hp cost filter
        if (hpCostFilter !== null && !isNaN(hpCostFilter)) {
            result = result.filter((item) => {
                const cost = item.card.hpCost ?? 0;
                switch (hpCostFilterComparison) {
                    case "=":
                        return cost === hpCostFilter;
                    case "<":
                        return cost < hpCostFilter;
                    case ">":
                        return cost > hpCostFilter;
                    case "<=":
                        return cost <= hpCostFilter;
                    case ">=":
                        return cost >= hpCostFilter;
                    default:
                        return true;
                }
            });
        }

        // Count active filters
        let count = 0;
        if (searchTerm) count++;
        if (characterFilter) count++;
        if (priorityFilter) count++;
        if (categoryFilters.length > 0) count++;
        if (hpCostFilter !== null && !isNaN(hpCostFilter)) count++;
        setFilteredCards(result);
        setActiveFilters(count);

        // Automatically open filters if any are active and it's currently closed
        if (count > 0 && !isFilterOpen) {
            // setIsFilterOpen(true); // Optional: auto-open filters when active
        }
    }, [
        searchTerm,
        characterFilter,
        priorityFilter,
        categoryFilters,
        hpCostFilter,
        hpCostFilterComparison,
        allCards,
        isFilterOpen,
    ]); // Added allCards and isFilterOpen to dependency array

    // --- Render ---
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Card Library</h1>
                    <p className="text-muted-foreground">Browse and filter all cards in the Frieren TCG</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <ToggleGroup
                        type="single"
                        value={viewMode}
                        onValueChange={(value) => value && setViewMode(value as "grid" | "list")}
                        aria-label="View mode"
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

            {/* Filters and Search Section */}
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="mb-8">
                <Card>
                    <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors rounded-t-lg">
                            <div className="flex justify-between items-center">
                                <CardTitle className="flex items-center gap-2">
                                    <Filter className="h-5 w-5 text-sm md:text-lg" />
                                    <span className="text-sm md:text-lg">Filter & Search Cards</span>
                                    {activeFilters > 0 && (
                                        <Badge variant="secondary" className="ml-2">
                                            {activeFilters} active
                                        </Badge>
                                    )}
                                </CardTitle>
                                <Button variant="ghost" size="sm" className="w-9 p-0">
                                    {isFilterOpen ? (
                                        <ChevronUp className="h-4 w-4" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4" />
                                    )}
                                    <span className="sr-only">Toggle Filters</span>
                                </Button>
                            </div>
                        </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                        <CardContent className="pt-6 space-y-6">
                            {" "}
                            {/* Search Input */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search by card name or description..."
                                    className="pl-10"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7"
                                        onClick={() => setSearchTerm("")}
                                        aria-label="Clear search"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                            <Separator />
                            {/* Core Filters Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Character Filter */}
                                <div className="space-y-2">
                                    <Label htmlFor="character-filter">Character</Label>
                                    <Select
                                        value={characterFilter || "all"}
                                        onValueChange={(value) => setCharacterFilter(value === "all" ? null : value)}
                                    >
                                        <SelectTrigger id="character-filter">
                                            <SelectValue placeholder="Select Character" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="all">All Characters</SelectItem>
                                                {allCharacters.map((characterId) => (
                                                    <SelectItem key={characterId} value={characterId}>
                                                        {CharacterIdToName[characterId] || characterId}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Priority Filter */}
                                <div className="space-y-2">
                                    <Label htmlFor="priority-filter">Priority</Label>
                                    <Select
                                        value={priorityFilter || "all"}
                                        onValueChange={(value) => setPriorityFilter(value === "all" ? null : value)}
                                    >
                                        <SelectTrigger id="priority-filter">
                                            <SelectValue placeholder="Select Priority" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Cards</SelectItem>
                                            <SelectItem value="has-priority">Has Priority</SelectItem>
                                            <SelectItem value="no-priority">No Priority</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* HP Cost Filter */}
                                <div className="space-y-2">
                                    <Label htmlFor="hp-cost-value">HP Cost</Label>
                                    <div className="flex gap-2 items-center">
                                        <Select
                                            value={hpCostFilterComparison}
                                            onValueChange={(value) =>
                                                setHpCostFilterComparison(value as HpCostFilterComparisonType)
                                            }
                                        >
                                            <SelectTrigger className="w-20" aria-label="HP Cost comparison">
                                                <SelectValue placeholder="=" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="=">=</SelectItem>
                                                <SelectItem value="<">&lt;</SelectItem>
                                                <SelectItem value=">">&gt;</SelectItem>
                                                <SelectItem value="<=">&le;</SelectItem>
                                                <SelectItem value=">=">&ge;</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <div className="relative flex-1">
                                            <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                            <Input
                                                id="hp-cost-value"
                                                type="number"
                                                min="0"
                                                value={hpCostFilter ?? ""}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setHpCostFilter(value === "" ? null : parseInt(value, 10));
                                                }}
                                                placeholder="HP"
                                                className={cn("pl-10", { "pr-10": hpCostFilter !== null })}
                                            />
                                            {hpCostFilter !== null && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7"
                                                    onClick={() => setHpCostFilter(null)}
                                                    aria-label="Clear HP cost filter"
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Separator />
                            {/* Category Filters */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center mb-2">
                                    <Label className="text-base font-medium">Categories</Label>
                                    {categoryFilters.length > 0 && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 text-xs"
                                            onClick={() => setCategoryFilters([])}
                                        >
                                            Clear Categories
                                        </Button>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
                                    {allCategories.map((category) => (
                                        <div key={category} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`category-${category}`}
                                                checked={categoryFilters.includes(category)}
                                                onCheckedChange={() => toggleCategory(category)}
                                                aria-labelledby={`category-label-${category}`}
                                            />
                                            <Label
                                                htmlFor={`category-${category}`}
                                                id={`category-label-${category}`}
                                                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer capitalize"
                                            >
                                                {category.toLowerCase()}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end pt-4 border-t">
                            {" "}
                            <Button variant="outline" onClick={resetFilters} disabled={activeFilters === 0}>
                                Reset All Filters
                            </Button>
                        </CardFooter>
                    </CollapsibleContent>
                </Card>
            </Collapsible>

            {/* Active Filter Badges (Removed as count is shown in collapsible header) */}
            {/* Add them back here if preferred */}

            {/* Results Count */}
            <div className="flex justify-end mb-4">
                <div className="text-sm text-muted-foreground">
                    Showing {filteredCards.length} of {allCards.length} unique cards
                </div>
            </div>

            {/* Card Display Area */}
            {filteredCards.length === 0 ? (
                <div className="text-center py-16 border rounded-lg bg-card">
                    <h3 className="text-xl font-semibold mb-2">No Cards Found</h3>
                    <p className="text-muted-foreground mb-6">Try adjusting your search or filters.</p>
                    <Button onClick={resetFilters}>Reset All Filters</Button>
                </div>
            ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredCards.map((item, index) => (
                        <CardPreview key={item.card?.getId?.() ?? index} card={item.card} count={item.count} />
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredCards.map((item, index) => (
                        <CardListItem key={item.card?.getId?.() ?? index} card={item.card} count={item.count} />
                    ))}
                </div>
            )}
        </div>
    );
}
