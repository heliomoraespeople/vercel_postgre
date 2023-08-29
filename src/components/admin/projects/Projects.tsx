import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Projects.module.css';
import ImageInput from '../inputimagem/ImageInput';

const Projects: FC = () => {
  const [projectName, setProjectName] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('');
  const [projectInvestment, setProjectInvestment] = useState<string>('');
  const [projectStatus, setProjectStatus] = useState<string>('');
  const [projectArea, setProjectArea] = useState<string>('');
  const [projectOwner, setProjectOwner] = useState<string>('');
  const [approvalYear, setApprovalYear] = useState<string>('');
  const [implementationYear, setImplementationYear] = useState<string>('');
  const [projectCompany, setProjectCompany] = useState<string>('');
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [projectResults, setProjectResults] = useState<string>('');
  const [imageBlob, setImageBlob] = useState<Blob | undefined>();
  const [noticias, setNoticias] = useState([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    getNoticias();
  }, []);

  console.log(implementationYear, projectCompany, projectDescription, projectResults)

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
        setProjectName(news.title);
        setProjectType(news.abstract);
        setProjectStatus(news.autor);
        setProjectArea(news.state);
        setProjectOwner(news.date);
        setApprovalYear(news.text);
        setImplementationYear(news.implementationYear);
        setProjectCompany(news.projectCompany);
        setProjectDescription(news.projectDescription);
        setProjectResults(news.projectResults);
        setProjectInvestment(news.link);
        setSelectedProject(news);

        console.log(selectedId);
        console.log(news);
      } else {
        console.log('Nenhuma notícia encontrada com o ID', idSelecionado);
      }
    } else {
      setSelectedProject(null);
    }
  };

  const handleEditNews = async (): Promise<void> => {
    const imageBase64 = imageBlob
      ? await convertBlobToBase64(imageBlob)
      : selectedProject.image;

    const body = {
      id: selectedProject.id,
      title: projectName,
      abstract: projectType,
      link: projectInvestment,
      autor: projectStatus,
      state: projectArea,
      date: projectOwner,
      text: approvalYear,
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
      title: projectName,
      abstract: projectType,
      link: projectInvestment,
      autor: projectStatus,
      state: projectArea,
      date: projectOwner,
      text: approvalYear,
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
    if (!selectedProject) {
      console.error('Nenhuma notícia selecionada para exclusão.');
      return;
    }

    const body = {
      id: selectedProject.id
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
    setSelectedProject(null);
    setProjectName('');
    setProjectType('');
    setProjectStatus('');
    setProjectArea('');
    setProjectOwner('');
    setApprovalYear('');
    setProjectInvestment('');
    setImageBlob(undefined);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.selectNews}>
          <select onChange={event => handleNewsClick(event.target.value)}>
            <option value="">Selecione um projeto</option>
            {noticias.map((noticia, index) => (
              <option key={index} value={noticia.id}>
                {noticia.title}
              </option>
            ))}
          </select>
        </div>
        {selectedProject ? (
          <div>
            <div className={styles.form}>
              <div className={styles.formLeft}>
                <label htmlFor="projectName">
                  <p className={styles.formTitle}>Título da Notícia</p>
                  <input
                    type="text"
                    id="projectName"
                    className={styles.formInput}
                    value={projectName}
                    onChange={e => setProjectName(e.target.value)}
                  />
                </label>
                <label htmlFor="projectType">
                  <p className={styles.formTitle}>Subtítulo da Notícia</p>
                  <input
                    type="text"
                    id="projectType"
                    className={styles.formInput}
                    value={projectType}
                    onChange={e => setProjectType(e.target.value)}
                  />
                </label>
                <label htmlFor="projectStatus">
                  <p className={styles.formTitle}>Autor da Notícia</p>
                  <input
                    type="text"
                    id="projectStatus"
                    className={styles.formInput}
                    value={projectStatus}
                    onChange={e => setProjectStatus(e.target.value)}
                  />
                </label>
                <label htmlFor="projectArea">
                  <p className={styles.formTitle}>Veículo de Mídia</p>
                  <input
                    type="text"
                    id="projectArea"
                    className={styles.formInput}
                    value={projectArea}
                    onChange={e => setProjectArea(e.target.value)}
                  />
                </label>
                <label htmlFor="projectOwner">
                  <p className={styles.formTitle}>Data da Notícia</p>
                  <input
                    type="text"
                    id="projectOwner"
                    className={styles.formInput}
                    value={projectOwner}
                    onChange={e => setProjectOwner(e.target.value)}
                  />
                </label>
                <label htmlFor="approvalYear">
                  <p className={styles.formTitle}>
                    Texto Complementar da Notícia
                  </p>
                  <input
                    type="text"
                    id="approvalYear"
                    className={styles.formInput}
                    value={approvalYear}
                    onChange={e => setApprovalYear(e.target.value)}
                  />
                </label>
                <label htmlFor="LinkNews">
                  <p className={styles.formTitle}>Link da Notícia</p>
                  <input
                    type="text"
                    id="LinkNews"
                    className={styles.formInput}
                    value={projectInvestment}
                    onChange={e => setProjectInvestment(e.target.value)}
                  />
                </label>
              </div>
              <label htmlFor="ImageNews">
                <p className={styles.formTitle}>Imagem da Notícia</p>
                <ImageInput
                  onImageSelected={handleImageSelected}
                  image={selectedProject?.image ? selectedProject.image : ''}
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
                <label htmlFor="projectName">
                  <p className={styles.formTitle}>Título da Notícia</p>
                  <input
                    type="text"
                    id="projectName"
                    className={styles.formInput}
                    onChange={e => setProjectName(e.target.value)}
                  />
                </label>
                <label htmlFor="projectType">
                  <p className={styles.formTitle}>Subtítulo da Notícia</p>
                  <input
                    type="text"
                    id="projectType"
                    className={styles.formInput}
                    onChange={e => setProjectType(e.target.value)}
                  />
                </label>
                <label htmlFor="LinkNews">
                  <p className={styles.formTitle}>Link da Notícia</p>
                  <input
                    type="text"
                    id="LinkNews"
                    className={styles.formInput}
                    onChange={e => setProjectInvestment(e.target.value)}
                  />
                </label>
                <label htmlFor="projectStatus">
                  <p className={styles.formTitle}>Autor da Notícia</p>
                  <input
                    type="text"
                    id="projectStatus"
                    className={styles.formInput}
                    onChange={e => setProjectStatus(e.target.value)}
                  />
                </label>
                <label htmlFor="projectArea">
                  <p className={styles.formTitle}>State da Notícia</p>
                  <input
                    type="text"
                    id="projectArea"
                    className={styles.formInput}
                    onChange={e => setProjectArea(e.target.value)}
                  />
                </label>
                <label htmlFor="projectOwner">
                  <p className={styles.formTitle}>Date da Notícia</p>
                  <input
                    type="text"
                    id="projectOwner"
                    className={styles.formInput}
                    onChange={e => setProjectOwner(e.target.value)}
                  />
                </label>
                <label htmlFor="approvalYear">
                  <p className={styles.formTitle}>Text da Notícia</p>
                  <input
                    type="text"
                    id="approvalYear"
                    className={styles.formInput}
                    onChange={e => setApprovalYear(e.target.value)}
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
                ADICIONAR PROJETO
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Projects;
