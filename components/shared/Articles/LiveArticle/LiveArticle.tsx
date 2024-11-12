import { liveChannels } from "@/app/(routes)/(home)/components/News/LiveNews/LiveNews.data";
import Image from "next/image";
import Link from "next/link";

export function LiveArticle() {
  return (
    <div className="flex flex-col space-y-6 mt-3">
      {liveChannels.map((channel) => (
        <Link key={channel.name} href={channel.url} legacyBehavior>
          <a target="_blank" className="relative block w-full h-[200px] bg-gray-300 overflow-hidden shadow-md">
            <Image
              src={channel.image} 
              alt={`${channel.name}`}
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-md space-x-2">
              <span>En vivo</span>
              <span className="text-white font-extrabold animate-pulse ml-2">
              •
             </span>
            </div>
            <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded">
              {channel.name}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
}
