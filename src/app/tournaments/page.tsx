import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { EXTERNAL_LINKS } from "@/lib/enums";
import { cn } from "@/lib/utils";

type TournamentStatus = "ongoing" | "upcoming" | "ended";

interface Tournament {
    id: string;
    name: string;
    status: TournamentStatus;
    newsUrl?: string; // optional, for ended tournaments
    winner?: string; // optional, for ended tournaments
    externalLink?: string; // optional, for bracket links
}

const tournaments: Tournament[] = [
    {
        id: "april-2025",
        name: "April TCG Tournament 2025",
        status: "ended",
        newsUrl: "/news/tournament-4-25",
        winner: "Mathz",
        externalLink: EXTERNAL_LINKS.TOURNAMENTS.APRIL_2025,
    },
    {
        id: "may-2025",
        name: "May TCG Tournament 2025",
        status: "upcoming",
        externalLink: EXTERNAL_LINKS.TOURNAMENTS.MAY_2025,
    },
];

function getStatusBadge(status: TournamentStatus) {
    switch (status) {
        case "ongoing":
            return <Badge className="bg-green-100 text-green-800">Ongoing</Badge>;
        case "upcoming":
            return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>;
        case "ended":
            return <Badge className="bg-gray-100 text-gray-800">Ended</Badge>;
        default:
            return null;
    }
}

export default function TournamentsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Tournaments</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tournaments.map((tournament) => (
                    <div
                        key={tournament.id}
                        className="border rounded-lg p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">{tournament.name}</h2>
                            {getStatusBadge(tournament.status)}
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-muted-foreground">
                                Winner:{" "}
                                <span
                                    className={cn("font-semibold", {
                                        italic: !tournament.winner,
                                    })}
                                >
                                    {tournament.winner ?? "TBA"}
                                </span>
                            </p>
                            <div className="flex flex-row gap-4">
                                {tournament.newsUrl && (
                                    <Link href={tournament.newsUrl} className="text-sm text-blue-600 hover:underline">
                                        View Results
                                    </Link>
                                )}

                                {tournament.externalLink && (
                                    <a
                                        href={tournament.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-emerald-600 hover:underline"
                                    >
                                        View Bracket
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
