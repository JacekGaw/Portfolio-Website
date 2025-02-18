import React, { useState } from "react";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import Button from "../../components/Button";
import envelopeImg from "../../assets/img/send.svg";
import axios from "axios";
import { motion } from "motion/react";

const Contact: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonDisabled(true);
    setErrorMessage("");
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    if (!email || !message || !name) {
      setErrorMessage("Email, name and message are required.");
      return;
    }
    const data = { name, email, message };
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, data);
      console.log(response);
      if (response.status === 200) {
        setErrorMessage("Message sent!");
        setButtonDisabled(false);
      }
    } catch {
      setErrorMessage("Could not send message. Try agail later.");
      setButtonDisabled(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="flex border-t dark:border-gray-500 p-10 w-full h-full min-h-screen justify-center items-center dark:bg-black dark:text-gray-100"
      >
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row gap-20 md:gap-20 justify-center items-center md:justify-between md:items-start">
          <motion.div
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0} }
          viewport={{ once: true, amount: 0.7 }}
          className="flex-1 flex flex-col gap-10 lg:gap-20">
            <div className="flex flex-col justify-center items-start gap-5">
              <Header>Contact</Header>
              <p>Hit me up if you have some questions or just want to chat!</p>
              <div className="flex flex-col gap-2 py-10 text-xl tracking-widest">
                <h3 className="text-3xl font-[600]">Jacek Gawlyta</h3>
                <p>Wrocław, Poland</p>
                <p>jac.gawlyta@gmail.com</p>
                <p>+48 796 587 186</p>
                <div className="pt-5">
                  <Socials />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0} }
          viewport={{ once: true, amount: 0.7 }}
          className="flex-1 flex flex-col gap-10 lg:gap-20">
            <div className="flex flex-col justify-center items-end gap-5">
              <Header orientation="right" className="hidden md:block">
                Use This Form
              </Header>
              <Header orientation="left" className="md:hidden">
                Use This Form
              </Header>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5"
              >
                <input
                  name="name"
                  id="name"
                  aria-label="Full name"
                  type="text"
                  placeholder="Who you are?"
                  className="border p-5 rounded-2xl text-lg"
                />
                <input
                  name="email"
                  id="email"
                  aria-label="Email address"
                  type="email"
                  placeholder="Your e-mail"
                  className="border p-5 rounded-2xl text-lg"
                />
                <textarea
                  name="message"
                  id="message"
                  aria-label="Message"
                  placeholder="Message..."
                  className="border p-5 rounded-2xl text-lg"
                />
                <div className="flex justify-end gap-2 items-center">
                  <p className="text-sm text-right">{errorMessage}</p>
                  <Button
                    className="self-end"
                    type="submit"
                    disabled={buttonDisabled}
                  >
                    send <img src={envelopeImg} className="h-6 w-auto pl-2" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
