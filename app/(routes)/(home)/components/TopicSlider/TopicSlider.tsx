"use client";
import Autoplay from "embla-carousel-autoplay";
import { topicsData } from "./TopicSlider.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";


export function TopicSlider() {
  return (
    <div className="flex gap-x-4 justify-center lg:pb-6 mt-20">
      <Carousel
        className="w-full max-w-full mx-auto border-t border-b border-gray-100 py-2"
        opts={{ loop: true, align: "center" }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent className="flex items-center">
          {topicsData.map((topic) => (
            <CarouselItem
              key={topic.id}
              className="basis-4/4 md:basis-2/6 lg:basis-1/6"
            >
              <a
                href={`/topics/${topic.title}`}
                className="text-gray-800 hover:underline font-medium capitalize"
                style={{ letterSpacing: 'normal' }} 
              >
                {topic.title}
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
