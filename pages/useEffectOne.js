import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectOne.module.css'

export default function UseEffectOne(){

    const [number, setNumber] = useState(0);

    useEffect(() =>{
        console.log(number);
        setNumber(number + 1)
    })

    //useEffect lets you perform side effects to your components, 
    //it runs on every render causing it to make an infinite loop that will crash your browser
    //this will run on the background over and over again
    
    return(
        <>
            <div className={styles.main}>
                <div className={styles.homeButton}>
                    <Link href="/">Home</Link>
                </div>
                <div className={styles.title}>
                    <h2 >UseEffectOne</h2>
                </div>
                <h3 className={styles.desc}>infinite loop</h3>
                <div className={styles.number}>
                    {number}
                </div>
            </div>
        </>
        
    )
}