import { formatDate } from '@/lib/formatDate';
import { Menu, Search } from 'lucide-react';
import { PT_Serif, Hedvig_Letters_Serif } from 'next/font/google'
import Link from 'next/link'

const PTSerif = PT_Serif({subsets: ["latin"],weight: ["400", "700"]}); 
const hedvig = Hedvig_Letters_Serif({subsets: ["latin"]}) 

export function Navbar() {
  const currentDate = formatDate();

  return (
    <nav className="w-full max-w-full py-2 border-b border-200">
    <div className="mx-auto flex justify-between items-center px-4 lg:px-8">
      {/* logo */}
      <Link href="/" className="flex items-center mt-1">
      <Menu className="w-5 h-5" />
        <span className={`${hedvig.className} antialiasedlg lg:ml-2 antialiased text-md font-medium hidden lg:block`}>Secciones</span>
      </Link>
      <div className="hidden lg:flex mt-1">
        <p className={`${PTSerif.className} antialiased capitalize text-gray-600 text-sm font-medium`}>
          {currentDate}
        </p>
      </div>
        {/* no auth view*/}
        <div className="flex items-center space-x-8">
          <button className="flex items-center text-gray-700 space-x-2">
            <Search className="w-5 h-5" />
            <span className="font-medium text-sm uppercase">Buscar</span>
          </button>
          <Link href="/sign-in" className="px-4 py-2 bg-[#FBFF22] text-foreground border border-foreground/20 text-md rounded-md transition">
            Ingresar
          </Link>
        </div>
      </div>
  </nav>
  )
}
