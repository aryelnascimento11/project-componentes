export default function Footer(){
    let result = 2 + 9
    return(
        <>
        <footer className='bg-black text-white flex justify-evenly py-10'>
           
          
            {result}
            <nav>
              <ul className=""> 
              <h1 className="text-3xl text-rose-500 text-center">Component</h1>
                <li className="text">
                    <a href="https://nextjs.org/docs/app/api-reference/components/image">Component Image</a>
                </li>
                <h1>  </h1>
                <li>

                </li>
                <h1> </h1>
                <li>

                </li>
              </ul> 
             </nav>
        </footer>
        </>
      
    )
}