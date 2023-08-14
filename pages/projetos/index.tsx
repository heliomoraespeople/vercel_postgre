import { FC } from 'react';
import CapaProjetos from '../../src/components/projetos/capa-projetos/CapaProjetos';
import PesquisaProjetos from '../../src/components/projetos/pesquisa-projetos/PesquisaProjetos';
import { ProjetosProvider } from '../../src/context/ProjetosContext';

const NossosProjetos: FC = () => {
  return (
    <>
      <CapaProjetos />
      <ProjetosProvider>
        <PesquisaProjetos />
      </ProjetosProvider>
    </>
  );
};

export default NossosProjetos;
