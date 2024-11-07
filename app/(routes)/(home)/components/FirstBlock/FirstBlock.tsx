import { Bitter } from 'next/font/google'
import Image from 'next/image'

const bitter = Bitter({subsets: ["latin"]})

export function FirstBlock() {
  return (
    <section className='container mx-auto mt-8 px-4 grid grid-cols-1 mg:grid-cols-3 gap-6'>
      <h1 className={`${bitter.className} antialiased text-6xl font-bold text-center`}>Noticias Al Día</h1>
      <div className="col-span-2 bg-gray-100 p-4">
        <Image
          src="/main-new.svg"
          alt="Main News Image"
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
        <h2 className="text-2xl font-bold mt-4">What One Photo Tells Us About North Korea&apos;s Nuclear Program</h2>
        <p className="text-gray-700 mt-2">
          Clues from a propaganda photo reveal details about North Korea’s expanding weapons programs and internal politics.
        </p>
      </div>

      {/* side news items */}
      <div className="flex flex-col space-y-4">
        <div className="bg-yellow-100 p-4">
          <h3 className="text-lg font-semibold text-gray-800">Top Stories</h3>
          <ul className="space-y-2 mt-2">
            <li className="text-gray-700">PM unveils Shiva statue in Coimbatore on Mahashivratri</li>
            <li className="text-gray-700">PM Modi: Kanpur train accident was a conspiracy</li>
            <li className="text-gray-700">Sena, BJP have no option but to join hands again</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4">
          <h3 className="text-lg font-semibold text-gray-800">Quick Bites</h3>
          <p className="text-gray-700 mt-2">
            Stocks Sell Off, Gold Rises Ahead of Trump Speech: Markets Wrap
          </p>
        </div>
      </div>
    </section>
  )
}
