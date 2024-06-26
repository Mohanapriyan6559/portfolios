import image from '../img/file.png';
export default function About(){
    const config={
        line1:'Hi,My Name is Mohana priyan.I am Full stack Web Developer.I Bulit Beautiful Websites with React.js and tailwind CSS',
        line2:' Iam proficient in Frontend skils like React,Redux,HTML,CSS',
    }
    return <section className='flex flex-col md:flex-row  bg-thr px-5' id='About'>
            <div className='md:w-1/2 px-10'>
                <img className='w-[400px] ' src={image}></img>
            </div>
            
            <div className=' md:1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>

                <h1 className='text-3xl  border-b-4 border-[#ffd700]  mb-5 w-[132px] font-bold font-hero-font'>
                    ABOUTME
                </h1>
                <p className='font-hero-font'>{config.line1}</p>
                <p className='font-hero-font py-2'>{config.line2}</p>
            </div>
            </div>
    </section>
}  