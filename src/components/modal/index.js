import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './ModalForm.css';

Modal.setAppElement('#root');

const ModalForm = ({ addItem, modalIsOpen, setModalIsOpen, currentContact, setCurrentContact }) => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const checkCurrentContact = () => {
    setName(currentContact?.name || "");
    setSurName(currentContact?.surName || "");
    setPhone(currentContact?.phone || "");

  };
  const handleSubmit = () => {
    if (name.length && surName.length && phone.length) {
      addItem({ id: currentContact?.id || "", name, surName, phone });
      setCurrentContact(null);
      setName("");
      setSurName("");
      setPhone("");
      setModalIsOpen(false);
    }
    else
      alert("Please fill the data");

  };


  useEffect(() => {
    modalIsOpen && checkCurrentContact();
  }, [modalIsOpen]);

  return (
    <div className="modal-container">
      <div className="submit-button" onClick={() => setModalIsOpen(true)}>
        <span className="contact-add-btn" >
          <div className="btn-plus">
            <p>&#43;</p>
          </div>
        </span>
      </div>
      <Modal className="contact-form" isOpen={modalIsOpen} >
        <div className="contact-form-section">
          <div className="handleClose">
            <button className="modal-close-btn" onClick={() => {
              setModalIsOpen(false);
              setCurrentContact(null);
            }}>
              &#88;
            </button>
          </div>
          <div className="input-form">
            <input
              className="form-input-name"
              placeholder="Name"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)} />
            <input
              className="form-input-surname"
              placeholder="Surname"
              type="text"
              value={surName}
              name="contactSurname"
              onChange={(e) => setSurName(e.target.value)} />
            <input
              className="form-input-phone"
              placeholder="Phone"
              type="text"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)} />
            <div>
              <button className="modal-add-btn" onClick={() => handleSubmit()}>
                &#10003;
          </button>
            </div>
          </div>
        </div>
      </Modal>
    </div >
  );
};
export default ModalForm;
