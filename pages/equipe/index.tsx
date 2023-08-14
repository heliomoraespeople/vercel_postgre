import { FC } from 'react';
/* import AccordionBase from '../../src/components/accordions/accordion-base/AccordionBase'; */
/* import { AccordionBaseData } from '../../src/components/accordions/accordion-base/AccordionBase.data'; */
import PesquisaEquipe from '../../src/components/equipe/pesquisa-equipe/PesquisaEquipe';
import { EquipeProvider } from '../../src/context/EquipeContext';
import ExternalUrls from '../../src/models/enums/ExternalUrls';
import CadastrarIdeia from '../../src/templates/cadastrar-ideia/CadastrarIdeia';
import Capa from '../../src/templates/capa/Capa';
import { CapaData } from '../../src/templates/capa/Capa.data';

const Equipe: FC = () => {
  return (
    <>
      <Capa {...CapaData.equipe} />
      <EquipeProvider>
        <PesquisaEquipe />
      </EquipeProvider>
      <CadastrarIdeia
        upperButtonLink={ExternalUrls.enova4}
        upperSubtitle="Não deixe de compartilhar conosco."
        upperButtonLabel="Cadastrar ideia"
        lowerButtonLable="Conhecer nossos programas"
      />
      {/* <AccordionBase itens={AccordionBaseData.base.itens} key={1} /> */}
    </>
  );
};
export default Equipe;
