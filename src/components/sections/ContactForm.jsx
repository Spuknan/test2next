"use client";

import { useState } from "react";
import '@/components/sections/ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !message || !email) {
      return;
    }

    try {
      const res = await fetch('api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message, email }),
      });
      const data = await res.json();
      console.log(data.message); // Muestra el mensaje desde el servidor
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container px-6 py-16 pb-30 mx-auto max-w-4xl flex flex-col gap-6">
      <div className="flex flex-col justify-center mx-auto text-center">
        <h3 className="text-white glow font-bold text-2xl">CONTACTO</h3>
        <p className="text-zinc-400 text-sm">Si querés dejarme un mensajito lindo o una propuesta, este es el lugar!</p>
      </div>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <label htmlFor="name" className="text-white flex flex-col">
          Nombre:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="rounded-md p-2 bg-zinc-600"
            required
          />
        </label>
        <label htmlFor="email" className="text-white flex flex-col">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="rounded-md p-2 bg-zinc-600"
            required
          />
        </label>
        <label htmlFor="message" className="text-white  flex flex-col">
          Mensaje:
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            rows="4"
            className="rounded-md p-2 bg-zinc-600"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-pink-600 w-full sm:w-max px-5 py-1 rounded-md font-medium text-white self-end hover:bg-pink-700 hover:text-white transition duration-400 hover:scale-110"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;