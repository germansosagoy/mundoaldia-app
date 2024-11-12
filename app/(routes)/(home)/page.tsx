import { Navbar } from "@/components/shared/Navbar/Navbar";
import { FirstBlock } from "./components/FirstBlock";
import { TopicSlider } from "./components/TopicSlider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto">
        <TopicSlider />
        <FirstBlock />
      </main>
    </>
  );
}
