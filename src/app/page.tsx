import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Card from './components/card'
import Exemplo from './components/exemplo'






export default function Home() {

  const usuario = {
    nome:'aryel',
    sobrenome:'batata',
    senha:323121,
    email:'exemplo@gmail.com',
  }

  return (
    <>
      <Header/>
      <Banner/>
      <p>{usuario.nome}</p>
      <p>{usuario.sobrenome}</p>
      <p>{usuario.senha}</p>
      <p>{usuario.email}</p>
      <Card/>
      <Footer/>
    </>
  )
}

