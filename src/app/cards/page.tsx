import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Characters } from "@/data/characters";
import { StatsEnum } from "@/lib/enums";

// Card data
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
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
  },
];

const Cards = Array.from(Characters.values());

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

export default function CardsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Card Collection</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-1/3">
          <Input placeholder="Search cards..." />
        </div>
        {/* <div className="w-full md:w-1/3">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by element" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Elements</SelectItem>
              <SelectItem value="arcane">Arcane</SelectItem>
              <SelectItem value="nature">Nature</SelectItem>
              <SelectItem value="physical">Physical</SelectItem>
              <SelectItem value="divine">Divine</SelectItem>
              <SelectItem value="fire">Fire</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-1/3">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by rarity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Rarities</SelectItem>
              <SelectItem value="common">Common</SelectItem>
              <SelectItem value="uncommon">Uncommon</SelectItem>
              <SelectItem value="rare">Rare</SelectItem>
              <SelectItem value="epic">Epic</SelectItem>
              <SelectItem value="legendary">Legendary</SelectItem>
              <SelectItem value="mythic">Mythic</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Cards.map((card) => (
          <Link href={`/card/${card.id}`} key={card.id}>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative pt-[150%]">
                <Image
                  src={"/placeholder.svg"}
                  alt={card.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  <Badge
                    variant="secondary"
                    className={getStatColor(StatsEnum.HP)}
                  >
                    {card.stats.HP}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={getStatColor(StatsEnum.ATK)}
                  >
                    {card.stats.ATK}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={getStatColor(StatsEnum.DEF)}
                  >
                    {card.stats.DEF}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={getStatColor(StatsEnum.SPD)}
                  >
                    {card.stats.SPD}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{card.name}</h3>
                  {/* <p className="text-white/80 text-sm">{card.title}</p> */}
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex justify-between mb-2">
                  <div className="bg-red-100 text-red-800 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    {card.stats.ATK}
                  </div>
                  <div className="bg-blue-100 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    {card.stats.DEF}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {card.description}
                </p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                {card.id}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
