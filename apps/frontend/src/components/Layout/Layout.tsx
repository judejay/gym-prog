import React from 'react';
import { AppShell, Burger, Button, ColorSchemeScript, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantinex/mantine-logo/styles.css';
import './Layout.css';
import { ColorSchemeControl, HeaderControls, SearchMobileControl } from '@mantinex/mantine-header';
import { meta } from '@mantinex/mantine-meta';
import ListOtDetails from '../ListOfDetails/ListOfDetails';
import SideMenu from '../SideMenu/SideMenu';
import { Logo } from '../Logo/Logo';


interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = () => {
    const [opened, { toggle }] = useDisclosure();


    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="sm"
        >
            <AppShell.Header className="zeroRight" >
                <ColorSchemeScript defaultColorScheme="auto" localStorageKey="mantine-ui-color-scheme" />

                <Container size="xl" px="md" className="inner">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <div className="logo">
                        <Logo size={30} />
                    </div>

                    <ColorSchemeControl />





                </Container>
            </AppShell.Header>

            <AppShell.Navbar ><SideMenu /></AppShell.Navbar>

            <AppShell.Main><div className='main'><ListOtDetails />
            </div> </AppShell.Main>
        </AppShell>
    );
};

export default Layout;
