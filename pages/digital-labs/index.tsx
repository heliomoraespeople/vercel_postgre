import { FC } from 'react';
import { CardCasesDataArray } from '../../src/components/cards/card-cases/CardCases.data';
import CasesSucesso from '../../src/components/digital-labs/cases-sucesso/CasesSucesso';
import EmQueAplicamos from '../../src/components/digital-labs/em-que-aplicamos/EmQueAplicamos';
import FuncoesDigitalLabs from '../../src/components/digital-labs/funcoes-digital-labs/FuncoesDigitalLabs';
import InteligenciaArtificial from '../../src/components/digital-labs/inteligencia-artificial/InteligenciaArtificial';
import NossaEstrutura from '../../src/components/digital-labs/nossa-estrutura/NossaEstrutura';
import NossoProcesso from '../../src/components/digital-labs/nosso-processo/NossoProcesso';
import OqueFazemos from '../../src/components/digital-labs/oque-fazemos/OqueFazemos';
import ExternalUrls from '../../src/models/enums/ExternalUrls';
import CadastrarIdeia from '../../src/templates/cadastrar-ideia/CadastrarIdeia';
import Capa from '../../src/templates/capa/Capa';
import { CapaData } from '../../src/templates/capa/Capa.data';

const DigitalLabs: FC = () => {
  return (
    <>
      <Capa {...CapaData.digitalLabs} />
      <OqueFazemos />
      <InteligenciaArtificial />
      <EmQueAplicamos />
      <NossaEstrutura />
      <FuncoesDigitalLabs />
      <NossoProcesso />
      <CasesSucesso cases={CardCasesDataArray} />
      <CadastrarIdeia
        upperButtonLink={ExternalUrls.enova3}
        upperSubtitle="Não deixe de compartilhar conosco."
        upperButtonLabel="Cadastrar minha ideia"
        lowerButtonLable="Conhecer nossos programas"
      />
    </>
  );
};

export default DigitalLabs;
