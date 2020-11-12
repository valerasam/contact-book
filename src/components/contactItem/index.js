import React from 'react';
import './ContactItem.css';

const ContactItem = ({
  deleteItem,
  openEditModal,
  data: { id, name, surName, phone },
  data
}) => {

  return (
    <div className="contact-item">
      <li className="item">
        <div className="contact-title">
          <div className="contact-avatar">
            <img src="https://www.flaticon.com/svg/static/icons/svg/3237/3237472.svg" alt="avatar" />
          </div>
          <div className="contact-info">
            <div className="person-name">
              <div className="name">
                {name}
              </div>
              <div className="surName">
                {surName}
              </div>
            </div>
            <div className="phone">
              {phone}
            </div>
          </div>
          <div className="contact-buttons">
            <button className="contact-delete-btn"
              onClick={() => deleteItem(id)} >
              &#88;
            </button>
            <button className="contact-edit-btn" onClick={() => { openEditModal(data); }} >
              &#62;
            </button>
          </div>
        </div>
      </li>
    </div>
  );

};

export default ContactItem;