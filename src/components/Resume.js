import Resumes from '../img/resume.png';
export default function Resume(){
    const config={
        link:'https://drive.google.com/file/d/19LBi1CYgQtHz74ZcivhYULlLcW2ICrg0/view?usp=drive_link'
    }
    return <section className='flex flex-col md:flex-row  bg-thr px-5' id="Resume">
            <div className='md:w-1/2 flex justify-center'>
                <img className='w-[300px]' src={Resumes}></img>
            </div>
            
            <div className=' md:1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>

                  <h1 className='text-3xl  border-b-4 border-[#ffd700]  mb-5 w-[120px] font-bold font-hero-font'>
                    RESUME
                </h1>
                <p className='font-hero-font '>You can view MY website  <a href={config.link} target='blank' className='btn '> Dowload</a></p>
                 
            </div>
            </div>
    </section>
}  