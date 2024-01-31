import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Group,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import "./ActionToggle.css";

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun className="icon, light" stroke={1.5} />
        <IconMoon className="icon dark" stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}
