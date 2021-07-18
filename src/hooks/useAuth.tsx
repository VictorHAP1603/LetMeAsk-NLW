import { createContext, useState, useContext } from "react";

import { auth, firebase } from "../services/firebase";

type IUser = {
  id: string;
  name: string;
  avatar: string;
};

interface IAuthContextProps {
  user: IUser | undefined;
  signInWithGoogle: () => Promise<void>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextProps {
  const context = useContext(AuthContext);

  return context;
}
