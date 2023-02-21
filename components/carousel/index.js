import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import styles from '@/styles/CarouselPage.module.css'

export default function Carousel(){

    const [img, setImg] = useState(0);

    const changeImage = (change) => {
        if (change == "backward"){
            setImg(img - 1);

            if (img == 0){
                setImg(5)
            }
            console.log(img);

        } else if (change == "forward"){
            setImg(img + 1);

            if (img == 5 ){
                setImg(0)
            }
            console.log(img);
        }
    }

    return(
        <>
           <div className={styles.main} style={{
                backgroundImage:"url(/carousel-images/" + img + ".jpg)", 
                backgroundSize:'cover',
                backgroundRepeat: "no-repeat",
                width:500,
                height: 300
                }}>  
                <div className={styles.arrowContainer}>      
                    <Image className={styles.arrows}
                        src={"/icons/leftArrow.png"}
                        alt={"/icons/leftArrow.png"}
                        width={50}
                        height={50}
                        onClick={() => changeImage("backward")}
                    />

                    <Image className={styles.arrows}
                        src={"/icons/rightArrow.png"}
                        alt={"/icons/rightArrow.png"}
                        width={50}
                        height={50}
                        onClick={() => changeImage("forward")}
                    />
                </div>
                <h1 className={styles.desc}>Carousel Page</h1>
            </div>
        </>
    )
}