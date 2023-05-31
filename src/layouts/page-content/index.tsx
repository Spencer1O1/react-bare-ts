import './index.css';

export const PageContent = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <div className='page-content'>{children}</div>;
};
