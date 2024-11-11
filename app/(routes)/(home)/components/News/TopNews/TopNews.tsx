import { getTopNews } from "@/app/api/news/top-news";
import { Article } from "@/components/shared/Article";
import { removeDuplicateData } from "@/utils";

export async function TopNews() {
  const topNews = await getTopNews();
  const filterArticles = removeDuplicateData(topNews);


  console.log("Noticias filtradas", filterArticles)

  return (
    <div>
      {filterArticles.map((article, i) => (
        <div key={`${article.title} - ${i}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
}
