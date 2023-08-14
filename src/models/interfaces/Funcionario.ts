import Responsabilidades from '../enums/Responsabilidades';

export default interface IFuncionario {
  id: number;
  filterID: string;
  foto: string;
  nome: string;
  responsabilidade: Responsabilidades;
  email: string;
}
