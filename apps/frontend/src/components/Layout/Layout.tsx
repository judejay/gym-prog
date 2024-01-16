import React from 'react';
import { AppShell, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import App from '../../App';
import { MantineLogo } from '@mantinex/mantine-logo';
import '@mantinex/mantine-logo/styles.css';
import './Layout.css';
import { ColorSchemeControl, HeaderControls } from '@mantinex/mantine-header';
import { meta } from '@mantinex/mantine-meta';


interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = () => {
    const [opened] = useDisclosure();

    function searchHandlers(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header className="zeroRight">
                <Container size="xl" px="md" className="inner">

                    <HeaderControls
                        visibleFrom="sm"
                        githubLink={meta.gitHubLinks.mantineUi}
                        withDirectionToggle={false}
                        discordLink={meta.discordLink}
                    />

                    <Group hiddenFrom="sm">
                        <ColorSchemeControl />
                    </Group>
                </Container>
            </AppShell.Header>

            <AppShell.Navbar p="md"><App /></AppShell.Navbar>

            <AppShell.Main>Main</AppShell.Main>
        </AppShell>
    );
};

export default Layout;
