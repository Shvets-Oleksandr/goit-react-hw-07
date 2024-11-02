import { useSelector } from 'react-redux';

import Contact from '../contact/Contact';

import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
