import Libaries from "../components/Libaries";
import Projects from "../components/Projects";
import RecentPosts from "../components/RecentPosts";
import { Click } from "../lib/playPop";
import "../styles/pages/index.css";

export default function Landing() {
  return (
    <>
      <div className="info">
        <h1>Heyo, I'm saige!</h1>
        <p>
          <a onClick={() => Click("/prns")} data-turn="left">
            she/her
          </a>{" "}
          Just your average girl making stuff with your favorite frameworks and
          libraries. Check out some of my projects and stuff below.
        </p>
      </div>
      <RecentPosts maxAmount={10} key={2} />
      <Libaries key={0} />
      <Projects key={1}/>
    </>
  );
}
