'use client';
import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonProps = {
  name: string;
  href?: string; 
  onClick?: () => void;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

function Button({ name, href, onClick, external = false, type = 'button'}: ButtonProps) {
  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.button}>
        {name}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {name}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {name}
    </button>
  );
}

export default Button;