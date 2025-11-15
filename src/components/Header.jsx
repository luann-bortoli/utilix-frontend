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
                <Dropdown title={'Downloaders'} options={['Baixador de videos do Youtube']} linkTo={["/calculadora-de-juros"]}/>
                <Dropdown title={'Conversores'} options={['Converter SVG para PNG']} linkTo={["/calculadora-de-juros"]}/>
                <Dropdown title={'Diversos'} options={['Contador de caracteres e palavras']} linkTo={["/contador-de-caracteres"]}/>
            </div>
        </>
    )
}