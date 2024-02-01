import { Paper, Text } from "@mantine/core";
import "./CarouselCard.css";

interface CardProps {
  name: string;
}

function CarouselCard({ name }: CardProps) {
  return (
    <Paper shadow="md" p="xl" radius="md" className="carouselCard">
      <div>
        <Text className="category" size="xs">
          {name}
        </Text>
      </div>
    </Paper>
  );
}

export default CarouselCard;
