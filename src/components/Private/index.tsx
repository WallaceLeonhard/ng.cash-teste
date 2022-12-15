import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth"
import { Navigate } from "react-router-dom";

interface IProps {
  children: JSX.Element
}

const Private = ({ children }: IProps) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Carregando...</div>
  }

  if (!authenticated) {
    return (
      <Navigate to={'/'} />
    )
  }

  return children
}


export default Private;
