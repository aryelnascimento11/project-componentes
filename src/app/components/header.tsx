export default function Header(){
    return(
        <header className='bg-black top-0 fixed w-screen flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg '>
            <h1 className='text-3xl font-medium text-green-500 '>Next Page</h1>
            <nav className='flex'>   
                <a className=" rounded-lg px-3 py-1 text-green-500  hover:bg-[rgba(252,250,250,0.2)] hover:scale-110 cursor-pointer transition" href="#">exemplos</a>
                <a className=" rounded-lg px-3 py-1 text-green-500  hover:bg-[rgba(252,250,250,0.2)] hover:scale-110 cursor-pointer transition" href="#">exemplos</a>
                <a className=" rounded-lg px-3 py-1 text-green-500  hover:bg-[rgba(252,250,250,0.2)] hover:scale-110 cursor-pointer transition" href="#">exemplos</a>
                <button className='group/enter text-green-500 flex gap-2 ml-10 rounded-2xl border border-green-500 shadow-lg px-3 py-1 font-light'>Entrar</button>
            </nav>
  </header>
    )
}

