import Header from '../components/Header.jsx'
import JurosSimples from '../components/JurosSimples.jsx'
import Footer from '../components/Footer.jsx'

export default function CalcJuros(){
    return(
        <>
            <Header />
            <main style={{marginTop: "150px"}}>
                <JurosSimples />
            </main>
            <Footer />
        </>
    )
}