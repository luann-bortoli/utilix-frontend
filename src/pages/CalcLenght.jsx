import styles from '../styles/CalcLenght.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import counterIcon from '../assets/counter.svg'
import { useState } from 'react'

export default function CalcLenght(){

    const [textValue, setTextValue] = useState("")

    const [charValue, setCharValue] = useState("")
    const [wordValue, setWordValue] = useState("")

    const setLenghtValue = () =>{
    let charLength = textValue.length
    let handleWordLenght = textValue.split(" ")
    let wordLength = handleWordLenght.length

    setCharValue(charLength)
    setWordValue(wordLength)

    if(charLength == 0){
        setWordValue(0)
        }
    }

    return(
        <>
            <Header />
            <main style={{marginTop: "160px"}}>

                <div className={styles.titleContainer}>
                    <img src={counterIcon} alt="" /> <p>Contador de caracteres e palavras</p>
                </div>

                <div className={styles.container}>

                    <div className={styles.textareaContainer}>
                        <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} name="" id="" placeholder='Digite seu texto aqui!'></textarea>
                    </div>

                    <div className={styles.responseContainer}>
                        <div className={styles.response}>Caracteres:{charValue}</div>
                        <div className={styles.response}>Palavras: {wordValue}</div>
                    </div>

                    <button onClick={setLenghtValue}>Ler</button>

                </div>
            </main>
            <Footer />
        </>
    )
}