import React, { useState } from 'react';
import Header from '../components/Header';
import submitted from '../images/submitted.gif';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // alert("Form Submitted");
      setFormSubmitted(true);
      const newPerson = { ...formData };

      fetch('http://localhost:8888/record/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPerson)
      }).catch((error) => {
        window.alert(error);
        return;
      });
    } else {
      alert('Form Has Errors');
    }
    // setErrors({
    //   name: "",
    //   email: "",
    //   message: "",
    // });
  };

  const handleChange = (event) => {
    handleValidation();
    setFormData((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value
      };
    });
  };

  const handleValidation = () => {
    // add validation stuff here
    let errors = {};
    let formIsValid = true;

    // name
    if (formData.name.length === 0) {
      formIsValid = false;
      errors['name'] = 'Name cannot be empty';
    }

    if (formData.name.length !== 0) {
      if (!formData.name.match(/^[a-zA-Z\w\s]+$/)) {
        formIsValid = false;
        errors['name'] = 'Invalid Name';
      }
    }

    //Email
    if (formData.email.length === 0) {
      formIsValid = false;
      errors['email'] = 'Cannot be empty';
    }

    if (formData.email.length !== 0) {
      console.log('formData.email ', formData.email);
      let lastAtPos = formData.email.lastIndexOf('@');
      let lastDotPos = formData.email.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formData.email.indexOf('@@') == -1 &&
          lastDotPos > 2 &&
          formData.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors['email'] = 'Email is not valid';
      }
    }

    // message
    if (formData.message.length === 0) {
      formIsValid = false;
      errors['message'] = 'Message be empty';
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <div>
      <Header />

      <div className="pt-20 pb-8" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
        <div className="max-w-lg">
          <div className="text-3xl w-full text-left font-medium">
            Nice to meet you! Let&apos;s get in touch 👋
          </div>
        </div>

        <div className="max-w-4xl">
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="relative overflow-auto mb-1">
              <div className="flex space-x-4">
                <div className="w-1/2 mb-4">
                  <div>
                    <label htmlFor="name" className="w-full">
                      Your Name*
                    </label>
                  </div>
                  <input
                    className="font-gloria-hallelujah w-full mr-5 ml-0.5 py-2 px-3 mb-1 text-xs rounded-lg shadow-sm text-gray-800 bg-neutral-100 leading-tight focus:outline-black ${(errors.name.length > 0) ? 'bg-neutral-800' : ''}`}"
                    placeholder="enter your name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                  <div className="text-xs text-red-500 ml-1 mt-1">{errors.name}</div>
                </div>
                <div className="w-1/2">
                  <div>
                    <label htmlFor="email" className="w-full">
                      Your Email*
                    </label>
                  </div>
                  <input
                    className="font-gloria-hallelujah w-full mr-5 py-2 px-3 mb-1 ml-0.5 text-xs rounded-lg shadow-sm text-gray-800 bg-neutral-100 leading-tight focus:outline-black"
                    placeholder="enter your email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                  />
                  <div className="text-xs text-red-500 ml-1 mt-1">{errors.email}</div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="">
                <label htmlFor="message" className="w-full">
                  Message*
                </label>
                <textarea
                  className="font-gloria-hallelujah w-full mr-5 py-2 px-3 mb-1 ml-0.5 text-xs rounded-lg shadow-sm text-gray-800 bg-neutral-100 leading-tight focus:outline-black"
                  placeholder="hey it's sophia, sorry i can't answer the phone right now <3 XOXO"
                  type="text"
                  rows="6"
                  name="message"
                  onChange={handleChange}
                />
                <div className="text-xs text-red-500 ml-1 mt-1">{errors.message}</div>
              </div>
            </div>

            <button
              type="submit"
              className="w-1/2 mt-6 font-gloria-hallelujah text-sm py-3 px-5 bg-pink-300 text-white rounded hover:bg-pink-500">
              ✨ Send It ✨
            </button>
            {formSubmitted ? (
              <div className="mt-4 font-gloria-hallelujah">
                ✏️ yay! your message has been received :D
              </div>
            ) : null}
            {formSubmitted ? <img src={submitted}></img> : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
