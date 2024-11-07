import { formatDate } from '@/lib/formatDate';
import { Search } from 'lucide-react';
import { PT_Serif } from 'next/font/google'
import { Bitter } from 'next/font/google';
import Link from 'next/link'
import Image from 'next/image';

const PTSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
}); 

const bitter = Bitter({subsets: ["latin"]}) 

export function Navbar() {
  const currentDate = formatDate();

  return (
    <nav className="w-full max-w-full mx-auto py-2 border-b border-200">
    <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
      {/* logo */}
      <Link href="/" className="flex items-center mt-1">
      <Image src="/globe.svg" alt="Logo" width={18} height={18} />
        <span className={`${bitter.className} antialiasedlg lg:ml-2 antialiased text-lg font-medium hidden lg:block`}>Mundo al Día</span>
      </Link>
      <div className="hidden lg:flex space-x-10 mt-1">
        <a href="#" className={`${PTSerif.className} antialiased text-gray-500 text-base font-medium`}>
          {currentDate}
        </a>
      </div>
        {/* no auth view*/}
        <div className="flex items-center space-x-8">
          <button className="flex items-center text-gray-700 space-x-2">
            <Search className="w-5 h-5" />
            <span className="font-medium text-sm uppercase">Buscar</span>
          </button>
          <a
            href="#"
            className="px-4 py-2 bg-[#FBFF22] text-foreground border border-foreground/20 text-md rounded-md transition"
          >
            Ingresar
          </a>
        </div>
      </div>
  </nav>
  )
}
