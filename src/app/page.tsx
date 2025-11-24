import { json } from 'stream/consumers';
import { Submenu } from './components/header/home/submenu';
import './globals.css';
import { getDataHome } from '@/utils/actions/get-data';
import { HomeProps } from '@/utils/home.types';

export default async function Home() {
  const data: HomeProps = await getDataHome();
    console.log(JSON.stringify(data, null, 2));
  return (
    
    <main>
      <Submenu />
    </main>
  );
}