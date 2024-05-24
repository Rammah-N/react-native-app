import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Profile = () => {
	return (
		<View className="flex flex-1 items-center justify-center">
			<Text className="text-4xl font-bold text-yellow-500">Profile</Text>
			<Link href="/">Go Home</Link>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({});
