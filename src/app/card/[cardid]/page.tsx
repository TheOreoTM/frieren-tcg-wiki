import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Card data (same as in cards/page.tsx)
const cards = [
  {
    id: "frieren",
    name: "Frieren",
    title: "Immortal Mage",
    type: "Hero",
    rarity: "Legendary",
    element: "Arcane",
    power: 7,
    defense: 5,
    description: "When played, add a random spell from your deck to your hand.",
    lore: "An elven mage who has lived for over a thousand years. After the defeat of the Demon King, she embarks on a journey to understand humans better.",
    strategy:
      "Frieren excels in spell-heavy decks. Her ability to generate additional spells provides excellent card advantage. Pair her with Sein for reduced spell costs.",
    image: "/placeholder.svg?height=600&width=400",
    artist: "Kanehito Yamada",
    set: "Core Set",
    relatedCards: ["sein", "fern"],
  },
  {
    id: "fern",
    name: "Fern",
    title: "Apprentice Mage",
    type: "Hero",
    rarity: "Rare",
    element: "Nature",
    power: 4,
    defense: 3,
    description:
      "Gains +1/+1 for each spell you cast while this card is in play.",
    lore: "A young mage apprenticed to Frieren. She is eager to learn and has a natural talent for magic.",
    strategy:
      "Fern grows stronger with each spell cast, making her excellent in spell-heavy decks. She works well with Frieren and Sein.",
    image: "/placeholder.svg?height=600&width=400",
    artist: "Kanehito Yamada",
    set: "Core Set",
    relatedCards: ["frieren", "sein"],
  },
  {
    id: "stark",
    name: "Stark",
    title: "Warrior Prodigy",
    type: "Hero",
    rarity: "Rare",
    element: "Physical",
    power: 6,
    defense: 6,
    description: "When attacked, deal 2 damage to the attacker.",
    lore: "A young warrior who joins Frieren's party. Despite his youth, he is incredibly skilled with the sword.",
    strategy:
      "Stark's high defense and counter-attack ability make him an excellent defensive card. Use him to protect your more vulnerable heroes.",
    image: "/placeholder.svg?height=600&width=400",
    artist: "Kanehito Yamada",
    set: "Core Set",
    relatedCards: ["himmel", "frieren"],
  },
  {
    id: "himmel",
    name: "Himmel",
    title: "Hero of the North",
    type: "Hero",
    rarity: "Legendary",
    element: "Divine",
    power: 8,
    defense: 7,
    description:
      "When played, all your other heroes gain +2/+2 until end of turn.",
    lore: "The legendary hero who defeated the Demon King. His strength and leadership inspired many.",
    strategy:
      "Himmel is a powerful late-game card that can turn the tide of battle. His ability to buff your entire board makes him excellent in hero-heavy decks.",
    image: "/placeholder.svg?height=600&width=400",
    artist: "Kanehito Yamada",
    set: "Core Set",
    relatedCards: ["heiter", "frieren"],
  },
  {
    id: "heiter",
    name: "Heiter",
    title: "Priest of the South",
    type: "Hero",
    rarity: "Epic",
    element: "Divine",
    power: 3,
    defense: 6,
    description:
      "At the start of your turn, restore 2 health to a random friendly hero.",
    lore: "A priest who traveled with Himmel's party. His healing abilities were crucial in their victory against the Demon King.",
    strategy:
      "Heiter provides sustained healing, making him valuable in longer games. Pair him with high-value targets that your opponent will want to remove.",
    image: "/placeholder.svg?height=600&width=400",
    artist: "Kanehito Yamada",
    set: "Core Set",
    relatedCards: ["himmel", "frieren"],
  },
  {
    id: "sein",
    name: "Sein",
    title: "Master Mage",
    type: "Hero",
    rarity: "Epic",
    element: "Arcane",
    power: 5,
    defense: 4,
    description: "Your spells cost 1 less mana while this card is in play.",
    lore: "The head of the magic academy and Frieren's old acquaintance. His knowledge of magic is unparalleled.",
    strategy:
      "Sein's cost reduction ability enables powerful spell combos. Build a deck with high-cost spells to maximize his value.",
    image: "/placeholder.svg?height=600&width=400",
    artist: "Kanehito Yamada",
    set: "Core Set",
    relatedCards: ["frieren", "fern"],
  },
  {
    id: "flamme",
    name: "Flamme",
    title: "Flame Mage",
    type: "Hero",
    rarity: "Epic",
    element: "Fire",
    power: 6,
    defense: 3,
    description: "When played, deal 3 damage to all enemy heroes.",
    lore: "A powerful mage who specialized in fire magic. She was Frieren's friend during their younger days.",
    strategy:
      "Flamme's area damage effect makes her excellent against decks that play multiple heroes. She can clear small heroes and weaken larger ones.",
    image: "/placeholder.svg?height=600&width=400",
    artist: "Kanehito Yamada",
    set: "Core Set",
    relatedCards: ["frieren", "ubel"],
  },
  {
    id: "ubel",
    name: "Übel",
    title: "Demon King",
    type: "Villain",
    rarity: "Mythic",
    element: "Dark",
    power: 9,
    defense: 8,
    description: "When played, destroy a random enemy hero.",
    lore: "The fearsome Demon King who terrorized the land before being defeated by Himmel's party.",
    strategy:
      "Übel is one of the most powerful cards in the game. His ability to instantly remove an enemy hero can swing the game in your favor.",
    image: "/placeholder.svg?height=600&width=400",
    artist: "Kanehito Yamada",
    set: "Core Set",
    relatedCards: ["himmel", "frieren"],
  },
];

// Helper function for rarity color
function getRarityColor(rarity: string) {
  switch (rarity) {
    case "Common":
      return "bg-slate-200 text-slate-800";
    case "Uncommon":
      return "bg-green-200 text-green-800";
    case "Rare":
      return "bg-blue-200 text-blue-800";
    case "Epic":
      return "bg-purple-200 text-purple-800";
    case "Legendary":
      return "bg-amber-200 text-amber-800";
    case "Mythic":
      return "bg-red-200 text-red-800";
    default:
      return "bg-slate-200 text-slate-800";
  }
}

// Helper function for element color
function getElementColor(element: string) {
  switch (element) {
    case "Arcane":
      return "bg-violet-100 text-violet-800";
    case "Nature":
      return "bg-emerald-100 text-emerald-800";
    case "Physical":
      return "bg-amber-100 text-amber-800";
    case "Divine":
      return "bg-yellow-100 text-yellow-800";
    case "Fire":
      return "bg-red-100 text-red-800";
    case "Dark":
      return "bg-slate-800 text-slate-100";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default function CardPage({ params }: { params: { cardid: string } }) {
  const card = cards.find((c) => c.id === params.cardid);

  if (!card) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/cards">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cards
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={card.image || "/placeholder.svg"}
            alt={card.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge className={getElementColor(card.element)}>
              {card.element}
            </Badge>
            <Badge className={getRarityColor(card.rarity)}>{card.rarity}</Badge>
            <Badge variant="outline">{card.type}</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-1">{card.name}</h1>
          <p className="text-xl text-muted-foreground mb-6">{card.title}</p>

          <div className="flex gap-6 mb-6">
            <div className="text-center">
              <div className="bg-red-100 text-red-800 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1">
                {card.power}
              </div>
              <span className="text-sm text-muted-foreground">Power</span>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1">
                {card.defense}
              </div>
              <span className="text-sm text-muted-foreground">Defense</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Effect</h2>
            <p className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
              {card.description}
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
              <p>{card.lore}</p>
            </TabsContent>
            <TabsContent
              value="strategy"
              className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md mt-2"
            >
              <p>{card.strategy}</p>
            </TabsContent>
          </Tabs>

          <div className="mt-6 pt-6 border-t">
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
          </div>

          {card.relatedCards && card.relatedCards.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Related Cards</h3>
              <div className="flex flex-wrap gap-2">
                {card.relatedCards.map((relatedId) => {
                  const relatedCard = cards.find((c) => c.id === relatedId);
                  if (!relatedCard) return null;

                  return (
                    <Link href={`/card/${relatedId}`} key={relatedId}>
                      <Card className="w-24 hover:shadow-md transition-shadow">
                        <div className="relative pt-[130%]">
                          <Image
                            src={relatedCard.image || "/placeholder.svg"}
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
            <Link href={`/wiki/cards/${card.id}`}>
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
