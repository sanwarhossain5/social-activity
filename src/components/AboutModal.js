import React from 'react';
import { useForm } from 'react-hook-form';

const AboutModal = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
    return (
        <div>
            <h2>About Modal</h2>

        </div>
    );
};

export default AboutModal;