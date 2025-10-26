
const Footer = () => {
  const links = [
    { name: "Sobre o projeto", href: "#" },
    { name: "Política de privacidade", href: "#" },
    { name: "Fale conosco", href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
