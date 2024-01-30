import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import Detail from '../Instructions/Instructions';
import Video from '../Video/Video';
import RoutineSettings from '../RoutineSettings/RoutineSettings';
import Routine from '../Routine/Routine';

function TabsContainer() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs mt={20} color="rgba(148, 74, 74, 1)" radius="xs" defaultValue="instructions">
      <Tabs.List>
        <Tabs.Tab value="instructions" leftSection={<IconMessageCircle style={iconStyle} />}>
          Instructions
        </Tabs.Tab>
        <Tabs.Tab value="video" leftSection={<IconPhoto style={iconStyle} />}>
          Video
        </Tabs.Tab>

        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Routine Settings
        </Tabs.Tab>
        <Tabs.Tab value="routine" leftSection={<IconSettings style={iconStyle} />}>
          Routine
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="video">
        <Video />
      </Tabs.Panel>

      <Tabs.Panel value="instructions">
        <Detail />
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        <RoutineSettings />
      </Tabs.Panel>
      <Tabs.Panel value="routine">
        <Routine />
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabsContainer;