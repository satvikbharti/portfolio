"use client";
import React, { useRef } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";



const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        toast.loading("Sending message... ⏳", { toastId: "send" });

        emailjs
            .sendForm(
                "service_2a31r39",
                "template_emh6mif",
                form.current,
                {
                    publicKey: "5KFFsnVenBhSf1nKF",
                }
            )
            .then(
                () => {
                    toast.update("send", {
                        render: "Message sent successfully! 🎉",
                        type: "success",
                        isLoading: false,
                        autoClose: 3000,
                    });

                    form.current?.reset(); // clear form
                },
                (error) => {
                    toast.update("send", {
                        render: "Failed to send message ❌",
                        type: "error",
                        isLoading: false,
                        autoClose: 3000,
                    });

                    console.log("FAILED...", error.text);
                }
            );
    };


    return (
        <>
            <ToastContainer
                position="top-right"
                toastClassName="custom-toast"

                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="pt-16 pb-16">
                <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                            Schedule a call with me to see if I can help
                        </h1>
                        <p className="text-gray-400 mt-6 text-base sm:text-lg">
                            Reach out to me today and let’s discuss how I can help you achieve your goals.
                        </p>

                        <div className="mt-7">
                            <div className="flex items-center space-x-3 mb-4">
                                <BiPhone className="w-9 h-9 text-cyan-300" />
                                <p className="text-xl font-bold text-gray-400">
                                    +91 6397909575
                                </p>
                            </div>

                            <div className="flex items-center space-x-3 mb-4">
                                <BiEnvelope className="w-9 h-9 text-cyan-300" />
                                <p className="text-xl font-bold text-gray-400">
                                    satvikbharti3108@gmail.com
                                </p>
                            </div>

                            <div className="flex items-center space-x-3 mb-4">
                                <BiMap className="w-9 h-9 text-cyan-300" />
                                <p className="text-xl font-bold text-gray-400">
                                    Delhi, India
                                </p>
                            </div>
                        </div>







                        <a
                            href="https://www.linkedin.com/in/satvik-bharti-964942229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all duration-300">
                                <FaLinkedin className="text-white w-6 h-6" />
                            </div>
                        </a>
                    </div>
               

                <div
                    data-aos="zoom-in" data-aos-anchor-placement="top-center"
                    className="md:px-10 p-5 bg-[#131332] rounded-lg">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
                        />

                        <input
                            name="user_email"
                            type="email"
                            placeholder="Email Address"
                            className="px-4 mt-6 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
                        />

                        <input
                            name="phone"
                            type="text"
                            placeholder="Mobile Number"
                            className="px-4 mt-6 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="px-4 mt-6 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
                        />

                        <button type="submit" className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;
