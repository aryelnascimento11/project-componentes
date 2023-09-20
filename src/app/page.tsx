import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Card from './components/card'





export default function Home() {
  return (
    <>
      <Banner />
      <Card
        title='Next.js components.'
        desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <Card
        title='Next.js Props?'
        desc='This API reference will help you understand how to use props and configuration options available for the Image Component. For features and usage, please see the Image Component page.'
      />
      <Footer />
    </>
  )
}

