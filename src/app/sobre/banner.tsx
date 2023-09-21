import { useSearchParams } from 'next/navigation'

export default function Banner() {
  return (
    <section className=" h-[50vw] mt-5  bg-white bg-[url('https://media.istockphoto.com/id/1360927961/pt/foto/abstract-background-with-interweaving-of-colored-lines-and-dots-network-connection-structure.jpg?s=612x612&w=0&k=20&c=_JkA7VKE7__OW5Af7t15FQtS-g5J6Yj8vmf2ghg0ckE=')]">
      <div className='justify-center w-full h-full to-transparent flex flex-col pl-10 text-5xl text-white font-bold '>
        <h1>Challenge two</h1>
        <p className='text-white p-6 text-3xl'>Learning Props</p>
      </div>

    </section>

  )
} 