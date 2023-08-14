import { useRouter } from 'next/router';
import { ReactElement, useMemo } from 'react';
import Crumb from '../crumb/Crumb';
import styles from './BreadCrumbBase.module.css';

export interface IBreadCrumbBase {
  getDefaultTextGenerator: (subpath: string) => string;
}

type CrumbList = {
  href: string;
  text: ReactElement | string;
};

const _defaultGetDefaultTextGenerator = (path: string): string => path;

const BreadCrumbBase: React.FC<IBreadCrumbBase> = ({
  getDefaultTextGenerator = _defaultGetDefaultTextGenerator
}) => {
  const router = useRouter();
  const iconHouse = (
    <a>
      <picture>
        <img src="/icon_house.svg" alt="Icone Casa" />
      </picture>{' '}
      <span>página inicial</span>
    </a>
  );

  const breadcrumbs = useMemo(
    function generateBreadCrumbs(): CrumbList[] {
      const asPathWithoutQuery = router.asPath.split('?')[0];
      const asPathNestedRoutes = asPathWithoutQuery
        .split('/')
        .filter(v => v.length > 0);
      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
        return { href, text: getDefaultTextGenerator(subpath) };
      });
      return [{ href: '/', text: iconHouse }, ...crumblist];
    },
    [router.asPath, getDefaultTextGenerator]
  );

  return (
    <div className={`${styles.container}`}>
      {breadcrumbs.map((crumb: CrumbList, index: number) => (
        <Crumb {...crumb} key={index} last={index === breadcrumbs.length - 1} />
      ))}
    </div>
  );
};

export default BreadCrumbBase;
