import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Team.module.css';
import ImageInput from '../inputimagem/ImageInput';

const Team: FC = () => {
  const [titleNews, setTitleNews] = useState<string>('');
  const [abstractNews, setAbstractNews] = useState<string>('');
  const [linkNews, setLinkNews] = useState<string>('');
  const [autorNews, setAutorNews] = useState<string>('');
  const [stateNews, setStateNews] = useState<string>('');
  const [dateNews, setDateNews] = useState<string>('');
  const [textNews, setTextNews] = useState<string>('');
  const [imageBlob, setImageBlob] = useState<Blob | undefined>();
  const [noticias, setNoticias] = useState([]);
  const [selectedNews, setSelectedNews] = useState<any>(null);

  useEffect(() => {
    getNoticias();
  }, []);

  const getNoticias = async () => {
    try {
      const response = await axios.get('/api/news/get-news');
      const noticiasDecodificadas = response.data.map(noticia => ({
        ...noticia,
        image: `${atob(noticia.image)}`
      }));
      setNoticias(noticiasDecodificadas);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewsClick = (selectedId: string): void => {
    if (selectedId) {
      const idSelecionado = Number(selectedId);

      const news = noticias.find(noticia => noticia.id === idSelecionado);

      if (news) {
        setTitleNews(news.title);
        setAbstractNews(news.abstract);
        setAutorNews(news.autor);
        setStateNews(news.state);
        setDateNews(news.date);
        setTextNews(news.text);
        setLinkNews(news.link);
        setSelectedNews(news);

        console.log(selectedId);
        console.log(news);
      } else {
        console.log('Nenhuma notícia encontrada com o ID', idSelecionado);
      }
    } else {
      setSelectedNews(null);
    }
  };

  const handleEditNews = async (): Promise<void> => {
    const imageBase64 = imageBlob
      ? await convertBlobToBase64(imageBlob)
      : selectedNews.image;

    const body = {
      id: selectedNews.id,
      title: titleNews,
      abstract: abstractNews,
      link: linkNews,
      autor: autorNews,
      state: stateNews,
      date: dateNews,
      text: textNews,
      image: imageBase64
    };

    try {
      const response = await axios.post('/api/news/update-news', body);
      console.log(response);
      getNoticias();
      cleanNews();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!imageBlob) {
      console.error('Selecione uma imagem antes de enviar.');
      return;
    }

    const imageBase64 = await convertBlobToBase64(imageBlob);

    const body = {
      title: titleNews,
      abstract: abstractNews,
      link: linkNews,
      autor: autorNews,
      state: stateNews,
      date: dateNews,
      text: textNews,
      image: imageBase64
    };

    try {
      const response = await axios.post('/api/news/post-news', body);
      console.log(response);
      cleanNews();
      getNoticias();
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
      id: selectedNews.id
    };

    try {
      const response = await axios.post('/api/news/delete-news', body);
      console.log(response);
      cleanNews();
      getNoticias();
    } catch (error) {
      console.error(error);
    }
  };

  const cleanNews = (): void => {
    setSelectedNews(null);
    setTitleNews('');
    setAbstractNews('');
    setAutorNews('');
    setStateNews('');
    setDateNews('');
    setTextNews('');
    setLinkNews('');
    setImageBlob(undefined);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.selectNews}>
          <select onChange={event => handleNewsClick(event.target.value)}>
            <option value="">Selecione uma notícia</option>
            {noticias.map((noticia, index) => (
              <option key={index} value={noticia.id}>
                {noticia.title}
              </option>
            ))}
          </select>
        </div>
        {selectedNews ? (
          <div>
            <div className={styles.form}>
              <div className={styles.formLeft}>
                <label htmlFor="TitleNews">
                  <p className={styles.formTitle}>Título da Notícia</p>
                  <input
                    type="text"
                    id="TitleNews"
                    className={styles.formInput}
                    value={titleNews}
                    onChange={e => setTitleNews(e.target.value)}
                  />
                </label>
                <label htmlFor="AbstractNews">
                  <p className={styles.formTitle}>Subtítulo da Notícia</p>
                  <input
                    type="text"
                    id="AbstractNews"
                    className={styles.formInput}
                    value={abstractNews}
                    onChange={e => setAbstractNews(e.target.value)}
                  />
                </label>
                <label htmlFor="AutorNews">
                  <p className={styles.formTitle}>Autor da Notícia</p>
                  <input
                    type="text"
                    id="AutorNews"
                    className={styles.formInput}
                    value={autorNews}
                    onChange={e => setAutorNews(e.target.value)}
                  />
                </label>
                <label htmlFor="StateNews">
                  <p className={styles.formTitle}>Veículo de Mídia</p>
                  <input
                    type="text"
                    id="StateNews"
                    className={styles.formInput}
                    value={stateNews}
                    onChange={e => setStateNews(e.target.value)}
                  />
                </label>
                <label htmlFor="DateNews">
                  <p className={styles.formTitle}>Data da Notícia</p>
                  <input
                    type="text"
                    id="DateNews"
                    className={styles.formInput}
                    value={dateNews}
                    onChange={e => setDateNews(e.target.value)}
                  />
                </label>
                <label htmlFor="TextNews">
                  <p className={styles.formTitle}>
                    Texto Complementar da Notícia
                  </p>
                  <input
                    type="text"
                    id="TextNews"
                    className={styles.formInput}
                    value={textNews}
                    onChange={e => setTextNews(e.target.value)}
                  />
                </label>
                <label htmlFor="LinkNews">
                  <p className={styles.formTitle}>Link da Notícia</p>
                  <input
                    type="text"
                    id="LinkNews"
                    className={styles.formInput}
                    value={linkNews}
                    onChange={e => setLinkNews(e.target.value)}
                  />
                </label>
              </div>
              <label htmlFor="ImageNews">
                <p className={styles.formTitle}>Imagem da Notícia</p>
                <ImageInput
                  onImageSelected={handleImageSelected}
                  image={selectedNews?.image ? selectedNews.image : ''}
                />
              </label>
            </div>
            <div className={styles.buttons}>
              <button className={styles.buttonDel} onClick={handleDeleteNews}>
                EXCLUIR NOTICIA
              </button>
              <button className={styles.buttonEdit} onClick={handleEditNews}>
                ALTERAR NOTICIA
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePost}>
            <div className={styles.form}>
              <div className={styles.formLeft}>
                <label htmlFor="TitleNews">
                  <p className={styles.formTitle}>Título da Notícia</p>
                  <input
                    type="text"
                    id="TitleNews"
                    className={styles.formInput}
                    onChange={e => setTitleNews(e.target.value)}
                  />
                </label>
                <label htmlFor="AbstractNews">
                  <p className={styles.formTitle}>Subtítulo da Notícia</p>
                  <input
                    type="text"
                    id="AbstractNews"
                    className={styles.formInput}
                    onChange={e => setAbstractNews(e.target.value)}
                  />
                </label>
                <label htmlFor="LinkNews">
                  <p className={styles.formTitle}>Link da Notícia</p>
                  <input
                    type="text"
                    id="LinkNews"
                    className={styles.formInput}
                    onChange={e => setLinkNews(e.target.value)}
                  />
                </label>
                <label htmlFor="AutorNews">
                  <p className={styles.formTitle}>Autor da Notícia</p>
                  <input
                    type="text"
                    id="AutorNews"
                    className={styles.formInput}
                    onChange={e => setAutorNews(e.target.value)}
                  />
                </label>
                <label htmlFor="StateNews">
                  <p className={styles.formTitle}>State da Notícia</p>
                  <input
                    type="text"
                    id="StateNews"
                    className={styles.formInput}
                    onChange={e => setStateNews(e.target.value)}
                  />
                </label>
                <label htmlFor="DateNews">
                  <p className={styles.formTitle}>Date da Notícia</p>
                  <input
                    type="text"
                    id="DateNews"
                    className={styles.formInput}
                    onChange={e => setDateNews(e.target.value)}
                  />
                </label>
                <label htmlFor="TextNews">
                  <p className={styles.formTitle}>Text da Notícia</p>
                  <input
                    type="text"
                    id="TextNews"
                    className={styles.formInput}
                    onChange={e => setTextNews(e.target.value)}
                  />
                </label>
              </div>
              <label htmlFor="ImageNews">
                <p className={styles.formTitle}>Imagem da Notícia</p>
                <ImageInput onImageSelected={handleImageSelected} />
              </label>
            </div>
            <div className={styles.buttons}>
              <button type="submit" className={styles.buttonAdd}>
                ADICIONAR NOVA
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Team;
