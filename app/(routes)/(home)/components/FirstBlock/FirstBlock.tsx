import { LiveNews } from "../News/LiveNews";
import { RandomNews } from "../News/RandomNews";
import { TopNews } from "../News/TopNews";

export function FirstBlock() {
  return (
    <section className="container mx-auto mt-4 px-4 flex flex-col md:flex-row gap-4">
      <div className="md:w-2/2 p-4">
       {/* top news section */}
        <TopNews />
      </div>
      <div className="w-full md:max-w-2xl flex md:flex-row gap-6 pt-2">
        <div className="p-1 rounded-lg">
        {/* random news section */}
          <RandomNews />
        </div>
        <div className="p-1 rounded-lg">
        {/* live news section */}
          <LiveNews />
        </div>
      </div>
    </section>
  );
}
