import { newsType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../Tag";

export function Article({ data }: { data: newsType }) {
  return (
    <div className="py-2 border-b border-gray-200 mb-4">
      <div className="relative w-full h-[300px]">
        <Image
          src={`${
            data?.urlToImage === null ? data.urlToImage : "/image/main-news.svg"
          }`}
          alt={data?.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          priority={true}
        />
        <Link href={data?.url} legacyBehavior>
            <a target="_blank" className="font-bold text-lg">
                {data?.title}
            </a>
        </Link>
      </div>
      <div className="flex space-x-4 my-2">
        <Tag data={data?.source.name} />
        <Tag data={data?.author} />
        <Tag data={new Date(data?.publishedAt).toDateString()} />
      </div>
      <p className="text-sm">{data?.description}</p>
    </div>
  );
}
