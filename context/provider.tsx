import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext({
	user: null,
	setUser: (user: any) => {},
	loggedIn: false,
	setLoggedIn: (loggedIn: boolean) => {},
	loading: false,
});

export const useGlobalcontext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		getCurrentUser()
			.then((res) => {
				if (res) {
					setUser(res);
					setLoggedIn(!!res);
				} else {
					setLoggedIn(false);
					setUser(null);
				}
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<GlobalContext.Provider
			value={{ user, setUser, loggedIn, setLoggedIn, loading }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
