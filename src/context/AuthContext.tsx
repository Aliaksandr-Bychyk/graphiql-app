import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
  User,
} from 'firebase/auth';
import { auth } from '../services/firebase';

interface IUserContext {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  user: User | null;
  logout: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  loading: boolean;
}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext | null>(null);

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = (): Promise<void> => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserContext);
};
