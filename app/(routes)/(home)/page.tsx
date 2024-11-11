import { Navbar } from "@/components/shared/Navbar/Navbar";
import { FirstBlock } from "./components/FirstBlock";
import { TopicSlider } from "./components/TopicSlider";
import { Title } from "./components/Title";
// import { TopBar } from "./components/TopBar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <TopBar /> */}
      <main className="mx-auto mt-8 px-4">
        <Title text="Mundo al Día" />
        <TopicSlider />
        <FirstBlock />
      </main>
    </>
  );
}
