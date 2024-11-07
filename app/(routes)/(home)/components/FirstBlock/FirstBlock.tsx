import Image from "next/image";
import { PT_Serif, Roboto } from "next/font/google";

const PTSerif = PT_Serif({subsets: ["latin"], weight: ["400", "700"]});
const roboto = Roboto({subsets: ["latin"], weight: ["100", "300", "400", "500", "700"]});

export function FirstBlock() {
  return (
    <section className="container mx-auto mt-4 px-4 flex flex-col md:flex-row gap-8">
    {/* main article section */}
    <div className="md:w-2/4 p-4">
      <Image
        src="/main-new.svg"
        alt="Main News Image"
        width={450}
        height={450}
        className="w-full h-auto object-cover rounded"
      />
      <h2 className={`${PTSerif.className} antialiased text-2xl font-bold text-black mt-2 leading-tight `}>
        What One Photo Tells Us About North Korea&apos;s Nuclear Program
      </h2>
      <p className="text-gray-700 text-md mt-2">
        Clues from a propaganda photo reveal details about North Korea’s expanding weapons programs and internal politics.
      </p>
    </div>
    {/* right sidebar */}
    <div className="w-full md:max-w-2xl flex md:flex-row gap-4 pt-4">
      {/* top news section */}
      <div className="p-1 rounded-lg">
        <h2 className={`${roboto.className} antialiased text-lg font-bold text-gray-800 bg-[#FBFF22] w-max px-2 py-1 rounded-lg`}>
        Noticias destacadas
        </h2>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-700">PM unveils Shiva statue in Coimbatore on Mahashivratri</li>
          <li className="text-gray-700">PM Modi: Kanpur train accident was a conspiracy</li>
          <li className="text-gray-700">Sena, BJP have no option but to join hands again</li>
          <li className="text-gray-700">Thousands bid adieu to martyred jawan in Kashmir</li>
          <li className="text-gray-700">Jayalalithaa&apos;s niece Deepa floats political outfit</li>
        </ul>
      </div>
      {/* quick bite section */ }
      <div className="p-1 rounded-lg">
        <h2 className={`${roboto.className} antialiased text-lg font-bold text-gray-800 bg-[#FBFF22] w-max px-2 py-1 rounded-lg`}>
        Quick bites
        </h2>
        <p className="text-gray-700 mt-2">
          Stocks Sell Off, Gold Rises Ahead of Trump Speech: Markets Wrap
        </p>
        <a href="#" className="text-blue-500 mt-2 block text-sm font-semibold">Next {">"}</a>
      </div>
    </div>
  </section>
  );
}
