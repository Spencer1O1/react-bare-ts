import { PageContent } from '@layouts/page-content';
import './index.css';

export const ErrorPage = (): JSX.Element => {
  return (
    <PageContent>
      <div className='container'>
        <div className='error-box'>
          <h1>Oops!</h1>
          <p></p>
          <p>
            <i>Sorry, and unexpected error has occured.</i>
          </p>
        </div>
      </div>
    </PageContent>
  );
};
