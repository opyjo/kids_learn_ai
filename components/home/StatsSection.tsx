const StatsSection = () => {
  return (
    <section className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">12,500+</div>
            <div className="text-muted-foreground">Junior Python Coders</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">60+</div>
            <div className="text-muted-foreground">Python-Powered AI Missions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1.8M</div>
            <div className="text-muted-foreground">Safe Prompts & Programs Run</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Friendly Mentor Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
