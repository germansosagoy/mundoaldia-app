import { newsType } from "@/types/types";
import Link from "next/link";
import { Tag } from "../../Tag";
import Image from "next/image";

export function RandomArticle({ data }: { data: newsType }) {
  return (
    <div className="flex justify-between gap-2 p-2 mb-4 mt-1 border-b border-gray-300">
      <div>
        <div className="relative w-[300px] h-[200px]">
          <Image
            src={`${
              data?.urlToImage ? data?.urlToImage : "/image/main-news.svg"
            }`}
            alt={data?.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover rounded-sm"
          />
        </div>
        <Link href={data?.url} legacyBehavior>
          <a target="_blank" className="text-sm hover:underline">
            {data?.title}
          </a>
        </Link>
        <div className="flex space-x-2 max-w-max my-2">
          <Tag data={data?.source.name} />
          <Tag data={new Date(data?.publishedAt).toDateString()} />
        </div>
      </div>
    </div>
  );
}
