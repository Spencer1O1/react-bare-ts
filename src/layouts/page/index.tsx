import { Navbar } from '@layouts/navbar';
import { Footer } from '@layouts/footer';
import { Outlet } from 'react-router-dom';
import './index.css';

export const Page = (): JSX.Element => {
  return (
    <div className='page'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
