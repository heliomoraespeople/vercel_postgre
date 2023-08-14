import Link from 'next/link';
import styles from './FontsDemo.module.css';

export interface IFontsDemo {
  sampleTextProp: string;
}

const FontsDemo: React.FC<IFontsDemo> = () => {
  return (
    <div className={styles.container}>
      <h1>HEADING 01</h1>
      <p>H1 5xl size 44 height 48</p>
      <h2>HEADING 02</h2>
      <p>H2 4xl size 40 height 44</p>
      <h3>HEADING 03</h3>
      <p>H3 3xl size 32 height 36</p>
      <h4 className="font-extrabold">HEADING 04 EBLD</h4>
      <h4>HEADING 04 SBLD</h4>
      <p>H4 xl size 28 height 32</p>
      <h5>HEADING 05 UPK</h5>
      <h5>Heading 05 LOWK</h5>
      <p>H5 lg size 16 height 24</p>
      <p className="textbody01">Text body 01</p>
      <p>Text body 02 Reg</p>
      <p>size 12 height 16</p>
      <p className="font-bold">Textbody 02 BLD</p>
      <Link className="text-xs" href="#">
        Text Small Link
      </Link>
    </div>
  );
};

export default FontsDemo;
