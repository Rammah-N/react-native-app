import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
	containerStyles,
	title,
	handlePress,
	textStyles,
	isLoading,
}: {
	containerStyles?: string;
	textStyles?: string;
	title: string;
	handlePress: () => void;
	isLoading?: boolean;
}) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.95}
			className={`bg-secondary-200 rounded-xl min-h-[62px] mt-5 justify-center items-center ${containerStyles} ${
				isLoading ? "opacity-50" : ""
			}`}>
			<Text className={`text-primary text-lg font-psemibold ${textStyles}`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
