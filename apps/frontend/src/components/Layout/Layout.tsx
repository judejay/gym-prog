import React from "react";
import { AppShell, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "@mantinex/mantine-logo/styles.css";
import "./Layout.css";
import ListOfDetails from "../ListOfDetails/ListOfDetails";
import SideMenu from "../SideMenu/SideMenu";
import { Logo } from "../Logo/Logo";
import { ActionToggle } from "../ActionToggle/ActionToggle";

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
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="sm"
    >
      <AppShell.Header className="zeroRight">
        <Container size="xl" px="md" className="inner">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className="logo">
            <Logo size={30} />
          </div>

          <ActionToggle />
        </Container>
      </AppShell.Header>

      <AppShell.Navbar>
        <SideMenu />
      </AppShell.Navbar>

      <AppShell.Main>
        <div className="main">
          <ListOfDetails />
        </div>{" "}
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
