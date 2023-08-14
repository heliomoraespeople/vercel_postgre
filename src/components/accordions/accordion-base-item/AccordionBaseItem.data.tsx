import { IAccordionBaseItem } from './AccordionBaseItem';

const base: IAccordionBaseItem = {
  item: {
    title: 'ÁREAS ALVO DE INOVAÇÃO',
    content: (
      <>
        <p>
          Áreas Alvo de Inovação são temas guias que servem como norteadores
          para os projetos de inovação. Cada área alvo de inovação define uma
          perspectiva do negócio que deve ser levada em conta.
        </p>
        <p>
          Veja quais as áreas que você pode seguir e serão importantes no
          futuro:
        </p>
        <ol>
          <li>Segurança e continuidade do Negócio</li>
          <li>Excelência na experiência digital do cliente</li>
          <li>Novos negócios para o grupo</li>
          <li>Automação e resiliência do Grid</li>
          <li>Backoffice digital</li>
          <li>Gestão e utilização dos dados</li>
          <li>Sustentabilidade</li>
        </ol>
        <p>
          Quer saber mais sobre essas áreas ou como a Energisa chegou
          nelas?Clica no link abaixo.
        </p>
      </>
    )
  },
  onToggle: null,
  active: true
};

export const AccordionBaseItemData = {
  base
};
