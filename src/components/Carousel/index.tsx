'use client'
import styles from './Carousel.module.scss'
import { useRef, useLayoutEffect, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

function Carousel({pictures, speed}: {pictures: string[], speed: number}) {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const timeout= speed*1000;

    useLayoutEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.offsetWidth);
        }
    }, []);
    const [isAnimating,setIsAnimating] = useState(false);
    const [prevIndex, setPrevIndex] = useState(0);
    const [currentIndex, setCurrentIndex]= useState(0);

    const nextSlide= useCallback(() => {
        setIsAnimating(true);
        setPrevIndex(currentIndex);
        setCurrentIndex((index) => ( index + 1) % pictures.length);
    }, [currentIndex, pictures.length]);
    
    useEffect(() => {
        if(!pictures || pictures.length === 0) return;

        pictures.forEach((pic) => {
            const img = new Image();
            img.src = pic;
        });
        const timer = setInterval((nextSlide), timeout);
        return () => clearInterval(timer);

    }, [pictures, nextSlide, timeout]);
       
    return (
        <div 
            ref={carouselRef} 
            className={styles.carousel}
            role="region"
            aria-roledescription="carousel"
            aria-label="Project image carousel"
        >
            <motion.img
                key={`curr-${currentIndex}`}
                src={pictures[currentIndex]} 
                alt={`Image ${currentIndex +1} sur ${pictures.length}`}
                initial={{ x: width}}
                animate={{ x: 0 }}
                onAnimationComplete={() => {setIsAnimating(false)}}
                transition={{ duration : 0.5 }}
            />
            { isAnimating &&
            <motion.img
                key={`prev-${prevIndex}`}
                src={pictures[prevIndex]} 
                alt=""
                aria-hidden="true"
                initial={{ x: 0 }}
                animate={{ x: -width}}
                transition={{ duration : 0.5 }}
            />
            }              
        </div>
    )        
}
export default Carousel
    
