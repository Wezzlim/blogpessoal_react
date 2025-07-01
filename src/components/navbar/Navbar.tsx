import { useContext, type ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"


function Navbar() {

  const navigate = useNavigate()

  const { handleLogout, usuario } = useContext(AuthContext)

  function logout(){
    handleLogout()
    ToastAlerta("O usuário foi desconectado com sucesso!", "info")
    navigate("/")
  }

  let component: ReactNode

  if(usuario.token !== ""){
    component = (

      <div className="
        flex 
        justify-center 
        w-full 
        p-4 
        text-gray-600 
        bg-gray-100">
        <div className="
            container 
            flex 
            justify-between 
            text-lg">
            <Link to="/home" className="text-2xl fonte-bold"> Blog Pessoal </Link>
                <div className="
                    flex
                    gap-4">
                    <Link to='/postagens' className='text-2xl fonte-bold hover:underline'>Postagens |</Link>
                    <Link to='/cadastrartema' className="text-2xl fonte-bold hover:underline">Cadastro-tema |</Link>
                    <Link to='/temas' className="text-2xl fonte-bold hover:underline">Temas |</Link>
                    <Link to="/cadastro" className="text-2xl fonte-bold hover:underline"> Cadastro-usuário |</Link>
                    <Link to='/perfil' className="text-2xl fonte-bold hover:underline">Perfil</Link>
                    <Link to="/login" onClick={logout} className="text-red-600 text-2xl fonte-bold hover:underline">
                      Sair 
                    </Link> 
                </div>
        </div>
      </div>

    )
  }

  return (
    <>
      { component }
    </>
  )
}

export default Navbar