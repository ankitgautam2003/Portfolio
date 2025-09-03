export function Footer() {
  return (
    <footer
      className="py-12 bg-secondary/50 border-t border-border"
      data-testid="footer"
    >
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div
            className="text-2xl font-bold gradient-text"
            data-testid="footer-name"
          >
            Ankit Gautam
          </div>
          <p className="text-muted-foreground" data-testid="footer-tagline">
            Creative Developer & Design Enthusiast
          </p>
          <p
            className="text-sm text-muted-foreground"
            data-testid="footer-copyright"
          >
            © 2025 Ankit Gautam. All rights reserved. Built with passion and
            creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}
