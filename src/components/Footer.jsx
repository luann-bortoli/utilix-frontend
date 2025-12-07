import styles from '../styles/Footer.module.css'
import logo from '../assets/logo.svg'
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'

export default function Footer(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Utilix" />
                        <p>Utilix</p>
                    </div>
                    <div className={styles.sections}>
                        <p>Seções</p>
                        <ul>
                            <li><a href="/#mathSection">Matemática</a></li>
                            <li><a href="/#downloadSection">Downloaders</a></li>
                            <li><a href="/#convertSection">Conversores</a></li>
                            <li><a href="/#moreSection">Diversos</a></li>
                        </ul>
                    </div>

                    <div className={styles.sections}>
                        <p>Ferramentas</p>
                        <ul>
                            <li><a href="/contador-de-caracteres">Contador de caracteres</a></li>
                            <li><a href="/gerador-de-senha">Gerador de senha segura</a></li>
                            <li><a href="/avaliador-de-senha">Avaliador de senhas</a></li>
                            <li><a href="/calculadora-de-juros">Calculadora de juros</a></li>
                        </ul>
                    </div>

                    <div className={styles.sections}>
                        <p className={styles.socialP}>Social</p>
                            <a href="https://www.linkedin.com/in/luann-de-bortoli-354bba34b/"><img src={linkedinIcon} alt="" /></a>
                            <a href="https://github.com/luann-bortoli"><img src={githubIcon} alt="" /></a>
                    </div>
                </div>
                <hr />
                <p>&copy; 2025 Utilix. Todos os direitos reservados.</p>
                
            </div>
        </>
    )
}