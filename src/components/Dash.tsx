interface Props {
  width?: number;
}

export default function Dash({ width }: Props) {
  return (
    <div
      className="dash"
      style={{
        width: `${width || 100}%`,
      }}
    ></div>
  );
}
