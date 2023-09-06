export default function Footer(){
  return(
      <>
      <footer className='bg-black text-blue-900 flex justify-evenly py-10'>
        <div>
          <h1 className='font-bold text-3xl'>Contato</h1>
          <ol className=' text-left'>
            <li>4002-8922</li>
            <li>4002-8922</li>
            <li>4002-8922</li>
          </ol>
        </div>
        <div>
          <h1 className='font-bold text-3xl'>E-mail</h1>
          <ol className=' text-left'>
            <li>exemplo@gmail.com</li>
            <li>exemplo@gmail.com</li>
            <li>exemplo@gmail.com</li>
          </ol>
        </div>
        <div>
          <h1 className='font-bold text-3xl'>More info</h1>
          <ol className=' text-left'>
            <li>E o PIX</li>
            <li>E o PIX</li>
            <li>E o PIX</li>
          </ol>
        </div>
      </footer>
      </>
    
  )
}