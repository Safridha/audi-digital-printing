interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  target?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  target,
}: ButtonProps) {

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };


  const className = `
    inline-flex
    items-center
    justify-center
    whitespace-nowrap
    rounded-xl
    px-4
    py-3
    text-sm
    font-semibold
    transition
    duration-300
    sm:px-6
    sm:text-base
    ${styles[variant]}
  `;


  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={className}
      >
        {children}
      </a>
    );
  }


  return (
    <button className={className}>
      {children}
    </button>
  );
}