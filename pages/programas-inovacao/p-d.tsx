import React, { FC } from 'react';

/* import { AccordionBaseData } from '../../src/components/accordions/accordion-base/AccordionBase.data'; */
import { ResponsabilidadesData } from '../../src/components/programas-inovacao/papeis-responsabilidades/PapeisResponsabilidades.data';
/* import AccordionBase from '../../src/components/accordions/accordion-base/AccordionBase'; */
import ButtonCTA from '../../src/components/buttons/call-to-action/ButtonCTA';
import CadastrarIdeia from '../../src/templates/cadastrar-ideia/CadastrarIdeia';
import CapaSubprogramas from '../../src/components/programas-inovacao/capa-subprogramas/CapaSubprogramas';
import EtapasProcesso from '../../src/components/programas-inovacao/etapas-processo/EtapasProcesso';
import PapeisResponsabilidades from '../../src/components/programas-inovacao/papeis-responsabilidades/PapeisResponsabilidades';
import { EtapasProcessoData } from '../../src/components/programas-inovacao/etapas-processo/EtapasProcesso.data';
import ExternalUrls from '../../src/models/enums/ExternalUrls';

const ProgramasEnova: FC = () => {
  const {
    firstCardText,
    firstCardTitle,
    secondCardTitle,
    secondCardText,
    subTitle
  } = ResponsabilidadesData.experimentacao;

  const capaTitle = (
    <p>
      <span className="font-bold">P&D</span>
    </p>
  );
  const capaBody = (
    <>
      <h5>O que é?</h5>
      <p className="mb-12">
      Projeto no âmbito do programa regulado da ANEEL, que leva à implementação de produtos e/ou processos novos. Necessário preencher os requisitos mínimos, definidos no programa ANEEL.
      </p>

      <h5> O que não é?</h5>
      <p className="mb-12">
        Compra e implementação de solução comercial ou projeto de engenharia.{' '}
      </p>
      <ButtonCTA
        size="lg"
        primary
        label="Cadastrar minha ideia"
        onClick={() => window.open(ExternalUrls.enova17, '_blank')}
      />
    </>
  );

  const textInfo = (
    <div className="programas-text-info">
      <p>Prazo Máximo</p>
      <p>2 anos</p>
      <p>Valor</p>
      <p>A depender da complexidade do projeto.
</p>
      <p>Complexidade</p>
      <p>Alta</p>
    </div>
  );

  return (
    <>
      <CapaSubprogramas
        imageSrcCapa="/capa_pd.jpg"
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
      <EtapasProcesso etapas={EtapasProcessoData.PD.etapas} />
      <CadastrarIdeia
        upperButtonLink={ExternalUrls.enova17}
        upperSubtitle="Não deixe de compartilhar conosco."
        upperButtonLabel="Cadastrar ideia de P&D"
        lowerButtonLable="Conhecer nossos programas"
      />
      {/* <AccordionBase itens={AccordionBaseData.base.itens} key={1} /> */}
    </>
  );
};

export default ProgramasEnova;
