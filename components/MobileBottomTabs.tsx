import React from "react";
import { HStack, Icon, Pressable, Text, VStack } from "@gluestack-ui/themed";

import MobileSidebarActionsheet from "./MobileSidebarActionsheet";

const MobileBottomTabs = ({ bottomTabs, activeTab, setActiveTab }: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [actionsheetVisible, setActionsheetVisible] = React.useState(false);

  return (
    <>
      <HStack
        alignContent="center"
        position="absolute"
        bottom={0}
        justifyContent="space-between"
        w="100%"
        py="$3"
        px="$6"
        sx={{
          "@md": { display: "none" },
        }}
      >
        {bottomTabs.map((tab: any) => {
          return (
            <Pressable
              key={tab.label}
              onPress={() => {
                if (tab.label !== "Listing" && tab.label !== "Filter") {
                  setActiveTab(tab.label);
                }
                if (tab.label === "Listing") {
                  setModalVisible(true);
                }
                if (tab.label === "Filter") {
                  setActionsheetVisible(true);
                }
              }}
              disabled={tab.disabled}
              opacity={tab.disabled ? 0.5 : 1}
            >
              <VStack alignItems="center">
                <Icon
                  as={tab.icon}
                  color={
                    activeTab === tab.label ? "$primary500" : "$textLight400"
                  }
                  size="md"
                />
                <Text
                  size="xs"
                  color={
                    activeTab === tab.label ? "$textLight900" : "$textLight400"
                  }
                  sx={{
                    _dark: {
                      color:
                        activeTab === tab.label
                          ? "$textDark100"
                          : "$textLight400",
                    },
                  }}
                >
                  {tab.label}
                </Text>
              </VStack>
            </Pressable>
          );
        })}
      </HStack>
      
      {actionsheetVisible && (
        <MobileSidebarActionsheet
          actionsheetVisible={actionsheetVisible}
          setActionsheetVisible={setActionsheetVisible}
        />
      )}
    </>
  );
};

export default MobileBottomTabs;
