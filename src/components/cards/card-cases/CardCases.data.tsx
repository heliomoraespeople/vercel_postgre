import { ICardCases } from './CardCases';

const inspecoes: ICardCases = {
  title: 'ZCORE',
  subtitle: 'PREVISÃO COMPORTAMENTAL',
  text: (
    <>
      <p>
        <b>Problema:</b> A Voltz, fintech do Grupo Energisa, enfrentava desafios
        para selecionar a melhor oferta de crédito com risco ajustado para os
        consumidores de energia elétrica.
      </p>
      <p>
        <b>Solução:</b> Desenvolvemos uma solução data-driven para prever o
        comportamento dos consumidores de energia elétrica. Esta solução foi
        dividida em duas etapas:
        <br /> <br />
        <b>A.</b> &nbsp;&nbsp;O desenvolvimento de uma pontuação
        comportamental para prever a probabilidade de um cliente pagar a fatura
        de energia.
        <br /> <br />
        <b>B.</b> &nbsp;&nbsp;A categorização da população para suportar
        estratégias de seleção de crédito.
      </p>
      <p>
        <b>Implementação:</b> Implementamos a solução na Voltz, permitindo a
        previsão comportamental dos consumidores e, assim, uma melhor seleção da
        oferta de crédito.
      </p>
      <p>
        <b>Resultado:</b> O score comportamental ficou 57% acima do esperado,
        mostrando-se mais assertivo que a referência de mercado para clientes
        pessoa física e jurídica. Este notável resultado ganhou o prêmio Score
        Award na categoria “Fomento à Inovação a partir do Uso Criativo de
        Dados”, consagrando a eficácia da solução.
      </p>
    </>
  ),
  imagesPath: ['/digilabs/digilabs2.jpg']
};

const itemDiverso: ICardCases = {
  title: 'IA PARA INSPEÇÕES',
  subtitle: 'SOLUÇÃO DE IDENTIFICAÇÃO DE ANOMALIAS',
  text: (
    <>
      <p>
        <b>Problema:</b> A inspeção de linhas elétricas é uma tarefa constante e
        crucial para garantir o funcionamento eficaz do sistema de distribuição.
        Ela requer a experiência e atenção minuciosa dos colaboradores, além de
        treinamento adequado.
      </p>
      <p>
        <b>Solução:</b> Desenvolvemos uma Inteligência Artificial (IA) para
        identificar anomalias em componentes da rede elétrica.
      </p>
      <p>
        <b>Implementação:</b> Esta solução foi implementada em parceria com a
        Zeitview, utilizando a análise de imagens coletadas por Drones para
        detecção precisa de problemas.
      </p>
      <p>
        <b>Resultado:</b> Como resultado, alcançamos maior segurança, rapidez e
        eficiência na inspeção de linhas elétricas, otimizando
        significativamente o processo.
      </p>
    </>
  ),
  imagesPath: ['/digilabs/inspecoes1.jpg']
};

const itemDiversoSegundo: ICardCases = {
  title: 'PRIO',
  subtitle: 'FERRAMENTA PARA PRIORIZAÇÃO DE OBRAS',
  text: (
    <>
      <p>
        <b>Problema:</b> A EMT enfrentava desafios na priorização de obras,
        levando em consideração múltiplos critérios e restrições de negócio.
      </p>
      <p>
        <b>Solução:</b> Foi desenvolvida uma solução de Advanced Analytics,
        baseada em algoritmo genético, capaz de indicar mensalmente uma carteira
        de obras priorizadas, considerando multicritérios e restrições de
        negócio.
      </p>
      <p>
        <b>Implementação:</b> A solução, chamada PRIO, foi colocada em produção
        no período entre fevereiro e junho de 2022.
      </p>
      <p>
        <b>Resultado:</b> Com a utilização do PRIO, a EMT obteve uma melhora de
        7% na aderência de obras executadas e 11% na conclusão de obras
        reguladas dentro do prazo. Isso resultou em um impacto positivo,
        incluindo:
        <br />
        <br />
        • Redução no volume de reclamações de clientes; <br />
        • Maior aderência aos Planos de Resultados de <br /> &nbsp;&nbsp;Órgãos Reguladores;
        <br />
        • Diminuição de compensações comerciais por<br /> &nbsp; obras violadas.
      </p>
    </>
  ),
  imagesPath: ['/digilabs/digilabs1.jpg']
};

export const CardCasesData = {
  inspecoes,
  itemDiverso,
  itemDiversoSegundo
};

export const CardCasesDataArray = [inspecoes, itemDiverso, itemDiversoSegundo];
