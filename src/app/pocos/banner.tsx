import { useSearchParams } from 'next/navigation'

export default function Banner() {
  return (
    <section className=" h-[50vw] mt-5 bg-cover bg-[url('')]">
      <div className='justify-center w-full h-full to-transparent flex flex-col pl-10 text-5xl text-white font-bold '>
        <h1 className=''>Challenge two</h1>
        <p className='text-white p-6 text-3xl'>Learning from Narue and Lilian.</p>
      </div>
    </section>
  )
} 