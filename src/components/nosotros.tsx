import imagen from '../assets/comida-mexicana-about.jpg'
import mapa from '../assets/Mapa.png'

function About() {
  return (
    <div
  className="min-h-screen bg-background bg-cover bg-fixed flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${imagen})`  }}
    >


        <div className='bg-center flex flex-col items-center justify-center bg-black/70'>
<header className='grid grid-cols-[4fr_1fr_1fr_1fr] h-12 w-full 
bg-gradient-to-b from-black to-transparent'>
<a href='#'className='text-primary flex items-center  pl-10'>Restaurante El sabroso</a>
<a href='#' className='text-primary flex items-center justify-center hover:text-yellow-700'>Principal
    </a>
<a href='#'className='text-primary flex items-center justify-center hover:text-yellow-700'>Contacto</a>
<a href='#'className='text-primary flex items-center justify-center hover:text-yellow-700'>Menú</a>
</header>

      <h1 className="text-primary text-6xl font-serif pt-5">
        Sobre nosotros 
      </h1>
    <p className='text-primary text-lg pt-3'>
        Restaurante Mexicano
    </p>

<div className='mt-20 grid grid-cols-2 gap-8 p-8 px-10 mx-16 bg-gradient-to-bl from-yellow-900 to-yellow-600 rounded-3xl'>
    <div>
        <h1 className='text-primary text-8xl font-serif'> Vision</h1>

        <p className='text-primary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam voluptas rem illo architecto? Veritatis atque a vero reprehenderit cum aspernatur ad sint quidem aliquam ratione repudiandae unde eum, sed tempora repellendus ex. Laborum obcaecati porro iste necessitatibus. Optio dignissimos beatae non quas pariatur sapiente, sed, impedit iure laborum consequatur perspiciatis consectetur dicta perferendis eius et magni, quisquam vel expedita eveniet minima quis officiis dolor vero? Molestiae magni sunt consectetur cumque doloremque, repellat temporibus iusto, eveniet, obcaecati hic asperiores dolores quia odit quibusdam amet! Iusto quia eos optio. Cupiditate doloremque laboriosam, officia quo delectus corrupti dolorem neque natus perspiciatis doloribus quidem nam eligendi, inventore quasi sint accusantium suscipit ratione voluptates vitae sapiente, ea dolore molestiae. Possimus quibusdam accusamus eius optio ipsum modi ex inventore, blanditiis ducimus illo ipsam?
        </p>
    </div>
    <div className='flex flex-col justify-center items-center bg-gradient-to-br from-target to-black rounded-3xl m- p-11'>
        <img src={imagen} alt="cocina" className='w-90 h-auto rounded-lg '/>
    </div>


</div>

<div className='grid grid-cols-2 gap-8 p-8 px-10 mx-10 mt-32 bg-gradient-to-br from-yellow-700 to-yellow-500 rounded-3xl'>
 
    <div >

        <h1 className='text-primary text-8xl font-serif  '> Mision</h1>
    </div>

       <div>

        <p className='text-primary mt-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam voluptas rem illo architecto? Veritatis atque a vero reprehenderit cum aspernatur ad sint quidem aliquam ratione repudiandae unde eum, sed tempora repellendus ex. Laborum obcaecati porro iste necessitatibus. Optio dignissimos beatae non quas pariatur sapiente, sed, impedit iure laborum consequatur perspiciatis consectetur dicta perferendis eius et magni, quisquam vel expedita eveniet minima quis officiis dolor vero? Molestiae magni sunt consectetur cumque doloremque, repellat temporibus iusto, eveniet, obcaecati hic asperiores dolores quia odit quibusdam amet! Iusto quia eos optio. Cupiditate doloremque laboriosam, officia quo delectus corrupti dolorem neque natus perspiciatis doloribus quidem nam eligendi, inventore quasi sint accusantium suscipit ratione voluptates vitae sapiente, ea dolore molestiae. Possimus quibusdam accusamus eius optio ipsum modi ex inventore, blanditiis ducimus illo ipsam? 
        </p>
    </div>

</div>



<footer className='flex flex-col items-center mt-32 bg-gradient-to-b from-black to-slate-800  h-auto w-full shadow-[0-30px_60px_-15px_rgba(0,0,0,1)]  ' >
  
    <p className='mt-12 text-primary text-5xl'>Ubicanos en</p>

<div className='flex m-10 items-stretch'>

    <p className='text-white text-2xl m-16'>Calle Hombres ilustres #123   </p>

<img src={mapa} alt="mapa" className='w-96 h-auto  rounded-3xl'/>
</div>

<div className='grid grid-cols-4 gap-8 m-10'>

    <p className='text-primary'>Empresa: Xochimehuacan s.a de c.v</p>
   

    <a className='text-primary' href=''>Copyright 2026</a>
       <div></div>
       <p className='text-primary'>Todos los derechos reservados</p>

     </div>
</footer>

        </div>


    </div>
  );
}

export default About;
