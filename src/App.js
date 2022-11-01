import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack px={6} py={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Olamiidee
        </Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaGithub />} isRound="true"></IconButton>
        <IconButton ml="2" icon={<FaLinkedin />} isRound="true"></IconButton>
        <IconButton ml="2" icon={<FaTwitter />} isRound="true"></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
