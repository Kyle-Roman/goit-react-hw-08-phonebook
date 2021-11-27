import React, {useState} from 'react';
import Form from '../Form/Form';
import ContactsList from '../ContactList/ContactsList';
import Filter from '../Filter/Filter';
import { useGetContactsQuery, useGetFilteredContactsQuery, useDeleteContactMutation } from '../api/api';
import s from './ViewsStyles.module.css';    

export default function Usersview() {
  const [contactName, setContactName] = useState('');
  const { data, error, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const { data: filteredData } = useGetFilteredContactsQuery(contactName, {
    skip: contactName === '',
  });

  const onFilterChange = (e) => {
    setContactName(e.currentTarget.value);
    };
    
    return (
        <div>
            <h1 className={s.title}>Phonebook</h1>
            <Form />
            <h2 className={s.title}>Contacts</h2>
            <Filter onChange={onFilterChange} value={contactName} />
            {error ? (
                <>Oh no, there was an error</>
            ) : isFetching ? (
                <>Loading...</>
            ) : data && (contactName === '') ? (
                <ContactsList contacts={data} onDelete={deleteContact} />
            ) : filteredData && (contactName !== '') ? (
                <ContactsList contacts={filteredData} onDelete={deleteContact} />
            ) : null}
        </div>
    );    
};