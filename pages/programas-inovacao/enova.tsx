import React, { FC } from 'react';

/* import { AccordionBaseData } from '../../src/components/accordions/accordion-base/AccordionBase.data'; */
import { ResponsabilidadesData } from '../../src/components/programas-inovacao/papeis-responsabilidades/PapeisResponsabilidades.data';
/* import AccordionBase from '../../src/components/accordions/accordion-base/AccordionBase'; */
import ButtonCTA from '../../src/components/buttons/call-to-action/ButtonCTA';
import CadastrarIdeia from '../../src/templates/cadastrar-ideia/CadastrarIdeia';
import CapaSubprogramas from '../../src/components/programas-inovacao/capa-subprogramas/CapaSubprogramas';
import PapeisResponsabilidades from '../../src/components/programas-inovacao/papeis-responsabilidades/PapeisResponsabilidades';
import EtapasProcessoEnova from '../../src/components/programas-inovacao/etapas-processo/EtapasProcessoEnova';
import ExternalUrls from '../../src/models/enums/ExternalUrls';

const ProgramasEnova: FC = () => {
  const {
    firstCardText,
    firstCardTitle,
    secondCardTitle,
    secondCardText,
    subTitle
  } = ResponsabilidadesData.enova;

  const capaTitle = (
    <p>
      PROGRAMA
      <br />
      <span className="font-bold"> E-NOVA</span>
    </p>
  );

  const capaBody = (
    <>
      <h5>O que é?</h5>
      <p className="mb-12">
        Programa interno colaborativo de incentivo à inovação. O Programa e-nova
        realiza a captura de ideias com foco em inovação incremental.
      </p>
      <ButtonCTA
        size="lg"
        primary
        label="Cadastrar minha ideia"
        onClick={() => window.open(ExternalUrls.enova3, '_blank')}
      />
    </>
  );

  const textInfo = (
    <>
      <h5>Como funciona?</h5>
      <p>
        Através de um ambiente virtual, interativo e simples, onde todos os
        colaboradores da empresa têm a oportunidade de sugerir ideias e investir
        em projetos promissores.
      </p>
      <h5>O que valoriza?</h5>
      <p>Liberdade de expressão, comprometimento e trabalho em equipe.</p>
      <h5>Qual o objetivo?</h5>
      <p>
        Implantar iniciativas originais que estejam alinhadas com a estratégia
        do grupo e tragam bons resultados para a toda a organização e/ou para os
        nossos clientes.
      </p>
    </>
  );

  return (
    <>
      <CapaSubprogramas
        imageSrcCapa="/capa_enova.jpg"
        title={capaTitle}
        bodyCapa={capaBody}
        textInfo={textInfo}
      />
      <PapeisResponsabilidades
        firstCardTitle={firstCardTitle}
        firstCardText={firstCardText}
        secondCardTitle={secondCardTitle}
        secondCardText={secondCardText}
        subTitle={subTitle}
      />
      <EtapasProcessoEnova coverText="O Programa E-nova lida com projetos mais simples e de rápida execução. A seguir, você pode conhecer as etapas do fluxo de avaliação, desde a criação da ideia até a aprovação do projeto." />
      <CadastrarIdeia
        upperButtonLink={ExternalUrls.enova3}
        upperSubtitle="Não deixe de compartilhar conosco."
        upperButtonLabel="Cadastrar minha ideia"
        lowerButtonLable="Conhecer nossos programas"
      />
      {/* <AccordionBase itens={AccordionBaseData.base.itens} key={1} /> */}
    </>
  );
};

export default ProgramasEnova;
