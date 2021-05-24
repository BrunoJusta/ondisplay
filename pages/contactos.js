import { Contacts } from "../components/Contacts";
export default function Contact() {
  return (
    <div className="flex-col items-center mt-10 w-full max-w-screen-2xl mb-10 mr-auto ml-auto">
      <div className="mt-20 w-full">
        <Contacts />
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
