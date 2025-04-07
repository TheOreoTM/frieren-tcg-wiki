import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Characters } from "@/data/characters";
import { StatsEnum, type CharacterName } from "@/lib/enums";

interface PageProps {
  params: {
    characterid: string;
  };
}

const characters = Array.from(Characters.values());

function getStatColor(stat: StatsEnum) {
  switch (stat) {
    case StatsEnum.HP:
      return "bg-emerald-100 text-emerald-800";
    case StatsEnum.ATK:
      return "bg-red-100 text-red-800";
    case StatsEnum.DEF:
      return "bg-blue-100 text-blue-800";
    case StatsEnum.SPD:
      return "bg-purple-100 text-purple-800";
    case StatsEnum.Ability:
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default async function CardPage({ params }: PageProps) {
  const { characterid } = await params;

  const character = characters.find((c) => c.id === characterid);

  if (!character) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/characters">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Characters
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-[18/23] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={character.cosmetic.imageUrl || "/placeholder.svg"}
            alt={character.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{character.type}</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-1">
            {character.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {"Title Goes Here"}
          </p>

          <div className="flex gap-6 mb-6">
            <div className="text-center">
              <div
                className={`${getStatColor(
                  StatsEnum.HP
                )} rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1`}
              >
                {character.stats.HP}
              </div>
              <span className="text-sm text-muted-foreground">Health</span>
            </div>
            <div className="text-center">
              <div
                className={`${getStatColor(
                  StatsEnum.ATK
                )} rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1`}
              >
                {character.stats.ATK}
              </div>
              <span className="text-sm text-muted-foreground">Attack</span>
            </div>
            <div className="text-center">
              <div
                className={`${getStatColor(
                  StatsEnum.DEF
                )} rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1`}
              >
                {character.stats.DEF}
              </div>
              <span className="text-sm text-muted-foreground">Defense</span>
            </div>
            <div className="text-center">
              <div
                className={`${getStatColor(
                  StatsEnum.SPD
                )} rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1`}
              >
                {character.stats.SPD}
              </div>
              <span className="text-sm text-muted-foreground">Speed</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
              {character.description}
            </p>
          </div>

          <Tabs defaultValue="lore">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="lore">Lore</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>
            <TabsContent
              value="lore"
              className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md mt-2"
            >
              <p>{"Card Lore (not finalised)"}</p>
            </TabsContent>
            <TabsContent
              value="strategy"
              className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md mt-2"
            >
              <p>{"Card Strategy"}</p>
            </TabsContent>
          </Tabs>

          {/* <div className="mt-6 pt-6 border-t">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground">
                  Set
                </h3>
                <p>{card.set}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground">
                  Artist
                </h3>
                <p>{card.artist}</p>
              </div>
            </div>
          </div> */}

          {character.relatedCharacters &&
            character.relatedCharacters.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Related Cards</h3>
                <div className="flex flex-wrap gap-2">
                  {character.relatedCharacters.map((relatedId) => {
                    const relatedCard = characters.find(
                      (c) => c.id === relatedId
                    );
                    if (!relatedCard) return null;

                    return (
                      <Link href={`/character/${relatedId}`} key={relatedId}>
                        <Card className="w-24 hover:shadow-md transition-shadow">
                          <div className="relative pt-[130%]">
                            <Image
                              src={
                                relatedCard.cosmetic.imageUrl ||
                                "/placeholder.svg"
                              }
                              alt={relatedCard.name}
                              fill
                              className="object-cover rounded-t-md"
                            />
                          </div>
                          <CardContent className="p-2">
                            <p className="text-xs font-medium truncate">
                              {relatedCard.name}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

          <div className="mt-6">
            <Link href={`/wiki/characters/${character.id}`}>
              <Button variant="outline" className="w-full">
                <BookOpen className="mr-2 h-4 w-4" /> View Wiki Entry
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
