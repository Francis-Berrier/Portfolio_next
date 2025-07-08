'use client'
import styles from './AbilityCard.module.scss'
import type { AbilityType } from '../../types/AbilitiesType';
import { useFloating, offset, flip, shift } from '@floating-ui/react-dom-interactions';
import { useState, useRef, useEffect, useId } from 'react';

function AbilityCard({ability}: {ability: AbilityType}) {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const tooltipId = useId();

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.matchMedia('(hover: none)').matches);
        }
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        if (isMobile) {
        setOpen((prev) => !prev);
        }
    };
    const handleMouseEnter = () => {
        hoverTimeout.current = setTimeout(() => {
        setOpen(true);
        }, 1000);
    };
    const handleMouseLeave = () => {
        if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
        hoverTimeout.current = null;
        }
        setOpen(false);
    };
    const handleFocus = () => {
        setOpen(true)
    };
    const handleBlur = () => {
        setOpen(false)
    };
    const { x, y, reference, floating, strategy}= useFloating({
        open, 
        onOpenChange: setOpen,
        strategy: 'absolute',
        placement: 'top',
        middleware: [offset(5), flip(), shift()],
    });
    
    return (
        <section className={styles.superContainer}>
            <article className={styles.container}
                onClick={handleClick}
                ref={reference}
                onMouseEnter={!isMobile ? handleMouseEnter : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                onFocus={handleFocus}
                onBlur={handleBlur}
                aria-describedby={open ? tooltipId : undefined}
                tabIndex={0}
                aria-expanded={open}
            >
                <div className={styles.logo}><img src={ability.imgUrl}/></div>
                <div className={styles.name}>{ability.name}</div>
                <div className={styles.progress}>
                    <span className={styles.progressBar}
                        role='progressbar' 
                        aria-valuemax={100}
                        aria-valuemin={0}
                        aria-valuenow={ability.percentProgress}
                        aria-label={`${ability.percentProgress}% progression en ${ability.name}`}
                    >
                        <div className={styles.progressFill} style={{width: `${ability.percentProgress}%`}}/>
                    </span>
                    <span>{ability.percentProgress}%</span>
                </div>
            </article>
        {open && (
            <div className={styles.tooltip}
                id={tooltipId}
                ref={floating}
                role='tooltip'
                style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                }}
            >
                <div className={styles.tooltipImage}>
                    <img src={ability.imgUrl} alt={`${ability.name} logo`}/>
                </div>
                <div className={styles.tooltipText}>
                    <div className={styles.tooltipTitle}>
                        {ability.name}
                    </div>
                    <div>
                        {ability.description}
                    </div>
                </div>
            </div>
        )}
    </section>
        
    )
}

export default AbilityCard;