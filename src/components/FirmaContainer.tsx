import { LegacyRef, ReactNode } from 'react';

interface Props {
  reference: LegacyRef<HTMLDivElement> | undefined;
  children: ReactNode;
}

export const FirmaContainer = ({ children, reference }: Props) => {
  return (
    <section className='w-[680px] mx-auto bg-transparent'>
      <div className='bg-white w-full ml-auto ' ref={reference}>
        {children}
      </div>
    </section>
  );
};
