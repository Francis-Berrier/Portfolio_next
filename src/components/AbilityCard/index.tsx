'use client'
import styles from './AbilityCard.module.scss'
import type { AbilityType } from '../../types/AbilitiesType';
import { useFloating, offset, flip, shift } from '@floating-ui/react-dom-interactions';
import { useState, useRef } from 'react';

function AbilityCard({ability}: {ability: AbilityType}) {
    const [open, setOpen] = useState(false);
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
                ref={reference}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={styles.logo}><img src={ability.imgUrl}/></div>
                <div className={styles.name}>{ability.name}</div>
                <div className={styles.progress}>
                    <span className={styles.progressBar}>
                        <div className={styles.progressFill} style={{width: `${ability.percentProgress}%`}}/>
                    </span>
                    <span>{ability.percentProgress}%</span>
                </div>
            </article>
        {open && (
            <div className={styles.tooltip}
            ref={floating}
            style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
            }}
            >
                <div className={styles.tooltipImage}>
                    <img src={ability.imgUrl}/>
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