'use client'
import styles from './FormContact.module.scss';
import Modal from 'react-modal'
import emailJs from '@emailjs/browser';
import { verifEmail } from '../../utils/validateForm';
import Button from '../Button';
import { useState } from 'react';
import { useLang } from '../../context/LangContext';
import type { FormContactType } from '../../types/ContactType';
import type { ContactDatasType } from '../../types/ContactType';

function FormContact() {
    const [errorMessage, setErrorMessage] = useState("");
    const [modalIsOpen, setModalIsOpen]= useState(false);
    const [formValues, setFormValues]= useState<FormContactType>({
        name: '',
        surname: '',
        email: '',
        society: '',
        message: ''
    });
    
    function openModal(message: string) {
         setModalIsOpen(true);
        setErrorMessage(message);

    };

    function closeModal() {
        setModalIsOpen(false);
        setErrorMessage("");
    };
    function emptyForm() {
        setFormValues({
            name: '',
            surname: '',
            email: '',
            society: '',
            message: ''
        });
    };
    function afterSend(message: string) {
        openModal(message);
        emptyForm();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const  {name, value}: {name: string; value: string}= e.target;
        setFormValues (prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!contactDatas) return;
        if (!formValues.name || !formValues.surname || !formValues.email || !formValues.message) {
            setModalIsOpen(true);
            setErrorMessage(contactDatas.formMissedField);
            return;
        }
        const validateEmail= verifEmail(formValues.email);
        if(!validateEmail) {
            setModalIsOpen(true);
            setErrorMessage(contactDatas.formWrongEmail);
            return;
        }
        const template= process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const service= process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const key= process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if(typeof template === 'undefined' || typeof service === 'undefined') return;
        emailJs.send(
            service, 
            template,
            {
                name: formValues.name,
                surname: formValues.surname,
                email: formValues.email,
                society: formValues.society,
                message: formValues.message
            },
            key
        )
        .then(() => afterSend(contactDatas.formSendEmail))
        .catch(() => afterSend(contactDatas.formErrorEmail));
    }
    const { datas } = useLang();
    if(!datas) return null;
    const contactDatas: ContactDatasType= datas.datas.contact;
        
    if(!contactDatas) return null;

    return (
        <div className={styles.formContact}>
            <form  className={styles.form} id="form-connexion" onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                    <label className={styles.inputStyle}>
                        <div className={styles.labels}>
                            <span>{contactDatas.labelName}</span><span className={styles.star}>*</span>
                        </div>
                        <input type="text" name="name" value={formValues.name} onChange={handleChange}/>
                    </label>
                    <label className={styles.inputStyle}>
                         <div className={styles.labels}>
                            <span>{contactDatas.labelSurname}</span><span className={styles.star}>*</span>
                        </div>
                        <input type="text" name="surname" value={formValues.surname} onChange={handleChange}/>
                    </label>
                    <label className={styles.inputStyle}>
                        <div className={styles.labels}>
                            <span>{contactDatas.labelEmail}</span><span className={styles.star}>*</span>
                        </div>
                        <input type="text" name="email" value={formValues.email} onChange={handleChange}/>
                    </label>
                    <label className={styles.inputStyle}>
                         <div className={styles.labels}>
                            <span>{contactDatas.labelSociety}</span>
                        </div>
                        <input type="text" name="society" value={formValues.society} onChange={handleChange}/>
                    </label>
                </div>
                <div className={styles.messageStyle}>
                    <label className={styles.inputStyle} htmlFor='message'>
                        <div className={styles.labels}>
                            <span> {contactDatas.labelMessage}</span><span className={styles.star}>*</span>
                        </div>
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formValues.message} 
                    onChange={handleChange}
                    rows={6}
                    cols={40}
                    placeholder={contactDatas.placeHolder}>
                    </textarea>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.submitButton}>
                    <Button type="submit" name={contactDatas.labelSubmit}/>
                    </div>
                </div> 
            </form>
            
            <Modal
                isOpen= {modalIsOpen}
                onRequestClose= {closeModal}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <div onClick={closeModal} className={styles.errorContainer}>
                    {errorMessage}
                </div>
            </Modal>
        </div>
    )
}

export default FormContact;