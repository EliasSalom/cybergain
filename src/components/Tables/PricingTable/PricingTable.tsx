import { FC } from 'react';
import styles from './PricingTable.module.scss';

interface Package {
  packageName: string;
  price: string;
  features: string[];
}

interface PricingTableProps {
  packages: Package[];
  allFeatures: string[];
}

const PricingTable: FC<PricingTableProps> = ({ packages, allFeatures }) => {
  return (
    <div className={styles['table-container']}>
      <table className={styles['table']}>
        <thead>
          <tr className={styles['row']}>
            <th className={styles['header-cell']}>Features</th>
            {packages.map((pkg, index) => (
              <th className={styles['header-cell']} key={index}>{pkg.packageName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className={styles['row']}>
            <td className={styles['cell']}>Price</td>
            {packages.map((pkg, index) => (
              <td className={styles['cell']} key={index}>{pkg.price}</td>
            ))}
          </tr>
          {allFeatures.map((feature, featureIndex) => (
            <tr className={styles['row']} key={featureIndex}>
              <td className={styles['cell']}>{feature}</td>
              {packages.map((pkg, index) => (
                <td className={styles['cell']} key={index}>
                  {pkg.features.includes(feature) ? '✓' : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
