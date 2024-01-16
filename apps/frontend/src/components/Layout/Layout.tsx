import React from 'react';
import { AppShell, Burger, Button, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import App from '../../App';
import '@mantinex/mantine-logo/styles.css';
import './Layout.css';
import { ColorSchemeControl, HeaderControls } from '@mantinex/mantine-header';
import { meta } from '@mantinex/mantine-meta';


interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = () => {
    const [opened, { toggle }] = useDisclosure();

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
            <AppShell.Header className="zeroRight" >
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

                <Container size="xl" px="md" className="inner">

                    <HeaderControls
                        className='headerControls'
                        visibleFrom="sm"
                        githubLink={meta.gitHubLinks.mantineUi}
                        withDirectionToggle={true}
                        discordLink={meta.discordLink}
                    />
                    <Group mt="lg" className='btn-group' justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
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
