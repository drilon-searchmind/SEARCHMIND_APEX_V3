export default function Heading3({ children, className = "", color = "black" }) {
  return (
    <h3 className={`text-2xl font-semibold text-${color} ${className}`}>
      {children}
    </h3>
  );
}
