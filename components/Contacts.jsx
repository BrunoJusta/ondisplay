import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toastifySuccess = () => {
    toast.success("☑️ Email enviado com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, company, city, message };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        toastifySuccess();
        setSubmitted(true);
        setName("");
        setEmail("");
        setCompany("");
        setCity("");
        setMessage("");
        window.scrollTo(0, 0);
      }
    });
  };
  return (
    <div className="relative flex flex-col items-center w-full">
      <h1 className="text-3xl text-theme-blue font-semibold mb-10">
        Entre em contacto
      </h1>
      <div className="bg-white rounded-lg w-2/3 h-auto py-10 shadow-simple mb-24 flex justify-center items-center">
        <form
          className="flex flex-col justify-between w-9/12 h-3/4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex flex-row justify-between items-center mb-10">
            <formGroup className="flex flex-col w-72">
              <label htmlFor="name" className="text-sm text-theme-blue">
                O seu nome
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={name}
                className="px-2 h-9 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </formGroup>
            <formGroup className="flex flex-col w-72">
              <label htmlFor="email" className="text-sm text-theme-blue">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="exemplo@gmail.com"
                className="px-2 h-9 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </formGroup>
          </div>
          <div className="flex flex-row justify-between items-center mb-10">
            <formGroup className="flex flex-col w-72">
              <label htmlFor="message" className="text-sm text-theme-blue">
                Nome da Empresa
              </label>
              <input
                type="text"
                name="message"
                placeholder="Nome da empresa"
                className="px-2 h-9 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </formGroup>
            <formGroup className="flex flex-col w-72">
              <label htmlFor="message" className="text-sm text-theme-blue">
                Cidade
              </label>
              <input
                type="text"
                name="message"
                placeholder="Porto"
                className="px-2 h-9 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </formGroup>
          </div>
          <formGroup className="flex flex-col w-full h-full mb-20">
            <label htmlFor="message" className="text-sm text-theme-blue">
              A sua mensagem
            </label>
            <textarea
              className="px-2 h-32 bg-gray-100 border-1 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-blue focus:border-transparent"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
          </formGroup>
          <input
            type="submit"
            className="cursor-pointer bg-gray-200 border-theme-blue border-2 rounded-md text-theme-blue font-semibold px-6 py-2 hover:text-gray-200 hover:bg-theme-blue w-24 self-center"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
