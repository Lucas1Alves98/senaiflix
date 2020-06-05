import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "./style";

export default function Desenvolvimento2({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
          <Image source={logoImg} />
        </View>
        <Text style={Style.title}>Desenvolvimento de Sistemas 2</Text>
        <View style={Style.player}>
                <WebView source={{ uri: 'https://www.youtube.com/embed/6vE0oFFSE7c'}} allowsFullscreenVideo={true} />
            </View>      
      </View>
    </View>
  );
}  
