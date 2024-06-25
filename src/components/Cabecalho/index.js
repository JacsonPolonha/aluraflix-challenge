import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
// import logo from "./"; colocar a imagem da logo dentro das aspas

function Cabecalho(){
    return(
        <header className={styles.Cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo aluraflix"></img>
            </Link>
        </header>
    )
}

export default Cabecalho;