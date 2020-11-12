import React, { useState, useEffect } from 'react';
import ContactItem from '../contactItem/index';
import ModalForm from '../modal/index';
import { v4 as uuidv4 } from 'uuid';

import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [contactSearch, setContactSearch] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    setContacts([
      { id: uuidv4(), name: "Vitalii", surName: "Bobrov", phone: "88005553535" },
      { id: uuidv4(), name: "Anders", surName: "Firpin", phone: "4807777835" },
      { id: uuidv4(), name: "Tom", surName: "Faul", phone: "357225911" }]);
  }, []);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(item => {
        return (item.name).toLowerCase().includes(contactSearch.toLowerCase());
      })
    );
  }, [contactSearch, contacts]);

  const deleteItem = (id) => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const addItem = ({ id, name, surName, phone }) => {
    deleteItem(id);
    setContacts(prevState => {
      return [...prevState, { id: uuidv4(), name, surName, phone }];
    });
  };

  const openEditModal = (data) => {
    setCurrentContact(data);
    setModalIsOpen(true);
  };

  return (
    <div className="contact-container">
      <header className="header-contact">
        <h1>Contacts</h1>
        <div className="search-input">
          <input type="text" placeholder="Search" className="heandleSearch"
            onChange={(e) => { setContactSearch(e.target.value); }} />
          <ModalForm addItem={addItem} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} currentContact={currentContact} setCurrentContact={setCurrentContact} />
        </div>
      </header>
      <ul className="contact-list">
        {filteredContacts.map((item, index) => <ContactItem deleteItem={deleteItem} key={index} data={{ ...item, index }} openEditModal={openEditModal} />)}
      </ul>
    </div>
  );
};
export default ContactList; 