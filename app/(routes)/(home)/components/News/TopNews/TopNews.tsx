import { getTopNews } from "@/app/api/news/top-news";
import { TopArticle } from "@/components/shared/Articles/TopArticle";

import { removeDuplicateData } from "@/utils";

export async function TopNews() {
  const topNews = await getTopNews();
  const filterArticles = removeDuplicateData(topNews);

  return (
    <div>
      {filterArticles.map((article, i) => (
        <div key={`${article.title} - ${i}`}>
          <TopArticle data={article} />
        </div>
      ))}
    </div>
  );
}
