import Link from "next/link";
import Image from "next/image";

const FAQTeaser = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center py-8">
        <div className="flex items-center justify-center gap-4">
          {/* Brightbyte wondering */}
          <div className="animate-float hidden sm:block">
            <Image
              src="/brightbyte/wondering.png"
              alt="Brightbyte wondering"
              width={48}
              height={48}
              className="object-contain drop-shadow-md"
            />
          </div>
          <p className="text-muted-foreground">
            Have questions? Check out our
            <Link href="/faq" className="text-primary hover:underline ml-1 cursor-pointer">
              FAQ
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQTeaser;
