import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, BookOpen, Flame, Shield, Sparkles, Swords, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mechanics data
const mechanics = [
  {
    id: "mana",
    name: "Mana System",
    description: "The resource system used to play cards in Frieren TCG.",
    icon: <Sparkles className="h-6 w-6 text-blue-500" />,
    slug: "mana-system",
    content: {
      overview: `
        <p>Mana is the primary resource in Frieren TCG, representing magical energy that players use to cast spells and summon heroes.</p>
        
        <h3>Mana Crystals</h3>
        <p>Each player starts with one mana crystal and gains one additional crystal each turn, up to a maximum of ten. These crystals refill at the beginning of your turn.</p>
        
        <h3>Mana Types</h3>
        <p>There are six types of mana in Frieren TCG, corresponding to the six elements: Arcane, Nature, Physical, Divine, Fire, and Dark. Some cards require specific mana types to be played.</p>
      `,
      rules: `
        <h3>Basic Rules</h3>
        <ul>
          <li>Players start with 1 mana crystal and gain 1 additional crystal each turn (up to 10)</li>
          <li>All mana crystals are refreshed at the start of your turn</li>
          <li>Cards have a mana cost in the top-left corner</li>
          <li>You can only play cards if you have enough mana</li>
        </ul>
        
        <h3>Advanced Rules</h3>
        <ul>
          <li>Some cards can provide temporary mana that disappears at the end of the turn</li>
          <li>Certain effects can destroy or lock mana crystals</li>
          <li>Some heroes (like Sein) can reduce the mana cost of certain card types</li>
        </ul>
      `,
      examples: `
        <h3>Example Scenarios</h3>
        
        <h4>Early Game (Turn 3)</h4>
        <p>You have 3 mana crystals. You could play:</p>
        <ul>
          <li>One 3-cost card (like "Fern, Apprentice Mage")</li>
          <li>One 2-cost card and one 1-cost card</li>
          <li>Three 1-cost cards</li>
        </ul>
        
        <h4>Mana Reduction</h4>
        <p>With Sein on the board, your spells cost 1 less mana. This means:</p>
        <ul>
          <li>"Arcane Missile" (normally 2 mana) would cost 1 mana</li>
          <li>"Fireball" (normally 4 mana) would cost 3 mana</li>
        </ul>
      `,
    },
  },
  {
    id: "combat",
    name: "Combat",
    description: "How heroes battle against each other on the field.",
    icon: <Swords className="h-6 w-6 text-red-500" />,
    slug: "combat",
    content: {
      overview: `
        <p>Combat is the primary way to defeat your opponent in Frieren TCG. Heroes can attack other heroes or the opposing player directly.</p>
        
        <h3>Attack and Defense</h3>
        <p>Each hero card has two primary stats: Power (red) and Defense (blue). Power determines how much damage a hero deals when attacking, while Defense represents the hero's health points.</p>
        
        <h3>Combat Phase</h3>
        <p>During your turn, each of your heroes can attack once. Heroes cannot attack on the turn they are played (unless they have the "Haste" ability).</p>
      `,
      rules: `
        <h3>Basic Rules</h3>
        <ul>
          <li>Heroes can attack once per turn</li>
          <li>Newly played heroes have "summoning sickness" and cannot attack that turn (unless they have Haste)</li>
          <li>When a hero attacks another hero, both deal damage to each other simultaneously</li>
          <li>When a hero's defense reaches 0, it is destroyed and removed from the field</li>
          <li>Heroes can attack the opponent directly if there are no enemy heroes with "Taunt"</li>
        </ul>
        
        <h3>Advanced Rules</h3>
        <ul>
          <li>Some heroes have special combat abilities like "First Strike" (deals damage before the opponent)</li>
          <li>"Taunt" forces enemies to attack that hero first</li>
          <li>"Shield" prevents the first instance of damage each turn</li>
        </ul>
      `,
      examples: `
        <h3>Example Combat Scenarios</h3>
        
        <h4>Basic Combat</h4>
        <p>Your Stark (6/6) attacks the opponent's Fern (4/3):</p>
        <ul>
          <li>Stark deals 6 damage to Fern, destroying her (3 - 6 = -3)</li>
          <li>Fern deals 4 damage to Stark, reducing him to 2 defense (6 - 4 = 2)</li>
        </ul>
        
        <h4>Special Abilities</h4>
        <p>Your Stark (6/6) attacks the opponent's hero, but they also have Himmel with Taunt:</p>
        <ul>
          <li>You must attack Himmel instead of your intended target</li>
        </ul>
        
        <p>Your Stark (6/6) with his counter-attack ability is attacked by Fern (4/3):</p>
        <ul>
          <li>Fern deals 4 damage to Stark (6 - 4 = 2)</li>
          <li>Stark deals 6 damage to Fern, destroying her (3 - 6 = -3)</li>
          <li>Stark's ability triggers, dealing an additional 2 damage to Fern</li>
        </ul>
      `,
    },
  },
  {
    id: "spells",
    name: "Spell Casting",
    description: "How spells work and their various types.",
    icon: <Zap className="h-6 w-6 text-purple-500" />,
    slug: "spell-casting",
    content: {
      overview: `
        <p>Spells are one-time use cards that provide powerful effects. Unlike heroes, spells take effect immediately and then are discarded.</p>
        
        <h3>Spell Types</h3>
        <p>There are several types of spells in Frieren TCG:</p>
        <ul>
          <li><strong>Damage Spells:</strong> Deal damage to heroes or players</li>
          <li><strong>Healing Spells:</strong> Restore defense to damaged heroes</li>
          <li><strong>Buff Spells:</strong> Enhance your heroes' abilities</li>
          <li><strong>Debuff Spells:</strong> Weaken enemy heroes</li>
          <li><strong>Utility Spells:</strong> Draw cards, gain mana, etc.</li>
        </ul>
      `,
      rules: `
        <h3>Basic Rules</h3>
        <ul>
          <li>Spells cost mana to cast</li>
          <li>Spells take effect immediately when played</li>
          <li>After resolving, spells go to the discard pile</li>
          <li>Some spells require specific targets</li>
          <li>Spells cannot be attacked or blocked</li>
        </ul>
        
        <h3>Advanced Rules</h3>
        <ul>
          <li>Some heroes interact with spells (like Frieren adding spells to your hand)</li>
          <li>"Counterspell" effects can negate an opponent's spell</li>
          <li>Some spells have additional costs beyond mana</li>
          <li>"Spell Damage" effects increase the damage of your damage spells</li>
        </ul>
      `,
      examples: `
        <h3>Example Spell Interactions</h3>
        
        <h4>Damage Spell</h4>
        <p>You cast "Fireball" (4 mana) targeting the opponent's Fern (4/3):</p>
        <ul>
          <li>Fireball deals 4 damage to Fern, destroying her (3 - 4 = -1)</li>
          <li>The Fireball card goes to your discard pile</li>
        </ul>
        
        <h4>Spell Synergy</h4>
        <p>You have Frieren on the board and cast "Arcane Intellect":</p>
        <ul>
          <li>Arcane Intellect lets you draw 2 cards</li>
          <li>Frieren's ability triggers, adding a random spell from your deck to your hand</li>
        </ul>
        
        <h4>Spell Cost Reduction</h4>
        <p>You have Sein on the board and want to cast "Polymorph" (normally 4 mana):</p>
        <ul>
          <li>With Sein's ability, Polymorph costs 3 mana instead</li>
        </ul>
      `,
    },
  },
  {
    id: "elements",
    name: "Elements",
    description: "The different magical elements and their interactions.",
    icon: <Flame className="h-6 w-6 text-orange-500" />,
    slug: "elements",
    content: {
      overview: `
        <p>Elements are a core aspect of Frieren TCG, representing different types of magic and power. Each card is associated with one of six elements, which affects its interactions with other cards.</p>
        
        <h3>The Six Elements</h3>
        <ul>
          <li><strong>Arcane:</strong> Represents pure magical energy and knowledge</li>
          <li><strong>Nature:</strong> Represents life, growth, and the natural world</li>
          <li><strong>Physical:</strong> Represents martial prowess and physical strength</li>
          <li><strong>Divine:</strong> Represents holy power and protection</li>
          <li><strong>Fire:</strong> Represents destruction, passion, and transformation</li>
          <li><strong>Dark:</strong> Represents shadow, death, and forbidden magic</li>
        </ul>
      `,
      rules: `
        <h3>Basic Rules</h3>
        <ul>
          <li>Each card has one elemental affinity</li>
          <li>Some cards have bonuses against specific elements</li>
          <li>Deck building often focuses on elemental synergies</li>
          <li>Some effects are stronger or weaker depending on the target's element</li>
        </ul>
        
        <h3>Elemental Interactions</h3>
        <ul>
          <li>Arcane is strong against Dark, weak against Nature</li>
          <li>Nature is strong against Arcane, weak against Fire</li>
          <li>Physical is strong against Nature, weak against Divine</li>
          <li>Divine is strong against Dark, weak against Arcane</li>
          <li>Fire is strong against Nature, weak against Physical</li>
          <li>Dark is strong against Divine, weak against Arcane</li>
        </ul>
      `,
      examples: `
        <h3>Example Elemental Interactions</h3>
        
        <h4>Elemental Advantage</h4>
        <p>Your Arcane hero (Frieren) attacks an opponent's Dark hero (Übel):</p>
        <ul>
          <li>Due to elemental advantage, Frieren deals 50% more damage to Übel</li>
        </ul>
        
        <h4>Elemental Synergy</h4>
        <p>Playing multiple heroes of the same element can trigger special effects:</p>
        <ul>
          <li>Having 3 Arcane heroes on the field activates the "Arcane Mastery" effect, giving all your spells +1 damage</li>
        </ul>
        
        <h4>Elemental Spells</h4>
        <p>Casting "Fireball" (Fire element) on a Nature hero:</p>
        <ul>
          <li>The spell deals 50% more damage due to elemental advantage</li>
        </ul>
      `,
    },
  },
  {
    id: "abilities",
    name: "Hero Abilities",
    description: "Special powers that heroes can use during the game.",
    icon: <Shield className="h-6 w-6 text-green-500" />,
    slug: "hero-abilities",
    content: {
      overview: `
        <p>Hero abilities are special powers that make each hero unique. These abilities can dramatically change how a hero functions in battle and create interesting strategic options.</p>
        
        <h3>Types of Abilities</h3>
        <ul>
          <li><strong>Passive Abilities:</strong> Always active while the hero is in play</li>
          <li><strong>Triggered Abilities:</strong> Activate when certain conditions are met</li>
          <li><strong>Activated Abilities:</strong> Can be used by spending mana or other resources</li>
          <li><strong>Battlecry:</strong> Trigger when the hero is played</li>
          <li><strong>Deathrattle:</strong> Trigger when the hero is destroyed</li>
        </ul>
      `,
      rules: `
        <h3>Basic Rules</h3>
        <ul>
          <li>Each hero has at least one unique ability</li>
          <li>Abilities are described in the text box of the card</li>
          <li>Passive abilities don't require any action to use</li>
          <li>Activated abilities can only be used during your turn (unless specified otherwise)</li>
          <li>Some abilities have cooldowns or can only be used once</li>
        </ul>
        
        <h3>Common Ability Keywords</h3>
        <ul>
          <li><strong>Taunt:</strong> Enemies must attack this hero first</li>
          <li><strong>Shield:</strong> Prevents the first instance of damage each turn</li>
          <li><strong>Haste:</strong> Can attack on the turn it's played</li>
          <li><strong>Lifesteal:</strong> Damage dealt heals your hero</li>
          <li><strong>Spell Damage:</strong> Your spells deal extra damage</li>
        </ul>
      `,
      examples: `
        <h3>Example Hero Abilities</h3>
        
        <h4>Frieren's Ability</h4>
        <p>"When played, add a random spell from your deck to your hand."</p>
        <ul>
          <li>This is a Battlecry ability that triggers once when Frieren enters play</li>
          <li>It provides card advantage by giving you an extra spell</li>
        </ul>
        
        <h4>Stark's Ability</h4>
        <p>"When attacked, deal 2 damage to the attacker."</p>
        <ul>
          <li>This is a triggered ability that activates whenever an enemy hero attacks Stark</li>
          <li>It makes Stark dangerous to attack, even for stronger heroes</li>
        </ul>
        
        <h4>Heiter's Ability</h4>
        <p>"At the start of your turn, restore 2 health to a random friendly hero."</p>
        <ul>
          <li>This is a triggered ability that activates at the beginning of each of your turns</li>
          <li>It provides sustained healing over time</li>
        </ul>
      `,
    },
  },
]

export default function MechanicPage({ params }: { params: { slug: string } }) {
  const mechanic = mechanics.find((m) => m.slug === params.slug)

  if (!mechanic) {
    notFound()
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

      <p className="text-xl text-muted-foreground mb-8">{mechanic.description}</p>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
          <div dangerouslySetInnerHTML={{ __html: mechanic.content.overview }} />
        </TabsContent>
        <TabsContent value="rules" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
          <div dangerouslySetInnerHTML={{ __html: mechanic.content.rules }} />
        </TabsContent>
        <TabsContent value="examples" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
          <div dangerouslySetInnerHTML={{ __html: mechanic.content.examples }} />
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
  )
}

