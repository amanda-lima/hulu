import { ReactElement } from 'react';
import Icon from './Icon';

type HeaderProps = {
  icon: ReactElement;
  title: string;
}

export default function HeaderItem({ icon, title }: HeaderProps) {
    return (
      <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
        <div className='h-8 mb-1 group-hover:animate-bounce'>{icon}</div>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          {title}
        </p>
      </div>
    );
  };
