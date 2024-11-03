import { useDispatch } from 'react-redux';
import { IoPersonSharp } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';

import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <ul className={css.dataContactList}>
        <li>
          <IoPersonSharp /> {contact.name}
        </li>
        <li>
          <IoCall /> {contact.number}
        </li>
      </ul>
      <button type="button" onClick={handelDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
