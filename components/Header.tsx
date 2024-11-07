import React from "react";
import {
  Box,
  HStack,

} from "@gluestack-ui/themed";

import HeaderTabs from "./header/HeaderTabs";

import ToggleMode from "./header/ToggleMode";
import UserProfile from "./header/UserProfile";
import AyanLogo from "./header/HomestayLogo";

const Header = React.memo(() => {
  return (
    <Box>
      {/* big screen */}
      <Box
        px="$16"
        w="100%"
        borderBottomWidth={1}
        display="none"
        sx={{
          "@md": {
            display: "flex",
          },
          _light: { borderColor: "$borderLight100" },
          _dark: { borderColor: "$borderDark900" },
        }}
      >
        <HStack
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          w="100%"
        >
          <AyanLogo />
          <HeaderTabs />
          <HStack space="lg" alignItems="center" pr="$1.5">
            <ToggleMode />
            <UserProfile />
          </HStack>
        </HStack>
      </Box>
      {/* small screen */}
      <Box
        p="$5"
        sx={{
          "@md": {
            display: "none",
          },
        }}
        w="100%"
      >
        
      </Box>
    </Box>
  );
});
export default Header;
