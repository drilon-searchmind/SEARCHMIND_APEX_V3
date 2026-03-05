export default function Heading1({ children, className = "", color = "black", fontWeight = "semibold" }) {
  return (
    <h1 className={`text-6xl font-${fontWeight} text-${color} ${className}`}>
      {children}
    </h1>
  );
}
