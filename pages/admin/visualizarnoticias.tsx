import { useEffect, useState } from 'react';
import axios from 'axios';

const VisualizarNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const response = await axios.get('/api/noticias/verblob');
      const noticiasDecodificadas = response.data.map((noticia) => ({
        ...noticia,
        image: `${atob(noticia.image)}`,
      }));
      setNoticias(noticiasDecodificadas);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Notícias</h1>
      <ul>
        {noticias.map((noticia: any) => {
          return (
            <li key={noticia.id}>
              <h2>{noticia.title}</h2>
              <p>{noticia.abstract}</p>
              <a href={noticia.link}>Link</a>
              <img src={noticia.image} alt="renderizado" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VisualizarNoticias;
