const replaceDash = (text: string): string => text?.replaceAll('-', ' ');

const generateBreadCrumbText = (subpath: string): string => {
  return (
    {
      'programas-inovacao': 'programas de inovação',
      enova: 'programa e-nova',
      experimentacao: 'experimentação',
      'pre-projeto': 'pré-projeto',
      'p-d': 'p&d',
      'areas-alvo-inovacao': 'áreas alvo de inovação',
      'digital-labs': 'energisa digital labs',
      projetos: 'projetos'
    }[subpath] || replaceDash(subpath)
  );
};

export default generateBreadCrumbText;
