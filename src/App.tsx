import './App.css';

function App(): JSX.Element {
  return (
    <div className='app neutral-lightest-background'>
      <div className='container'>
        <div className='text-box neutral-background'>
          <span>This is a bare react project with </span>
          <span className='primary-color'>typescript, </span>
          <span className='primary-accent-color'>prettier, </span>
          <span className='secondary-color'>eslint, </span>
          <span>and </span>
          <span className='secondary-accent-color'>path aliases.</span>
        </div>
      </div>
    </div>
  );
}

export { App };
