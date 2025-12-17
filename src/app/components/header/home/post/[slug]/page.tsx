import styles from './styles.module.scss'
import { getItemBySlug } from '@/utils/actions/get-data'

export default async function Page({params: {slug}}:{
    params:{slug:string}
}){
    const data = await getItemBySlug(slug)
    console.log(JSON.stringify(data, null, 2))

    return(
        <div>
            <h1>Page test</h1>
            <h1>{slug}</h1>
        </div>
    )
}