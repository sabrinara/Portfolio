import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { IoMdSend } from "react-icons/io";
import Title from './Title';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_owqdnfj', 'template_85v27r1', form.current, 'l1mlj_HxUNVJsmvJJ')
            .then((result) => {
                if (result.text === 'OK') {
                    toast.success('Message send successfully');
                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div name="contact" className='pt-20'>
            <Title title="Contact" ></Title>
            <div className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto mb-10 pt-10"  data-aos="fade-right" data-aos-duration="1000">
            <div className="flex flex-col justify-center mx-auto h-full">
                <div className="pb-8">
                    <p className="text-sky-400 mt-5 text-2xl leading-relaxed text-center font-semibold opacity-80">Submit the form below to get in touch with me!</p>
                </div>
                <div className=" flex justify-center items-center">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-1/2 gap-4">
                        <input
                            required
                            type="text"
                            name="to_name"
                            placeholder="Enter your name"
                            className="rounded border text-white border-sky-400 bg-slate-950 py-3 px-3 text-xl leading-8 outline-none transition-colors duration-200 ease-in-out "
                        />
                        <input
                            required
                            type="text"
                            name="from_email"
                            placeholder="Enter your email"
                            className="rounded border text-white border-sky-400 bg-slate-950 py-3 px-3 text-xl leading-8 outline-none transition-colors duration-200 ease-in-out "
                        />
                        <textarea
                            required
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="rounded border text-white border-sky-400 bg-slate-950 py-3 px-3 text-xl leading-8 outline-none transition-colors duration-200 ease-in-out "
                        ></textarea>

                        <div className='flex w-full justify-end p-2'>
                            <button className="text-md mb-2 inline-flex w-28 items-center justify-center rounded-lg border bg-primary-700 px-1 py-2.5 font-medium text-sky hover:bg-primary-700/80 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600">
                                Send <IoMdSend className="ml-2"></IoMdSend>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
        </div>
        
    );
};

export default Contact;