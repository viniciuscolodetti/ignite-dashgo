import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center" >
      <Box mr="4" textAlign="right">
        <Text>Vinicius Colodetti</Text>
        <Text color="gray.300" fontSize="small" >
          vinicius.colodetti@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Vinicius Colodetti" src="https://github.com/viniciuscolodetti.png" />
    </Flex>
  );
}