import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    BookOpen,
    WalletCardsIcon as Cards,
    CheckCircle,
    CircleHelp,
    FileText,
    Sparkles,
    Swords,
    Users,
    Zap,
    Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DiscordTag } from "@/components/discord-tag";
import { EXTERNAL_LINKS } from "@/lib/enums";

export default function GettingStartedPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Link href="/wiki">
                    <Button variant="ghost" className="pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Wiki
                    </Button>
                </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">Getting Started with Frieren TCG</h1>
            <p className="text-xl text-muted-foreground mb-8">
                Welcome to the world of Frieren TCG! This guide will help you learn the basics and get your first game
                underway.
            </p>

            <Tabs defaultValue="basics">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basics">The Basics</TabsTrigger>
                    {/* <TabsTrigger value="first-deck">Your First Deck</TabsTrigger> */}
                    <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
                    <TabsTrigger value="next-steps">Next Steps</TabsTrigger>
                </TabsList>

                <TabsContent value="basics" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
                    <h2 className="text-2xl font-bold mb-4">What is Frieren TCG?</h2>
                    <p className="mb-4">
                        Frieren TCG is a trading card game based on the anime. Players use character specific decks and
                        abilities to battle against each other in strategic combat.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image src="/thumbnail.jpg" alt="Frieren TCG gameplay" fill className="object-fit" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Game Overview</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                    <span>Draw 6 cards into your hand</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Play moves in your hand with special effects and abilities to take down your
                                        opponent
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                    <span>Reduce your opponent's health to 0 to win*</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                    <span>Climb up the ranked ladder by defeating opposing players</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <h3 className="text-xl font-semibold mb-3">What You'll Need</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-start gap-3">
                <Cards className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">
                    Understanding of TCG mechanics
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    You can ask for help in the discord channel
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-start gap-3">
                <CircleHelp className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Rulebook</h4>
                  <p className="text-sm text-muted-foreground">
                    For reference during play
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-emerald-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Mana Tokens</h4>
                  <p className="text-sm text-muted-foreground">
                    To track your resources
                  </p>
                </div>
              </CardContent>
            </Card>
          </div> */}

                    <div className="flex justify-end">
                        <Link href="/wiki/rulebook">
                            <Button variant="outline">
                                <FileText className="mr-2 h-4 w-4" /> View Full Rulebook
                            </Button>
                        </Link>
                    </div>
                </TabsContent>

                {/* <TabsContent
          value="first-deck"
          className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4"
        >
          <h2 className="text-2xl font-bold mb-4">Building Your First Deck</h2>
          <p className="mb-6">
            A Frieren TCG deck consists of 40 cards. For beginners, we recommend
            starting with a pre-constructed Starter Deck and then gradually
            customizing it as you learn the game.
          </p>

          <h3 className="text-xl font-semibold mb-3">Deck Composition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  Heroes (12-18)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Your main characters that battle on the field. Include a mix
                  of low, medium, and high-cost heroes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-600" />
                  Spells (15-20)
                </h4>
                <p className="text-sm text-muted-foreground">
                  One-time effects that can damage enemies, heal allies, or
                  provide other benefits.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-amber-600" />
                  Items (5-10)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Equipment and artifacts that enhance your heroes or provide
                  ongoing effects.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Recommended Starter Decks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2">Frieren's Arcane Mastery</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  A spell-focused deck featuring Frieren and other mages. Excels
                  at controlling the board with powerful spells.
                </p>
                <div className="flex justify-end">
                  <Link href="/wiki/decks/frierens-arcane-mastery">
                    <Button variant="outline" size="sm">
                      View Deck
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2">Himmel's Heroes</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  A hero-focused deck featuring Himmel and his companions.
                  Focuses on powerful heroes working together.
                </p>
                <div className="flex justify-end">
                  <Link href="/wiki/decks/himmels-heroes">
                    <Button variant="outline" size="sm">
                      View Deck
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end">
            <Link href="/wiki/strategy/deck-building">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" /> Advanced Deck Building
                Guide
              </Button>
            </Link>
          </div>
        </TabsContent> */}

                <TabsContent value="gameplay" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
                    <h2 className="text-2xl font-bold mb-4">How to Play</h2>
                    <p className="mb-6">
                        At the start of every turn, each player rolls 4 six-sided dice. The results off the dice roll
                        determine what cards are playable that turn.
                    </p>

                    <h3 className="text-xl font-semibold mb-3">Game Setup</h3>
                    <ol className="space-y-4 mb-6">
                        <li className="flex items-start gap-3">
                            <div className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                                1
                            </div>
                            <div>
                                <p className="font-medium">Challenge a player</p>
                                <p className="text-sm text-muted-foreground">
                                    Use <DiscordTag>/tcg-challenge</DiscordTag> to challenge an opponent
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                                2
                            </div>
                            <div>
                                <p className="font-medium">Draws 6 cards from their character’s deck</p>
                                <p className="text-sm text-muted-foreground">
                                    You can’t redraw these cards before the match starts
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                                3
                            </div>
                            <div>
                                <p className="font-medium">Select a move</p>
                                <p className="text-sm text-muted-foreground">
                                    Each turn players may opt to play one of their active moves, “Wait”, or “Discard”.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 rounded-full h-6 w-6 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                                4
                            </div>
                            <div>
                                <p className="font-medium">Defeat your opponent</p>
                                <p className="text-sm text-muted-foreground">
                                    Take down your opponent {"(usually)"} by making their HP reach 0.
                                </p>
                            </div>
                        </li>
                    </ol>

                    <h3 className="text-xl font-semibold mb-3">Turn Structure</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Card>
                            <CardContent className="p-4">
                                <h4 className="font-medium mb-2 flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-blue-600" />
                                    Start of Turn
                                </h4>
                                <ol className="text-sm space-y-2">
                                    <li>1. Each player rolls 4 six-sided dice</li>
                                    <li>2. The dice roll determine what cards are playable that turn</li>
                                    <li>3. Play one of the active moves, “Wait”, or “Discard”</li>
                                    <li>4. Resolve any "start of turn" effects</li>
                                </ol>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <h4 className="font-medium mb-2 flex items-center gap-2">
                                    <Swords className="h-5 w-5 text-red-600" />
                                    Main Phase
                                </h4>
                                <ol className="text-sm space-y-2">
                                    <li>1. Play attack moves from your hand (may cost HP)</li>
                                    <li>2. Play utility moves from your hand (may cost HP)</li>
                                    <li>3. Defend the opponents attacks</li>
                                    <li>4. Use character abilities (if available)</li>
                                </ol>
                            </CardContent>
                        </Card>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">Winning the Game</h3>
                    <p className="mb-4">The goal is to reduce your opponent's HP to 0. You can do this by:</p>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>Attacking your opponent directly with attack spells</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>Casting utility spells that support your next moves</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>Using character abilities that deal damage to your opponent</span>
                        </li>
                    </ul>

                    <div className="flex justify-end">
                        <Link href="/mechanics">
                            <Button variant="outline">
                                <BookOpen className="mr-2 h-4 w-4" /> Detailed Game Mechanics
                            </Button>
                        </Link>
                    </div>
                </TabsContent>

                <TabsContent value="next-steps" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
                    <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
                    <p className="mb-6">
                        Once you've mastered the basics, here are some ways to deepen your Frieren TCG experience:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Card>
                            <CardContent className="p-4">
                                <h4 className="font-medium mb-2">Join a Tournament</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Test your skills against other players in organized play events hosted regularly in
                                    the discord.
                                </p>
                                <div className="flex justify-end">
                                    <Link href="/tournaments">
                                        <Button variant="outline" size="sm">
                                            Find Events
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <h4 className="font-medium mb-2">Learn Advanced Strategies</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Study character strategies, move synergies, and advanced tactics to improve your
                                    gameplay.
                                </p>
                                <div className="flex justify-end">
                                    <Link href="/combat">
                                        <Button variant="outline" size="sm">
                                            Strategy Guides
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <h4 className="font-medium mb-2">Connect with the Community</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Be active in the TCG community in the discord to discuss the game with other
                                    players.
                                </p>
                                <div className="flex justify-end">
                                    <Link href={EXTERNAL_LINKS.DISCORD}>
                                        <Button variant="outline" size="sm">
                                            Discord
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                            Pro Tip
                        </h3>
                        <p className="text-sm">
                            Watch high level games in the discord channel to learn from experienced players. Seeing the
                            game in action is one of the best ways to improve your understanding and skills.
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <Link href="/wiki">
                            <Button>
                                <BookOpen className="mr-2 h-4 w-4" /> Explore the Full Wiki
                            </Button>
                        </Link>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
