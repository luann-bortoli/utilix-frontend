import styles from "../styles/JurosSImples.module.css"
import { useState } from "react"
import percentIcon from '../assets/percent.svg'
import percentSelectedIcon from '../assets/percentSelected.svg'

export default function JurosSimples(){

    const [inputCapInic, setinputCapInic] = useState("")
    const [inputTaxaJur, setinputTaxaJur] = useState("")
    const [inputTempJur, setinputTempJur] = useState("")
    const [output, setOutput] = useState("")
    const [handleOutput, setHandleOutput] = useState(false)

    const [capNull, setCapNull] = useState(false)
    const [taxaNull, setTaxaNull] = useState(false)
    const [tempoNull, setTempoNull] = useState(false)

    const [responseCapInic, setResponseCapInic] = useState("")
    const [responseTaxaJur, setResponseTaxaJur] = useState("")
    const [responseTempJur, setResponseTempJur] = useState("")

    const [simplesComposto, setSimplesComposto] = useState(true)

    const handleCalc = () =>{
        if(inputCapInic !== "" && inputTaxaJur !== "" && inputTempJur !== ""){
            let capital = Number(inputCapInic)
            let juros = Number(inputTaxaJur)
            let tempo = Number(inputTempJur)

            let montante = simplesComposto ? capital + (capital * (juros / 100) * tempo) : capital * (1 + juros / 100)**tempo

            setOutput(montante)
            setHandleOutput(true)

            setResponseCapInic(capital)
            setResponseTaxaJur(juros)
            setResponseTempJur(tempo)
        }

    setCapNull(inputCapInic === "");
    setTaxaNull(inputTaxaJur === "");
    setTempoNull(inputTempJur === "");
    }

    return(
        <>
            <div className={styles.titleContainer}>
                <div className={`${styles.titleSimples} ${simplesComposto ? styles.titleSelected : ""}`} onClick={() => setSimplesComposto(!simplesComposto)}>
                    <img src={simplesComposto ? percentSelectedIcon : percentIcon} alt="" /><p className={styles.title}>Juros simples</p>
                </div>
                <div className={`${styles.titleComposto} ${simplesComposto ? "" : styles.titleSelected}`} onClick={() => setSimplesComposto(!simplesComposto)}>
                    <img src={simplesComposto ? percentIcon : percentSelectedIcon} alt="" /><p className={styles.title}>Juros Composto</p>
                </div>
            </div>

            <div className={styles.responseContainer}>

                {handleOutput &&(
                    <div className={`${styles.response} ${output ? styles.responseTransition : ""}`}>
                        <p className={styles.responseTitle}>{output.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        <p className={styles.responseDesc}>Após {responseTempJur} meses, recebendo {responseTaxaJur}% por mês, você irá receber {(output-responseCapInic).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} em juros e acumular um total de {output.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}!</p>
                    </div>
                )}
            </div>

            <div className={styles.inputContainer}>

                <div className={styles.leftContent}>

                    <div className={`${styles.capitalInicial} ${capNull ? styles.capNull : ""}`}>
                        <p>R$</p>
                        <input type="number" maxLength={12} placeholder={capNull ? "Preencha este campo!" : "0,00"} value={inputCapInic} onChange={(event) => setinputCapInic(event.target.value)} />
                    </div>

                    <div className={`${styles.taxaJuros} ${taxaNull ? styles.capNull : ""}`}>
                        <p>%</p>
                        <input type="number" maxLength={12} placeholder={taxaNull ? "Preencha este campo!" : "0"} value={inputTaxaJur} onChange={(event) => setinputTaxaJur(event.target.value)} />
                    </div>

                </div>

                <div className={styles.rightContent}>

                    <div className={`${styles.tempoJuros} ${tempoNull ? styles.capNull : ""}`}>
                        <p>Meses</p>
                        <input type="number" maxLength={12} placeholder={tempoNull ? "Preencha este campo!" : "0"} value={inputTempJur} onChange={(event) => setinputTempJur(event.target.value)} />
                    </div>

                    <button className={styles.calcButton} onClick={handleCalc}>Calcular</button>

                </div>
                

            </div>
        </>
    )
}