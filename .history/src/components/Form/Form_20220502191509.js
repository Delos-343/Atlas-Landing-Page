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

  }

  return (
    <div>Form</div>
  );
}

export default Form;
