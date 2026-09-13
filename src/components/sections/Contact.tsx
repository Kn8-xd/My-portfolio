export function Contact() {
  return (
    <section className="min-h-screen bg-bg flex items-center p-8 sm:p-12 md:p-24 relative">
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12">
        <span className="text-text-muted font-body text-sm tracking-widest uppercase">Contact Section</span>
      </div>
      <div className="w-full max-w-[1200px] mx-auto text-center">
        <button className="bg-accent text-bg font-body font-medium px-8 py-4 rounded-full transition-colors hover:opacity-90 border-none outline-none no-underline cursor-pointer inline-block decoration-transparent">
          Get in touch
        </button>
      </div>
    </section>
  );
}
