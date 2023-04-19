import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operation';
import { useRef } from 'react';

export const ContactList = ({ data }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.items);
  const isLoading = useSelector(store => store.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts !== [] &&
        contacts.map(({ name, number, id }, i) => {
          return (
            <li key={id}>
              <span>
                {i + 1}.{name}: {number}
              </span>
              <button
                className={css.button}
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
