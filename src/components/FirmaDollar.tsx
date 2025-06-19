import logo_crs from '../assets/logo-crs.png'

interface Props {
  nombre: string
  cargo: string
  telefono1: string
  telefono2?: string
}

export const FirmaDollar = ({ cargo, nombre, telefono1, telefono2 }: Props) => {
  return (
    <>
      <div className='flex h-[125px] gap-x-10  '>
        <div className='flex justify-between  w-1/3'>
          <figure className=' self-center  w-40 mx-auto'>
            <img
              src='https://admin.intermarketing.com.pa/assets/f9ad5496-c3c7-443e-89ee-68abe1e47d07'
              alt='hertz logo'
              className=' w-full mx-auto '
            />
          </figure>
          <div className='w-1 bg-[#ec052d] -skew-x-12 '></div>
        </div>

        <div className='pt-2 flex flex-col justify-center'>
          <div className=' '>
            <h2 className='font-medium text-2xl text-black'>{nombre}</h2>
            <p className='italic font-medium'>{cargo}</p>
            <div className='flex gap-x-1'>
              <p className='italic text-sm'>{telefono1}</p>
              {telefono2 ? <p className='italic text-sm'>| {telefono2}</p> : ''}
            </div>
          </div>
          <div className='flex items-center text-sm gap-x-1'>
            <p className='font-medium'>Una empresa del grupo</p>
            <figure>
              <img src={logo_crs} alt='' className='w-10 h-10 object-contain' />
            </figure>
          </div>
        </div>
        {/* <h2>Test</h2> */}
      </div>
    </>
  )
}
