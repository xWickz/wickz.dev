import { CarouselOrientation } from "@/ui/carousel-orientation";

export default function Services() {
  return (
    <>
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Services
      </h2>
      <div className="justify-center w-full gap-6 sm:flex my-15">
        <CarouselOrientation />
      </div>
    </>
  );
}
