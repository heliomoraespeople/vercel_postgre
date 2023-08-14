import { ICardSolido } from './CardSolido';

const programasInovacao: ICardSolido = {
  text: (
    <>
      <p className="mb-3">
        À medida que uma ideia, cadastrada em qualquer um dos programas, avança
        no fluxo, os {' '}
        <span className="bg-azulEscuro text-cinza-600">
          autores recebem e-coins
        </span>{' '}
        (moedas virtuais). Estas moedas podem ser utilizadas na E-loja, que tem
        diversos produtos e serviços disponíveis. Confira no link abaixo.
      </p>
    </>
  ),
  buttonLabel: 'Conferir E-Loja',
  onClickButton: () =>
    window.open(' https://energisa.maxpremios.com.br/', '_blank')
};

const areasAlvoParaQueServe: ICardSolido = {
  text: (
    <p className="mb-3">
      Conheça também os programas de inovação para saber em que tipo de projeto
      a sua ideia se encaixa!
    </p>
  ),
  buttonLabel: 'Conferir Programas de Inovação',
  onClickButton: null
};

const digitalLabsOqueFazemos: ICardSolido = {
  text: (
    <p>
      A cultura data-driven, por sua vez, é a utilização de dados inteligentes na solução de problemas para ajudar na tomada de decisão.
    </p>
  ),
  mode: 'light'
};

export const CardSolidoData = {
  programasInovacao,
  areasAlvoParaQueServe,
  digitalLabsOqueFazemos
};
