"use client"
import { MapPin, PhoneCall, Mail, Linkedin } from 'lucide-react';
import { useState } from "react"
import { toast } from "react-hot-toast";
export default function Contactform() {
  
  // delcare varibales for catching values from controls on the form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // show Toast
  function showToast() {
    toast.custom((t) => (
      <div className="w-full max-w-full bg-green-600 text-white py-4 px-6 flex items-center justify-between shadow-2xl text-xl rounded-2xl">
        {/* Message */}
        <div className="text-center flex-1">
            Thanks for contacting us! We will be in touch with you shortly.
        </div>

        {/* Cclose button for this toast */}
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-white text-2xl font-bold ml-4 hover:text-gray-300"
        >
          ×
        </button>
      </div>
    ), {
      duration: Infinity, 
      position: 'top-center', 
    });
  }

  // Handle to submit form
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch('/api/contactus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName, email, subject, message }),
    });

    // check if the message is sent 
       if (res.ok) {
        const data = await res.json();
        console.log(data);
        showToast();
        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
         // cannot send this message
         toast.custom((t) => (
          <div className="w-full max-w-full bg-red-600 text-white py-4 px-6 flex items-center justify-between shadow-lg text-xl rounded-md">
            <div className="text-center flex-1">
              Failed to send message. Please try again!
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-white text-2xl font-bold ml-4 hover:text-gray-300"
            >
              ×
            </button>
          </div>
        ), {
          duration: Infinity,
          position: 'top-center',
        });
      }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-2 items-stretch w-full">
      {/* Send us a message */}
      <div className="flex-1 flex-col items-center justify-between mt-5 mb-5">
    <form  onSubmit={handleSubmit} className="h-[620px] space-y-6 px-2 sm:p-8 md:p-8 lg:mx-10 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" action="#">
          <br />
          <h5 className="text-center font-bold text-xl text-gray-900 dark:text-white">Send Us a Message</h5>
        <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name *</label>
            <input type="name" name="fullName" id="fullName" value={fullName}
              onChange={(e) => setFullName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your full name" required />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address *</label>
            <input type="email" name="email" id="email"  value={email}
              onChange={(e) => setEmail(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your email"  required />
            </div>
        <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
            <input type="text" name="subject" id="subject" value={subject}
              onChange={(e) => setSubject(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your subject" required />
            </div>
            <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows={4}   value={message}
              onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
          <br/>
        </form>
      </div>
      {/* Contact info */}
      <div className="flex-1  flex-col items-center justify-between mt-5 mb-5">
    <form className="h-[620px] space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700" action="#">
    <br/> 
          <h5 className="text-center font-bold text-xl text-gray-900 dark:text-white">Contact Information</h5>
        {/* address */}
            <div className="flex flex-row gap-2 px-5">
        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
         <div className="flex justify-center items-center p-2 mx-auto mb-2  dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
         <MapPin className='w-32 h-32 stroke-blue-500' />
              </div>
              </div>
              <div>
                <b className="font-bold">Address</b>
                <p>304 Barlow Crescent</p>
                <p>Winnipeg, Manitoba, R2N 3W4</p>
              </div>
            </div>
            {/* phone */}
            <div className="flex flex-row gap-2 px-5">
        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
         <div className="flex justify-center items-center p-2 mx-auto mb-2  dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
         <PhoneCall className='w-32 h-32 stroke-blue-500' />
         </div>
              </div>
              <div>
                <b className="font-bold">Phone</b>
                <p>(+1) 204 510 6261</p>
              </div>
            </div>
            {/* email */}
            <div className="flex flex-row gap-2 px-5">
        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
         <div className="flex justify-center items-center p-2 mx-auto mb-2  dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
         <Mail className='w-32 h-32 stroke-blue-500' />
         </div>
              </div>
              <div>
                <b className="font-bold">Email</b>
                <p>jhuletey@mycipa.org</p>
              </div>
            </div>
            {/* follow us */}
            <div className="flex flex-row gap-2 px-5">
        <div className="p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700">
         <div className="flex justify-center items-center p-2 mx-auto mb-2  dark:bg-gray-600 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
         <Linkedin className='w-32 h-32 stroke-blue-500' />
         </div>
              </div>
              <div>
                <b className="font-bold">Follow Us</b>
                <p>CIPA@Linkedin</p>
              </div>
          </div>
          <br/>
    </form>
      </div>
    </div>
  );
}