import { useSearchParams } from 'next/navigation'

export default function Banner() {
  return (
    <section className=" h-[50vw]  mt-5 bg-cover bg-[url('https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')]">
      <div className='justify-center w-full h-full to-transparent flex flex-col pl-10 text-5xl text-white font-bold '>
        <h1 className=''>Challenge two</h1>
        <p className='text-white p-6 text-3xl'>Learning from Narue and Lilian.</p>
      </div>
    </section>
  )
} 