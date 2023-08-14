import { FC } from 'react';
import ParaQueServe from '../../src/components/areas-alvo-inovacao/para-que-serve/ParaQueServe';
import QuaisSao from '../../src/components/areas-alvo-inovacao/quais-sao/QuaisSao';
import ExternalUrls from '../../src/models/enums/ExternalUrls';
import CadastrarIdeia from '../../src/templates/cadastrar-ideia/CadastrarIdeia';
import CapaAreasAlvo from '../../src/templates/capa/Capa';
import { CapaData } from '../../src/templates/capa/Capa.data';

const AreasAlvoInovacao: FC = () => {
  const { body, title, videoPath } = CapaData.areasAlvo;
  return (
    <>
      <CapaAreasAlvo title={title} body={body} videoPath={videoPath} />
      <ParaQueServe />
      <QuaisSao />
      <CadastrarIdeia
        upperButtonLink={ExternalUrls.enova3}
        upperSubtitle="Não deixe de compartilhar conosco."
        upperButtonLabel="Cadastrar minha ideia"
        lowerButtonLable="Conhecer nossos programas"
      />
    </>
  );
};

export default AreasAlvoInovacao;
