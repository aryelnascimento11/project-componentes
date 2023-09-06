export default function Header() {
    return(
        <header className='bg-black top-0 fixed w-screen flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg '>
        <h1 className='text-4xl  font-semibold text-blue-500'>My Next.js Components</h1>
        <nav className='flex'>
          <ul className='flex'>
             <li className='rounded-lg px-3 py-1 text-blue-500  hover:bg-[rgba(252,250,250,0.2)] hover:scale-110 cursor-pointer transition'>
                <a href="https://github.com/aryelnascimento11/project-componentes"> Git-Hub</a>
            </li>
              <li className=' rounded-lg px-3 py-1 text-blue-500 hover:bg-[rgba(255,252,252,0.2)] hover:scale-110 cursor-pointer transition'>
               <a href="https://vercel.com/dashboard">Projects Vercel</a>
              </li>
            <li className='rounded-lg px-3 py-1 text-blue-500 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
               <a href="https://easy-portfolio-psi.vercel.app/">Portifolio</a>
            </li>
          </ul>
          <button className='group/enter text-blue-500 flex gap-2 ml-10 rounded-2xl border border-blue-500 shadow-lg px-3 py-1 font-light'>Entrar</button>
        
        </nav>
      </header>
    )
}

