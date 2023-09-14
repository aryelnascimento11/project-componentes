import { GrInstagram } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs'

export default function Footer() {
    return (
        <>
            <footer className='bg-black text-white flex justify-evenly py-10'>
                <div>
                    <h1 className='text-5xl text-fuchsia-500 font-bold'>Contact:</h1>
                    <ol className=' flex p-4 text-left gap-5'>
                        <a className='text-4xl text-pink-500' href="https://www.instagram.com/escolaeliti/"><GrInstagram /></a>
                        <a className='text-4xl text-green-500' href="https://web.whatsapp.com/"><BsWhatsapp /></a>
                        <a className='text-4xl text-blue-500' href="https://web.whatsapp.com/"><BsFacebook /></a>
                    </ol>
                </div>
                <div>
                    <h1 className='text-5xl text-fuchsia-500 font-bold'>What is it?</h1>
                    <ol className='p-4 text-3xl text-left text-gray-300 font-bold'>
                        <li>This is Paulo!</li>
                    </ol>
                </div>
                <div>
                    <h1 className='text-5xl text-fuchsia-500 font-bold'>Credits:</h1>
                    <ol className=' p-4 text-3xl text-left text-gray-300 font-bold'>
                        <li>Aryel</li>
                    </ol>
                </div>
            </footer>
        </>


    )
}