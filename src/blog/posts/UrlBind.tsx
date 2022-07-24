import { Highlighter } from "../../components/Highlighter";
import { Click } from "../../lib/playPop";
import { Post } from "../Post";

export default class URLBind extends Post {
  public name: string = "URL Binding library for javascript.";
  public slug: string = "url-bind";
  public date: number = new Date("24 June 2022").getTime();
  public hidden: boolean = false;
  public description: string =
    "A demonstation on how to use my url bind library.";
  public tags: string[] = [];
  public author: string = "Saige";

  public render() {
    return (
      <>
        <p className="fade">This project was inspired by <a onClick={() => Click("https://urlcat.dev")}>urlcat.dev</a></p>
        <h3>Installation</h3>
        <Highlighter language="bash">{`# NPM
npm i @saige/urlbind

# Yarn
yarn add @saige/urlbind

# PNPM
pnpm i @saige/urlbind`}</Highlighter>

        <h3>Sample Usage</h3>
        <Highlighter language="typescript">
          {`import { urlbind } from "@saige/urlbind"

const apiURL = "https://api.capy.lol/v1/capybara/:imageNumber"
const url = urlbind(apiUrl, { imageNumber: "100" })
// Returns -> https://api.capy.lol/v1/capybara/100

//* Auto Replaces Dupe Slashes
const urlRemovedDupe = urlbind(apiUrl, { imageNumber: "/100" })
// Returns -> https://api.capy.lol/v1/capybara/100

//* Handles URL Query
const urlQueryOne = urlbind(apiUrl, { imageNumber: "100", json: "true" })
// Returns -> https://api.capy.lol/v1/capybara/100?json=true

const urlQueryTwo = urlbind(apiUrl, { imageNumber: "100", json: "true", random: "true"})
// Returns -> https://api.capy.lol/v1/capybara/100?json=true&random=true`}
        </Highlighter>

        <h3>Other Exported Functions</h3>
        <Highlighter language="typescript">
          {`import { join, replaceDupes, replaceParams } from "@saige/urlbind"

// Joins 2 strings
join("hello", "&@#", "world!")
// Returns -> "hello&@#world!"

// Removes duped slashes
replaceDupes("//user/world")
// Returns -> /user/world

// Handles Params
replaceParams("url_string_here", {
    key: "string",
})
// Returns -> url_string_here?key=string

replaceParams("url_string_here", {
    key: "string",
    cookies: "with milk"
})
// Returns -> url_string_here?key=string&cookies=with+milk

replaceParams("url_string_here/:id", {
    key: "string",
    cookies: "with milk",
    id: "userIdHere"
})
// Returns -> url_string_here/userIdHere?key=string&cookies=with+milk
`}
        </Highlighter>

        <ul className="list">
          <li>
            <a
              onClick={() => Click("https://github.com/Saigees/urlbind")}
            >
              Github
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                Click("https://www.npmjs.com/package/@saige/urlbind")
              }
              data-turn="left"
            >
              NPM
            </a>
          </li>
        </ul>
      </>
    );
  }
}
