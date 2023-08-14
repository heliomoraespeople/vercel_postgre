import React, { FC } from 'react';

/* import { AccordionBaseData } from '../../src/components/accordions/accordion-base/AccordionBase.data'; */
import { ResponsabilidadesData } from '../../src/components/programas-inovacao/papeis-responsabilidades/PapeisResponsabilidades.data';
/* import AccordionBase from '../../src/components/accordions/accordion-base/AccordionBase'; */
import ButtonCTA from '../../src/components/buttons/call-to-action/ButtonCTA';
import CadastrarIdeia from '../../src/templates/cadastrar-ideia/CadastrarIdeia';
import CapaSubprogramas from '../../src/components/programas-inovacao/capa-subprogramas/CapaSubprogramas';
import PapeisResponsabilidades from '../../src/components/programas-inovacao/papeis-responsabilidades/PapeisResponsabilidades';
import EtapasProcesso from '../../src/components/programas-inovacao/etapas-processo/EtapasProcesso';
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
      <span className="font-bold">EXPERIMENTAÇÃO</span>
    </p>
  );
  const capaBody = (
    <>
      <h5>O que é?</h5>
      <p className="mb-12">
      Projeto para validação de hipóteses em pequena escala. Teste de produtos de mercado (hardware ou software) ou atuação em parceria com o Energisa Digital Labs, para desenvolvimento de pequenas soluções (software).  
      </p>

      <h5> O que não é?</h5>
      <p className="mb-12">
        Estudo ou implementação de um projeto em larga escala.
      </p>
      <ButtonCTA
        size="lg"
        primary
        label="Cadastrar minha ideia"
        onClick={() => window.open(ExternalUrls.enova4, '_blank')}
      />
    </>
  );

  const textInfo = (
    <div className="programas-text-info">
      <p>Prazo Máximo</p>
      <p>6 meses</p>
      <p>Valor</p>
      <p>Até 300k por projeto</p>
      <p>Complexidade</p>
      <p>Baixa/Média</p>
    </div>
  );

  return (
    <>
      <CapaSubprogramas
        imageSrcCapa="/capa_experimentacao.png"
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
      <EtapasProcesso etapas={EtapasProcessoData.experimentacao.etapas} />
      <CadastrarIdeia
        upperButtonLink={ExternalUrls.enova4}
        upperSubtitle="Não deixe de compartilhar conosco."
        upperButtonLabel="Cadastrar ideia de Experimentação"
        lowerButtonLable="Conhecer nossos programas"
      />
      {/* <AccordionBase itens={AccordionBaseData.base.itens} key={1} /> */}
    </>
  );
};

export default ProgramasEnova;
