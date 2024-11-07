import { Navbar } from "@/components/shared/Navbar/Navbar";
import { FirstBlock } from "./components/FirstBlock";
import { TopicSlider } from "./components/TopicSlider";
import { Title } from "./components/Title";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <Title text="Noticias al Día" />
        <TopicSlider />
        <FirstBlock />
      </main>
    </>
  );
}
