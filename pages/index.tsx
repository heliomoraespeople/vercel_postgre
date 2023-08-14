import type { NextPage } from 'next';
import CapaHome from '../src/components/home/capa-home/CapaHome';
import CarouselNoticias from '../src/components/carousels/carousel-noticias/CarouselNoticias';
import ProjetosHome from '../src/components/home/projetos-home/ProjetosHome';
import CadastrarIdeia from '../src/templates/cadastrar-ideia/CadastrarIdeia';
import DigitalLabsHome from '../src/components/home/digital-labs-home/DigitalLabsHome';
import InvestimentosHome from '../src/components/home/investimentos-home/InvestimentosHome';
import ComoAtuamos from '../src/components/home/como-atuamos/ComoAtuamos';
import ExternalUrls from '../src/models/enums/ExternalUrls';

const HomePage: NextPage = () => {
  return (
    <>
      <CapaHome />
      <CarouselNoticias />
      <ProjetosHome />
      <InvestimentosHome />
      <ComoAtuamos />
      <DigitalLabsHome />
      <CadastrarIdeia
        upperButtonLink={ExternalUrls.enova3}
        upperSubtitle="Não deixe de compartilhar conosco."
        upperButtonLabel="Cadastrar minha ideia"
        lowerButtonLable="Conhecer nossos programas"
      />
    </>
  );
};

export default HomePage;
