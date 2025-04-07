import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  WalletCardsIcon as Cards,
  ScrollText,
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

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Frieren TCG
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A fan-made trading card game inspired by the anime Frieren: Beyond
          Journeys End
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cards className="h-5 w-5" />
              Characters
            </CardTitle>
            <CardDescription>
              Browse the complete character card collection
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Discover characters featuring Frieren, Fern, Stark, Himmel and
              other characters from the series.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/characters" className="w-full">
              <Button variant="outline" className="w-full">
                View Characters <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScrollText className="h-5 w-5" />
              Mechanics
            </CardTitle>
            <CardDescription>Learn how to play the game</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Understand the core mechanics, spell casting, combat, and special
              abilities in Frieren TCG.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/mechanics" className="w-full">
              <Button variant="outline" className="w-full">
                Explore Mechanics <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Wiki
            </CardTitle>
            <CardDescription>Dive into the lore and strategy</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore in-depth articles about game strategy, card synergies, and
              the world of Frieren.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/wiki" className="w-full">
              <Button variant="outline" className="w-full">
                Visit Wiki <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-purple-50 dark:from-emerald-950/30 dark:to-purple-950/30 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600">•</span>
            <span>
              New expansion: "Beyond the Wasteland" featuring 60 new cards!
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600">•</span>
            <span>
              Tournament rules updated for the upcoming Regional Championship
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600">•</span>
            <span>
              Balance changes to Himmel's "Divine Blade" and Stark's "Warrior's
              Resolve"
            </span>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Begin Your Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're a seasoned card player or new to TCGs, Frieren TCG
          offers a magical experience that captures the essence of the beloved
          series.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/wiki/getting-started">
            <Button>Getting Started Guide</Button>
          </Link>
          <Link href="/characters">
            <Button variant="outline">Browse Character Cards</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
