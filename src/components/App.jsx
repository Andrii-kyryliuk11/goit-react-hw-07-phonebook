import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { addContact, fetchContacts } from 'redux/operation';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.items);

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) || [];
  // });
  // const [filter, setFilter] = useState('');

  // const onFormSubmit = (name, number) => {
  //   const contactToAdd = { name: name, number: number, id: nanoid() };
  //   // if (JSON.parse(localStorage.getItem('contacts')).length === 0) {
  //   //   setContacts(state => [
  //   //     ...state,
  //   //     { name: name, number: number, id: nanoid() },
  //   //   ]);
  //   // }
  //   console.log(contactToAdd);
  //   // for (const contact of contacts) {
  //   //   if (contact.name.toLowerCase() === name.toLowerCase()) {
  //   //     alert(`${contact.name} is alerady in Contacts`);
  //   //     break;
  //   //   }
  //   dispatch(addContact(contactToAdd));

  //   // }

  //   // });
  // };
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    // setContacts([...updatedContacts]);
  };

  const handleFilter = value => {
    // setFilter(value);
  };

  // const filteredData = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList deleteContact={deleteContact} />
    </div>
  );
}
