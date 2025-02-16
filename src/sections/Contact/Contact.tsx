import React from "react";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import Button from "../../components/Button";
import envelopeImg from "../../assets/img/send.svg"

const Contact: React.FC = () => {
  return (
    <>
      <section className="flex border-t p-10 w-full h-full min-h-screen justify-center items-center">
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row gap-20 md:gap-20 justify-center items-center md:justify-between md:items-start">
          <div className="flex-1 flex flex-col gap-10 lg:gap-20">
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
          </div>
          <div className="flex-1 flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col justify-center items-end gap-5">
              <Header orientation="right" className="hidden md:block">Use This Form</Header>
              <Header orientation="left" className="md:hidden">Use This Form</Header>
              <form className="w-full flex flex-col gap-5">
                <input name="name" id="name" aria-label="Full name" type="text" placeholder="Who you are?" className="border p-5 rounded-2xl text-lg" />
                <input name="mail" id="mail" aria-label="Email address" type="mail" placeholder="Your e-mail" className="border p-5 rounded-2xl text-lg" />
                <textarea name="message" id="message" aria-label="Message"  placeholder="Message..." className="border p-5 rounded-2xl text-lg" />
                <Button className="self-end" type="submit">send <img src={envelopeImg} className="h-6 w-auto pl-2" /></Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
