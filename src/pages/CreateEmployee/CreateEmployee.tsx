import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm';
import styles from './CreateEmployee.module.css';
export default function CreateEmployee() {
  return (
    <div className={styles.formPage}>
      <EmployeeForm />
    </div>
  );
}
