import styles from './modules-ui.module.scss';

/* eslint-disable-next-line */
export interface ModulesUiProps {}

export function ModulesUi(props: ModulesUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModulesUi!</h1>
    </div>
  );
}

export default ModulesUi;
