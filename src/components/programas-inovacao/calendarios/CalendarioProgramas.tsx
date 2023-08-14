/* import ButtonLink from '../../buttons/link/ButtonLink'; */
import ButtonLink from '../../buttons/link/ButtonLink';
import styles from './CalendarioProgramas.module.css';

const CalendarioProgramas: React.FC = () => {
  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = '/download/2023_Calendário - Programas Inovação.pdf';
    link.download = 'Calendário - Programas Inovação.pdf';
    link.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionLeft}>
        <picture>
          <img alt="" src="/programas_calendar.jpg" />
        </picture>
      </div>
      <div className={styles.sectionRight}>
        <h3>CALENDÁRIOS</h3>
        <p>
          Fique por dentro das datas para realização das defesas de suas
          propostas nos Programas de Inovação.
        </p>

        <ButtonLink
          color="cinza-100"
          label="Baixar calendário"
          onClick={handleDownload}
        />
      </div>
    </div>
  );
};

export default CalendarioProgramas;
