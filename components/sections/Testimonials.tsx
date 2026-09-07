"use client";

import { useRef } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = 24;
    const cardWidth = card ? card.clientWidth + gap : 320;
    el.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h2 className="text-center text-2xl font-bold text-brand-maroon sm:text-3xl">
          Testimonials
        </h2>

        <ul
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scrollbar-hide"
        >
          {TESTIMONIALS.map((testimonial) => (
            <li
              key={testimonial.name}
              className="flex w-[300px] shrink-0 snap-start flex-col gap-4 rounded-sm border border-[#E66E8C]/30 bg-white p-6 shadow-sm sm:w-[340px]"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={`Portrait of ${testimonial.name}`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark-2">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-brand-muted">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-brand-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollByCard("prev")}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#E66E8C] text-[#E66E8C] transition-colors hover:bg-[#E66E8C]/10"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollByCard("next")}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#E66E8C] text-[#E66E8C] transition-colors hover:bg-[#E66E8C]/10"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
