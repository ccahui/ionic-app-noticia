export interface RootApiResult {
    timestamp: number;
    articleCount: number;
    articles: Article[];
  }

export interface Article {
    title: string;
    description: string;
    url: string;
    image: string;
    publishedAt: string;
    source: Source;
    isFavorite?: boolean;
  }

export interface Source {
    name: string;
    url: string;
}
