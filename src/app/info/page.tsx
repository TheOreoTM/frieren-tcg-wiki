import Link from "next/link";
import { BookOpen, FileText, Newspaper, Swords, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contribution Guide | Frieren TCG",
    description: "Learn how to contribute content to the Frieren TCG Wiki",
};

export default function InfoPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contribution Guide</h1>
            <p className="text-xl text-muted-foreground mb-8">Learn how to add content to the Frieren TCG Wiki</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Link href="#news">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Newspaper className="h-5 w-5 text-emerald-600" />
                                Adding News
                            </CardTitle>
                            <CardDescription>Publish news articles and updates</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Learn how to create and publish news articles about game updates, tournaments, and
                                community events.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="ghost" className="w-full">
                                View Guide
                            </Button>
                        </CardFooter>
                    </Card>
                </Link>

                <Link href="#mechanics">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-emerald-600" />
                                Adding Mechanics
                            </CardTitle>
                            <CardDescription>Document game mechanics and rules</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Learn how to document game mechanics, create examples, and explain rules in detail.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="ghost" className="w-full">
                                View Guide
                            </Button>
                        </CardFooter>
                    </Card>
                </Link>

                <Link href="#combat">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Swords className="h-5 w-5 text-emerald-600" />
                                Adding Combat Strategies
                            </CardTitle>
                            <CardDescription>Share character strategies and tips</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Learn how to create combat strategy guides for specific characters and matchups.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="ghost" className="w-full">
                                View Guide
                            </Button>
                        </CardFooter>
                    </Card>
                </Link>
            </div>

            <section id="news" className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Newspaper className="h-6 w-6 text-emerald-600" />
                    Adding News Articles
                </h2>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">File Structure</h3>
                    <p className="mb-4">
                        News articles are stored as Markdown files in the{" "}
                        <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">src/content/news</code>{" "}
                        directory.
                    </p>
                    <p className="mb-4">
                        Each article should be named with a URL-friendly slug, for example:{" "}
                        <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">
                            tournament-announcement.md
                        </code>
                    </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">Frontmatter</h3>
                    <p className="mb-4">
                        Each news article requires frontmatter at the top of the file with the following fields:
                    </p>
                    <pre className="bg-slate-200 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
                        {`---
id: "unique-article-id" # preferably matches the file name
title: "Your Article Title"
excerpt: "A brief summary of the article (shown in previews)"
date: "YYYY-MM-DD"
author: "Your Name"
category: "Tournament" # Options: "Expansion", "Tournament", "Balance", "Community", "Feature"
image: "/path/to/image.jpg" # Optional: Featured image
tags: ["tag1", "tag2", "tag3"] # Related tags
---`}
                    </pre>
                    <p>After the frontmatter, write your article content using Markdown syntax.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Example Article</h3>
                    <pre className="bg-slate-200 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
                        {`---
id: "summer-tournament-2025"
title: "Summer Tournament 2025 Announcement"
excerpt: "Join us for the biggest Frieren TCG tournament of the summer!"
date: "2025-06-01"
author: "Tournament Organizer"
category: "Tournament"
image: "/images/summer-tournament.jpg"
tags: ["tournament", "competitive", "prizes"]
---

# Summer Tournament 2025

We're excited to announce our Summer Tournament for Frieren TCG!

## Event Details

- **Date**: July 15-16, 2025
- **Location**: Discord Server
- **Format**: Swiss Rounds + Top 8 Single Elimination
- **Prizes**: Discord Nitro and exclusive card sleeves

## Registration

Registration opens on June 15th. To register, use the \`/tournament-register\` command in our Discord server.

## Rules

All standard tournament rules apply. Please review the [Tournament Rules](/wiki/tournament-rules) before participating.

We look forward to seeing you there!`}
                    </pre>
                </div>
            </section>

            <section id="mechanics" className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                    Adding Game Mechanics
                </h2>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">File Structure</h3>
                    <p className="mb-4">
                        Game mechanics are stored in the{" "}
                        <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">
                            src/content/mechanics
                        </code>{" "}
                        directory.
                    </p>
                    <p className="mb-4">
                        Each mechanic should have its own directory, for example:{" "}
                        <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">
                            src/content/mechanics/empower/
                        </code>
                    </p>
                    <p className="mb-4">Inside each mechanic directory, create three files:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">overview.md</code> -
                            General description of the mechanic
                        </li>
                        <li>
                            <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">rules.md</code> -
                            Detailed rules and edge cases
                        </li>
                        <li>
                            <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">examples.md</code> -
                            Examples of the mechanic in action
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">Frontmatter</h3>
                    <p className="mb-4">
                        Each mechanic file requires frontmatter at the top with the following fields:
                    </p>
                    <pre className="bg-slate-200 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
                        {`---
id: "mechanic-id"
name: "Mechanic Name"
description: "Brief description of the mechanic"
icon: "icon-name" # Optional: Icon to display
author: "Your Name"
authorAvatar: "/path/to/avatar.png" # Optional
---`}
                    </pre>
                    <p>After the frontmatter, write your content using Markdown syntax.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Example Mechanic</h3>
                    <p className="mb-4">
                        Here's an example of an{" "}
                        <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">overview.md</code> file:
                    </p>
                    <pre className="bg-slate-200 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
                        {`---
id: "chain-attack"
name: "Chain Attack System"
description: "Increase damage with consecutive attacks"
icon: "chain"
author: "Mechanic Expert"
authorAvatar: "/avatars/expert.png"
---

### Chain Attack

Chain Attack is a core mechanic for Linie that rewards consecutive attacks.

There are 2 ways to build Chain stacks:

- After Linie uses an attack, gain 1 Chain stack.
- Chain stacks increase the damage of all attacks by 7% per stack.
- When Linie does not attack in a turn, reset the count to 0.

This mechanic encourages aggressive play and creates a risk/reward dynamic where players must decide between continuing their chain or using utility cards.`}
                    </pre>
                </div>
            </section>

            <section id="combat" className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Swords className="h-6 w-6 text-emerald-600" />
                    Adding Combat Strategies
                </h2>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">File Structure</h3>
                    <p className="mb-4">
                        Combat strategies are stored as Markdown files in the{" "}
                        <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">src/content/combat</code>{" "}
                        directory.
                    </p>
                    <p className="mb-4">
                        Each strategy should be named with a URL-friendly slug, for example:{" "}
                        <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">frieren-vs-stark.md</code>
                    </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold mb-4">Frontmatter</h3>
                    <p className="mb-4">
                        Each combat strategy requires frontmatter at the top of the file with the following fields:
                    </p>
                    <pre className="bg-slate-200 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
                        {`---
title: "Strategy Title"
character: "Frieren" # The character this strategy is for
author: "Your Name"
date: "YYYY-MM-DD"
tags: ["beginner", "matchup", "counter"] # Related tags
---`}
                    </pre>
                    <p>After the frontmatter, write your strategy content using Markdown syntax.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Example Strategy</h3>
                    <pre className="bg-slate-200 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
                        {`---
title: "Frieren vs Stark: Analysis Stacking Guide"
character: "Frieren"
author: "Strategy Expert"
date: "2025-05-15"
tags: ["matchup", "advanced", "analysis"]
---

# Frieren vs Stark: Analysis Stacking Guide

This guide covers how to effectively play Frieren against Stark by maximizing your Analysis stacks.

## Key Strategy

When facing Stark, your goal is to build Analysis stacks while avoiding his high-damage attacks. Stark's moves often require Resolve stacks, which gives you windows of opportunity.

### Early Game (Turns 1-3)

1. Focus on using **Barrier Magic Analysis** and **Demon Magic Analysis** to build Analysis stacks
2. Save your **Ordinary Defensive Magic** for when Stark has 2+ Resolve stacks
3. Avoid using offensive spells until you have at least 8 Analysis stacks

### Mid Game (Turns 4-7)

1. If Stark has used **Lightning Strike** or **Eisen's Axe Cleave**, he'll be low on Resolve
2. This is your opportunity to use **Judradjim** with your accumulated Analysis stacks
3. Continue building Analysis with utility cards when possible

### Late Game (Turns 8+)

1. Save **The Height of Magic** for when Stark is below 40 HP
2. Use **Field of Flowers** to sustain yourself if you're below 50 HP
3. If you're below 25 HP, consider using **The Height of Magic** as a finisher

## Card Priority

1. **Barrier Magic Analysis** - Build stacks while reducing Stark's defense
2. **Ordinary Defensive Magic** - Save for Stark's high-damage turns
3. **Judradjim** - Your main damage dealer with 8+ Analysis stacks
4. **The Height of Magic** - Finisher move

Remember that Stark's **Fear Brought Me This Far** becomes stronger when he's below 60 HP, so try to either finish him quickly or keep him above that threshold.`}
                    </pre>
                </div>
            </section>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Contribute?</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    Now that you know how to add content to the Frieren TCG Wiki, you can start contributing your
                    knowledge to help the community!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="https://github.com/TheOreoTM/frieren-tcg-wiki">
                        <Button className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            View GitHub Repository
                        </Button>
                    </Link>
                    <Link href="/wiki">
                        <Button variant="outline" className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            Explore the Wiki
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
