import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { IoMdSend } from "react-icons/io";
import Title from './Title';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qy01iqs', 'template_fmaqtdo', form.current, 'VcLhxiSW5_f8WpDsh')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully ✨');
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('Failed to send message: ' + error.text);
            });
    };

    return (
        <div name="contact" className='pt-20'>
            <Title title="Contact" />
            <div className="px-4 pb-4 md:px-16 lg:pb-8 mx-auto mb-10 " data-aos="fade-right" data-aos-duration="1000">
                <div className="flex flex-col justify-center mx-auto h-full">
                    <div className="pb-8">
                        <p className="text-sky-400 mt-5 text-2xl leading-relaxed text-center font-semibold opacity-80">
                            Submit the form below to get in touch with me!
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-1/2 gap-4">
                            <input
                                required
                                type="text"
                                name="user_name"
                                placeholder="Enter your name"
                                className="rounded border text-white border-sky-400 bg-slate-950 py-3 px-3 text-xl leading-8 outline-none transition-colors duration-200 ease-in-out"
                            />
                            <input
                                required
                                type="email" 
                                name="user_email"
                                placeholder="Enter your email"
                                className="rounded border text-white border-sky-400 bg-slate-950 py-3 px-3 text-xl leading-8 outline-none transition-colors duration-200 ease-in-out"
                            />
                            <textarea
                                required
                                name="message"
                                placeholder="Enter your message"
                                rows="10"
                                className="rounded border text-white border-sky-400 bg-slate-950 py-3 px-3 text-xl leading-8 outline-none transition-colors duration-200 ease-in-out"
                            ></textarea>
                            <div className='flex w-full justify-end p-2'>
                                <button value="Send" type="submit" className="text-md mb-2 inline-flex w-28 items-center justify-center rounded-lg border bg-primary-700 px-1 py-2.5 font-medium text-sky hover:bg-primary-700/80 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600">
                                    Send <IoMdSend className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Contact;
