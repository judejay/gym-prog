import React from 'react';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import App from '../../App';


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
            padding="md"
        >
            <AppShell.Header>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <div>Logo</div>
            </AppShell.Header>

            <AppShell.Navbar p="md"><App /></AppShell.Navbar>

            <AppShell.Main>Main</AppShell.Main>
        </AppShell>
    );
};

export default Layout;
