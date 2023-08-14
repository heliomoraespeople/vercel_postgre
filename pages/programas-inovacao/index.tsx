import React, { FC, useRef } from 'react';

/* import { AccordionBaseData } from '../../src/components/accordions/accordion-base/AccordionBase.data'; */
import { CapaData } from '../../src/templates/capa/Capa.data';
/* import AccordionBase from '../../src/components/accordions/accordion-base/AccordionBase'; */
import CadastrarIdeia from '../../src/templates/cadastrar-ideia/CadastrarIdeia';
import CalendarioProgramas from '../../src/components/programas-inovacao/calendarios/CalendarioProgramas';
import CapaProgramasInovacao from '../../src/templates/capa/Capa';
import NossosProgramas from '../../src/components/programas-inovacao/nossos-programas/NossosProgramas';
import ProgramasComoFunciona from '../../src/components/programas-inovacao/como-funciona/ProgramasComoFunciona';
import TiposProjetosLista from '../../src/components/programas-inovacao/tipos-projetos-lista/TiposProjetosLista';
import ExternalUrls from '../../src/models/enums/ExternalUrls';

const ProgramasInovacao: FC = () => {
  const listRef = useRef();
  const { body, title, videoPath } = CapaData.programasInovacao;
  return (
    <>
      <CapaProgramasInovacao title={title} body={body} videoPath={videoPath} />
      <ProgramasComoFunciona />
      <NossosProgramas />
      <TiposProjetosLista listRef={listRef} />
      <CalendarioProgramas />
      <CadastrarIdeia
        upperButtonLink={ExternalUrls.enova3}
        upperSubtitle="Não deixe de compartilhar conosco."
        upperButtonLabel="Cadastrar minha ideia"
        lowerButtonLable="Conhecer nossos programas"
        listRef={listRef}
      />
      {/* <AccordionBase itens={AccordionBaseData.base.itens} key={1} /> */}
    </>
  );
};

export default ProgramasInovacao;
