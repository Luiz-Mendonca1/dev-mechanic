import { PostProps } from '@/app/utils/post.types';
import styles from './styles.module.scss'
import { getItemBySlug } from '@/app/utils/actions/get-data'
import { Hero } from '@/app/components/hero';
import { Phone } from 'lucide-react';
import { Container } from '@/app/components/container';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({params:{slug}}:{
    params: {slug: string}
}): Promise<Metadata> {
    try{
        const{objects}:PostProps= await getItemBySlug(slug)
        .catch(()=>{
            return{
                title: "dev-mechanic",
                description: "mecanica automotiva",
            }
        })
        return{
            title: `dev-mechanic - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            keywords:['devmechanic', 'troca de oleo'],
            openGraph:{
                title: `DevMechanic - ${objects[0].title}`,
                images: [`${objects[0].metadata.banner.url}`]
            },
            robots:{
                index:true,
                follow:true,
                nocache:true,
                googleBot:{
                index:true,
                follow:true,
                noimageindex: true
    }
  }
        }

    }catch(error){
        return{
            title: "dev-mechanic",
            description: "mecanica automotiva",
        }

    }
}

export default async function Page({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    
    const {objects}: PostProps = await getItemBySlug(slug);
    console.log(JSON.stringify(objects[0], null, 2));

    return (
        <div>
            <Hero 
                heading={objects[0].title}
                buttonUrl={objects[0].metadata.button.url}
                buttonTitle={objects[0].metadata.button.title}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={26} color='#FFF'/>}
            />
            
            <Container>
                <section className={styles.about}>

                    <article className={styles.innerAbout}>
                        <h1>
                            {objects[0].metadata.description.title}
                        </h1>
                        <p>
                            {objects[0].metadata.description.text}
                        </p>

                        {objects[0].metadata.description.button_active && (
                            <a href={objects[0].metadata.description.button_url as string}
                            target='_blank'
                            className={styles.link}
                            >
                                {objects[0].metadata.description.button_title}
                            </a>
                        )}
                    </article>

                    <div className={styles.bannerAbout}>
                        <Image
                            className={styles.imageAbout}
                            alt={objects[0].title}
                            fill={true}
                            src={objects[0].metadata.description.banner.url}
                            sizes='(max-width: 480px) 100vw, (max-width:1024px) 75vw, 60vw'
                            />
                    </div>
                </section>
            </Container>
            
        </div>
    )
}