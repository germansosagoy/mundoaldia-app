import { NextResponse } from "next/server";

export async function getTopNews() {
  try {
    const topNewsData = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&pageSize=10`,
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
