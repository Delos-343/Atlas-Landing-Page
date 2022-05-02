import React, { useState } from 'react';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';

import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormTitle,
  FormLabel,
  FormInputRow,
  FormButton,
  FormMessage,
} from './FormStyles';

const Form = () => {

  const [name, setName,
         email, setEmail,
         subject, setSubject,
         message, setMessage] = useState('');

  const [error, setError,
         success, setSuccess] = useState(null);

  const handleSubmit = (e) => {

    e.preventDefault();
    const  resultError = validateForm({ name, email, subject, message });

    if(resultError !== null) {
      setError(resultError);
      return;
    }

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setError(null);
    setSuccess('Message sent');
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4}},
  };

  const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },

		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
    
		{
			label: 'Subject',
			value: subject,
			onChange: (e) => setSubject(e.target.value),
		},
		{
			label: 'Message',
			value: message,
			onChange: (e) => setMessage(e.target.value),
		},
	];

  return (
    <div>Form</div>
  );
}

export default Form;
