import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import comparisonBg from "@/assets/comparison-bg.png.asset.json";
import review01 from "@/assets/reviews/review-01.jpg.asset.json";
import review02 from "@/assets/reviews/review-02.jpg.asset.json";
import review03 from "@/assets/reviews/review-03.jpg.asset.json";
import review04 from "@/assets/reviews/review-04.jpg.asset.json";
import review05 from "@/assets/reviews/review-05.jpg.asset.json";
import review06 from "@/assets/reviews/review-06.jpg.asset.json";
import review07 from "@/assets/reviews/review-07.jpg.asset.json";
import review08 from "@/assets/reviews/review-08.jpg.asset.json";
import review09 from "@/assets/reviews/review-09.jpg.asset.json";
import review10 from "@/assets/reviews/review-10.jpg.asset.json";

const reviewImages = [review01, review02, review03, review04, review05, review06, review07, review08, review09, review10];

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const move = (direction: number) => setIndex(current => (current + direction + reviewImages.length) % reviewImages.length);

  return <section id="safety" aria-labelledby="reviews-heading" className="reviews-section relative overflow-hidden">
    <img src={comparisonBg.url} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_30%]" loading="lazy" decoding="async" />
    <div className="reviews-shade absolute inset-0" />
    <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <h2 id="reviews-heading" className="reviews-heading font-display mb-10 text-center text-3xl leading-[1.15] md:mb-14 md:text-4xl lg:text-5xl">Отзывы</h2>
      <div role="region" aria-roledescription="карусель" aria-label="Отзывы клиентов" className="relative flex w-full flex-col items-center" onKeyDown={event => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}>
        <div className="grid w-full grid-cols-2 items-center justify-items-center gap-3 md:flex md:justify-center md:gap-6">
          <Button variant="ghost" size="icon" aria-label="Предыдущий отзыв" title="Предыдущий отзыв" onClick={() => move(-1)} className="review-arrow order-2 h-10 w-10 rounded-full md:order-none md:h-12 md:w-12"><ChevronLeft className="size-5 md:size-6" /></Button>
          <div className="review-stage relative order-1 col-span-2 aspect-[2.3/1] w-full min-w-0 max-w-2xl overflow-hidden rounded-2xl md:order-none md:flex-1" onTouchStart={event => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }} onTouchEnd={event => {
            const end = event.changedTouches[0]?.clientX;
            if (touchStartX.current !== null && end !== undefined) {
              const distance = end - touchStartX.current;
              if (Math.abs(distance) > 40) move(distance < 0 ? 1 : -1);
            }
            touchStartX.current = null;
          }} onTouchCancel={() => { touchStartX.current = null; }}>
            {reviewImages.map((image, i) => <img key={image.url} src={image.url} alt={`Отзыв клиента клиники MD-Комильфо ${i + 1}`} aria-hidden={i !== index} className={`absolute inset-0 h-full w-full object-contain p-3 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none md:p-4 ${i === index ? "scale-100 opacity-100" : "pointer-events-none scale-[0.985] opacity-0"}`} loading="lazy" decoding="async" />)}
          </div>
          <Button variant="ghost" size="icon" aria-label="Следующий отзыв" title="Следующий отзыв" onClick={() => move(1)} className="review-arrow order-3 h-10 w-10 rounded-full md:order-none md:h-12 md:w-12"><ChevronRight className="size-5 md:size-6" /></Button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {reviewImages.map((image, i) => <Button key={image.url} variant="ghost" size="icon" aria-label={`Отзыв ${i + 1}`} aria-current={i === index ? "true" : undefined} onClick={() => setIndex(i)} className="review-dot grid h-6 w-5 place-items-center rounded-full p-0"><span className={`h-2 rounded-full transition-all motion-reduce:transition-none ${i === index ? "review-dot-active w-5" : "review-dot-idle w-2"}`} /></Button>)}
        </div>
      </div>
    </div>
  </section>;
}