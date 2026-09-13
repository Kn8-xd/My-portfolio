export function Hero() {
  return (
    <section className="min-h-screen bg-bg flex items-end p-8 sm:p-12 md:p-24 relative overflow-hidden">
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12">
        <span className="text-text-muted font-body text-sm tracking-widest uppercase">Hero Section</span>
      </div>
      <div className="w-full max-w-[1200px] mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[clamp(48px,7vw,96px)] leading-[1.05] tracking-[-0.02em] font-medium text-text max-w-4xl">
          Creative developer building interactive digital experiences.
        </h1>
      </div>
    </section>
  );
}
