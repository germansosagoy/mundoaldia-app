import { LiveArticle } from "@/components/shared/Articles/LiveArticle";

export function LiveNews() {
  return (
    <div className="mt-2 w-[380px] border-1 border-gray-200">
      <h2 className="antialiased text-sm font-bold text-gray-800 bg-[#FBFF22] w-max py-1 px-2 rounded-lg">
        Transmisión en Vivo
      </h2>
      <LiveArticle />
    </div>
  );
}
