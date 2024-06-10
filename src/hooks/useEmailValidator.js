import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useEmailValidator = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleSubmit = () => {
    if(emailRegex.test(email)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  };

  return {
    email,
    isValid,
    handleEmailChange,
    handleSubmit
  };
};

export default useEmailValidator;