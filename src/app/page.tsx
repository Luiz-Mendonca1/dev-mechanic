import { json } from 'stream/consumers';
import { Submenu } from './components/header/home/submenu';
import './globals.css';
import { getDataHome } from '@/utils/actions/get-data';
import { HomeProps } from '@/utils/home.types';
import { Hero } from './components/hero';

export default async function Home() {
  const {object}: HomeProps = await getDataHome();
    console.log(object.title);
  return (
    
    <main>
      <Submenu />
      <Hero 
        heading={object.metadata.heading}
        buttonUrl={object.metadata.cta_button.url}
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.banner.url}
      />
    </main>
  );
}