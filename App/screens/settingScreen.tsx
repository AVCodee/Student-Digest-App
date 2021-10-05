import React from "react";
import { Text,View } from "react-native";
import { MyButton } from "../components/dummyButton";
import { ProfileButton } from "../components/profileButton";
import { LogoutButton } from "../components/logoutButton";

export const SettingsScreen = () => {
    //add your buttons in the view
    return(
        <View>
            <MyButton/>
            <ProfileButton/>
            <LogoutButton/>
        </View>
    );
}