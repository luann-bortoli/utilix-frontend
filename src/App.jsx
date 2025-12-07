import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import mathIcon from './assets/math.svg'
import downloadIcon from './assets/download.svg'
import convertIcon from './assets/convert.svg'
import moreIcon from './assets/more.svg'

export default function App() {
  
  return (
    <>
      <Header />
      <main style={{marginTop: "150px"}}>
        <Section
        title={'Matemática'}

        tool={[
          'Calculadora de juros',
          'Placeholder',
          'Placeholder',
          'Placeholder',
          'Placeholder',
        ]}

        description={[
          'Ideal para simular investimentos, financiamentos e comparações financeiras em segundos.',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          ]} 
          
          icon={[mathIcon]}

          section={'mathSection'}

          link={["/calculadora-de-juros"]}
        
          />

          <Section title={'Downloaders'}
        tool={[
          'Placeholder',
          'Placeholder',
          'Placeholder',
        ]}

        description={[
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          ]} 
          
          icon={[downloadIcon]}

          section={'downloadSection'}

          link={["/"]}

          />

          <Section title={'Conversores'}
        tool={[
          'Placeholder',
          'Placeholder'
        ]}

        description={[
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo'
          ]} 

        section={'convertSection'}
          
          icon={[convertIcon]}

          link={["/"]}
          />

          <Section title={'Diversos'}
        tool={[
          'Contador de caracteres',
          'Gerador de senha segura',
          'Avaliador de senhas',
          'Placeholder',
          'Placeholder',
          'Placeholder',
        ]}

        description={[
          'Ferramenta rápida para checar comprimento e número de palavras de textos',
          'Proteja suas contas com senhas complexas geradas instantaneamente',
          'Analise a robustez de senhas e receba sugestões de como melhorar sua segurança.',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          ]} 
          
          icon={[moreIcon]}

          section={'moreSection'}

          link={['/contador-de-caracteres', '/gerador-de-senha', '/avaliador-de-senha']}
          />
      </main>
        <Footer />
    </>
  )
}


