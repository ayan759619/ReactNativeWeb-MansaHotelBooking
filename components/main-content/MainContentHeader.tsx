import React from "react";
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Heading,
  HStack,
} from "@gluestack-ui/themed";
import { List } from "lucide-react-native";


const MainContentHeader = ({ setActiveTab, activeTab }: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Box pt="$6" pb="$2.5" px="$4" sx={{ "@md": { px: 0 } }}>
      <HStack w="100%" alignItems="center" justifyContent="space-between">
        <Heading size="xl">Mansa Residency @Premium Rooms</Heading>
        {/* Hidden for mobile screens */}
        <Button
          display="none"
          sx={{
            "@md": {
              display: "flex",
            },
          }}
          ml="auto"
          variant="outline"
          action="secondary"
          onPress={() => {
            setModalVisible(true);
          }}
        >
        
          <ButtonText
            pl="$2"
            sx={{
              _light: {
                color: "$textLight800",
              },
              _dark: {
                color: "$textDark300",
              },
            }}
          >
            Book Now
          </ButtonText>
        </Button>
      </HStack>
    
    </Box>
  );
};

export default MainContentHeader;
