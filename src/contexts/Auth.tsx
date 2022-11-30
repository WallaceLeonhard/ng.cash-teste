import { createContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { Api, createSession, createUser } from "../services/api";


interface IContext {
  authenticated: (user: string) => Promise<void>
  login: (username: string, password: string) => void;
  signUp: (username: string, password: string) => void
  logout: () => void;
  loading: boolean
  user: IUserData | null;
  newUser: IUserData | null;
}

interface IProvider {
  children: JSX.Element
}


interface IUserData {
  token: string
}

export const AuthContext = createContext<IContext>({} as IContext);


export const AuthProvider = ({ children }: IProvider) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [newUser, setNewUser] = useState<IUserData | null>(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  useEffect(() => {
    const recoverdUser = localStorage.getItem('token')

    if (recoverdUser) {
      setUser(JSON.parse(recoverdUser))
    }

    setLoading(false)
  }, [])


  const login = async (username: string, password: string) => {

    const response = await createSession(username, password);
    const token = response.data.token;


    localStorage.setItem('token', JSON.stringify(token))

    Api.defaults.headers.Authorization = `Bearer ${token}`

    setUser(token)
    navigate('/pagina-principal')
  }

  const signUp = async (username: string, password: string) => {
    const response = await createUser(username, password);
    console.log(response.data)

    if (response.status === 200) {
      alert('Usuário criado com sucesso!')
      navigate('/')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    Api.defaults.headers.Authorization = null
    setUser(null)
    navigate('/')
  }


  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading, signUp, newUser }}>
      {children}
    </AuthContext.Provider>
  )
}
