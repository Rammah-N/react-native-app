import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
	return (
		<>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="sign-in" options={{ headerShown: false }} />
				<Stack.Screen name="sign-up" options={{ headerShown: false }} />
			</Stack>
			<StatusBar style="light" backgroundColor="#161622" />
		</>
	);
};

export default AuthLayout;
