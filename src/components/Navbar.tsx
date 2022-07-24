import playPop, { Click } from "../lib/playPop";
import "../styles/components/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a onClick={() => Click("/")}>
            <i className="ri-home-smile-line"></i>
          </a>
        </li>
        <li>
          <a onClick={() => Click("/blog")}>
            <i className="ri-pencil-line"></i>
          </a>
        </li>
        <li>
          <a onClick={() => Click("/github")}>
            <i className="ri-github-line"></i>
          </a>
        </li>
        <li>
          <a onClick={() => Click("/discord")}>
            <i className="ri-chat-smile-2-line"></i>
          </a>
        </li>
        <li>
          <a onClick={() => Click("/twitter")}>
            <i className="ri-twitter-line"></i>
          </a>
        </li>
        <li>
          <a onClick={() => Click("/twitch")}>
            <i className="ri-twitch-line"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
