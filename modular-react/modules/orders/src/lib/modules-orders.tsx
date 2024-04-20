import styles from './modules-orders.module.scss';

/* eslint-disable-next-line */
export interface OrdersListProps {}

export function OrdersList(props: OrdersListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModulesOrders!</h1>4
    </div>
  );
}

export default OrdersList;
