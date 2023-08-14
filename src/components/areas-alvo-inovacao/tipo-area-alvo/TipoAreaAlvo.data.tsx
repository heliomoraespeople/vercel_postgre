import tiposAreaAlvo from '../../../models/enums/tiposAreaAlvo';
import Agreement from '../../icons/areas-alvo/Agreement';
import ComputerGraphics from '../../icons/areas-alvo/ComputerGraphics';
import Configuration from '../../icons/areas-alvo/Configuration';
import Ecossistema from '../../icons/areas-alvo/Ecossistema';
import Sustentability from '../../icons/areas-alvo/Sustentability';
import { ITipoAreaAlvo } from './TipoAreaAlvo';

const coreBusiness: ITipoAreaAlvo = {
  title: tiposAreaAlvo.coreBusiness,
  briefing: (
    <p>
      Área operacional que abrange avanços tecnológicos que têm alto potencial
      de transformação, proporcionando autonomia e eficiência dos processos. A
      busca por novas tecnologias e soluções de inovação é a marca registrada
      dessa área que apoia a transição do modelo de operação de suas
      distribuidoras.
    </p>
  ),
  subAreas: [
    'Transição DSO - Automação, Resiliência e Proteção do Grid',
    'Soluções digitais e inteligentes para proteção à receita',
    'Tecnologias para Sensoriamento e Monitoramento dos Ativos',
    'Soluções de Conectividade (ex.IoT, Novas tecnologias para zonas de sombra)',
    'Aumento da Eficiência Operacional com a Digitalização do grid (ex. Gestão por Imagem, Digital Twins, VPP)',
    'Experiência do colaborador (ex.utilização de wearables, work from anywhere, realidade aumentada, saúde e segurança)'
  ],
  icon: <ComputerGraphics />,
  areasSummaryRef: null,
  onToggle: null,
  active: null,
  uniqueRef: null
};

const ecossistemaNegocios: ITipoAreaAlvo = {
  title: tiposAreaAlvo.ecossistemaNegocios,
  briefing: (
    <p>
      Tem o objetivo de expandir o volume de negócios e diversificar as fontes
      de receitas. Focada em avaliar a entrada da Energisa em segmentos
      não-regulados, ampliar o portfólio de produtos e serviços energéticos,
      além de explorar as capacidades, ativos e posição geográfica do Grupo para
      gerar novas fontes de receita.
    </p>
  ),
  subAreas: [
    'Ampliação do portfólio de produtos e serviços de energia elétrica (ex.Storage, Eficiência Energética)',
    'Portfolio de produtos e serviços agregados / personalizados (ex.Financeiro, Seguro, soluções beyond the meter..)',
    'Mercado de Carbono e Metano (ex.Trade de crédito de carbono, certificados e produtos verdes)',
    'Soluções de O&M para Indústrias, Geração Centralizada e Transmissão',
    'Novas fontes de energia e armazenamento (ex.Biogás, Biometano, H2V)',
    'Soluções para comercialização de energia no mercado varejista'
  ],
  icon: <Ecossistema />,
  areasSummaryRef: null,
  onToggle: null,
  active: null,
  uniqueRef: null
};

const fidelizacaoCliente: ITipoAreaAlvo = {
  title: tiposAreaAlvo.fidelizacaoCliente,
  briefing: (
    <p>
      Foco nos hábitos e comportamento dos clientes, por conta da digitalização
      das relações e ressignificação de prioridades. A Experiência de
      Fidelização do Cliente busca promover melhorias em todas as jornadas do
      indivíduo, proporcionando um relacionamento personalizado, humanizado,
      ágil e resolutivo.
    </p>
  ),
  subAreas: [
    'Tecnologias para simplificação do atendimento ao Cliente (ex.melhoria dos autosserviços, OCR, biometria) ',
    'Soluções para melhoria da percepção do serviço prestado (ex.gerenciador de consumo) ',
    'Modernização do atendimento (ex.tecnologias cognitivas e predição de contato)',
    'Aumento da personalização da experiência digital do cliente',
    'Soluções / Modelos de marketing para aquisição, retenção e fidelização de clientes'
  ],
  icon: <Agreement />,
  areasSummaryRef: null,
  onToggle: null,
  active: null,
  uniqueRef: null
};

const organizacaoOrientadaDados: ITipoAreaAlvo = {
  title: tiposAreaAlvo.organizacaoOrientadaDados,
  briefing: (
    <p>
      Abrange a transição de tecnologias voltadas para a cultura orientada a
      dados, possibilitando decisões de negócio mais assertivas, automatização
      de atividades, melhoria contínua da eficiência operacional e aumento do
      valor agregado dos serviços. Soluções de segurança cibernética e de
      governança e tratamento de dados complementam essa área alvo.
    </p>
  ),
  subAreas: [
    'Cyber Security: Tecnologias para segurança da rede e dos dados',
    'Ferramentas de suporte à decisão(ex.BI, Analytics, IA e Machine Learning',
    'Compartilhamento e Monetização dos dados (ex. Open Economy)',
    'Automação e otimização de processos do Backoffice para melhoria da eficiência e atendimento de demandas(ex.REN 1.000) ',
    'Gestão, Governança e Descentralização dos dados (ex.Big Data, soluções para aquisição, tratamento, armazenamento e geração de valor com dados)'
  ],
  icon: <Configuration />,
  areasSummaryRef: null,
  onToggle: null,
  active: null,
  uniqueRef: null
};

const inovacaoSustentavel: ITipoAreaAlvo = {
  title: tiposAreaAlvo.inovacaoSustentavel,
  briefing: (
    <p>
      Possui como princípio a busca por soluções e tecnologias de baixa emissão
      de carbono com potencial para apoiar o Grupo na transição energética e
      desenvolvimento sustentável, além de agregar valor às comunidades onde
      estamos inseridos. Uma das nossas maiores pautas é criar soluções de
      descarbonização das operações do Grupo Energisa.
    </p>
  ),
  subAreas: [
    'Soluções para acompanhamento e mapeamento de mudanças climáticas e eventos extremos',
    'Soluções para democratização do acesso à energia e impacto social da marca',
    'Soluções para descarbonização das operações do Grupo Energisa (ex. e mobility) ',
    'Economia circular e reaproveitamento de resíduos (ex.Reciclagem de materiais, logística reversa de equipamentos)'
  ],
  icon: <Sustentability />,
  areasSummaryRef: null,
  onToggle: null,
  active: null,
  uniqueRef: null
};

export const TipoAreaAlvoData = {
  coreBusiness,
  ecossistemaNegocios,
  fidelizacaoCliente,
  organizacaoOrientadaDados,
  inovacaoSustentavel
};

export const TipoAreaAlvoDataArray = [
  coreBusiness,
  ecossistemaNegocios,
  fidelizacaoCliente,
  organizacaoOrientadaDados,
  inovacaoSustentavel
];
