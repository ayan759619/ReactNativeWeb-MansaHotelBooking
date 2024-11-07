import React from "react";
import { Image } from "react-native";

const AyanLogo = () => {
  return (
    <Image 
      source={{ uri: "https://manasiohospitality.co.in/images/imagebg.png" }}
      style={{ height: 110, width: 110 }}
      resizeMode="cover" // Optional: set this to control image resizing
    />
  );
};

export default AyanLogo;
