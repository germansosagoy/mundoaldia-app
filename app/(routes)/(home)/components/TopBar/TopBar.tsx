"use client"
import { useEffect, useState } from "react";

export function TopBar() {
  const [rates, setRates] = useState({
    oficial: null,
    blue: null,
    turista: null,
    ccl: null,
    mep: null,  
})

useEffect(() => {
  async function fetchDollarRates() {
    try {
      const response = await fetch("/api/dolar");
      const data = await response.json();
      setRates(data.exchangeRates);
    } catch (error) {
      console.error("Error fetching dollar rates:", error);
    }
  }

  fetchDollarRates();
}, []);


  return (
    <nav className="container w-full max-w-full md:py-2 border-t border-b border-200 mb-8 px-16">
      <div className="mx-auto flex justify-start items-center px-4 lg:px-10 space-x-8">
        <span className="md:text-sm">
          Dolar oficial: <strong>${rates?.oficial || ".."}</strong>
        </span>
        <span className="md:text-sm">
          Dolar blue: <strong>${rates?.blue || ".."}</strong>
        </span>
        <span className="md:text-sm">
          Dolar turista: <strong>${rates?.turista || ".."}</strong>
        </span>
        <span className="md:text-sm">
          Dolar CCL: <strong>${rates?.ccl || ".."}</strong>
        </span>
        <span className="md:text-sm">
          Dolar MEP: <strong>${rates?.mep || ".."}</strong>
        </span>
      </div>
    </nav>
  );
}
