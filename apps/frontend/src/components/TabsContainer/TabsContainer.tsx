import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import Detail from '../Instructions/Instructions';
import Video from '../Video/Video';
import RoutineSettings from '../ProgramSettings/RoutineSettings';

function TabsContainer() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs mt={20} color="rgba(148, 74, 74, 1)" radius="xs" defaultValue="messages">
      <Tabs.List><Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
        Instructions
      </Tabs.Tab>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Video
        </Tabs.Tab>

        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Program Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        <Video />
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        <Detail />      </Tabs.Panel>

      <Tabs.Panel value="settings">
        <RoutineSettings />
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabsContainer;