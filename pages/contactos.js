import { useState } from "react";
export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, message };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };
  return (
    <div className="flex-col items-center mt-10 w-full max-w-screen-2xl mb-10 mr-auto ml-auto">
      <h1 className="text-3xl text-theme-blue font-semibold mb-10">
        Contactos
      </h1>
      <div className="bg-white rounded-lg w-2/3 h-30 shadow-simple mb-24 flex justify-center items-center">
        <form className="flex flex-col justify-between w-9/12 h-3/4">
          <div className="flex flex-row justify-between items-center mb-10">
            <formGroup className="flex flex-col w-72">
              <label htmlFor="name">O seu nome</label>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="h-9 bg-gray-100 border-1 border-gray-400 rounded-md"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </formGroup>
            <formGroup className="flex flex-col w-72">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="exemplo@gmail.com"
                className="h-9 bg-gray-100 border-1 border-gray-400 rounded-md"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </formGroup>
          </div>
          <div className="flex flex-row justify-between items-center mb-10">
            <formGroup className="flex flex-col w-72">
              <label htmlFor="message">Nome da Empresa</label>
              <input
                type="text"
                name="message"
                placeholder="Nome da empresa"
                className="h-9 bg-gray-100 border-1 border-gray-400 rounded-md"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </formGroup>
            <formGroup className="flex flex-col w-72">
              <label htmlFor="message">País</label>
              <input
                type="text"
                name="message"
                placeholder="Portugal"
                className="h-9 bg-gray-100 border-1 border-gray-400 rounded-md"
              />
            </formGroup>
          </div>
          <formGroup className="flex flex-col w-full h-full mb-20">
            <label htmlFor="message">A sua mensagem</label>
            <textarea className="h-32 bg-gray-100 border-1 border-gray-400 rounded-md" />
          </formGroup>
          <input
            type="submit"
            className="w-24 bg-theme-blue text-white rounded self-center"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </form>
      </div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
