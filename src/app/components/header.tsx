export default function Header() {
  return (
    <header className='bg-purple-500 top-0 fixed w-screen flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg '>
      <h1 className='text-4xl  font-semibold text-black'>My Next.js Components</h1>
      <nav className='flex'>
        <ul className='flex'>
          <li className='rounded-lg px-3 py-1 text-black  hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
            <a href="https://github.com/aryelnascimento11/project-componentes"> Git-Hub</a>
          </li>
          <li className=' rounded-lg px-3 py-1 text-black  hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
            <a href="https://vercel.com/dashboard">Projects Vercel</a>
          </li>
          <li className='rounded-lg px-3 py-1 text-black  hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
            <a href="https://easy-portfolio-psi.vercel.app/">Portifolio</a>
          </li>
          <li className='rounded-lg px-3 py-1 text-black  hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
            <a href="https://nextjs.org/docs/app/api-reference/components">Next-Components</a>
          </li>
        </ul>
        <button className='group/enter flex gap-2 ml-10 rounded-2xl border border-black shadow-lg px-3 py-1 font-light'>Entrar
          <path id="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-2xl group-hover/enter:text-pink-400 group-hover/enter:bg-black rounded-full transition" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path></svg>
        </button>
      </nav>
    </header>
  )
}

