import type { ChangeEvent } from 'react';

interface Props {
  name: string;
  type: 'number' | 'text' | 'email' | 'password' | 'tel';
  placeholder: string;
  title: string;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Input({ name, type, placeholder, title, id, onChange, value }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[#6F6F6F] text-[16px]">
        {title}
      </label>
      <input
        id={id}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className="p-3 text-[#1E1E1E] text-[16px] border border-[#3F3F3F] rounded-[4px]"
        onChange={onChange}
      />
    </div>
  );
}
