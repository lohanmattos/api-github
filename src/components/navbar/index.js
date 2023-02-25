import * as S from './styled'
import logo from "./icons8-github-100.png"

const styles = {
    display:'flex',
    flexDirection:'column',
}

const NavBar = () => {
    return(
        <S.navbar>
            <div>
                <img src={logo}/>
            </div>
            <div style={{styles}}>
                <h1>GitHub-Flix</h1>
                <p>Seu Portal de Repositórios</p>
            </div>
           
        </S.navbar>
    )
}


export default NavBar; 