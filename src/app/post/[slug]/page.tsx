import styles from './styles.module.scss'
import { getItemBySlug } from '@/app/utils/actions/get-data'

export default async function Page({params: {slug}}:{
    params:{slug:string}
}){
    const data = await getItemBySlug(slug)

    return(
        <div>
            <h1>Page test {slug}</h1>
        </div>
    )
}