import { PageContent } from '@layouts/page-content';
import './index.css';

export const HomePage = (): JSX.Element => {
  return (
    <PageContent>
      <div className='text-box'>
        <span>This is a bare react project with </span>
        <span className='primary-color'>typescript, </span>
        <span className='primary-accent-color'>prettier, </span>
        <span className='secondary-color'>eslint, </span>
        <span>and </span>
        <span className='secondary-accent-color'>path aliases.</span>
      </div>
    </PageContent>
  );
};
