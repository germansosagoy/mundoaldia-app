import { formatDate } from '@/lib/formatDate';
import { Menu } from 'lucide-react';
import { PT_Serif, Hedvig_Letters_Serif } from 'next/font/google'
import Link from 'next/link'
import { SearchInput } from '../SearchInput';

const PTSerif = PT_Serif({subsets: ["latin"],weight: ["400", "700"]}); 
const hedvig = Hedvig_Letters_Serif({subsets: ["latin"]}) 

export function Navbar() {
  const currentDate = formatDate();

  return (
    <nav className="w-full max-w-full py-2 relative">
    <div className="mx-auto flex justify-between items-center px-4 lg:px-8">
      {/* logo */}
      <Link href="/" className="flex items-center mt-1">
      <Menu className="w-5 h-5" />
        <span className={`${hedvig.className} antialiasedlg lg:ml-2 antialiased text-md font-medium hidden lg:block`}>Secciones</span>
      </Link>
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 hidden lg:flex">
          <p className={`${PTSerif.className} antialiased capitalize text-gray-700 text-sm font-medium`}>
            {currentDate}
          </p>
        </div>
        {/* no auth view*/}
        <div className="flex items-center space-x-8">
          <button className="flex items-center text-gray-700 space-x-2">
            <SearchInput />
          </button>
          <Link href="/sign-in" className="px-3 py-1.5 hover:bg-foreground/80 hover:text-white duration-300 text-foreground border border-foreground/20 text-sm rounded-md transition">
            Ingresar
          </Link>
        </div>
      </div>
  </nav>
  )
}
