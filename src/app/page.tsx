import { json } from 'stream/consumers';
import { Submenu } from './components/header/home/submenu';
import { getDataHome, getSubMenu } from './utils/actions/get-data';
import { HomeProps } from './utils/home.types';
import { Hero } from './components/hero';
import { Phone, Wrench } from 'lucide-react'; // Sugestão: Importe um ícone que combine mais, se desejar
import { Services } from './components/header/home/services';
import { Container } from './components/container';
import Footer from './components/header/home/footer';
import { MenuProps } from './utils/menu.types';

export default async function Home() {
  const {object}: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu()

  return (
    
    <main>

      {menu.objects.length > 0 && <Submenu menu={menu}/>}

      <Hero 
        heading={object.metadata.heading}
        buttonUrl="#servicos" 
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={26} color='#FFF'/>}
      />

      <Container>
      <Services object={object}/>
      <Footer object={object}/>

      </Container>
    </main>
  );
}