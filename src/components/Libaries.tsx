import rawLibariesEtc from "../data/libaries_and_software.json";
import "../styles/components/libaries.css";

export default function Libaries() {
  return (
    <>
      <h1 className="libTitle">Libaries, languages, frameworks, software, etc.</h1>
      <div className="libaries">
        {rawLibariesEtc.map((lib) => {
          return (
            <a
              href={lib.url}
              data-turn={`${
                rawLibariesEtc.indexOf(lib) % 2 === 0 ? `left` : `right`
              }`}
            >
              {lib.name}
            </a>
          );
        })}
      </div>
    </>
  );
}
