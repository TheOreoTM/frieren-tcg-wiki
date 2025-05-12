import Link from "next/link";
import { Github, FileText, Edit } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/enums";
import { DiscordIcon } from "./svg/Discord";

function Footer() {
    return (
        <footer className="py-8 px-4 mt-12 border-t border-primary/10 bg-background/60 backdrop-blur-sm">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        Created with <span className="text-red-500">❤️</span> for Frieren fans
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Link
                            href={EXTERNAL_LINKS.WIKI_GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            <span className="hidden md:inline">Wiki GitHub</span>
                        </Link>
                        <Link
                            href={EXTERNAL_LINKS.TCG_GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            <span className="hidden md:inline">TCG GitHub</span>
                        </Link>
                        <Link
                            href={EXTERNAL_LINKS.DISCORD}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <DiscordIcon className="h-4 w-4" />
                            <span className="hidden md:inline">Discord</span>
                        </Link>
                        <Link href="/info" className="flex items-center gap-1 hover:text-primary transition-colors">
                            <FileText className="h-4 w-4" />
                            <span className="hidden md:inline">Contribute</span>
                        </Link>
                        <Link
                            href="/contribute"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <Edit className="h-4 w-4" />
                            <span className="hidden md:inline">Contribute</span>
                        </Link>
                    </div>
                </div>

                <div className="text-center border-t border-primary/5 pt-4">
                    <p className="text-xs text-muted-foreground">
                        A fan-made trading card game inspired by the anime Frieren: Beyond Journey&apos;s End
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        This is an unofficial fan project and is not affiliated with the official Frieren franchise
                    </p>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
