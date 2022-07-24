import playPop, { Click } from "../lib/playPop";
import { useCookies } from "react-cookie";
import "../styles/components/navbar.css";
import { useEffect } from "react";
export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies();
  let theme = cookies["theme"];
  function update(theme: string, setcookie?: boolean) {
    document.body.dataset.theme = theme;
    if (setcookie) {
      setCookie("theme", theme, {
        path: "/",
      });
    }
  }
  useEffect(() => {
    if (!theme) {
      setCookie("theme", "light", {
        path: "/",
      });
    }
    theme = cookies["theme"];
    update(theme);
  });
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
        <li>
          <a
            onClick={() => {
              const element = document.getElementById("pop");

              element?.classList.add("active");
              playPop().then(() => {
                element?.classList.remove("active");
              });
            }}
          >
            <i className="ri-volume-down-line"></i>
            <span id="pop">Pop!</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
