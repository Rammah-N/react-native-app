import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	KeyboardTypeOptions,
	NativeSyntheticEvent,
	TextInputChangeEventData,
	TouchableOpacity,
	Image,
} from "react-native";

import { icons, images } from "../constants";

const SearchInput = ({
	handleChange,
	value,
	keyboardType,
	otherStyles,
	...props
}: {
	handleChange: (value: string) => void;
	value: string;
	keyboardType?: KeyboardTypeOptions | undefined;
	otherStyles?: string;
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<View className="border-2 flex-row border-black-200 w-full h-16 px-4 bg-black-100 items-center space-x-4 rounded-2xl focus:border-secondary">
			<TextInput
				placeholder="Search for latest videos"
				placeholderTextColor={"#6B7b8b"}
				onChangeText={handleChange}
				className="flex-1 text-gray-200 text-base"
			/>
			<TouchableOpacity>
				<Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
