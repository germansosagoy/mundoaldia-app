import { newsType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_Georgian } from "next/font/google";
import { Tag } from "../../Tag";

const PTSerif = Noto_Sans_Georgian({subsets: ["latin"], weight: ["100", "200", "400", "500", "600", "700", "800", "900"]});

export function TopArticle({ data }: { data: newsType }) {
  return (
    <div className="py-2 border-b border-gray-400 mb-4">
      <div className="relative w-full h-[400px]">
        <Image src={`${
            data?.urlToImage !== null ? data.urlToImage : "/image/main-news.svg"
          }`} alt={data?.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover rounded-md"
          priority={true}
        />
       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-foreground p-3 text-start">
          <Link href={data?.url} legacyBehavior>
            <a target="_blank" className={`${PTSerif.className} antialiased text-lg font-semibold hover:text-blue-900 hover:underline duration-300`}>
              {data?.title}
            </a>
          </Link>
        </div>
      </div>
      <p className="text-[15px] p-2">{data?.description}</p>
      <div className="flex space-x-4 my-2 p-2">
        <Tag data={data?.author !== "" ? data.author : "Desconocido"} />
        <Tag data={data?.source.name} />
        <Tag data={new Date(data?.publishedAt).toDateString()} />
      </div>
    </div>
  );
}
