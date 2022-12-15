import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBalanceData } from "../interfaces";
import { Api, createSession, createUser, getBalance } from "../services/api";


interface IContext {
  authenticated: boolean
  login: (username: string, password: string) => void;
  signUp: (username: string, password: string) => void
  logout: () => void;
  loading: boolean
  accessToken: IAccessTokenData | null;
  userData: IBalanceData | null
  fetchUserData: () => void
}

interface IProvider {
  children: JSX.Element
}


interface IAccessTokenData {
  token: string
}

export const AuthContext = createContext<IContext>({} as IContext);


export const AuthProvider = ({ children }: IProvider) => {
  const [accessToken, setAccessToken] = useState<IAccessTokenData | null>(null);
  const [loading, setLoading] = useState(true)
  const [userBalance, setUserBalance] = useState<IBalanceData>({})
  const [userData, setUserData] = useState<IBalanceData>({
    User: '',
    Balance: ''
  })

  const navigate = useNavigate()

  const savingAccessToken = () => {
    const recoverdUser = localStorage.getItem('token')

    if (recoverdUser) {
      setAccessToken(JSON.parse(recoverdUser))
    }
    setLoading(false)
  }

  const fetchUserData = () => {
    (async () => {
      try {
        const responseUserData = await getBalance();
        setUserBalance(responseUserData.data)
        console.log(responseUserData.data)
        localStorage.setItem('user', JSON.stringify(responseUserData.data))
      } catch (error) {
        console.log(error)
      }
    })()
  }


  const settingUserData = () => {
    const savedUser = localStorage.getItem('user')
    console.log({ savedUser })
    if (savedUser) {
      const user = JSON.parse(savedUser);
      console.log({ user })

      if (user) {
        setUserData(user)
      } else {
        setUserData(userBalance)
      }
    }
  }


  const login = async (username: string, password: string) => {

    const response = await createSession(username, password);
    const token = response.data.token;


    localStorage.setItem('token', JSON.stringify(token))

    Api.defaults.headers.Authorization = `Bearer ${token}`

    setAccessToken(token)
    navigate('/pagina-principal')

    return token;
  }

  const signUp = async (username: string, password: string) => {
    const response = await createUser(username, password);
    console.log(response.data)

    if (response.status === 201) {
      alert('Usuário criado com sucesso!')
      navigate('/')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    Api.defaults.headers.Authorization = null
    setAccessToken(null)
    navigate('/')
  }

  useEffect(savingAccessToken, [])
  useEffect(fetchUserData, [])
  useEffect(settingUserData, [userBalance])


  return (
    <AuthContext.Provider value={{ authenticated: !!accessToken, accessToken, login, logout, loading, signUp, userData, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  )
}
