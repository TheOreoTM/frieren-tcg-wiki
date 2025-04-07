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

const characters = Array.from(Characters.values());

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

export default function CharactersPage() {
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
        {characters.map((character) => (
          <Link href={`/character/${character.id}`} key={character.id}>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative pt-[150%]">
                <Image
                  src={character.cosmetic.icon || "/placeholder.svg"}
                  alt={character.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  <Badge
                    variant="secondary"
                    className={getStatColor(StatsEnum.HP)}
                  >
                    {character.stats.HP}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={getStatColor(StatsEnum.ATK)}
                  >
                    {character.stats.ATK}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={getStatColor(StatsEnum.DEF)}
                  >
                    {character.stats.DEF}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={getStatColor(StatsEnum.SPD)}
                  >
                    {character.stats.SPD}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">
                    {character.name}
                  </h3>
                  {/* <p className="text-white/80 text-sm">{card.title}</p> */}
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex justify-between mb-2">
                  <div className="bg-red-100 text-red-800 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    {character.stats.ATK}
                  </div>
                  <div className="bg-blue-100 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    {character.stats.DEF}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {character.description}
                </p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                {character.id}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
