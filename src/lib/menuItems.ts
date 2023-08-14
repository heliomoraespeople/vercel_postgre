import deepFreeze from './deepFreeze';

export interface IMenuItem {
  readonly href: string;
  readonly label: string;
}

const menuItems: IMenuItem[] = [
  {
    href: '/',
    label: 'Página Inicial'
  },
  {
    href: '/areas-alvo-inovacao',
    label: 'Áreas Alvo de Inovação'
  },
  {
    href: '/programas-inovacao',
    label: 'Programas de Inovação'
  },
  { href: '/projetos', label: 'Projetos' },
  {
    href: '/digital-labs',
    label: 'Energisa Digital Labs'
  },
  {
    href: '/equipe',
    label: 'Equipe'
  }
];

deepFreeze(menuItems);

export default menuItems;
