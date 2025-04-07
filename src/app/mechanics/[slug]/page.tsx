import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Flame,
  Shield,
  Sparkles,
  Swords,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Mechanics data
const mechanics = [
  {
    id: "empower",
    name: "Empower System",
    description: "The resource system used to play cards in Frieren TCG.",
    icon: <Sparkles className="h-6 w-6 text-blue-500" />,
    slug: "empower-system",
    content: {
      overview: `<p>Work in progress</p>`,
      rules: `<p>Work in progress</p>`,
      examples: `<p>Work in progress</p>`,
    },
  },
  {
    id: "combat",
    name: "Combat",
    description: "How heroes battle against each other on the field.",
    icon: <Swords className="h-6 w-6 text-red-500" />,
    slug: "combat",
    content: {
      overview: `<p>Work in progress</p>`,
      rules: `<p>Work in progress</p>`,
      examples: `<p>Work in progress</p>`,
    },
  },
];

export default async function MechanicPage({ params }: PageProps) {
  const { slug } = await params;

  const mechanic = mechanics.find((m) => m.slug === slug);

  if (!mechanic) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/mechanics">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Mechanics
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-6">
        {mechanic.icon}
        <h1 className="text-3xl md:text-4xl font-bold">{mechanic.name}</h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">
        {mechanic.description}
      </p>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>
        <TabsContent
          value="overview"
          className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4"
        >
          <div
            dangerouslySetInnerHTML={{ __html: mechanic.content.overview }}
          />
        </TabsContent>
        <TabsContent
          value="rules"
          className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4"
        >
          <div dangerouslySetInnerHTML={{ __html: mechanic.content.rules }} />
        </TabsContent>
        <TabsContent
          value="examples"
          className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4"
        >
          <div
            dangerouslySetInnerHTML={{ __html: mechanic.content.examples }}
          />
        </TabsContent>
      </Tabs>

      <div className="mt-12 flex justify-between">
        <Link href={`/wiki/mechanics/${mechanic.slug}`}>
          <Button variant="outline">
            <BookOpen className="mr-2 h-4 w-4" /> Detailed Wiki Entry
          </Button>
        </Link>
        <Link href="/wiki/rulebook">
          <Button>View Full Rulebook</Button>
        </Link>
      </div>
    </div>
  );
}
