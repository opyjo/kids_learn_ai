import Link from "next/link";

const FAQTeaser = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center py-8">
        <p className="text-muted-foreground">
          Have questions? Check out our
          <Link href="/faq" className="text-primary hover:underline ml-1 cursor-pointer">
            FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default FAQTeaser;
