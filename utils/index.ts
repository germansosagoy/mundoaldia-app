import { newsType } from "@/types/types";

export const removeDuplicateData = (articles: any) => {
  const randomArticle: newsType[] = articles?.articles;
  const filteredArticles = randomArticle.filter(
    (article) => article?.source.id !== null
  );

  return filteredArticles;
};
