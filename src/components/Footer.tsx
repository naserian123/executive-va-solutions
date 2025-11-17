const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nelly Naserian. All rights reserved.</p>
          <p>Executive Virtual Assistant | Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
