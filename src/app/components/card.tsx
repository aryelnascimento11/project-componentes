import Image from "next/image"

export default function Card() {
  return (
    <main className='py-6 first:mt-0 bg-white'>
      <section className='flex mt-5 justify-center'>
        <div className='bg-black  gap-10 from-black to-detail w-[80%] h-[28vw] p-6 shadow-lg flex'>
          <div className='text-white flex flex-col w-[50%] justify-center'>
            <h1 className='text-3xl text-blue-500 font-bold text-center '>But what is Next.js components?</h1>
            <p className='text-2xl font-bold text-center'>Aqui é o Paulo meu truta!!</p>
            <p className='text-2xl font-bold text-center'>Aqui é o Paulo meu truta!!</p>
            <p className='text-2xl font-bold text-center'>Aqui é o Paulo meu truta!!</p>
          </div>
          <Image
            src={"https://imagens.mdig.com.br/thbs/45184mn.jpg"}
            width={"500"}
            height={"200"}
            alt=""
          />

        </div>
      </section>
    </main>
  )
}