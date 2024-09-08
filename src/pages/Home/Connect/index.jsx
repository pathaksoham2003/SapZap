import { useRef, useState } from "react";
import { HeroImg } from "../../../assets";
import emailjs from "@emailjs/browser";

const Connect = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formElements = form.current.elements;
    const errors = {};
    let isValid = true;

    if (!formElements.name.value.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    
    if (!formElements.surname.value.trim()) {
      errors.surname = "Surname is required";
      isValid = false;
    }
    
    if (!formElements.email.value.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formElements.email.value)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }
    
    if (!formElements.contact.value.trim()) {
      errors.contact = "Contact number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formElements.contact.value)) {
      errors.contact = "Contact number must be 10 digits";
      isValid = false;
    }
    
    if (!formElements.message.value.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    emailjs
      .sendForm(import.meta.env.VITE_EMJS_S_ID, import.meta.env.VITE_EMJS_T_ID, form.current, {
        publicKey: import.meta.env.VITE_EMJS_PK,
      })
      .then(
        (result) => {
          console.log(result);
          console.log("SUCCESS");
          // Optionally reset the form here
          form.current.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-[1240px] flex ">
        <div className="flex flex-col md:flex-row">
          <div className="px-4 md:px-16 mt-16">
            <h2 className="text-6xl font-semibold">Let’s Connect </h2>
            <p className="text-xl ml-1 mt-3">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col mt-4"
            >
              <div className="w-full flex justify-between">
                <div className="relative w-full mr-2 my-3">
                  <input
                    className={`w-full p-2 border border-gray-500 text-xl rounded-xl ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Name"
                    name="name"
                    aria-describedby="name-error"
                  />
                  {errors.name && <p id="name-error" className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="relative w-full ml-2 my-3">
                  <input
                    className={`w-full p-2 border border-gray-500 text-xl rounded-xl ${errors.surname ? 'border-red-500' : ''}`}
                    placeholder="Surname"
                    name="surname"
                    aria-describedby="surname-error"
                  />
                  {errors.surname && <p id="surname-error" className="text-red-500 text-sm">{errors.surname}</p>}
                </div>
              </div>
              <div className="relative my-3">
                <input
                  type="email"
                  className={`p-2 border border-gray-500 text-xl rounded-xl w-full ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Email Address"
                  name="email"
                  aria-describedby="email-error"
                />
                {errors.email && <p id="email-error" className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="relative my-3">
                <input
                  type="text"
                  className={`p-2 border border-gray-500 text-xl rounded-xl w-full ${errors.contact ? 'border-red-500' : ''}`}
                  placeholder="Contact No."
                  name="contact"
                  aria-describedby="contact-error"
                />
                {errors.contact && <p id="contact-error" className="text-red-500 text-sm">{errors.contact}</p>}
              </div>
              <div className="relative my-3">
                <textarea
                  id="message"
                  rows="4"
                  className={`block p-2.5 w-full text-xl text-gray-900 rounded-lg border border-gray-500 ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Write your thoughts here...."
                  name="message"
                  aria-describedby="message-error"
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <input
                type="submit"
                className="bg-primary rounded-xl text-center py-3 text-xl text-white font-bold"
                value="Send"
              />
            </form>
          </div>
          <div className="mx-2 md:mr-20 py-10">
            <div className="overflow-hidden h-[600px] rounded-3xl">
              <img src={HeroImg} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
