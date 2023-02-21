import Link from "next/link";
import Carousel from "@/components/carousel";
import styles from '@/styles/CarouselPage.module.css';

export default function CarouselPage(){
    return(
        <>
            <div className={styles.main}>
                <div className={styles.homeButton}>
                    <Link href="/">Home</Link>
                </div>
                
                <Carousel/>
            </div>
        </>
    )
}