import logo from '../assets/logo.svg'

import styles from '../styles/Header.module.css'
import Dropdown from './Dropdown.jsx'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <div className={styles.container}>
                <Link to="/" style={{textDecoration: "none"}}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Utilix logo"/>
                    <p className={styles.logoTitle}>Utilix</p>
                </div>
                </Link>
            </div>
            
            <div className={styles.sections}>
                <Dropdown title={'Matemática'} options={['Calculadora de juros']} linkTo={["/calculadora-de-juros"]}/>
                <Dropdown title={'Downloaders'} options={['Placeholder']} linkTo={["/"]}/>
                <Dropdown title={'Conversores'} options={['Placeholder']} linkTo={["/"]}/>
                <Dropdown title={'Diversos'} options={['Contador de caracteres e palavras', 'Gerador de senha', 'Avaliador de senhas']} linkTo={["/contador-de-caracteres", "/gerador-de-senha", '/avaliador-de-senha']}/>
            </div>
        </>
    )
}