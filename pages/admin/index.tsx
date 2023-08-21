import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import ImageInput from '../../src/components/admin/inputimagem/ImageInput';

const Admin: FC = () => {
  const [titleNews, setTitleNews] = useState<string>('');
  const [abstractNews, setAbstractNews] = useState<string>('');
  const [linkNews, setLinkNews] = useState<string>('');
  const [imageBlob, setImageBlob] = useState<Blob | undefined>();
  const [noticias, setNoticias] = useState([]);
  const [selectedNews, setSelectedNews] = useState<any>(null);

  useEffect(() => {
    getNoticias();
  }, []);

  const getNoticias = async () => {
    try {
      const response = await axios.get('/api/noticias/get-news');
      const noticiasDecodificadas = response.data.map(noticia => ({
        ...noticia,
        image: `${atob(noticia.image)}`
      }));
      setNoticias(noticiasDecodificadas);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewsClick = (news: any) => {
    setSelectedNews(news);
  };

  const handleEditNews = async (): Promise<void> => {
    if (!selectedNews) {
      console.error('Nenhuma notícia selecionada para edição.');
      return;
    }

    if (!imageBlob) {
      console.error('Selecione uma imagem antes de enviar.');
      return;
    }

    const imageBase64 = await convertBlobToBase64(imageBlob);

    const body = {
      id: selectedNews.id, // Você precisa enviar o ID da notícia para atualização
      title: titleNews,
      abstract: abstractNews,
      link: linkNews,
      imageBase64: imageBase64
    };

    try {
      const response = await axios.post('/api/noticias/update-news', body);
      console.log(response);
      // Limpar os campos de edição após a atualização bem-sucedida
      setSelectedNews(null);
      setTitleNews('');
      setAbstractNews('');
      setLinkNews('');
      setImageBlob(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

    if (!imageBlob) {
      console.error('Selecione uma imagem antes de enviar.');
      return;
    }

    const imageBase64 = await convertBlobToBase64(imageBlob);

    const body = {
      title: titleNews,
      abstract: abstractNews,
      link: linkNews,
      imageBase64: imageBase64
    };

    try {
      const response = await axios.post('/api/noticias/create-news', body);
      console.log(response);
      // Limpar os campos após o envio bem-sucedido
      setTitleNews('');
      setAbstractNews('');
      setLinkNews('');
      setImageBlob(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageSelected = (imageBlob: Blob) => {
    setImageBlob(imageBlob);
  };

  const convertBlobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = error => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  };


  const handleDeleteNews = async (): Promise<void> => {
    if (!selectedNews) {
      console.error('Nenhuma notícia selecionada para exclusão.');
      return;
    }
  
    const body = {
      id: selectedNews.titulo, // Você precisa enviar o ID da notícia para exclusão
    };
  
    try {
      const response = await axios.post('/api/noticias/delete-news', body);
      console.log(response);
      // Limpar os campos após a exclusão bem-sucedida
      setSelectedNews(null);
      setTitleNews('');
      setAbstractNews('');
      setLinkNews('');
      setImageBlob(undefined);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h1>Admin</h1>
      <div>TITLE</div>
      <ul>
        {noticias.map((noticia, index) => (
          <li key={index} onClick={() => handleNewsClick(noticia)}>
            {noticia.title}
          </li>
        ))}
      </ul>
      {selectedNews && (
        <div>
          <h2>Notícia Selecionada</h2>
          <p>Título: {selectedNews.title}</p>
          <p>Subtítulo: {selectedNews.abstract}</p>
          <p>Link: {selectedNews.link}</p>
          <img src={selectedNews.image} alt={selectedNews.title} />
          <button onClick={handleEditNews}>Editar Notícia</button>
        </div>
      )}

      <p>ADICIONAR NOVA</p>
      <form onSubmit={handlePost}>
        <div>
          <label htmlFor="TitleNews">
            <p>Título da Notícia</p>
            <input
              type="text"
              id="TitleNews"
              value={titleNews}
              onChange={e => setTitleNews(e.target.value)}
            />
          </label>
          <label htmlFor="AbstractNews">
            <p>Subtítulo da Notícia</p>
            <input
              type="text"
              id="AbstractNews"
              value={abstractNews}
              onChange={e => setAbstractNews(e.target.value)}
            />
          </label>
          <label htmlFor="LinkNews">
            <p>Link da Notícia</p>
            <input
              type="text"
              id="LinkNews"
              value={linkNews}
              onChange={e => setLinkNews(e.target.value)}
            />
          </label>
          <label htmlFor="ImageNews">
            <p>Imagem da Notícia</p>
            <ImageInput onImageSelected={handleImageSelected} />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>

      <button onClick={handleDeleteNews}>EXCLUIR NOTICIA</button>
    </div>
  );
};

export default Admin;
