import { NavItem } from '../NavItem';
import './index.css';

export const LogoBrand = ({
  children
}: {
  children: string | JSX.Element;
}): JSX.Element => {
  return (
    <NavItem>
      {typeof children === 'string' ? (
        <span className='logo-brand'>{children}</span>
      ) : (
        <div className='logo-brand'>{children}</div>
      )}
    </NavItem>
  );
};
