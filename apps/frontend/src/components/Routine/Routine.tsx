import React, { useContext, useRef } from "react";
import { RoutineContext } from "../../state/Routine_Context";
import CarouselCard from "../Carousel/CarouselCard";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

const Routine: React.FC = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { state } = useContext(RoutineContext);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = state.exercises.map((item) => (
    <Carousel.Slide key={item.exerciseId}>
      <CarouselCard {...item} />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      height="max"
      withIndicators
      plugins={[autoplay.current]}
    >
      {slides}
    </Carousel>
  );
};

export default Routine;
