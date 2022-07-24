import rawLibariesEtc from "../data/libaries_and_software.json";
import { formatString } from "../lib/format";
import playPop from "../lib/playPop";
import "../styles/components/libaries.css";

export default function Libaries() {
   function Click(route: string) {
     playPop().then(() => {
       window.location.href = route;
     });
   }
  return (
    <>
      <h1 className="libTitle">Libaries, languages, frameworks, software, etc.</h1>
      <div className="libaries">
        {rawLibariesEtc.map((lib) => {
          return (
            <a
              onClick={() => Click(lib.url)}
              data-turn={`${
                rawLibariesEtc.indexOf(lib) % 2 === 0 ? `left` : `right`
              }`}
            >
              {formatString(lib.name)}
            </a>
          );
        })}
      </div>
    </>
  );
}
