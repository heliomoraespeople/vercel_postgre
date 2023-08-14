import Responsabilidades from '../../../models/enums/Responsabilidades';
import ResponsabilidadesIDs from '../../../models/enums/ResponsabilidadesIDs';
import { ICardEquipePesquisa } from './CardEquipePesquisa';

const funcionarios: ICardEquipePesquisa[] = [
  {
   id: 1,
   filterID: ResponsabilidadesIDs.DEIN,
   foto: "equipe/fotos/1 - DEIN/DEIN - Lucas Dutra.jfif",
   nome: "Lucas Pinz",
   responsabilidade: Responsabilidades.DEIN,
   email: "lucas.pinz@energisa.com.br"
  },
  {
    id: 2,
    filterID: ResponsabilidadesIDs.COPR,
    foto: "equipe/fotos/2 - COPR/COPR 1 - Cleo Oliveira.jfif",
    nome: "Cléo Maciel",
    responsabilidade: Responsabilidades.COPR,
    email: "cleo.maciel@energisa.com.br"
   },
  {
   id: 3,
   filterID: ResponsabilidadesIDs.GEIN,
   foto: "equipe/fotos/4 - GEIN/GEIN - Alexandre Augusto.jpeg",
   nome: "Alexandre de Castro",
   responsabilidade: Responsabilidades.GEIN,
   email: "alexandre.castro@energisa.com.br"
  },
  {
   id: 4,
   filterID: ResponsabilidadesIDs.GETD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/GETD - Francisco Setubal.jpg",
   nome: "Francisco Setubal",
   responsabilidade: Responsabilidades.GETD,
   email: "francisco.setubal@energisa.com.br"
  },
  // {
  //  id: 5,
  //  filterID: ResponsabilidadesIDs.GENN,
  //  foto: "equipe/fotos/5 - GENN/GENN 1 - Renan Medeiros.jfif",
  //  nome: "Renan Medeiros",
  //  responsabilidade: Responsabilidades.GENN,
  //  email: "renan.mesilva@energisa.com.br"
  // },
  {
   id: 6,
   filterID: ResponsabilidadesIDs.GEST,
   foto: "equipe/fotos/3 - GEST/GEST 1 - Rodrigo Assis.jfif",
   nome: "Rodrigo Assis",
   responsabilidade: Responsabilidades.GEST,
   email: "rodrigo.assis@energisa.com.br"
  },
  {
   id: 7,
   filterID: ResponsabilidadesIDs.CODS,
   foto: "equipe/fotos/6 - GETD - Hub EDL/CODS 1 - Daniel Ryba.png",
   nome: "Daniel Ryba",
   responsabilidade: Responsabilidades.CODS,
   email: "daniel.ryba@energisa.com.br"
  },
  {
   id: 8,
   filterID: ResponsabilidadesIDs.COTD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COTD 1 - Erick Luis.png",
   nome: "Erick Lima",
   responsabilidade: Responsabilidades.COTD,
   email: "erick.lima@energisa.com.br"
  },
  {
   id: 9,
   filterID: ResponsabilidadesIDs.COPD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COPD 1 - Felipe Natal.png",
   nome: "Felipe Natal",
   responsabilidade: Responsabilidades.COPD,
   email: "felipe.natal@energisa.com.br"
  },
  {
    id: 9,
    filterID: ResponsabilidadesIDs.CanaisParcerias,
    foto: "/equipe/fotos/4 - GEIN/CANAIS 2 - Allyson Thomas.png",
    nome: "Allyson Thomas",
    responsabilidade: Responsabilidades.CanaisParcerias,
    email: "allyson.sena@energisa.com.br"
   },
  {
   id: 11,
   filterID: ResponsabilidadesIDs.COPI,
   foto: "equipe/fotos/4 - GEIN/COPI 1 - Jean Carlos.jfif",
   nome: "Jean Bueno",
   responsabilidade: Responsabilidades.COPI,
   email: "jean.bueno@energisa.com.br"
  },
  {
   id: 12,
   filterID: ResponsabilidadesIDs.COGI,
   foto: "equipe/fotos/4 - GEIN/COGI 1 - Thiago Antonio.jfif",
   nome: "Thiago Enei",
   responsabilidade: Responsabilidades.COGI,
   email: "thiago.antonio@energisa.com.br"
  },
  {
   id: 13,
   filterID: ResponsabilidadesIDs.GestaoProjetos,
   foto: "equipe/fotos/4 - GEIN/COGI 2 - Alexandre Menezes.jpg",
   nome: "Alexandre Menezes",
   responsabilidade: Responsabilidades.GestaoProjetos,
   email: "alexandre.teixeira@energisa.com.br"
  },
  {
   id: 14,
   filterID: ResponsabilidadesIDs.CODS,
   foto: "equipe/fotos/6 - GETD - Hub EDL/CODS 2 - Andre Thiago.jfif",
   nome: "André Thiago",
   responsabilidade: Responsabilidades.CODS,
   email: "andre.alves@energisa.com.br"
  },
  {
   id: 15,
   filterID: ResponsabilidadesIDs.COPD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COPD 2 - Andreia Gomes.jfif",
   nome: "Andreia Gomes",
   responsabilidade: Responsabilidades.COPD,
   email: "andreia.gomes@energisa.com.br"
  },
  {
   id: 16,
   filterID: ResponsabilidadesIDs.COPD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COPD 3 - Barbara Jorgina.jfif",
   nome: "Barbara Areias",
   responsabilidade: Responsabilidades.COPD,
   email: "barbara.areias@energisaterceiros.com.br"
  },
  {
   id: 18,
   filterID: ResponsabilidadesIDs.CODS,
   foto: "equipe/fotos/6 - GETD - Hub EDL/CODS 3 - Carla Jacobsen.jfif",
   nome: "Carla Espindula",
   responsabilidade: Responsabilidades.CODS,
   email: "carla.espindula@energisa.com.br"
  },
  {
   id: 19,
   filterID: ResponsabilidadesIDs.GestaoProjetos,
   foto: "equipe/fotos/4 - GEIN/COGI 3 - Clayton Santos.jfif",
   nome: "Clayton Silva",
   responsabilidade: Responsabilidades.GestaoProjetos,
   email: "clayton.silva@energisa.com.br"
  },
  {
    id: 20,
    filterID: ResponsabilidadesIDs.ENOVA,
    foto: "equipe/fotos/4 - GEIN/COGI x16 - Ana Clara de Barros.jpg",
    nome: "Ana Clara de Barros",
    responsabilidade: Responsabilidades.ENOVA,
    email: "ana.cllima@energisa.com.br"
   },
   {
    id: 20,
    filterID: ResponsabilidadesIDs.ENOVA,
    foto: "equipe/fotos/4 - GEIN/COGI x17 - Ana Júlia Medeiros.png",
    nome: "Ana Júlia Medeiros",
    responsabilidade: Responsabilidades.ENOVA,
    email: "ana.pessoa@energisa.com.br"
   },
  {
   id: 20,
   filterID: ResponsabilidadesIDs.ENOVA,
   foto: "equipe/fotos/4 - GEIN/COGI x15 - Daniel Jose.jpeg",
   nome: "Daniel Silva",
   responsabilidade: Responsabilidades.ENOVA,
   email: "daniel.jose@energisaterceiros.com.br"
  },
  {
   id: 21,
   filterID: ResponsabilidadesIDs.ContratosAuditoria,
   foto: "equipe/fotos/2 - COPR/COPR 6 - Daniela Pimenta.jfif",
   nome: "Daniela Pimenta",
   responsabilidade: Responsabilidades.ContratosAuditoria,
   email: "daniela.moraes@energisa.com.br"
  },
  {
   id: 22,
   filterID: ResponsabilidadesIDs.GestaoPortfolio,
   foto: "equipe/fotos/2 - COPR/COPR 2 - Elane Cristina.jfif",
   nome: "Elane Cabral",
   responsabilidade: Responsabilidades.GestaoPortfolio,
   email: "elane.cabral@energisa.com.br"
  },
  {
   id: 23,
   filterID: ResponsabilidadesIDs.GestaoProjetos,
   foto: "equipe/fotos/4 - GEIN/COGI 4 - Elayne Holanda.jfif",
   nome: "Elayne Madruga",
   responsabilidade: Responsabilidades.GestaoProjetos,
   email: "elayne.holanda@energisa.com.br"
  },
  {
    id: 17,
    filterID: ResponsabilidadesIDs.GestaoPortfolio,
    foto: "equipe/fotos/2 - COPR/Flavia_Estrada.jpg",
    nome: "Flávia Estrada",
    responsabilidade: Responsabilidades.GestaoPortfolio,
    email: "flavia.estrada@energisa.com.br"
   },
  {
   id: 26,
   filterID: ResponsabilidadesIDs.RelacionamentoInterno,
   foto: "equipe/fotos/4 - GEIN/COPI 6 - Gisele Rodrigues.jfif",
   nome: "Gisele Margarido",
   responsabilidade: Responsabilidades.RelacionamentoInterno,
   email: "gisele.margarido@energisa.com.br"
  },
  {
   id: 27,
   filterID: ResponsabilidadesIDs.ENOVA,
   foto: "equipe/fotos/4 - GEIN/COGI x14 - Gustavo Prado.jfif",
   nome: "Gustavo Medina",
   responsabilidade: Responsabilidades.ENOVA,
   email: "gustavo.medina@energisaterceiros.com.br"
  },
  {
   id: 28,
   filterID: ResponsabilidadesIDs.GestaoPortfolio,
   foto: "equipe/fotos/2 - COPR/COPR 3 - Gustavo Tavares.png",
   nome: "Gustavo Tavares",
   responsabilidade: Responsabilidades.GestaoPortfolio,
   email: "gustavo.rodrigues@energisa.com.br"
  },
  {
   id: 29,
   filterID: ResponsabilidadesIDs.GestaoProjetos,
   foto: "equipe/fotos/4 - GEIN/COGI 5 - Iago Batista.jfif",
   nome: "Iago Batista",
   responsabilidade: Responsabilidades.GestaoProjetos,
   email: "iago.oliveira@energisaterceiros.com.br"
  },
  {
   id: 30,
   filterID: ResponsabilidadesIDs.OrcamentoGCP,
   foto: "equipe/fotos/4 - GEIN/COGI 9 - Isabela Fonseca.png",
   nome: "Isabela Fonseca",
   responsabilidade: Responsabilidades.OrcamentoGCP,
   email: "isabela.rios@energisa.com.br"
  },
  {
   id: 31,
   filterID: ResponsabilidadesIDs.CODS,
   foto: "equipe/fotos/6 - GETD - Hub EDL/CODS 4 - Iure Barros.jpg",
   nome: "Iuri Rebouças",
   responsabilidade: Responsabilidades.CODS,
   email: "iure.reboucas@energisa.com.br"
  },
  {
   id: 32,
   filterID: ResponsabilidadesIDs.RelacionamentoInterno,
   foto: "equipe/fotos/4 - GEIN/COPI 7 - Kleber Hochwart.png",
   nome: "Kleber Cardoso",
   responsabilidade: Responsabilidades.RelacionamentoInterno,
   email: "kleber.cardoso@energisa.com.br"
  },
  {
   id: 33,
   filterID: ResponsabilidadesIDs.COPD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COPD 4 - Larissa dos Santos.jfif",
   nome: "Larissa Inácio",
   responsabilidade: Responsabilidades.COPD,
   email: "larissa.inacio@energisa.com.br"
  },
  {
   id: 34,
   filterID: ResponsabilidadesIDs.ENOVA,
   foto: "equipe/fotos/4 - GEIN/COGI x10 - Lauren Isis.jfif",
   nome: "Lauren Isis",
   responsabilidade: Responsabilidades.ENOVA,
   email: "lauren.cunha@energisa.com.br"
  },
  {
   id: 35,
   filterID: ResponsabilidadesIDs.GestaoGovernanca,
   foto: "equipe/fotos/4 - GEIN/COPI 5 - Livia de Carvalho.jfif",
   nome: "Livia Lins",
   responsabilidade: Responsabilidades.GestaoGovernanca,
   email: "livia.lins@energisa.com.br"
  },
  {
    id: 35,
    filterID: ResponsabilidadesIDs.RelacionamentoEcossistema,
    foto: "/equipe/fotos/4 - GEIN/COPI x10 - Tayanara Paiva.png",
    nome: "Tayanara Paiva",
    responsabilidade: Responsabilidades.RelacionamentoEcossistema,
    email: "tayanara.barbosa@energisa.com.br"
   },
  {
   id: 36,
   filterID: ResponsabilidadesIDs.COTD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COTD 3 - Luiz Claudio.jfif",
   nome: "Luiz Cláudio Santos",
   responsabilidade: Responsabilidades.COTD,
   email: "luiz.costa@energisa.com.br"
  },
  {
   id: 37,
   filterID: ResponsabilidadesIDs.GEST,
   foto: "equipe/fotos/3 - GEST/GEST 4 - Maira Araujo.jfif",
   nome: "Maira Brito",
   responsabilidade: Responsabilidades.GEST,
   email: "maira.brito@energisa.com.br"
  },
  {
   id: 38,
   filterID: ResponsabilidadesIDs.GEST,
   foto: "equipe/fotos/3 - GEST/GEST 2 - Marcelo Matz.jfif",
   nome: "Marcello Matz",
   responsabilidade: Responsabilidades.GEST,
   email: "marcello.matz@energisa.com.br"
  },
  {
   id: 39,
   filterID: ResponsabilidadesIDs.COPD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COPD 5 - Marcelo Risso.jpg",
   nome: "Marcelo Klein",
   responsabilidade: Responsabilidades.COPD,
   email: "marcelo.risso@energisa.com.br"
  },
  {
   id: 40,
   filterID: ResponsabilidadesIDs.PagamentosCadastro,
   foto: "equipe/fotos/2 - COPR/COPR 5 - Maria Julia Nogueira.jfif",
   nome: "Maria Júlia Nogueira",
   responsabilidade: Responsabilidades.PagamentosCadastro,
   email: "maria.jnogueira@energisa.com.br"
  },
  {
   id: 41,
   filterID: ResponsabilidadesIDs.ComprasViagens,
   foto: "equipe/fotos/2 - COPR/COPR 7 - Mariana Amorim.jfif",
   nome: "Mariana Amorim",
   responsabilidade: Responsabilidades.ComprasViagens,
   email: "mariana.amorim@energisa.com.br"
  },
  {
   id: 42,
   filterID: ResponsabilidadesIDs.GEST,
   foto: "equipe/fotos/3 - GEST/GEST 3 - Michael Mckay.jfif",
   nome: "Michael Frew",
   responsabilidade: Responsabilidades.GEST,
   email: "michael.frew@energisa.com.br"
  },
  {
   id: 43,
   filterID: ResponsabilidadesIDs.GEST,
   foto: "equipe/fotos/3 - GEST/GEST 5 - Milena Amorim.jfif",
   nome: "Milena Amorim",
   responsabilidade: Responsabilidades.GEST,
   email: "milena.miranda@energisa.com.br"
  },
  {
   id: 44,
   filterID: ResponsabilidadesIDs.COPD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COPD 6 - Pablo Rodrigo.jfif",
   nome: "Pablo Amorim",
   responsabilidade: Responsabilidades.COPD,
   email: "pablo.amorim@energisa.com.br"
  },
  {
   id: 45,
   filterID: ResponsabilidadesIDs.CODS,
   foto: "equipe/fotos/6 - GETD - Hub EDL/CODS 5 - Paulo Tadeu.jfif",
   nome: "Paulo Rosa",
   responsabilidade: Responsabilidades.CODS,
   email: "paulo.rosa@energisa.com.br"
  },
  {
   id: 46,
   filterID: ResponsabilidadesIDs.OrcamentoGCP,
   foto: "equipe/fotos/4 - GEIN/COGI 8 - Raerisson de Lima.jpg",
   nome: "Raerisson Lima",
   responsabilidade: Responsabilidades.OrcamentoGCP,
   email: "raerisson.pereira@energisaterceiros.com.br"
  },
  {
   id: 47,
   filterID: ResponsabilidadesIDs.COTD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COTD 4 - Rafael Xavier.jfif",
   nome: "Rafael Xavier",
   responsabilidade: Responsabilidades.COTD,
   email: "rafael.xavier@energisa.com.br"
  },
  {
   id: 48,
   filterID: ResponsabilidadesIDs.ENOVA,
   foto: "equipe/fotos/4 - GEIN/COGI x12 - Rayanna Mykaelle.jfif",
   nome: "Rayanna Macedo",
   responsabilidade: Responsabilidades.ENOVA,
   email: "rayanna.macedo@energisaterceiros.com.br"
  },
  {
   id: 49,
   filterID: ResponsabilidadesIDs.COTD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COTD 5 - Ricardo Vinicius.png",
   nome: "Ricardo Vinícius",
   responsabilidade: Responsabilidades.COTD,
   email: "ricardo.soares@energisa.com.br"
  },
  {
   id: 50,
   filterID: ResponsabilidadesIDs.ENOVA,
   foto: "equipe/fotos/4 - GEIN/COGI x11 - Ronaldo Antunes.jfif",
   nome: "Ronaldo Almeida",
   responsabilidade: Responsabilidades.ENOVA,
   email: "ronaldo.almeida@energisa.com.br"
  },
  {
   id: 51,
   filterID: ResponsabilidadesIDs.GestaoOrcamentaria,
   foto: "equipe/fotos/2 - COPR/COPR 4 - Ronoti Rodrigues.jfif",
   nome: "Ronoti Rodrigues",
   responsabilidade: Responsabilidades.GestaoOrcamentaria,
   email: "ronoti.silva@energisa.com.br"
  },
  {
    id: 17,
    filterID: ResponsabilidadesIDs.RelacionamentoInterno,
    foto: "equipe/fotos/2 - COPR/Roxana_Fernandes.jpg",
    nome: "Roxana Fernandes",
    responsabilidade: Responsabilidades.RelacionamentoInterno,
    email: "roxana.fernandes@energisaterceiros.com.br"
   },
  {
   id: 52,
   filterID: ResponsabilidadesIDs.OrcamentoGCP,
   foto: "equipe/fotos/4 - GEIN/COGI 7 - Talieh Shaikhzadeh.jfif",
   nome: "Talieh Ferreira",
   responsabilidade: Responsabilidades.OrcamentoGCP,
   email: "talieh.ferreira@energisaterceiros.com.br"
  },
  {
   id: 53,
   filterID: ResponsabilidadesIDs.GestaoGovernanca,
   foto: "equipe/fotos/4 - GEIN/COPI 3 - Tatyanna Nadabia.jfif",
   nome: "Tatyanna Lima",
   responsabilidade: Responsabilidades.GestaoGovernanca,
   email: "tatyanna.lima@energisa.com.br"
  },
  {
   id: 54,
   filterID: ResponsabilidadesIDs.COTD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COTD 6 - Thales Campelo.png",
   nome: "Thales Campelo",
   responsabilidade: Responsabilidades.COTD,
   email: "thales.conceicao@energisa.com.br "
  },
  {
   id: 55,
   filterID: ResponsabilidadesIDs.ENOVA,
   foto: "equipe/fotos/4 - GEIN/COGI x13 - Thamirys Severo.jfif",
   nome: "Thamirys Medeiros",
   responsabilidade: Responsabilidades.ENOVA,
   email: "thamirys.medeiros@energisaterceiros.com.br"
  },
  {
   id: 56,
   filterID: ResponsabilidadesIDs.COPD,
   foto: "equipe/fotos/6 - GETD - Hub EDL/COPD 7 - Vinicius Barbutti.jpg",
   nome: "Vinícius Gatti",
   responsabilidade: Responsabilidades.COPD,
   email: "vinicius.gatti@energisa.com.br"
  },
  {
   id: 57,
   filterID: ResponsabilidadesIDs.GestaoProjetos,
   foto: "equipe/fotos/4 - GEIN/COGI 6 - Vinicius Ferreira.jpeg",
   nome: "Vinícius Goulart",
   responsabilidade: Responsabilidades.GestaoProjetos,
   email: "vinicius.goulart@energisa.com.br"
  }
 ];

export const CardEquipePesquisaData = { funcionarios };
