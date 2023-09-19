import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Card from './components/card'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Card 
      title='But what is Next.js components?'
      desc='User interfaces can be broken down into smaller building blocks called components.'/>
      <Card 
      title='narue esta com fome?'
      desc='Salve-se quem puder'/>
      <Footer />
    </>
  )
}

