export default function Contacts() {
  return (
    <div className="flex-col items-center mt-10 w-full max-w-screen-2xl mb-10 mr-auto ml-auto">
      <h1 className="text-3xl text-theme-blue font-semibold mb-10">
        Contactos
      </h1>
      <div className="bg-white rounded-lg w-2/3 h-30 shadow-simple mb-24"></div>
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
