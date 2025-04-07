import Link from "next/link";
import {
  BookOpen,
  WalletCardsIcon as Cards,
  FileText,
  Flame,
  Search,
  Shield,
  Sparkles,
  Swords,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function WikiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Frieren TCG Wiki
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Your comprehensive guide to the Frieren TCG.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search the wiki..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link href="/wiki/getting-started">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600" />
                Getting Started
              </CardTitle>
              <CardDescription>New to Frieren TCG? Start here!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn the basics of Frieren TCG, including how to use new
                mechanics and play your first game.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Read Guide
              </Button>
            </CardFooter>
          </Card>
        </Link>

        <Link href="/wiki/rulebook">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                Rulebook
              </CardTitle>
              <CardDescription>
                Complete game rules and mechanics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The official rulebook containing all game rules, mechanics, and
                card interactions.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View Rulebook
              </Button>
            </CardFooter>
          </Card>
        </Link>

        <Link href="/cards">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cards className="h-5 w-5 text-emerald-600" />
                Card Database
              </CardTitle>
              <CardDescription>Browse all available cards</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Search and filter through all cards in Frieren TCG, including
                their abilities and stats.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Browse Character Cards
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6">Game Mechanics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <Link href="/mechanics/mana-system">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
            <div className="text-left">
              <div className="font-medium">Mana System</div>
              <div className="text-xs text-muted-foreground">
                Resource management
              </div>
            </div>
          </Button>
        </Link>
        <Link href="/mechanics/combat">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <Swords className="mr-2 h-4 w-4 text-red-500" />
            <div className="text-left">
              <div className="font-medium">Combat</div>
              <div className="text-xs text-muted-foreground">
                Battle mechanics
              </div>
            </div>
          </Button>
        </Link>
        <Link href="/mechanics/spell-casting">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <Zap className="mr-2 h-4 w-4 text-purple-500" />
            <div className="text-left">
              <div className="font-medium">Spell Casting</div>
              <div className="text-xs text-muted-foreground">
                Magic and spells
              </div>
            </div>
          </Button>
        </Link>
        <Link href="/mechanics/elements">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <Flame className="mr-2 h-4 w-4 text-orange-500" />
            <div className="text-left">
              <div className="font-medium">Elements</div>
              <div className="text-xs text-muted-foreground">
                Elemental interactions
              </div>
            </div>
          </Button>
        </Link>
        <Link href="/mechanics/hero-abilities">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <Shield className="mr-2 h-4 w-4 text-green-500" />
            <div className="text-left">
              <div className="font-medium">Hero Abilities</div>
              <div className="text-xs text-muted-foreground">
                Special powers
              </div>
            </div>
          </Button>
        </Link>
        <Link href="/wiki/mechanics">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <div className="text-left">
              <div className="font-medium">View All Mechanics</div>
              <div className="text-xs text-muted-foreground">
                Complete mechanics guide
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6">Strategy Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link href="/wiki/strategy/deck-building">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Deck Building Guide</CardTitle>
              <CardDescription>
                Learn how to construct effective decks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Understand the principles of deck construction, including mana
                curve, card synergies, and strategy.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/wiki/strategy/archetypes">
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Deck Archetypes</CardTitle>
              <CardDescription>
                Popular deck strategies and playstyles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore the major deck archetypes in Frieren TCG, from
                aggressive to control to combo strategies.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6">Characters & Lore</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/wiki/characters/heroes">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <Users className="mr-2 h-4 w-4 text-emerald-600" />
            <div className="text-left">
              <div className="font-medium">Heroes</div>
              <div className="text-xs text-muted-foreground">
                Main characters
              </div>
            </div>
          </Button>
        </Link>
        <Link href="/wiki/characters/villains">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <Users className="mr-2 h-4 w-4 text-red-600" />
            <div className="text-left">
              <div className="font-medium">Villains</div>
              <div className="text-xs text-muted-foreground">Antagonists</div>
            </div>
          </Button>
        </Link>
        <Link href="/wiki/world">
          <Button
            variant="outline"
            className="w-full justify-start h-auto py-3"
          >
            <div className="text-left">
              <div className="font-medium">World</div>
              <div className="text-xs text-muted-foreground">
                Setting and locations
              </div>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
