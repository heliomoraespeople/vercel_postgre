import { FC } from 'react';
import News from '../../src/components/admin/news/News';

const Admin: FC = () => {
 
  return (
    <div className='flex flex-col items-center'>
      <h1>Admin</h1>
      <h2><b>•Noticias•</b> | Projetos | Equipe</h2>
      <News/>
    </div>
  );
};

export default Admin;
