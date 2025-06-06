import logo_crs from '../assets/logo-crs.png'
import thrifty from '../assets/thrifty.png'
import ctg from '../assets/cars-to-go-logo.jpg'
import firefly from '../assets/firefly.png'
import hertz from '../assets/hertz1.jpg'
import digital from '../assets/digital.png'

interface Props {
  nombre: string
  cargo: string
  telefono1: string
  telefono2?: string
  hideLogos: {
    thrifty: boolean
    hertz: boolean
    firefly: boolean
    carsToGo: boolean
    digital: boolean
  }
}

export const FirmaCrs = ({
  cargo,
  telefono1,
  telefono2,
  nombre,
  hideLogos,
}: Props) => {
  return (
    <>
      <div className='flex items'>
        <figure className='bg-white-200 w-1/3  '>
          <img src={logo_crs} alt='' className='w-40 h-full ml-5' />
        </figure>
        <div className='w-[.5px] bg-sky-600  my-3 '></div>
        <div className='h-full ml-5 pt-2'>
          <div className=' pt-4'>
            <h2 className='font-medium text-xl text-sky-600'>{nombre}</h2>
            <p className='italic font-medium'>{cargo}</p>
            <div className='flex gap-x-1'>
              <p className='italic text-sm'>{telefono1}</p>
              {telefono2 ? <p className='italic text-sm'>| {telefono2}</p> : ''}
            </div>
          </div>
        </div>
      </div>
      <div className='border-t px-8 border-sky-600  flex gap-x-2 items-center'>
        <figure>
          <img src={hertz} alt='' className='w-16 h-16 object-contain' />
        </figure>
        <figure>
          <img
            src='https://admin.intermarketing.com.pa/assets/ca7da9ba-dcfe-4631-9173-525dc8d42dce'
            alt=''
            className='w-16 h-16 object-contain'
          />
        </figure>
        <figure>
          <img src={thrifty} alt='' className='w-16 h-16 object-contain' />
        </figure>
        <figure>
          <img src={firefly} alt='' className='w-14 h-14 object-contain' />
        </figure>
        <figure>
          <img src={ctg} alt='' className='w-16 h-16 object-contain' />
        </figure>

        <figure>
          {hideLogos.digital && (
            <img src={digital} alt='' className='w-8 h-8 object-contain' />
          )}
        </figure>
      </div>
    </>
  )
}
