"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const EmailSection = () => {
  const form: any = useRef();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setSent(true);
    e.preventDefault();
    setEmail("");
    setSubject("");
    setMessage("");
    setTimeout(() => {
      setSent(false);
    }, 3000);

    emailjs
      .sendForm(
        "service_7otompv",
        "template_pog5dki",
        form.current,
        "ul3BSjgVkcZLFrefl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 gap-4 relative  px-4 max-w-7xl mx-auto"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-black dark:text-[#ADB7BE] my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-black dark:text-[#ADB7BE] mb-4 max-w-md font-montserrat font-bold">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi.
        </p>
      </div>
      <div>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-black dark:text-[#ADB7BE] block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              name="to_name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-black dark:text-[#ADB7BE] block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
              type="text"
              name="from_name"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black dark:text-[#ADB7BE] block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              name="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button className="bg-[#f0be6d] hover:bg-[#e9af51] text-white font-bold py-2.5 px-5 rounded-lg mx-auto">
            Send Message
          </button>
        </form>
        <div
          className={` relative flex items-center justify-center mt-4 text-lg font-semibold text-green-500 transition  ${
            sent ? "opacity-100 duration-500" : "opacity-0"
          }`}
        >
          Email sent, thanks.
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
