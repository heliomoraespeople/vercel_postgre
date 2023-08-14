import { ICardAI } from './CardAI';

const artificialInteligence: ICardAI = {
  imgSrc: '/digilabs/ai.png',
  title: 'Inteligência artifical',
  subtitle: '(Artificial Intelligence)',
  list: (
    <ul>
      <li>Chatbot;</li>
      <li>Procesamento natural de linguagem. </li>{' '}
    </ul>
  )
};

const machineLearning: ICardAI = {
  imgSrc: '/digilabs/machine.png',
  title: 'Aprendizado de máquina',
  subtitle: '(Machine learning)',
  list: (
    <ul>
      <li>Segmentação de clientes;</li>
      <li>Risco e “pontuação” do cliente;</li>
      <li>Detecção de fraude;</li>
      <li>Previsão de demanda.</li>
    </ul>
  ),
  reverseImg: true
};

const deepLearning: ICardAI = {
  imgSrc: '/digilabs/deep.png',
  title: 'Aprendizagem Profunda',
  subtitle: '(Deep learning)',
  list: (
    <ul>
      <li>Reconhecimento de imagem;</li>
      <li>Reconhecimento de voz.</li>
    </ul>
  )
};

export const CardAIData = {
  artificialInteligence,
  machineLearning,
  deepLearning
};
