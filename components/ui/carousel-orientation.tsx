"use client";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Services {
  title: string;
  description: string;
}

const services: Services[] = [
  {
    title: "Web Development",
    description:
      "I build responsive and performant web applications using modern technologies.",
  },
  {
    title: "UI/UX Design",
    description:
      "I create intuitive and visually appealing user interfaces that enhance user experience.",
  },
  {
    title: "Backend Development",
    description:
      "I develop applications which are scalabe, secure and efficient. Using Node.js, Express and good practices.",
  },
];

export function CarouselOrientation() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-lg"
    >
      <CarouselContent className="-mt-1 h-67.5">
        {services.map(({ title, description }, index) => (
          <CarouselItem key={index} className="basis-1/2 pt-1">
            <div className="p-1">
              <Card>
                <CardContent className="grid items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{title}</span>
                  <span className="text-zinc-50">{description}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
