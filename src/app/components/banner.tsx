import { useSearchParams } from 'next/navigation'

export default function Banner() {
  return (
    <section className=" h-[50vw] mt-5 bg-cover bg-[url('https://www.insper.edu.br/wp-content/uploads/2021/11/tg11-Futuristic-microchip-processor-with-backlight-on-the-phone-in-blue-2.jpg')]">
      <div className='justify-center w-full h-full to-transparent flex flex-col pl-10 text-5xl text-white font-bold '>
        <h1 className=''>Challenge two</h1>
        <p className='text-white p-6 text-3xl'>Aprendendo com Narue e Lilian</p>
      </div>
    </section>
  )
} 