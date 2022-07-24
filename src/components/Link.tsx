import { Click } from "../lib/playPop";

interface Props {
  href: string;
  turnLeft?: boolean;
  children: string;
}

export default function Link({ href, children, turnLeft }: Props) {
  return (
    <a onClick={() => Click(href)} data-turn={turnLeft ? "left" : "right"}>
      {children}
    </a>
  );
}
