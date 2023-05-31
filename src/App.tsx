import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page } from '@layouts/page';
import { HomePage } from '@pages/home';
import { ErrorPage } from '@pages/error';
import './App.css';

function App(): JSX.Element {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />}>
            <Route index element={<HomePage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
