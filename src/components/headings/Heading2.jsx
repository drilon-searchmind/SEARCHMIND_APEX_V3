export default function Heading2({ children, className = "", color = "black" }) {
  return (
    <h2 className={`text-3xl font-semibold text-${color} ${className}`}>
      {children}
    </h2>
  );
}
