"use client";

import { useState, useEffect } from "react";
import {
    Search,
    Filter,
    X,
    Grid,
    List,
    Heart,
    ChevronDown,
    ChevronUp,
    WalletCardsIcon as Cards,
    Check,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allCards } from "@/data/cards";
import CardPreview from "@/components/card/card-preview";
import CardListItem from "@/components/card/card-list-item";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import { CardCategory } from "@/lib/types";
import { CharacterID, CharacterIdToName } from "@/lib/enums";
import { cn } from "@/lib/utils";

const allCategories: CardCategory[] = [
    CardCategory.ATTACK,
    CardCategory.DEFENSE,
    CardCategory.UTILITY,
    CardCategory.HEALING,
    CardCategory.BLOCK,
    CardCategory.DEFAULT,
    CardCategory.BUFF,
    CardCategory.DEBUFF,
    CardCategory.DoT,
    CardCategory.STATUS,
    CardCategory.DISRUPTION,
];

const allCharacters: CharacterID[] = [
    CharacterID.Frieren,
    CharacterID.Stark,
    CharacterID.Himmel,
    CharacterID.Sein,
    CharacterID.Serie,
    CharacterID.Sense,
    CharacterID.Denken,
    CharacterID.Laufen,
    CharacterID.Linie,
    CharacterID.Stille,
];

type HpCostFilterComparisonType = "=" | "<" | ">" | "<=" | ">=";

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
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // --- Helper Functions ---

    const toggleCategory = (category: CardCategory) => {
        setCategoryFilters((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const resetFilters = () => {
        setSearchTerm("");
        setCharacterFilter(null);
        setPriorityFilter(null);
        setCategoryFilters([]);
        setHpCostFilter(null);
        setHpCostFilterComparison(">=");
    };

    // --- Effects ---

    useEffect(() => {
        let result = [...allCards];

        // Apply search term filter
        if (searchTerm) {
            result = result.filter(
                (item) =>
                    item.card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (typeof item.card.getDescription === "function"
                        ? item.card.getDescription().toLowerCase().includes(searchTerm.toLowerCase())
                        : typeof item.card.description === "function"
                        ? item.card
                              .description(item.card.effects?.map((e) => e.toString()) ?? [])
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                        : false)
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
                item.card.cardCategories?.some((category) => categoryFilters.includes(category as CardCategory))
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
    }, [
        searchTerm,
        characterFilter,
        priorityFilter,
        categoryFilters,
        hpCostFilter,
        hpCostFilterComparison,
        allCards,
        isFilterOpen,
    ]);

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 p-4 mb-6 border border-primary/20 shadow-inner">
                    <Cards className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Card Library</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Browse, search, and filter through every card in the Frieren TCG.
                </p>
            </div>

            {/* Filters and Search Section */}
            <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="mb-8">
                <Card className="glass-card border-border/30 shadow-lg">
                    <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/10 transition-all duration-200 rounded-t-lg group">
                            <div className="flex justify-between items-center">
                                <CardTitle className="flex items-center gap-3">
                                    <Filter className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
                                    <span className="text-lg">Filter & Search Cards</span>
                                    {activeFilters > 0 && (
                                        <Badge
                                            variant="secondary"
                                            className="ml-2 bg-primary/15 text-primary border-primary/20"
                                        >
                                            {activeFilters} active
                                        </Badge>
                                    )}
                                </CardTitle>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-9 p-0 hover:bg-muted/20 transition-colors"
                                >
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
                            {/* Search Input */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search by card name or description..."
                                    className="pl-10 bg-background/50 border-border/30 focus:border-primary/50 focus:ring-primary/20 transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 hover:bg-muted/20"
                                        onClick={() => setSearchTerm("")}
                                        aria-label="Clear search"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>

                            <Separator className="bg-border/30" />

                            {/* Core Filters Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Character Filter */}
                                <div className="space-y-2">
                                    <Label htmlFor="character-filter" className="text-sm font-medium text-foreground">
                                        Character
                                    </Label>
                                    <Select
                                        value={characterFilter || "all"}
                                        onValueChange={(value) => setCharacterFilter(value === "all" ? null : value)}
                                    >
                                        <SelectTrigger
                                            id="character-filter"
                                            className="bg-background/50 border-border/30 focus:border-primary/50 focus:ring-primary/20"
                                        >
                                            <SelectValue placeholder="Select Character" />
                                        </SelectTrigger>
                                        <SelectContent className="glass-card border-border/30">
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
                                    <Label htmlFor="priority-filter" className="text-sm font-medium text-foreground">
                                        Priority
                                    </Label>
                                    <Select
                                        value={priorityFilter || "all"}
                                        onValueChange={(value) => setPriorityFilter(value === "all" ? null : value)}
                                    >
                                        <SelectTrigger
                                            id="priority-filter"
                                            className="bg-background/50 border-border/30 focus:border-primary/50 focus:ring-primary/20"
                                        >
                                            <SelectValue placeholder="Select Priority" />
                                        </SelectTrigger>
                                        <SelectContent className="glass-card border-border/30">
                                            <SelectItem value="all">All Cards</SelectItem>
                                            <SelectItem value="has-priority">Has Priority</SelectItem>
                                            <SelectItem value="no-priority">No Priority</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* HP Cost Filter */}
                                <div className="space-y-2">
                                    <Label htmlFor="hp-cost-value" className="text-sm font-medium text-foreground">
                                        HP Cost
                                    </Label>
                                    <div className="flex gap-2 items-center">
                                        <Select
                                            value={hpCostFilterComparison}
                                            onValueChange={(value) =>
                                                setHpCostFilterComparison(value as HpCostFilterComparisonType)
                                            }
                                        >
                                            <SelectTrigger
                                                className="w-20 bg-background/50 border-border/30 focus:border-primary/50 focus:ring-primary/20"
                                                aria-label="HP Cost comparison"
                                            >
                                                <SelectValue placeholder="=" />
                                            </SelectTrigger>
                                            <SelectContent className="glass-card border-border/30">
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
                                                className={cn(
                                                    "pl-10 bg-background/50 border-border/30 focus:border-primary/50 focus:ring-primary/20",
                                                    { "pr-10": hpCostFilter !== null }
                                                )}
                                            />
                                            {hpCostFilter !== null && (
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 hover:bg-muted/20"
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

                            <Separator className="bg-border/30" />

                            {/* BEAUTIFUL Category Filters */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <Label className="text-base font-medium text-foreground">Categories</Label>
                                    {categoryFilters.length > 0 && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 text-xs hover:bg-muted/20 text-muted-foreground hover:text-foreground"
                                            onClick={() => setCategoryFilters([])}
                                        >
                                            Clear Categories
                                        </Button>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {allCategories.map((category) => {
                                        const isSelected = categoryFilters.includes(category);
                                        return (
                                            <button
                                                key={category}
                                                onClick={() => toggleCategory(category)}
                                                className={cn(
                                                    "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200",
                                                    isSelected
                                                        ? "bg-primary text-primary-foreground border-primary/50 shadow-md"
                                                        : "bg-muted/20 hover:bg-muted/40 border-border/30 text-muted-foreground"
                                                )}
                                            >
                                                <div
                                                    className={cn(
                                                        "h-4 w-4 rounded-full border-2 flex items-center justify-center transition-all",
                                                        isSelected
                                                            ? "bg-primary-foreground border-primary-foreground"
                                                            : "bg-background border-muted-foreground/50"
                                                    )}
                                                >
                                                    {isSelected && <Check className="h-3 w-3 text-primary" />}
                                                </div>
                                                <span className="capitalize">{category.toLowerCase()}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="flex justify-end pt-6 border-t border-border/20">
                            <Button
                                variant="outline"
                                onClick={resetFilters}
                                disabled={activeFilters === 0}
                                className="border-border/30 hover:bg-muted/20 disabled:opacity-50"
                            >
                                Reset All Filters
                            </Button>
                        </CardFooter>
                    </CollapsibleContent>
                </Card>
            </Collapsible>

            {/* Results Count & View Toggle */}
            <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{filteredCards.length}</span> of{" "}
                    <span className="font-medium text-foreground">{allCards.length}</span> unique cards
                </div>
                <ToggleGroup
                    type="single"
                    value={viewMode}
                    onValueChange={(value) => value && setViewMode(value as "grid" | "list")}
                    aria-label="View mode"
                    className="bg-muted/20 p-1 rounded-lg border border-border/20"
                >
                    <ToggleGroupItem
                        value="grid"
                        aria-label="Grid view"
                        className="data-[state=on]:bg-primary/20 data-[state=on]:text-primary transition-all"
                    >
                        <Grid className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="list"
                        aria-label="List view"
                        className="data-[state=on]:bg-primary/20 data-[state=on]:text-primary transition-all"
                    >
                        <List className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {/* Card Display Area */}
            {filteredCards.length === 0 ? (
                <div className="text-center py-16 glass-card border-border/20 rounded-2xl">
                    <div className="max-w-md mx-auto space-y-4">
                        <div className="w-16 h-16 mx-auto bg-muted/20 rounded-full flex items-center justify-center">
                            <Search className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">No Cards Found</h3>
                        <p className="text-muted-foreground">
                            Try adjusting your search terms or filters to find what you're looking for.
                        </p>
                        <Button
                            onClick={resetFilters}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                        >
                            Reset All Filters
                        </Button>
                    </div>
                </div>
            ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredCards.map((item, index) => (
                        <CardPreview
                            key={item.card?.getId?.() ?? index}
                            card={item.card}
                            count={item.count}
                            showCount={true}
                        />
                    ))}
                </div>
            ) : (
                <div className="space-y-3">
                    {filteredCards.map((item, index) => (
                        <CardListItem
                            key={item.card?.getId?.() ?? index}
                            card={item.card}
                            count={item.count}
                            showCount={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
