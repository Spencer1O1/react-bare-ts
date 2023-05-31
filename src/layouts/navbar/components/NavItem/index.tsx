import './index.css';

export const NavItem = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <div className='nav-item'>{children}</div>;
};
