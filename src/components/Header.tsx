"use client"

import {
  Box,
  Flex,
  Image,
  HStack,
  Text,
  Stack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  MenuItem,
  Input,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/", scroll: "home" },
  { name: "Service", path: "/service", scroll: "service" },
  { name: "Profile", path: "/profile", scroll: "profile" },
  { name: "Contact", path: "/contact", scroll: "contact" },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const menuProps = {
    bg: useColorModeValue("#8697D1", "#8697D1"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <Box
      boxShadow="lg"
      width="100%"
      px={{ base: "5" }}
      bg={menuProps.bg}
      shadow={"lg"}
      color={"white"}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW={{ base: "100%", md: "7xl" }}
        mx="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack alignItems="center">
          <HStack
            as="nav"
            spacing={1}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            gap={10}
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </HStack>
        </HStack>

        {/* Search bar */}
        <Box w={"20rem"}>
          <Input
            type="text"
            placeholder="Search"
            bg={"#adbced"}
            fontWeight={"500"}
            color={"white"}
            border={"1px solid white"}
            rounded={"full"}
            _placeholder={{ color: "white" }}
          />
        </Box>
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={["inherit", "inherit", "none"]}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const NavLink = ({ name, path, scroll, onClose }: any) => {
  const link = {
    bg: useColorModeValue("gray.200", "gray.200"),
    color: useColorModeValue("#8697D1", "#8697D1"),
  };

  return (
    <Link href={path}>
      <Text
        px={3}
        py={1}
        lineHeight="inherit"
        rounded="md"
        fontSize={"lg"}
        fontWeight={"500"}
        onClick={() => onClose()}
        textDecoration={"none"}
        _hover={{
          textDecoration: "none",
          bg: link.bg,
          color: link.color,
        }}
      >
        {name}
      </Text>
    </Link>
  );
};

const MenuLink = ({ name, path, icon, onClose }: any) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem
        bg={useColorModeValue("gray.50", "gray.800")}
        _hover={{
          color: useColorModeValue("blue.500", "blue.200"),
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        <HStack>
          <Text>{name}</Text>
        </HStack>
      </MenuItem>
    </Link>
  );
};
