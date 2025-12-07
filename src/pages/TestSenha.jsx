import styles from "../styles/TestSenha.module.css"
import { use, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import avaliadorIcon from '../assets/avaliador.svg'
import eyeIcon from '../assets/eye.svg'
import eyedIcon from '../assets/eyed.svg'
import wrongIcon from '../assets/wrong.svg'
import okIcon from '../assets/ok.svg'

export default function TestSenha(){

    const [senha, setSenha] = useState("")
    const [toggleInput, setToggleInput] = useState(true)
    const [passSecurity, setPassSecurity] = useState(0)
    const [strSecurity, setStrSecurity] = useState("")

    const [is12char, setIs12Char] = useState(false)
    const [isUpper, setIsUpper] = useState(false)
    const [isLower, setIsLower] = useState(false)
    const [isSymbol, setIsSymbol] = useState(false)
    const [isNum, setIsNum] = useState(false)

    function setPasswordState() {
    const hasUpper = /[A-Z]/.test(senha)
    const hasLower = /[a-z]/.test(senha)
    const hasSymbol = /[^A-Za-z0-9]/.test(senha)
    const hasNum = /[0-9]/.test(senha)
    const length = senha.length

    setIsUpper(hasUpper)
    setIsLower(hasLower)
    setIsSymbol(hasSymbol)
    setIsNum(hasNum)
    setIs12Char(length >= 12)

    let score = 0

    if (length >= 16) score += 6
    else if (length >= 12) score += 4
    else if (length >= 8) score += 2

    if (hasUpper) score++
    if (hasLower) score++
    if (hasSymbol) score++
    if (hasNum) score++

    setPassSecurity(score)

    let str = ""
    switch (true) {
        case score <= 1:
            str = "Terrível"
            break
        case score <= 3:
            str = "Muito baixo"
            break
        case score <= 5:
            str = "Baixo"
            break
        case score <= 7:
            str = "Mediano"
            break
        case score <= 9:
            str = "Alto"
            break
        default:
            str = "Excelente"
    }

    setStrSecurity(str)
    
}

    return(
        <>
            <Header />

            <main style={{marginTop: "160px"}}>

                <div className={styles.titleContainer}>
                    <img src={avaliadorIcon} alt="" />
                    <p>Avaliador de senhas</p>
                </div>

                <div className={styles.mainContainer}>
                    <div className={styles.passwordContainer}>
                        <input value={senha} onChange={(e) => {setSenha(e.target.value)}} type={toggleInput? "password" : "text"} />
                        <button onClick={()=>{setToggleInput(!toggleInput)}}><img src={toggleInput? eyeIcon : eyedIcon}></img></button>
                    </div>

                    <button onClick={setPasswordState} className={styles.submitButton}>Analisar</button>

                    <div className={styles.content}>
                        <p>Nível de segurança da senha: {strSecurity}</p>
                        <hr />
                        <p>Recomendações:</p>
                        <ul>
                            <li><img src={is12char? okIcon : wrongIcon}/>12 caracteres de comprimento pelo menos.</li>
                            <li><img src={isUpper? okIcon : wrongIcon}/>1 letra maiúscula no mínimo</li>
                            <li><img src={isLower? okIcon : wrongIcon}/>1 letra minúscula no mínimo</li>
                            <li><img src={isSymbol? okIcon : wrongIcon}/>1 símbolo no mínimo</li>
                            <li><img src={isNum? okIcon : wrongIcon}/>1 número no mínimo</li>
                        </ul>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    )
}