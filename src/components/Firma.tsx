import { useRef, useState, ChangeEvent } from 'react'
import { useScreenshot } from '../hooks/useScreenshot'
// import { Form } from "./Form";
import { Info } from '../types/input'
import { Input } from './Input'
import { FirmaContainer } from './FirmaContainer'
import { FirmaCrs } from './FirmaCrs'
import { FirmaHertz } from './FirmaHertz'
import { FirmaThrifty } from './FirmaThrifty'
import { FirmaDollar } from './FirmaDollar'

export const Firma = ({
  signature,
}: {
  signature: 'CRS' | 'HERTZ' | 'THRIFTY' | 'DOLLAR'
}) => {
  const reference = useRef(null)
  const { generateImage } = useScreenshot()
  const [value, setValue] = useState<Info>({
    nombre: '',
    cargo: '',
    telefono1: '',
    telefono2: '',
  })

  // const { nombre, cargo, telefono1, telefono2 } = value

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value: eventValue } = e.target
    setValue({
      ...value,
      [name]: eventValue,
    })
  }

  const handleSubmit = () => {
    if (reference.current) {
      generateImage(reference.current, value.nombre)
    }
  }

  return (
    <>
      <FirmaContainer reference={reference}>
        {signature === 'CRS' && (
          <FirmaCrs
            hideLogos={{
              digital: false,
              carsToGo: false,
              firefly: false,
              hertz: false,
              thrifty: false,
            }}
            // cargo={cargo}
            // nombre={nombre}
            // telefono1={telefono1}
            // telefono2={telefono2}
            {...value}
          />
        )}
        {signature === 'HERTZ' && (
          <FirmaHertz
            // cargo={cargo}
            // nombre={nombre}
            // telefono1={telefono1}
            // telefono2={telefono2}
            {...value}
          />
        )}
        {signature === 'THRIFTY' && <FirmaThrifty {...value} />}
        {signature === 'DOLLAR' && <FirmaDollar {...value} />}
      </FirmaContainer>

      <section className=' w-1/2 pt-5  mx-auto   my-2'>
        <Input
          type='text'
          value={value.nombre}
          name='nombre'
          onChange={handleChange}
          classes='mt-2'
          labelText='Nombre'
        />
        <Input
          type='text'
          value={value.cargo}
          name='cargo'
          classes='mt-2'
          labelText='Cargo'
          onChange={handleChange}
        />
        <Input
          type='text'
          value={value.telefono1}
          name='telefono1'
          classes='mt-2'
          labelText='Telefono'
          onChange={handleChange}
        />
        <Input
          type='text'
          value={value.telefono2!}
          name='telefono2'
          classes='mt-2'
          labelText='Telefono 2'
          onChange={handleChange}
        />
        <div className='w-1/2 mx-auto text-center mt-3 bg-white rounded-md p-2'>
          <button onClick={handleSubmit}>GENERATE IMAGE</button>
        </div>
      </section>
    </>
  )
}
