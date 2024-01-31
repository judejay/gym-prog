import React from "react";
import { useExerciseContext } from "../../hooks/useExerciseContext";
import { AspectRatio, Paper } from "@mantine/core";
import CardHeading from "../CardHeading/CardHeading";

const Video: React.FC = () => {
  const { selectedExercise } = useExerciseContext();
  return (
    <Paper withBorder radius="md" className="card">
      <CardHeading />
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={selectedExercise?.videoUrl}
          title="YouTube video player"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
    </Paper>
  );
};

export default Video;
