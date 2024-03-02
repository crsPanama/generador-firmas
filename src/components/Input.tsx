import { ChangeEvent } from 'react';

interface Props {
  type: string;
  value: string | number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  labelText?: string;
}
export const Input = ({
  type,
  value,
  onChange,
  name,
  classes,
  labelText,
}: Props) => {
  return (
    <>
      {labelText && <label className='text-white'>{labelText}</label>}
      <input
        type={type || 'text'}
        value={value}
        onChange={onChange}
        name={name}
        className={`${classes} w-full p-2`}
      />
    </>
  );
};
