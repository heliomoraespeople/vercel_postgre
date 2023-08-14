import { ICapa } from './Capa';

const programasInovacao: ICapa = {
  title: (
    <p>
      PROGRAMAS DE
      <span className="font-extrabold"> INOVAÇÃO</span>
    </p>
  ),
  body: (
    <>
      <h5>O que são?</h5>
      <p>
        São os programas do Grupo Energisa em que o colaborador pode cadastrar
        suas ideias para proposição de projetos reais, alinhados com a
        estratégia do grupo e que tragam bons resultados para a organização e/ou
        os nossos clientes.
      </p>
    </>
  ),
  videoPath: '/programas_inovacao.webm'
};

const areasAlvo: ICapa = {
  title: (
    <p>
      Áreas alvo de
      <span className="font-extrabold"> INOVAÇÃO</span>
    </p>
  ),
  body: (
    <>
      <h5>O que é?</h5>
      <p>
        São áreas de tecnologia alinhadas com o planejamento estratégico que
        impulsionam os interesses futuros do Grupo Energisa. Essas áreas atuam
        como guias de temas a serem seguidos pelas ideias submetidas.
      </p>
    </>
  ),
  videoPath: '/areas_alvo.webm'
};

const digitalLabs: ICapa = {
  title: (
    <p>
      ENERGISA
      <span className="font-extrabold"> DIGITAL LABS</span>
    </p>
  ),
  body: (
    <>
      <h5>O que é?</h5>
      <p>
        O Energisa Digital Labs é um centro de excelência em inteligência
        artificial que visa realizar projetos importantes em cooperação com seus
        colaboradores e suas ideias de inovação.
      </p>
    </>
  ),
  videoPath: '/digilabs/capa.webm'
};

const equipe: ICapa = {
  title: (
    <p>
      NOSSA
      <span className="font-extrabold"> EQUIPE</span>
    </p>
  ),
  body: (
    <>
      <p>
        Composta por um time multidisciplinar, a Diretoria de Estratégia,
        Inovação e Novos Negócios atua em diversas frentes: definição da
        estratégia, programas de Inovação, gestão de projetos, captação de novos
        negócios, desenvolvimento e evolução de produtos. Essas e outras frentes
        visam conversar com os objetivos da empresa e garantir a implantação da
        Cultura de Inovação no Grupo Energisa.
      </p>
      <p className="font-bold mt-[24px]">Contato geral:</p>
      <p> E-mail: siteinovacao@energisa.com.br</p>
    </>
  ),
  videoPath: '/equipe/capa.webm'
};

export const CapaData = {
  programasInovacao,
  areasAlvo,
  digitalLabs,
  equipe
};
