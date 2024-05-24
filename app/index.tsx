import { Link, Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
	return (
		<View className="flex items-center justify-center flex-1">
			<Text className="text-3xl font-pblack">Aora</Text>
			<StatusBar style="auto" />
			<Link href="/profile" className="text-blue-600 font-bold">
				Go To Profile
			</Link>
		</View>
	);
}
