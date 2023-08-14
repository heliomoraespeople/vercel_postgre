import { ICapaSubprogramas } from './CapaSubprogramas';

const base: ICapaSubprogramas = {
  imageSrcCapa: '/banner_programas_inovacao.jpg',
  title: (
    <p>
      PROGRAMAS DE
      <span className="font-extrabold"> INOVAÇÃO</span>
    </p>
  ),
  bodyCapa: (
    <>
      <h5>O que são?</h5>
      <p>
        São processos onde a Energisa recebe, analisa e potencializa ideias que
        podem se tornar projetos reais alinhados com a estratégia do grupo e
        tragam bons resultados para toda a organização.
      </p>
    </>
  ),
  textInfo: (
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
        do grupo e tragam bons resultados para toda a organização.
      </p>
    </>
  )
};

export const CapaSubprogramasData = {
  base
};
