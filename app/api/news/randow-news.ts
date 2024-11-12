import { NextResponse } from "next/server";

export async function getRandomNews(keyword: string) {
  try {
    const topNewsData = await fetch(
      `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&q=${keyword}&pageSize=5`,
      {
        next: { revalidate: 3600 },
      }
    );

    return topNewsData.json();
  } catch (error) {
    console.error("Error fetching top news:", error);
    return NextResponse.json(
      { error: "No se pudo obtener las noticias principales" },
      { status: 500 }
    );
  }
}
