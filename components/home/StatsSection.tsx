const StatsSection = () => {
  return (
    <section className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">Live</div>
            <div className="text-muted-foreground">
              Expert-Led Interactive Sessions
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">300+</div>
            <div className="text-muted-foreground">
              Active Learning Community
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
            <div className="text-muted-foreground">
              Hours of Live Instruction
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">
              Student Projects Built Together
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
