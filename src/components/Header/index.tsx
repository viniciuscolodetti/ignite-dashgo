import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import { SerachBox } from './SearchBox';
import { NotificationNav } from './NotificationsNav';
import { Profile } from './Profile';

export function Header() {
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
      <Logo />

      <SerachBox />
    
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}