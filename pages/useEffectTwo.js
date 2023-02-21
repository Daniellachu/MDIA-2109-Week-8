import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectTwo.module.css'

export default function UseEffectTwo(){

    const [number, setNumber] = useState(0);

    useEffect(() =>{
        console.log(number);
        setNumber(number + 50);
    },[])
    
    //Adding the ,[] in between the curly bracket & the round bracket
    //will tell it to only run the useeffect to run once when the page loads
    //Instead of havingh zero as the initial number, when the page loads it will be 50 because of the useeffect loading quicklu
    //the 0 will still be the default number is just that the 50 will show up right away
    //the usestateeffect will only run once when the page loads

    //useEffect lets you perform side effects to your components, 
    //it runs on every render causing it to make an infinite loop that will crash your browser

    return(
        <>
            <div className={styles.main}>
                <div className={styles.homeButton}>
                    <Link href="/">Home</Link>
                </div>
                <div className={styles.title}>
                    <h1>UseEffectTwo</h1>
                </div>
                <h3 className={styles.desc}>Runs only once</h3>
                <div className={styles.number}>
                    {number}
                </div>

            </div>
            
        </>
    )
}

