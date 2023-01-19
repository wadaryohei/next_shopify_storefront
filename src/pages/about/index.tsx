import React from 'react';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Text from 'components/elements/Text';
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_TITLE } from 'constants/base';
import { PAGE_ABOUT } from 'constants/pages';

//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = () => {
  return (
    <Layout title={PAGE_ABOUT} description={SITE_DESCRIPTION} image={SITE_IMAGE}>
      <Container xl>
        <Text b size={'text-4xl'}>
          {SITE_TITLE}
          <br />
        </Text>

        <div className={'mt-8'}>
          <Text size={'text-lg'} isLoose>
            このサイトは「{SITE_DESCRIPTION}」をコンセプトに、レコードやポスターを空間に置いて、インテリアとしても楽しめるプロダクトを開発しています。
            <br />
            <br />
            レコードをひとつのインテリアとすることで、家のいつもの空間をシンプルにおしゃれに彩ることができます。
            <br />
            また、レコードは実際の音楽を視聴することが可能で、ひとつひとつのレコードにはそれぞれの空間の特徴にマッチしたレコードを配置することで、より一層、心安らぐ空間に仕立て上げることが可能です。
            <br />
            <br />
            レコードのジャケットと同じポスターも展開しており、空間を彩る「揺らぎ」の空間を存分に体験していただくことが可能です。
          </Text>
        </div>
      </Container>
    </Layout>
  );
};

export default Index;
