import { PostProps } from '@/app/utils/post.types';
import { getItemBySlug } from '@/app/utils/actions/get-data'
import { Metadata } from 'next';
import { Content } from './components/content';
import { Suspense } from 'react';
import LoadingPost from './loading';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // Await params aqui
    const { slug } = await params;

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

export default async function Page({ params }: Props) {
    const { slug } = await params;

    return (
        <>
        <Suspense fallback={<LoadingPost />}>
            <Content slug={slug}></Content>
        </Suspense>
        </>
    )
}