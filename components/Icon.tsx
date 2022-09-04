import { ReactElement, ReactNode } from 'react';
import classnames from 'classnames';


type IconProps = {
  children: ReactNode | string | ReactElement;
  className?: string;
};

export default function Icon({
  children,
  className
}: IconProps) {

  return (
    <div className={`${classnames('flex p-0 m-0', { [className]: className })}`}
    >
      {children}
    </div>
  );
}

