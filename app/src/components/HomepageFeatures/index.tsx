import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ทำความรู้จักระบบ Odoo 17',
    Svg: require('@site/static/img/undraw_learning_re_32qv.svg').default,
    description: (
      <>
        Odoo เป็น Software ERP ซึ่งรวบรวมชุดเครื่องมือซอฟต์แวร์การจัดการธุรกิจของเบลเยียม ซึ่งรวมถึง CRM, อีคอมเมิร์ซ, การเรียกเก็บเงิน, การบัญชี, การผลิต, คลังสินค้า, การจัดการโครงการ และการจัดการสินค้าคงคลัง.
      </>
    ),
  },
  {
    title: 'เริ่มต้นเรียนรู้ระบบ Odoo',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        การเรียนรู้ของเราจะเริ่มต้นจาก Zero to hero
        เริ่มต้นการเรียนรู้ไปกับเรา <button>Start Learning</button> ไดเร็กทอรี.
      </>
    ),
  },
  {
    title: 'โปรเจกต์ที่สร้างโดยระบบ Odoo',
    Svg: require('@site/static/img/undraw_project_complete_lwss.svg').default,
    description: (
      <>
        เราจะแสดงผลงานที่ได้จากการเรียนรู้ ระบบ Odoo ทั้งหมดและแบ่งบันความรู้ทั้งหมดให้เป็นในกรณีศึกษา
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
