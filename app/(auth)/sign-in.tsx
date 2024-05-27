import {
	View,
	Text,
	ScrollView,
	Image,
	NativeSyntheticEvent,
	TextInputChangeEventData,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [submitting, setSubmitting] = useState(false);
	const submit = () => {};
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View className="w-full justify-center min-h-[85vh] px-4 my-6">
					<Image
						source={images.logo}
						resizeMode="contain"
						className="w-[115px] h-[35px]"
					/>
					<Text className="text-2xl text-white font-psemibold mt-10">
						Log in to AORA
					</Text>
					<FormField
						title="Email"
						value={form.email}
						handleChange={(
							event: NativeSyntheticEvent<TextInputChangeEventData>
						) =>
							setForm((prev) => ({ ...prev, email: event?.nativeEvent.text }))
						}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>
					<FormField
						title="Password"
						value={form.password}
						handleChange={(
							event: NativeSyntheticEvent<TextInputChangeEventData>
						) =>
							setForm((prev) => ({ ...prev, password: event.nativeEvent.text }))
						}
						otherStyles="mt-7"
					/>

					<CustomButton
						title="Sign In"
						handlePress={() => submit()}
						containerStyles="mt-7"
						isLoading={submitting}
					/>
					<View className=" justify-center pt-5 flex-row gap-2">
						<Text className="text-lg text-gray-100 font-pregular">
							Don't have an account?{" "}
							<Link href="/sign-up" className="text-secondary font-psemibold">
								Sign Up!
							</Link>
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
