import { Carousel } from "./carousel";
import { CarouselItem } from "./carousel-item";
import { Review } from "./review";
import { TestimonialsHeader } from "./testimonialsheader";

export const Testimonials: React.FC = () => (
  <div className="bg-white py-20 flex flex-col items-center gap-16">
    <TestimonialsHeader />
    <Carousel>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
        <CarouselItem index={index} key={index}>
          <Review />;
        </CarouselItem>
      ))}
    </Carousel>
  </div>
);
