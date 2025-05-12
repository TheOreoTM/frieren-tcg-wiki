import { notFound, redirect } from "next/navigation";
import MarkdownContent from "@/components/markdown-content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { getNewsBySlug, getAllNews, getLatestNews } from "@/lib/content/news";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getCategoryColor } from "@/lib/news";
import Image from "next/image";

export async function generateStaticParams() {
    const news = await getAllNews();

    return news.map((article) => ({
        slug: article.slug,
    }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getNewsBySlug(slug);

    if (!article) {
        return redirect("/news?error=ArticleNotFound");
    }

    const relatedArticles = (await getLatestNews(6)).filter((a) => a.id !== article.id).slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Link href="/news">
                    <Button variant="ghost" className="pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
                    </Button>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{article.title}</h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDistanceToNow(article.createdAt)} ago
                        </div>
                        <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {article.author.name}
                        </div>
                    </div>
                </div>
                {article.imageUrl && (
                    <div className="relative aspect-video mb-8">
                        <Image
                            src={article.imageUrl || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                )}
                <MarkdownContent content={article.content} className="mb-12" />
                <div className="flex flex-wrap gap-2 mb-12">
                    <span className="text-sm font-medium">Tags:</span>
                    {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </div>
                {relatedArticles.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map((relatedArticle) => (
                                <Link href={`/news/${relatedArticle.id}`} key={relatedArticle.id}>
                                    <Card className="h-full hover:shadow-lg transition-shadow">
                                        <div className="relative aspect-video">
                                            <Image
                                                src={relatedArticle.imageUrl || "/placeholder.svg"}
                                                alt={relatedArticle.title}
                                                fill
                                                className="object-cover rounded-t-lg"
                                            />
                                            <div className="absolute top-2 left-2">
                                                <Badge className={getCategoryColor(relatedArticle.category)}>
                                                    {relatedArticle.category}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-bold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {relatedArticle.excerpt}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
