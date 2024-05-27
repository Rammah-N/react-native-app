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

const FormField = ({
	title,
	handleChange,
	value,
	placeholder,
	keyboardType,
	otherStyles,
	...props
}: {
	title: string;
	handleChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
	value: string;
	placeholder?: string;
	keyboardType?: KeyboardTypeOptions | undefined;
	otherStyles?: string;
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="text-base text-gray-100 font-pmedium">{title}</Text>
			<View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 items-center rounded-2xl focus:border-secondary">
				<TextInput
					placeholder={placeholder}
					placeholderTextColor={"#6B7b8b"}
					onChange={handleChange}
					secureTextEntry={title === "Password" && !showPassword}
					className="w-full h-full text-gray-200"
				/>
				{title === "Password" && (
					<TouchableOpacity
						onPress={() => setShowPassword((prev) => !prev)}
						className="absolute right-4 top-[18px] translate-y-1/2">
						<Image
							source={showPassword ? icons.eyeHide : icons.eye}
							className="w-6 h-6 text-gray-200"
							resizeMode="contain"
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default FormField;
