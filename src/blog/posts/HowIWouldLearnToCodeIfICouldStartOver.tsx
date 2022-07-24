import { Post } from "../Post";

export default class HowIWouldLearnToCodeIfICouldStartOver extends Post {
  public name: string = "How I would learn to code (If I could start over)";
  public slug: string = "how-i-would-learn-to-code-if-i-could-start-over";
  public date: number = new Date("23 june 2022").getTime();
  public hidden: boolean = false;
  public description: string =
    "This is the order personally i would follow if i started fresh. Which topics todo and what languages to use etc.";
  public tags: string[] = ["personal"];
  public author: string = "Saige";

  public render() {
    return (
      <>
        <p>
          Currenlty my coding timeline looks some what simular to the one below.
        </p>
        <ul className="list">
          <li>Javascript</li>
          <li>
            HTML <span className="fade">( markup language )</span>
          </li>
          <li>
            CSS <span className="fade">( markup language )</span>{" "}
          </li>
          <li>Reactjs</li>
          <li>Nextjs</li>
          <li>
            Remix + Typescript{" "}
            <span className="fade"> {"->"} at the same time</span>
          </li>
          <li>
            Java{" "}
            <span className="fade">{"->"} just started as of June 2022.</span>
          </li>
          <li>
            Python <span className="fade">{"->"} For school</span>
          </li>
        </ul>

        <p>
          Personally i believe this list isnt that bad. Yet there could be
          improvements. For Starters i would most likely learn either HTML & CSS
          or python before learning javascript, because they are WAY easier to
          learn. And just after learning javascript i would also learn
          typescript because its just so much nicer.
        </p>

        <p>If you would just like to see my updated list then here you go: </p>
        <ul className="list">
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Reactjs</li>
          <li>
            Nextjs <span className="fade">{"->"} Optional</span>
          </li>
          <li>
            Remix <span className="fade">{"->"} Optional</span>
          </li>
          <li>
            Java <span className="fade">{"->"} Optional</span>
          </li>
        </ul>

        <p>I plan to update this in the future.</p>
      </>
    );
  }
}
