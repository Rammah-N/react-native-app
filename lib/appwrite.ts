import {
	Account,
	Avatars,
	Client,
	Databases,
	ID,
	Models,
	Query,
} from "react-native-appwrite";

export const config = {
	endpoint: "https://cloud.appwrite.io/v1",
	platform: "com.rammah.aora",
	projectId: "66542f9b000c872b8be9",
	locale: "en",
	databaseId: "665432ee00312408bb47",
	userCollectionId: "66543310003890b84f60",
	videoCollectionId: "6654332c000410184599",
	storageId: "6654342d001816b7805e",
};

// Init your React Native SDK
const client = new Client();

client
	.setEndpoint(config.endpoint)
	.setProject(config.projectId)
	.setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async ({
	email,
	password,
	username,
}: {
	email: string;
	password: string;
	username: string;
}) => {
	try {
		const newAccount = await account.create(
			ID.unique(),
			email,
			password,
			username
		);
		if (!newAccount) throw new Error("Account not created");

		const avatarUrl = avatars.getInitials(newAccount.$id);

		await signIn({ email, password });

		const newUser = await databases.createDocument(
			config.databaseId,
			config.userCollectionId,
			ID.unique(),
			{ accountId: newAccount.$id, username, email, avatar: avatarUrl }
		);
		return newUser;
	} catch (error: any) {
		console.log(error);
		throw new Error(error);
	}
};

export const signIn = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<Models.Session> => {
	try {
		try {
			await account.deleteSession("current");
		} catch (error: any) {
			throw new Error(error);
		}
		const session = await account.createEmailPasswordSession(email, password);
		console.log("session");
		console.log(session);
		if (!session) throw new Error("Session not created");
		return session;
	} catch (error: any) {
		throw new Error(error);
	}
};

// Get Account
export async function getAccount() {
	try {
		const currentAccount = await account.get();

		return currentAccount;
	} catch (error: any) {
		throw new Error(error);
	}
}

// Get Current User
export async function getCurrentUser() {
	try {
		const currentAccount = await getAccount();
		if (!currentAccount) throw Error;

		const currentUser = await databases.listDocuments(
			config.databaseId,
			config.userCollectionId,
			[Query.equal("accountId", currentAccount.$id)]
		);

		if (!currentUser) throw Error;
		return currentUser.documents[0];
	} catch (error) {
		return null;
	}
}
