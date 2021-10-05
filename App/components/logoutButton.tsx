
import React from "react";
import { Text,View,Button,Alert} from "react-native";


export const LogoutButton = () => {
    return(
        <Button
            onPress={() => Alert.alert('Logout Button Pressed - Reqest Client Logout')}
            title="Logout"
            color="#FF0000"
            accessibilityLabel="Sign Out of Account"
        />
    );
}

