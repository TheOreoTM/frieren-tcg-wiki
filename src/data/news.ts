import type { NewsArticle } from "@/lib/types/news";

export const newsArticles: NewsArticle[] = [
    {
        id: "beyond-the-wasteland",
        title: "New Expansion: <Patch Name>",
        excerpt: "Meet the newest character, Fern the Mage. yap yap yap yap yap yap yap yap.",
        content: `
      <h2>Beyond the Wasteland Expansion</h2>
      <p>We're thrilled to announce our newest expansion: "Beyond the Wasteland." This set introduces 60 new cards that explore the mysterious and dangerous regions beyond the known world.</p>
      
      <h3>New Mechanics</h3>
      <p>The Wasteland expansion introduces a new "Survival" mechanic, where cards become stronger the fewer cards you have in hand, representing the resourcefulness needed to survive in harsh environments.</p>
      
      <h3>Key Cards</h3>
      <ul>
        <li><strong>Wasteland Explorer</strong> - A versatile hero that gains different abilities based on the elements of other cards in your hand.</li>
        <li><strong>Ancient Ruins</strong> - A location card that provides increasing benefits the longer it remains in play.</li>
        <li><strong>Mirage Spell</strong> - A deceptive spell that appears to do one thing to your opponent but actually does another.</li>
      </ul>
      
      <h3>Availability</h3>
      <p>Beyond the Wasteland will be available in booster packs and as a complete set starting next week. Pre-orders are open now with a special promo card for early adopters.</p>
    `,
        date: "2025-04-10",
        author: "Kanehito Yamada",
        category: "Expansion",
        image: "/placeholder.svg?height=600&width=1200",
        tags: ["expansion", "new cards", "wasteland", "survival mechanic"],
    },
    {
        id: "tournament-rules-update",
        title: "Tournament Rules Updated for Regional Championship",
        excerpt:
            "Important changes to tournament structure and banned cards list ahead of the upcoming Regional Championship.",
        content: `
      <h2>Tournament Rules Update</h2>
      <p>As we prepare for the upcoming Regional Championship, we've made several important updates to the tournament rules to ensure fair and exciting gameplay.</p>
      
      <h3>Format Changes</h3>
      <p>The tournament will now use a Swiss-style format followed by a top 8 single elimination bracket. Each match will be best-of-three with a 50-minute time limit.</p>
      
      <h3>Banned and Restricted Cards</h3>
      <p>After careful consideration and community feedback, we've updated the banned and restricted list:</p>
      <ul>
        <li><strong>Banned:</strong> "The Height of Magic" - This card has proven too powerful in competitive play.</li>
        <li><strong>Restricted (1 per deck):</strong> "Hellfire Summoning: Vollzanbel" - Still powerful but now limited.</li>
      </ul>
      
      <h3>Prize Structure</h3>
      <p>The Regional Championship will feature our largest prize pool yet, with exclusive playmats, card sleeves, and promo cards for top performers, plus qualification spots for the National Championship.</p>
    `,
        date: "2025-04-05",
        author: "Tournament Committee",
        category: "Tournament",
        image: "/placeholder.svg?height=600&width=1200",
        tags: ["tournament", "rules", "banned cards", "regional championship"],
    },
    {
        id: "balance-changes",
        title: "Balance Changes to Key Hero Cards",
        excerpt:
            "Balance changes to Himmel's 'Divine Blade' and Stark's 'Warrior's Resolve' to improve gameplay diversity.",
        content: `
      <h2>Balance Changes</h2>
      <p>In our ongoing effort to maintain a healthy and diverse meta, we're implementing the following balance changes to two popular hero cards:</p>
      
      <h3>Himmel's "Divine Blade"</h3>
      <p>This ability has been adjusted to provide +1/+1 to other heroes (down from +2/+2). While Himmel remains a powerful leader, this change prevents him from dominating the board too easily.</p>
      
      <h3>Stark's "Warrior's Resolve"</h3>
      <p>This ability now deals 1 damage to attackers (down from 2) but also provides Stark with 1 point of healing. This makes the ability more strategic while maintaining its defensive utility.</p>
      
      <h3>Developer Commentary</h3>
      <p>"These changes are designed to bring these popular heroes in line with others without diminishing their unique character. We've seen the meta become too centered around these cards and want to encourage more diverse deck building." - Balance Team</p>
      
      <h3>Effective Date</h3>
      <p>These changes will take effect on April 15th, 2025. Digital versions will update automatically, and errata cards will be available for physical players.</p>
    `,
        date: "2025-04-01",
        author: "Balance Team",
        category: "Balance",
        image: "/placeholder.svg?height=600&width=1200",
        tags: ["balance", "nerfs", "himmel", "stark", "hero cards"],
    },
    {
        id: "community-tournament",
        title: "Community Spotlight: First Fan-Organized Tournament a Success",
        excerpt:
            "The first community-organized Frieren TCG tournament saw over 100 participants and creative new deck strategies.",
        content: `
      <h2>Community Tournament Success</h2>
      <p>This past weekend saw the first major fan-organized Frieren TCG tournament, with over 100 participants gathering to compete and celebrate their love for the game.</p>
      
      <h3>Unexpected Strategies</h3>
      <p>The tournament showcased several innovative deck strategies that haven't been seen in official competitive play. The winning deck, a Fern-centered Nature combo, surprised many with its effectiveness.</p>
      
      <h3>Community Building</h3>
      <p>Beyond the competition, the event featured trading sessions, deck-building workshops, and even cosplay of favorite characters. The community spirit was strong, with veterans helping newcomers improve their decks.</p>
      
      <h3>Future Events</h3>
      <p>Given the success of this tournament, the organizers have announced plans for quarterly community events, with the next one scheduled for July. We're excited to see the community taking initiative in growing the game!</p>
    `,
        date: "2025-03-25",
        author: "Community Team",
        category: "Community",
        image: "/placeholder.svg?height=600&width=1200",
        tags: ["community", "tournament", "fan event", "deck strategies"],
    },
    {
        id: "digital-app-launch",
        title: "Frieren TCG Digital App Launches Next Month",
        excerpt:
            "Play Frieren TCG on your mobile device or PC with our new digital app, featuring all cards and cross-platform play.",
        content: `
      <h2>Digital App Launch</h2>
      <p>We're excited to announce that Frieren TCG will be available digitally starting next month! The new app will bring the full TCG experience to your mobile devices and PC.</p>
      
      <h3>Features</h3>
      <ul>
        <li><strong>Complete Card Collection</strong> - All cards from the physical game will be available digitally.</li>
        <li><strong>Cross-Platform Play</strong> - Play seamlessly across iOS, Android, and PC with a single account.</li>
        <li><strong>Solo Adventures</strong> - Practice against AI opponents with unique decks and strategies.</li>
        <li><strong>Ranked Ladder</strong> - Climb the competitive ladder and earn exclusive digital rewards.</li>
        <li><strong>Physical Integration</strong> - Scan your physical cards to add them to your digital collection.</li>
      </ul>
      
      <h3>Beta Access</h3>
      <p>A closed beta will begin next week. Sign up on our website for a chance to participate and help us refine the experience before the full launch.</p>
      
      <h3>Launch Celebration</h3>
      <p>All players who join during the first month will receive a special digital-exclusive card pack and cosmetic items for their profile.</p>
    `,
        date: "2025-03-20",
        author: "Development Team",
        category: "Feature",
        image: "/placeholder.svg?height=600&width=1200",
        tags: ["digital", "app", "mobile", "cross-platform", "launch"],
    },
];

// Helper function to get the latest news articles
export function getLatestNews(count = 3): NewsArticle[] {
    return [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}

// Helper function to get a specific news article by ID
export function getNewsArticleById(id: string): NewsArticle | undefined {
    return newsArticles.find((article) => article.id === id);
}

// Helper function to get news articles by category
export function getNewsByCategory(category: NewsArticle["category"]): NewsArticle[] {
    return newsArticles
        .filter((article) => article.category === category)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
