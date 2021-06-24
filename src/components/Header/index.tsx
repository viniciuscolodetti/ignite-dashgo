import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext';

import { Logo } from './Logo';
import { SerachBox } from './SearchBox';
import { NotificationNav } from './NotificationsNav';
import { Profile } from './Profile';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false, 
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      ) }
      
      <Logo />

      { isWideVersion && (
        <SerachBox />
      )}
    
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}