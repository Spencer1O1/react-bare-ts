import { LogoBrand } from './components/LogoBrand';
import './index.css';

export const Navbar = (): JSX.Element => {
  return (
    <div className='navbar'>
      <LogoBrand>
        react-bare-ts
        {/* <img src={logo} /> */}
      </LogoBrand>
    </div>
  );
};
