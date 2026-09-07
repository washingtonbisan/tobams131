import Image from "next/image";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Hero() {
  return (
    <section
      id="what-we-do"
      className="relative flex min-h-[420px] items-center overflow-hidden bg-brand-dark-2 sm:min-h-[480px] lg:min-h-[560px]"
    >
      <Image
        src="/frame1.jpg"
        alt="Person interacting with a digital technology interface"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-brand-dark-2/60" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <Eyebrow tone="light">WHAT WE DO</Eyebrow>

        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Training and Development
        </h1>

        <p className="text-base leading-relaxed text-white/85 sm:text-lg">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward
          <br />
          in today&apos;s ever-evolving landscape.
        </p>

        <Button
          href="#consultation"
          variant="primary"
          className="bg-[#571244] hover:bg-[#460e36]"
        >
          Book a Consultation
        </Button>
      </div>
    </section>
  );
}
