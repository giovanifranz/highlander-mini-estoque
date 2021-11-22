import { createContext, useState, useEffect, ReactNode } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../services/firebase";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOutGoogle: () => Promise<void>;
}

interface User {
  uid: string;
  displayName: string;
  photoURL: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        if (!displayName || !photoURL) {
          throw new Error("Sem informação sobra a conta do Google");
        }
        setUser({
          uid,
          displayName,
          photoURL,
        });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();


    const result = await signInWithPopup(auth, provider);
    if (result.user) {
      const { displayName, uid, photoURL } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Sem informação sobra a conta do Google");
      }
      setUser({
        uid,
        displayName,
        photoURL,
      });
    }
  }

  async function signOutGoogle() {
    await signOut(auth);
    setUser({} as User); 
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOutGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
