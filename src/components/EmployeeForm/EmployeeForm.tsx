import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './EmployeeForm.module.css';

import { useFormik } from 'formik';

interface Credentials {
  name: string;
  surname: string;
  age: string;
  position: string;
}

export const EmployeeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      position: '',
    },
    onSubmit: (values: Credentials) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} action="" className={styles.employeeForm}>
      <Input
        title="Name*"
        name="name"
        type="text"
        placeholder="John"
        id="1"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <Input
        title="Surname*"
        name="surname"
        type="text"
        placeholder="Johnson"
        id="2"
        value={formik.values.surname}
        onChange={formik.handleChange}
      />
      <Input
        title="Age*"
        name="age"
        type="text"
        placeholder="25"
        id="3"
        value={formik.values.age}
        onChange={formik.handleChange}
      />
      <Input
        title="Job Position"
        name="position"
        type="text"
        placeholder="QA"
        id="4"
        value={formik.values.position}
        onChange={formik.handleChange}
      />
      <Button title="Create" type="submit" />
    </form>
  );
};
