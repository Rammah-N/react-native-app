import {
	View,
	Text,
	ScrollView,
	Image,
	NativeSyntheticEvent,
	TextInputChangeEventData,
	Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalcontext } from "../../context/provider";

const SignUp = () => {
	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [submitting, setSubmitting] = useState(false);
	const { setUser } = useGlobalcontext();
	const submit = async () => {
		if (!form.username || !form.email || !form.password)
			return Alert.alert("Please fill all fields");
		setSubmitting(true);
		try {
			const result = await createUser({
				email: form.email,
				password: form.password,
				username: form.username,
			});

			// set it to global state
			console.log(result);
			setUser(result);
			router.replace("/home");
		} catch (error: any) {
			Alert.alert(error.message);
		} finally {
			setSubmitting(false);
		}
	};
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
						Sign Up to AORA
					</Text>
					<FormField
						title="Username"
						value={form.username}
						handleChange={(value) =>
							setForm((prev) => ({
								...prev,
								username: value,
							}))
						}
						otherStyles="mt-10"
					/>
					<FormField
						title="Email"
						value={form.email}
						handleChange={(value) =>
							setForm((prev) => ({ ...prev, email: value }))
						}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>
					<FormField
						title="Password"
						value={form.password}
						handleChange={(value) =>
							setForm((prev) => ({ ...prev, password: value }))
						}
						otherStyles="mt-7"
					/>

					<CustomButton
						title="Sign Up"
						handlePress={() => submit()}
						containerStyles="mt-7"
						isLoading={submitting}
					/>
					<View className=" justify-center pt-5 flex-row gap-2">
						<Text className="text-lg text-gray-100 font-pregular">
							Already have an account?{" "}
							<Link href="/sign-in" className="text-secondary font-psemibold">
								Sign In!
							</Link>
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
