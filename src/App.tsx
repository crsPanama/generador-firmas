import { useState } from 'react';
import { Firma } from './components/Firma';

enum Signatures {
  CRS = 'CRS',
  HERTZ = 'HERTZ',
}

export const App = () => {
  const [selectedSignature, setSelectedSiganture] = useState<
    Signatures.HERTZ | Signatures.CRS
  >(Signatures.CRS);

  return (
    <main className='bg-slate-600 w-full h-screen flex flex-col justify-center items-center'>
      <div className='py-5'>
        <h1 className='text-white'>Generador de firmas</h1>
        <p className='text-white py-5 text-center'>Seleccionar firma</p>
        <div className='flex gap-x-2'>
          <button
            className='bg-white w-full rounded-md p-4'
            onClick={() => setSelectedSiganture(Signatures.HERTZ)}
          >
            Hertz
          </button>
          <button
            className='bg-white w-full rounded-md p-4'
            onClick={() => setSelectedSiganture(Signatures.CRS)}
          >
            Crs
          </button>
        </div>
      </div>
      <div className=''>
        <Firma signature={selectedSignature} />
      </div>
    </main>
  );
};
