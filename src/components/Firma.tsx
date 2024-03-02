import { useRef, useState, ChangeEvent } from 'react';

import logo_crs from '../assets/logo-crs.png';
import thrifty from '../assets/thrifty.png';
import ctg from '../assets/cars-to-go-logo.jpg';
import firefly from '../assets/firefly.png';
import hertz from '../assets/hertz1.png';
import { useScreenshot } from '../hooks/useScreenshot';
// import { Form } from "./Form";
import { Info } from '../types/input';
import { Input } from './Input';

export const Firma = () => {
  const reference = useRef(null);
  const { generateImage } = useScreenshot();
  const [value, setValue] = useState<Info>({
    nombre: '',
    cargo: '',
    telefono1: '',
    telefono2: '',
  });
  const { nombre, cargo, telefono1, telefono2 } = value;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value: eventValue } = e.target;
    setValue({
      ...value,
      [name]: eventValue,
    });
  };

  const handleSubmit = () => {
    if (reference.current) {
      generateImage(reference.current, nombre);
    }
  };

  return (
    <>
      <section ref={reference}>
        <div className='bg-white w-[608.57px]  mx-auto'>
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
                  {telefono2 ? (
                    <p className='italic text-sm'>| {telefono2}</p>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='border-t px-8 border-sky-600  flex gap-x-2'>
            <figure>
              <img src={hertz} alt='' className='w-12 h-12 object-contain' />
            </figure>
            <figure>
              <img src={thrifty} alt='' className='w-12 h-12 object-contain' />
            </figure>
            <figure>
              <img src={firefly} alt='' className='w-12 h-12 object-contain' />
            </figure>
            <figure>
              <img src={ctg} alt='' className='w-12 h-12 object-contain' />
            </figure>
          </div>
        </div>
      </section>

      <section className=' w-1/2 pt-5 mx-auto my-2'>
        {/* <Form handleInputChange={handleInputChange} value={value} /> */}
        <Input
          type='text'
          value={nombre}
          name='nombre'
          onChange={handleChange}
          classes='mt-2'
          labelText='Nombre'
        />
        <Input
          type='text'
          value={cargo}
          name='cargo'
          classes='mt-2'
          labelText='Cargo'
          onChange={handleChange}
        />
        <Input
          type='text'
          value={telefono1}
          name='telefono1'
          classes='mt-2'
          labelText='Telefono'
          onChange={handleChange}
        />
        <Input
          type='text'
          value={telefono2!}
          name='telefono2'
          classes='mt-2'
          labelText='Telefono 2'
          onChange={handleChange}
        />
      </section>
      <div className='w-1/2 mx-auto text-center mt-3 bg-white rounded-md p-2'>
        <button onClick={handleSubmit}>GENERATE IMAGE</button>
      </div>
    </>
  );
};
