/* eslint-disable @typescript-eslint/no-unused-vars */
import { getCurrentUser } from "@/lib/appwrite";
import * as React from "react";
import { Models } from "react-native-appwrite";

type userType = {
  name: string;
  email: string;
};

type GlobalAuthType = {
  user: userType | unknown;
  isLoggedIn: boolean;
  isLoading: boolean;
  //   setIsLoggedIn: (payload: boolean) => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  //   setUser: (payload: GlobalAuthType["user"]) => void;
  setUser: React.Dispatch<React.SetStateAction<GlobalAuthType["user"]>>;
};

type GlobalProviderType = {
  children: React.ReactNode;
};

const defaultState = {
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
  isLoading: false,
  setUser: (user: userType | null) => {},
  //   setIsLoggedIN: (false) => ,
} as GlobalAuthType;

export const GlobalContext = React.createContext(defaultState);

export const useGlobalContext = () => React.useContext(GlobalContext);

const GlobalProvider = ({ children }: GlobalProviderType) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState<GlobalAuthType["user"]>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const handleUser = async () => {
      try {
        const result: unknown = await getCurrentUser();
        if (result) {
          setIsLoggedIn(true);
          setUser(result);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
