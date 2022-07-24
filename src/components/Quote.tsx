interface Props {
  children: JSX.Element | string;
}
export default function Quote({ children }: Props) {
  return <div className="quote">{children}</div>;
}
