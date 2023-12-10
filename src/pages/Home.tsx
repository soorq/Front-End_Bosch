import {
  dataCard,
  dataSlider,
  dataAboutTitle,
  DataNews,
} from '~@/constants/data';
import InfoMobile from '~@/_components/InfoMobile';
import Feauters from '~@/_components/Feauters';
import Product from '~@/_components/Product';
import Clients from '~@/_components/Clients';
import About from '~@/_components/About';
import Hero from '~@/_components/Hero';
import News from '~@/_components/News';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main className="overflow-hidden select-none">
      <Hero />
      <Feauters data={dataCard} />
      <About data={dataAboutTitle} />
      <Product />
      <Clients data={dataSlider} />
      <InfoMobile />
      <News data={DataNews} />
    </main>
  );
};

export default HomePage;
