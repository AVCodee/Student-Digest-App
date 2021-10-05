
import React from "react";
import { Text,View,Button,Alert} from "react-native";


export const ProfileButton = () => {
    return(
        <Button
            onPress={() => Alert.alert('Profile Button Pressed - Reqest Profile View')}
            title="Profile"
            color="#FF0000"
            accessibilityLabel="Go to User Profile"
        />
    );
}

