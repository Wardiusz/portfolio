export default function SnowEffect() {
  return (
    <>
      {Array.from({ length: 200 }).map((_, i) => (
        <div key={i} className="snow" />
      ))}
    </>
  );
}
