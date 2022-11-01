import { Stack, useColorMode, useMediaQuery } from "@chakra-ui/react";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallScreen] = useMediaQuery("min-width:600px");

  return <Stack></Stack>;
}

export default Header;
