export default function Heading4({ children, className = "", color = "black" }) {
  return (
    <h4 className={`text-xl font-medium text-${color} ${className}`}>
      {children}
    </h4>
  );
}
