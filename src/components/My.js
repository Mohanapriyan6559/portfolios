///npm i react-icons

import { LinkIcon } from '@heroicons/react/24/solid';
import MYimgage from '../img/im1.png';
import { FaFacebook,FaGithub,FaLinkedinIn,FaMailBulk} from "react-icons/fa";
export default function My(){
    const config={
        sub:'Front-end developer',
        social:{ 
            Linkedin:'https://www.linkedin.com/in/mohana-priyan-k-42b579252/',
            facebook:"https://www.facebook.com/profile.php?id=100008637933343"
    }       
    } 

   
    
    return<section className='flex md:flex-row flex-col px-5 py-10 bg-sec justify-center'>
        <div className='w-1/2'><h1 className='text-4xl font-hero-font'>Hi,<br/> IM <span className='font-bold font-hero-font'>MOHANA PRIYAN</span><p className='text-2xl'>
{config.sub}</p></h1>
        <div className='flex py-10 text '>
            <a href={config.social.facebook} target='blank' className='pr-8 hover:text-yellow-400' ><FaFacebook size={40}/></a>
            <a href={config.social.Linkedin} target='blank' className='pr-8 hover:text-yellow-400'><FaLinkedinIn size={40}/></a>
            <a href='mailto:mohanapriyan1386@gmail.com' className='pr-8 hover:text-yellow-400'><FaMailBulk size={40}/></a>
            <a href='#' className='pr-8 hover:text-yellow-400'><FaGithub size={40}/></a>

            
        </div>
        </div> 
        
        <img src={MYimgage }  className='w-[150px]    md:w-150'></img>
    </section>
}  