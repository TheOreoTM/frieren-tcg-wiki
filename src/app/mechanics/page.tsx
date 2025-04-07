import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Flame,
  Shield,
  Sparkles,
  Swords,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mechanics data
const mechanics = [
  {
    id: "empower",
    name: "Empower System",
    description:
      "A system where your cards get stronger over the course of the game.",
    icon: <Sparkles className="h-6 w-6 text-blue-500" />,
    slug: "empower-system",
  },
  {
    id: "combat",
    name: "Combat",
    description: "How characters battle against each other on the field.",
    icon: <Swords className="h-6 w-6 text-red-500" />,
    slug: "combat",
  },
];

export default function MechanicsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Game Mechanics</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Learn about the core systems and rules that make up Frieren TCG.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mechanics.map((mechanic) => (
          <Link href={`/mechanics/${mechanic.slug}`} key={mechanic.id}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{mechanic.icon}</div>
                <CardTitle>{mechanic.name}</CardTitle>
                <CardDescription>{mechanic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Click to learn more about how {mechanic.name.toLowerCase()}{" "}
                  works in Frieren TCG.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 text-emerald-600" />
          <h2 className="text-2xl font-bold">Core Rulebook</h2>
        </div>
        <p className="mb-4">
          For a comprehensive guide to all game mechanics and rules, check out
          the official Frieren TCG Core Rulebook.
        </p>
        <Link href="/wiki/rulebook">
          <Button>View Rulebook</Button>
        </Link>
      </div>
    </div>
  );
}
