import { useSearchParams } from 'next/navigation'

export default function Banner(){
    return(
      <section className="flex place-items-center h-[50vw] mt-5 bg-cover bg-[url('https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg')]">
      <div className=' bg-gradient-to-r flex from-rose-600 to-transparent  pl-10 text-5xl text-black font-bold '>
       <div className=''/>
        <img className='' 
        alt="But what is next.js components?" />
        <div className='position: absolute'>
        <p className=' flex flex-col text-blue-500 p-6 text-3xl justify-between  '>sdsede</p>
        </div>
        </div>
        
      </section>
    )
 }