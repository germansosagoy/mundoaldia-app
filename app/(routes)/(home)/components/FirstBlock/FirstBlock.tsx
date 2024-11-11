import { Roboto } from "next/font/google";
import Link from "next/link";
import { TopNews } from "../News/TopNews";

// const PTSerif = PT_Serif({subsets: ["latin"], weight: ["400", "700"]});
const roboto = Roboto({subsets: ["latin"], weight: ["100", "300", "400", "500", "700"]});

export function FirstBlock() {
  return (
    <section className="container mx-auto mt-4 px-4 flex flex-col md:flex-row gap-8">
      {/* main left topnews */}
    <div className="md:w-2/4 p-4">
      <TopNews />
    </div>
    {/* right sidebar */}
    <div className="w-full md:max-w-2xl flex md:flex-row gap-4 pt-4">
      {/* top news section */}
      <div className="p-1 rounded-lg">
        <h2 className={`${roboto.className} antialiased text-base font-bold text-gray-800 bg-[#FBFF22] w-max py-2 rounded-lg`}>
        Noticias destacadas
        </h2>
        
      </div>
      {/* quick bite section */ }
      <div className="p-1 rounded-lg">
        <h2 className={`${roboto.className} antialiased text-base font-bold text-gray-800 bg-[#FBFF22] w-max py-2 rounded-lg`}>
          Recientes
        </h2>
        <p className="text-gray-700 mt-2">
          Stocks Sell Off, Gold Rises Ahead of Trump Speech: Markets Wrap
        </p>
        <Link href="/" className="text-blue-500 mt-2 block text-sm font-semibold">Next {">"}</Link>
      </div>
    </div>
  </section>
  );
}
