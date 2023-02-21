import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectThree.module.css'

export default function UseEffectThree(){

    const [number, setNumber] = useState(0);

    const[value,setValue] = useState(-10)

    useEffect(() =>{
       
        setValue(value + 10);
    },[number])
    
    //even if the use state starts at -10 the useeffect triggered instantly -> to default zero
    //the use effect will only run again when we click the button which will increment by 10
    //the use effect will only update when the value changes

    //useEffect lets you perform side effects to your components, 
    //it runs on every render causing it to make an infinite loop that will crash your browser

    return(
        <>
            <div  className={styles.main}>
                <div className={styles.homeButton}>
                    <Link href="/">Home</Link>
                </div>
                <div className={styles.title}>
                    <h1>UseEffectThree</h1>
                </div>
                <div>
                    <button className={styles.button} onClick={()=> setNumber(number + 1)}>Click Me!</button>
                </div>
                <div className={styles.number}>
                    {value}
                </div>
            </div>
        </>
    )
}