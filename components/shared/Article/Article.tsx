import { newsType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../Tag";
import { PT_Serif } from "next/font/google";

const PTSerif = PT_Serif({subsets: ["latin"], weight: ["400", "700"]});

export function Article({ data }: { data: newsType }) {
  return (
    <div className="py-2 border-b border-gray-200 mb-4">
      <div className="relative w-full h-[400px] rounded">
        <Image src={`${
            data?.urlToImage !== null ? data.urlToImage : "/image/main-news.svg"
          }`} alt={data?.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          priority={true}
        />
       <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-3 text-start">
          <Link href={data?.url} legacyBehavior>
            <a target="_blank" className={`${PTSerif.className} antialiased text-xl font-semibold hover:text-blue-900 hover:underline duration-300`}>
              {data?.title}
            </a>
          </Link>
        </div>
      </div>
      <p className="text-[14px] p-2">{data?.description}</p>
      <div className="flex space-x-4 my-2 p-2">
        <Tag data={data?.source.name} />
        <Tag data={data?.author} />
        <Tag data={new Date(data?.publishedAt).toDateString()} />
      </div>
    </div>
  );
}
