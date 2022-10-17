import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          placeholder="Name"
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value) } 
          required />
      </label>
      <label>
        <input
          placeholder="Phone Number" 
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value) } 
          required />
      </label>
      <label>
        <input 
          placeholder="Email"
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value) } 
          required />
      </label>
      <input 
        type="submit"
        value="Add contact" />
    </form>
  );
};
