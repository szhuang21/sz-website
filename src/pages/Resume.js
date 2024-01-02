import React, { useState } from 'react';
import Header from '../components/Header';
import SophiaResume from '../images/FakeResume.pdf';

const Resume = () => {
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(false);
  const [formData, setFormData] = useState({
    password: 'default'
  });

  const [errors] = useState({
    password: 'incorrect password. try again!'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const password = 'password';

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);

    if (formData.password === password) {
      console.log('line 13');
      setPasswordIsCorrect(true);
      setIsSubmitted(false);
    }

    console.log('formData.password: ', formData.password);
    console.log('password: ', password);
    console.log('formData.password===password', password === formData.password);
    console.log('pass: ', passwordIsCorrect);
  };

  const handleChange = (event) => {
    setFormData((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value
      };
    });
  };

  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit} className="mt-5 ml-5">
        {passwordIsCorrect ? (
          <div>
            <div className="text-xl text-left font-bold font-poppins pb-8">🔐 Resume</div>
            <object data={SophiaResume} type="application/pdf" width="100%" height="100%">
              <p>
                Alternative text - include a link{' '}
                <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
              </p>
            </object>
          </div>
        ) : (
          <div className="w-screen h-screen">
            <div className="text-xl text-left font-bold font-poppins pb-8">🔒 Resume</div>

            <div className="grid place-items-center h-1/2 ">
              <div className="w-96 h-56 bg-blue-200 rounded-lg">
                <div className="mt-14">
                  <div className="flex justify-center">
                    <label htmlFor="name" className="w-full font-poppins grid place-items-center">
                      Enter Password To Access This Page:
                    </label>
                  </div>

                  <input
                    className="ml-12 font-gloria-hallelujah w-64 mr-5 ml-0.5 py-2 px-3 mt-2 text-xs rounded-lg shadow-sm text-gray-800 bg-neutral-100 leading-tight focus:outline-black ${(errors.name.length > 0) ? 'bg-neutral-800' : ''}`}"
                    placeholder="enter password"
                    type="text"
                    name="password"
                    onChange={handleChange}
                  />

                  <div className="ml-12 text-xs text-red-500 ml-1 mt-1">
                    {!passwordIsCorrect && isSubmitted ? errors.password : ''}
                  </div>

                  <button
                    type="submit"
                    className="ml-12 w-44 font-gloria-hallelujah text-sm mt-2 py-1 px-5 bg-pink-300 text-white rounded hover:bg-pink-500">
                    ✨ Submit ✨
                  </button>
                </div>
              </div>
            </div>

            {/* <div class="relative -auto mt-36 ml-24 content-center">
              <div class="w-96 h-36 bg-blue-200 outline-black">
                <div class="flex space-x-4">
                  <div class="w-1/2 mb-2">
                    <div class="flex justify-center">
                      <label for="name" class="w-full">
                        Enter Password To Access This Page:
                      </label>
                    </div>
                    <input
                      class="font-gloria-hallelujah w-full mr-5 ml-0.5 py-2 px-3 mb-1 text-xs rounded-lg shadow-sm text-gray-800 bg-neutral-100 leading-tight focus:outline-black ${(errors.name.length > 0) ? 'bg-neutral-800' : ''}`}"
                      placeholder="enter password"
                      type="text"
                      name="password"
                      onChange={handleChange}
                    />

                    <div class="text-xs text-red-500 ml-1 mt-1">
                      {!passwordIsCorrect && isSubmitted ? errors.password : ""}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="w-1/4 font-gloria-hallelujah text-sm py-1 px-5 bg-pink-300 text-white rounded hover:bg-pink-500"
                >
                  ✨ Submit ✨
                </button>
              </div>
            </div> */}
          </div>
        )}
      </form>
    </div>
  );
};

export default Resume;
