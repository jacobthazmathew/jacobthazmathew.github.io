export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jacob Mathew, MD. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Bridging Healthcare & Technology</p>
        </div>
      </div>
    </footer>
  )
}
