import styles from './nx-comp.module.scss';

/* eslint-disable-next-line */
export interface NxCompProps {}

export function NxComp(props: NxCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NxComp!</h1>
    </div>
  );
}

export default NxComp;
