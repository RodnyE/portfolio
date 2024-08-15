
import { useState, useEffect } from 'react'
import styles from './brutalist.module.css'

let idCount = 0;

export function TextField({ type, placeholder, multiline, value, onInput }) {
  const [id, setId] = useState(null);

  useEffect(() => {
    idCount++;
    setId(idCount);
  }, []);

  return (
    !multiline ?
      <input
        type={type || 'text'}
        value={value}
        onInput={onInput}
        placeholder={placeholder}
        className={styles.input}
        id={id}
      />
      :
      <textarea
        className={styles.input}
        value={value}
        onInput={onInput}
        placeholder={placeholder}
        id={id}
      />

  )
}