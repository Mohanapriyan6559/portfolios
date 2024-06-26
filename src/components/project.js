
import img1 from '../img/ecommerce-websites.jpg'
import img2 from '../img/food.jpg'
import img3 from '../img/Electronics-Mart-eCommerce-website-template-1-scaled.jpg'
import img4 from '../img/car.jpg'

export default function project(){
    return <section className='flex py-20 px-20 flex-col bg-sec' id='Project'>
     <div className="w-full">
        <div className="flex justify-center flex-col py-10 px-15">
            <h1 className="text-3xl  border-b-4 border-[#ffd700]  mb-10 w-[150px] font-bold font-hero-font px-5">PROJECT</h1>
            <p className='font-hero-font'>These are Some my best projects bulit them with React and Tailwind CSS</p>
        </div>
        </div> 
      <div className='w-full'>
        <div className=' flex  flex-col md:flex-row   px-10 gap-6'>
            <div className='relative'>
                <img  className='h-[200px] w-[300px]' src={img1}></img>
                 <div className='project-des' >
                 <a href='#' className='flex justify-center border-2 bg-primary'>view project</a>
                    <p className=' text-center py-20 px-5'>Ecommerce website cretate</p>
                   
                 </div>
            </div>
            <div className='relative'>
               <img className='h-[200px] w-[300px]' src={img2}></img>
               <div className='project-des '>
                <a href='#' className='flex justify-center border-2 bg-primary'>view project</a>
                    
                    <p className='text-center py-20 px-5 font-bold'>Creating Beautiful food order website</p>
                 </div>
            </div>
            <div className='relative'>
                   <img  className='h-[200px] w-[300px] '  src={img3}></img>
                  <div className='project-des'>
                  <a href='#' className='flex justify-center border-2 bg-primary'>view project</a>
                    <p className='text-center py-20 px-7'>creating clone Amzon website</p>
                    
                 </div>
            </div>

        </div>
        </div>
     

    </section>
}