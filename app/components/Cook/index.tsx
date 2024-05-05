"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";


const Cook = () => {

    return (
        <div className='relative' id="cook-section">
            <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">

                <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
                    <Image src={'/images/Cook/burger1.png'} alt="burger-image" width={463} height={622} />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>

                    <div className='col-span-6 flex justify-start'>
                        <Image src="/images/Cook/cook.png" alt="nothing" width={636} height={808} />
                    </div>


                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className='text-pink text-lg font-normal mb-3 ls-51 uppercase text-start'>cocinamos con vos</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                                Cocinemos juntos como los expertos.
                            </h3>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-2'>
                                Las mejores recetas con pollo
                                Convierte el pollo en un placer para los sentidos al llegar a la mesa. Descubre nuestras recetas elaboradas con esta saludable carne y sácale el máximo partido en cocina.
                                Las mejores recetas de pollo

                                La carne de pollo es uno de los alimentos más conocidos en todo el mundo y el ingrediente fundamental de miles de recetas. Es considerado un producto básico en la nutrición del ser humano, hasta el punto de que su consumo sirve como indicador y medidor económico de una sociedad. De él se aprovecha prácticamente todo, ofrece un alto aporte de proteínas y una baja cantidad de grasas que lo convierten en la carne ideal para todas las personas preocupadas por su bienestar y por mantener un estilo de vida saludable. </p>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-1'></p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6'>Ver más recetas</button>
                            </div>
                        </Fade>
                    </div>



                </div>

            </div>
        </div >
    )
}

export default Cook;
