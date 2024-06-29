import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";

import { Login } from "@screens/Login/Login";

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    });

    useEffect(() => {
        const loadFonts = async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await SplashScreen.hideAsync();
            } catch (error) {
                console.error("Error loading fonts:", error);
            }
        };

        loadFonts();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ThemeProvider theme={theme}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Login />
                    </View>
                </SafeAreaView>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
