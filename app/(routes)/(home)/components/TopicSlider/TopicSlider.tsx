"use client";
import Autoplay from "embla-carousel-autoplay";
import { topicsData } from "./TopicSlider.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Hedvig_Letters_Serif } from "next/font/google";

const hedvig = Hedvig_Letters_Serif({subsets: ["latin"]}) 


export function TopicSlider() {
  return (
    <div className="flex gap-x-4 justify-center">
      <Carousel className="bg-foreground w-full max-w-full mx-auto border-t border-gray-100 py-4"
        opts={{ loop: true, align: "center" }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex items-center">
          {topicsData.map((topic) => (
            <CarouselItem
              key={topic.id}
              className="basis-4/4 md:basis-1/4 lg:basis-2/12"
            >
              <a
                href={`/${topic.category}`}
                className={`${hedvig.className} antialiased text-white text-base font-medium capitalize`}
                style={{ letterSpacing: 'normal' }} 
              >
                {topic.category}
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
