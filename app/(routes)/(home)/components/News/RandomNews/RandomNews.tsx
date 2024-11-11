import { getRandomNews } from "@/app/api/news/randow-news";
import { RandomArticle } from "@/components/shared/Articles/RandomArticle";
import { removeDuplicateData } from "@/utils";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export async function RandomNews() {
  const randomNews = await getRandomNews("sports, entertainment",);
  const filterArticles = removeDuplicateData(randomNews);

  console.log("Noticias filtradas random-news", filterArticles)

  return (
    <div className="mt-2 w-[300px] border-1 border-gray-200">
      <h2 className={`${roboto.className} antialiased text-sm font-bold text-gray-800 bg-[#FBFF22] w-max py-2 px-2 rounded-lg`}>
        Noticias Rápidas
      </h2>
      {filterArticles.map((article, i) => (
        <div key={`${article?.title} - ${i}`}>
          <RandomArticle data={article} />
        </div>
      ))}
    </div>
  );
}
