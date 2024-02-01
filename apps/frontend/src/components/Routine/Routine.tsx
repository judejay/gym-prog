import React, { useContext } from "react";
import { RoutineContext } from "../../state/Routine_Context";
import CarouselCard from "../Carousel/CarouselCard";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";

const Routine: React.FC = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { state } = useContext(RoutineContext);
  const slides = state.exercises.map((item) => (
    <Carousel.Slide key={item.name}>
      <CarouselCard {...item} />
    </Carousel.Slide>
  ));
  return (
    <div>
      <h1>Routine</h1>
      <div>
        <Carousel
          slideSize={{ base: "100%", sm: "50%" }}
          slideGap={{ base: rem(2), sm: "xl" }}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          orientation="vertical"
          height={600}
          withIndicators
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

export default Routine;
