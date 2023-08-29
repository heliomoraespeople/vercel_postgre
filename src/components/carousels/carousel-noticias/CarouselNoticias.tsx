import styles from './CarouselNoticias.module.css';
import CarouselBase from '../../carousels/carousel-base/CarouselBase';
import useWindowSize from '../../../hooks/useWindowSize';
import Breakpoints from '../../../models/enums/Breakpoints';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardArtigo from '../../cards/card-artigo/CardArtigo';
import CarouselGroup from '../carousel-group/CarouselGroup';

const CarouselNoticias: React.FC = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNoticias = async () => {
      try {
        const response = await axios.get('/api/news/get-news');
        const noticiasDecodificadas = response.data.map(noticia => ({
          ...noticia,
          image: `${atob(noticia.image)}`
        }));
        setNewsData(noticiasDecodificadas);
      } catch (error) {
        console.error(error);
      }
    };

    getNoticias();
  }, []);

  const windowSize = useWindowSize();
  return (
    <div className={`${styles.container} wrapper-geral`}>
      <div className="wrapper-carousel">
        <CarouselBase arrows={windowSize.width >= Breakpoints.sm + 5}>
          {windowSize.width >= Breakpoints.lg
            ? [
                <CarouselGroup key={2}>
                  {[
                    <CardArtigo {...newsData[0]} key={0} />,
                    <CardArtigo {...newsData[1]} key={1} />
                  ]}
                </CarouselGroup>,

                <CarouselGroup key={0}>
                  {[<CardArtigo {...newsData[2]} key={0} />]}
                </CarouselGroup>
              ]
            : newsData.map((file, index) => (
                <CardArtigo
                  abstract={file.abstract}
                  title={file.title}
                  image={file.image}
                  key={index}
                  priority={file.priority}
                  link={file.link}
                />
              ))}
        </CarouselBase>
      </div>
    </div>
  );
};

export default CarouselNoticias;
