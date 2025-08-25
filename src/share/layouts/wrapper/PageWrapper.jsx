export default function PageWrapper({ children, className }) {
  return (
    <div
      className={`px-4 md:px-16 py-8 md:py-12 max-w-7xl mx-auto ${
        className && className
      }`}
    >
      {children}
    </div>
  );
}
