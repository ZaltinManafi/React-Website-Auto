import React, { useState } from 'react';
import Input from '@core/inputs/Input';

const FormContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');

  const send = () => {
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(comment);
  };

  return (
    <div className=" bg-black  space-x-10 flex lg:flex-row flex-col justify-center items-center md:p-20 p-10  3xl:max-w-7xl 3xl:mx-auto">
      <div>
        <div className="justify-center space-y-5">
          <div className="font-semibold   font-serif text-xl text-red-900">Our Location</div>
          <div className="text-red-900  font-serif text-xl font-semibold"> Our Address</div>
          <div className="text-red-900   font-serif text-xl font-semibold"> +0030686023063</div>
          <hr />
          <div className="font-semibold tex-blue-800">Say Hello</div>
          <div className="text-red-900   font-serif font-semibold font-light">
            Winter Park, FL, United States, Florida
          </div>
        </div>
      </div>
      <div className="flex  justify-center flex-col ">
        <div className="flex flex-row space-x-5">
          <Input value={name} onChange={setName} name="name" placeholder=" Your Name" />
          <Input value={email} onChange={setEmail} name="email" placeholder="Email" />
        </div>

        <Input value={subject} onChange={setSubject} name="subject" placeholder="Type of car " />
        <Input
          value={comment}
          onChange={setComment}
          name="yourComment"
          placeholder="Your dream car description"
        />

        <Input name="Upload file" placeholder="Upload your request" />
        <button
          onClick={send}
          className="text-center border-2 p-4 bg-red-900 hover:bg-red-800 hover:text-black border-solid border-white rounded-full">
          Send your message
        </button>
      </div>
    </div>
  );
};

export default FormContact;
