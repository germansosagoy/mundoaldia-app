// "use client";
import { getTopNews } from "@/app/api/news/top-news";
import { Article } from "@/components/shared/Article";
// import { NewsData } from "@/types";
import { removeDuplicateData } from "@/utils";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchTopNews = async () => {
//   const response = await fetch("http://localhost:3000/api/news/top-news");

//   return
// }

export async function TopNews() {
  const topNews = await getTopNews();
  const filterArticles = removeDuplicateData(topNews);

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
