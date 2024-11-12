import { getRandomNews } from "@/app/api/news/randow-news";
import { RandomArticle } from "@/components/shared/Articles/RandomArticle";
import { removeDuplicateData } from "@/utils";

export async function RandomNews() {
  const randomNews = await getRandomNews("all",);
  const filteredArticles = removeDuplicateData(randomNews);

  return (
    <div className="mt-2 w-[300px] border-1 border-gray-200">
      <h2 className="antialiased text-sm font-bold text-gray-800 bg-[#FBFF22] w-max py-1 px-2 rounded-lg">
        Noticias Rápidas
      </h2>
      {filteredArticles.map((article, i) => (
        <div key={`${article?.title} - ${i}`}>
          <RandomArticle data={article} />
        </div>
      ))}
    </div>
  );
}
