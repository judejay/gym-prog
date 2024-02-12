import React, { useContext } from "react";
import { RoutineContext } from "../../state/Routine_Context";
import CarouselCard from "../Carousel/CarouselCard";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem, Paper, Text } from "@mantine/core";
import CardHeading from "../CardHeading/CardHeading";

const Routine: React.FC = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { state } = useContext(RoutineContext);
  const slides = state.exercises.map((item) => (
    <Carousel.Slide key={item.exerciseId}>
      <CarouselCard {...item} />
    </Carousel.Slide>
  ));
  if (slides.length === 0)
    return (
      <Paper withBorder radius="md" className="card">
        <CardHeading />
        <Text size="sm" mt="sm" c="dimmed">
          Add Exercises in Routine Settings
        </Text>
      </Paper>
    );

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      height="max"
      withIndicators
    >
      {slides}
    </Carousel>
  );
};

export default Routine;
