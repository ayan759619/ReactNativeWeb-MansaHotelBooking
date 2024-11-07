import React from "react";

import {
  HStack,
  Text,
  Heading,
  Avatar,
  VStack,
  Link,
  Icon,
  Pressable,
  Divider,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import {
  Blinds,
  ChevronRight,
  Headphones,
  HeartHandshake,
  Settings,
  Tablets,
  User,
} from "lucide-react-native";
import { ScrollView } from "react-native";


const MobileProfilePage = ({ isActive }: any) => {
  const [openLogoutAlertDialog, setOpenLogoutAlertDialog] =
    React.useState(false);
  return (
    <ScrollView style={{ display: isActive ? "flex" : "none" }}>
      <VStack px="$5" py="$4" space="lg" flex={1}>
        <Heading>Profile</Heading>
        <ProfileCard />
        <Divider />
        <PersonalInfoSection />
        <Divider />
       
        <LogoutButton
          openLogoutAlertDialog={openLogoutAlertDialog}
          setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        />
      </VStack>
      
    </ScrollView>
  );
};

const ProfileCard = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <HStack space="md">
        <Avatar bg="$blue600">
          <Avatar.FallbackText>Ayan Karmakar (Rigel)</Avatar.FallbackText>
          <Avatar.Image
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
          />
        </Avatar>
        <VStack>
          <Text>Ayan Karmakar</Text>
          
        </VStack>
      </HStack>
      <Pressable>
        <Icon as={ChevronRight} />
      </Pressable>
    </HStack>
  );
};

const PersonalInfoSection = () => {
  return (
    <VStack space="md">
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={User} />
          <Text>Personal Info</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Settings} />
          <Text>Account</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};


const LogoutButton = ({ setOpenLogoutAlertDialog }: any) => {
  return (
    <Button
      action="secondary"
      variant="outline"
      onPress={() => {
        setOpenLogoutAlertDialog(true);
      }}
    >
      <ButtonText>Dont Logout</ButtonText>
    </Button>
  );
};

export default MobileProfilePage;
