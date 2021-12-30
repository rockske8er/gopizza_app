import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';

import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
}

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
}

type AuthContextProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

const USER_COLLECTION = "@gopizza";

const AuthProvider = ({children}: AuthContextProps) => {

  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null)

  const signIn = async (email: string, password: string) => {
    if(!email || !password){
      return Alert.alert('Login', 'Informe o e-mail e senha')
    }

    setIsLogging(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(account => {
        firestore()
          .collection('users')
          .doc(account.user.uid)
          .get()
          .then( async (profile)  => {
            const { name, isAdmin } = profile.data() as User;

            if(profile.exists){
              const data = {
                id: account.user.uid,
                name,
                isAdmin
              }
              await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(data))
              setUser(data);
            }
          })
          .catch(
            () => Alert.alert('Login', 'User not Found')
          )

      })
      .catch(error => {
        const { code } = error;

        if(code === 'auth/user-not-found' || code === 'auth/wrong-password'){
          return Alert.alert('Login', 'E-mail ou Senha inválidos');
        }else{
          return Alert.alert('Login', 'Não consigamos encontrar o seu Login');
        }
      })
      .finally(
        () => setIsLogging(false)
      )
  }

  const signOut = async () => {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }

  const getUserStorage = async () => {
    setIsLogging(true);

    const storedUser =  await AsyncStorage.getItem(USER_COLLECTION)

    if(storedUser){
      const userData = JSON.parse(storedUser) as User;
      console.log(userData)
      setUser(userData)
    }

    setIsLogging(false)
  }

  useEffect(() => {
    getUserStorage()
  }, [])

  const forgotPassword = async (email: string) => {

    if(!email){
      return Alert.alert('Redefinir Senha', 'Informe o Email')
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('Redefinir Senha', 'Enviamos um link para seu e-mail, para redefinir sua senha '))
      .catch(() => Alert.alert('Redefinir Senha', 'Erro ao enviar e-mail'))
  }

  return(
    <AuthContext.Provider value={{
      signIn,
      signOut,
      forgotPassword,
      isLogging, 
      user
    }}>
      { children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export{ AuthProvider, useAuth }