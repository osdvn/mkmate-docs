import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bạn là người dùng mới?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Hãy tìm hiểu cách dùng sản phẩm <a href="/docs/intro">tại đây</a>.
      </>
    ),
  },
  {
    title: 'Phát hiện lỗi sản phẩm?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Vui lòng <a href="https://my.osd.vn/issue/new">tạo phiếu yêu cầu hỗ trợ</a> để thông báo với chúng tôi.
      </>
    ),
  },
  {
    title: 'Đề xuất tính năng',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Kế hoạch cải tiến sản phẩm liên tục cập nhật <a href="https://my.osd.vn/issue/new">issue mới</a> do bạn đề xuất.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
