
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Head(){
 const[Toggle,UseToggle]=useState(false)
return <header className=" flex justify-between bg-primary px-5 py-2">
    <a href="#" className=" flex justify-end bg-h1 font-bold">MOHANA PRIYAN</a>
    <nav className="hidden md:block">
    <ul className=" flex justify-end text-white font-bold">
        <li><a href="/" className='hover:text-yellow-400'>HOME</a></li>
        <li><a href="#About" className='hover:text-yellow-400'>ABOUT</a></li>
        <li><a href="#contact" className='hover:text-yellow-400'>CONTACT</a></li>
        <li><a href="#Resume" className='hover:text-yellow-400'>RESUME</a></li>
        <li><a href="#Project" className='hover:text-yellow-400'>PROJECT</a></li>

    </ul>
    </nav>

    {Toggle && <nav className="block md:hidden mob-nav">
    <ul onClick={()=>UseToggle(!Toggle)} className="flex text-white flex-col mob-nav">
        <li><a href="#">HOME</a></li>
        <li><a href="#About">ABOUT</a></li>
        <li><a href="#Resume">RESUME</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#Project">PROJECT</a></li>

    </ul>
    </nav>}

    <button onClick={()=>UseToggle(!Toggle)}><Bars3Icon className='text-white h-5 block md:hidden'/></button>
</header>    
}