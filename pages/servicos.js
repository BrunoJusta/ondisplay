import { Services } from "../components/Services";

export default function Service() {
  return (
    <div className="flex items-center mt-10 w-full max-w-screen-2xl mr-auto ml-auto">
      <div className="mt-20">
        <Services />
      </div>
      <style global jsx>{`
        html body,
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
