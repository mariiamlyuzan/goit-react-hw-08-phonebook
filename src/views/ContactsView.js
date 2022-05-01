import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Section from '../components/Section';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../redux/contacts/contacts-operations';
import { getContacts } from '../redux/contacts/contacts-selectors';

export default function ContactsView() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await dispatch(contactsOperations.fetchContacts());
    }
    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2 className="title">Contacts</h2>
        <Filter />
        {contacts && <ContactList contacts={contacts} />}
      </Section>
    </Container>
  );
}
