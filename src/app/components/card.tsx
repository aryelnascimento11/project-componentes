import Image from "next/image"

interface PropsCard{
  title: string
  desc: string
}

export default function Card(props: PropsCard) {
  return (
    <main className='py-6 first:mt-0 bg-gray-300'>
      <section className='flex mt-5 justify-center'>
        <div className='bg-black  gap-10 from-black to-detail w-[80%] h-[28vw] p-6 shadow-lg flex'>
          <div className='text-gray-300 flex flex-col w-[50%] justify-center'>
            <h1 className='text-3xl text-fuchsia-500 font-bold text-center '>{props.title}</h1>
            <p className='text-2xl font-bold text-center'>{props.desc}</p>

          </div>
          <Image
            src="https://c.wallhere.com/photos/9c/2d/Microsoft_Windows-222026.jpg!d"
            width={"500"}
            height={"200"}
            alt=""
          />

        </div>
      </section>
    </main>
  )
}