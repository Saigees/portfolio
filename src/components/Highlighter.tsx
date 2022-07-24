import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Languages } from "../types/lang";

type language = keyof typeof Languages;

export function Highlighter({
  children,
  language,
  style,
}: {
  children: string;
  language?: language;
  style?: React.CSSProperties;
}) {
  const [dark, setDark] = useState(false);
  return (
    <SyntaxHighlighter
      language={language}
      style={solarizedLight}
      wrapLongLines={true}
      wrapLines={true}
      useInlineStyles={true}
      showLineNumbers={true}
      CodeTag="code"
    >
      {children}
    </SyntaxHighlighter>
  );
}
