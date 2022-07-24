import "../styles/components/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">
            <i className="ri-home-smile-line"></i>
          </a>
        </li>
        <li>
          <a href="/blog">
            <i className="ri-pencil-line"></i>
          </a>
        </li>
        <li>
          <a href="/github">
            <i className="ri-github-line"></i>
          </a>
        </li>
        <li>
          <a href="/discord">
            <i className="ri-chat-smile-2-line"></i>
          </a>
        </li>
        <li>
          <a href="/twitter">
            <i className="ri-twitter-line"></i>
          </a>
        </li>
        <li>
          <a href="/twitch">
            <i className="ri-twitch-line"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
