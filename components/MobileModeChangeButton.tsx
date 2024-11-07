import React, { useContext } from "react";
import { Fab, FabIcon } from "@gluestack-ui/themed";
import { Moon, Sun } from "lucide-react-native";
import { ThemeContext } from "../App";

const MobileModeChangeButton = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  return (
    <>
      <Fab
        sx={{
          "@md": {
            display: "none",
          },
          "@base": {
            bottom: "$4",
            right: "$4",
          },
        }}
        onPress={toggleColorMode}
      >
        <FabIcon as={colorMode === "light" ? Moon : Sun} />
      </Fab>
    </>
  );
};

export default MobileModeChangeButton;
