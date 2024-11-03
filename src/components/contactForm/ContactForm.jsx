import { useDispatch } from 'react-redux';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { addContact } from '../../redux/contactsOps';

import css from './ContactForm.module.css';

const ContactFormSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(
      /^[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{4}$/,
      'Phone must be XXX-XXX-XXXX'
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage
              className={css.message}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field type="text" name="number" />
            <ErrorMessage
              className={css.message}
              name="number"
              component="span"
            />
          </label>
          <button className={css.btnSubmit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
