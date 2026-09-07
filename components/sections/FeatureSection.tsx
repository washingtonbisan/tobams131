// import Image from "next/image";
// import Link from "next/link";

// interface FeatureSectionProps {
//   id?: string;
//   eyebrow?: string;
//   title: string;
//   description: string;
//   bullets: string[];
//   imageSrc: string;
//   imageAlt: string;
//   imagePosition?: "left" | "right";
//   background?: "white" | "lavender";
//   ctaLabel?: string;
//   ctaHref?: string;
//   bulletsIntro?: string;
// }

// export default function FeatureSection({
//   id,
//   eyebrow,
//   title,
//   description,
//   bullets,
//   imageSrc,
//   imageAlt,
//   imagePosition = "left",
//   background = "white",
//   ctaLabel,
//   ctaHref,
//   bulletsIntro,
// }: FeatureSectionProps) {
//   const bgClass = background === "lavender" ? "bg-brand-lavender" : "bg-white";

//   return (
//     <section id={id} className={bgClass}>
//       <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
//         <div
//           className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
//             imagePosition === "right" ? "" : ""
//           }`}
//         >
//           <div
//             className={`relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-[420px] ${
//               imagePosition === "right" ? "lg:order-2" : "lg:order-1"
//             }`}
//           >
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               fill
//               sizes="(min-width: 1024px) 50vw, 100vw"
//               className="object-cover"
//             />
//           </div>

//           <div
//             className={`flex flex-col gap-4 ${
//               imagePosition === "right" ? "lg:order-1" : "lg:order-2"
//             }`}
//           >
//             {eyebrow && (
//               <span className="text-xs font-semibold uppercase tracking-wide text-brand-maroon">
//                 {eyebrow}
//               </span>
//             )}
//             <h2 className="font-heading text-2xl font-bold text-brand-maroon sm:text-3xl">
//               {title}
//             </h2>
//             <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
//               {description}
//             </p>
//             {bulletsIntro && (
//               <p className="text-sm font-semibold text-brand-dark-2">
//                 {bulletsIntro}
//               </p>
//             )}
//             <ul className="grid grid-cols-1 gap-2 text-sm text-brand-dark-2 sm:grid-cols-2">
//               {bullets.map((bullet) => (
//                 <li key={bullet} className="flex items-start gap-2">
//                   <span
//                     className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-maroon"
//                     aria-hidden="true"
//                   />
//                   {bullet}
//                 </li>
//               ))}
//             </ul>
//             {ctaLabel && ctaHref && (
//               <Link
//                 href={ctaHref}
//                 className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-maroon hover:underline"
//               >
//                 {ctaLabel}
//                 <span aria-hidden="true">↗</span>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";

// interface FeatureSectionProps {
//   id?: string;
//   eyebrow?: string;
//   title: string;
//   description: string;
//   bullets: string[];
//   imageSrc: string;
//   imageAlt: string;
//   imagePosition?: "left" | "right";
//   background?: "white" | "lavender";
//   ctaLabel?: string;
//   ctaHref?: string;
//   bulletsIntro?: string;
// }

// export default function FeatureSection({
//   id,
//   eyebrow,
//   title,
//   description,
//   bullets,
//   imageSrc,
//   imageAlt,
//   imagePosition = "left",
//   background = "white",
//   ctaLabel,
//   ctaHref,
//   bulletsIntro,
// }: FeatureSectionProps) {
//   // Panel background — this is the color that sits BEHIND the image + text,
//   // not the whole section. Section itself stays white.
//   const panelBgClass =
//     background === "lavender" ? "bg-brand-lavender" : "bg-[#F9F9F9]";

//   return (
//     <section id={id} className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
//         <div className={`rounded-3xl ${panelBgClass} p-6 sm:p-10 lg:p-14`}>
//           <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//             <div
//               className={`relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-full ${
//                 imagePosition === "right" ? "lg:order-2" : "lg:order-1"
//               }`}
//             >
//               <Image
//                 src={imageSrc}
//                 alt={imageAlt}
//                 fill
//                 sizes="(min-width: 1024px) 40vw, 80vw"
//                 className="object-cover"
//               />
//             </div>

//             <div
//               className={`flex flex-col gap-4 ${
//                 imagePosition === "right" ? "lg:order-1" : "lg:order-2"
//               }`}
//             >
//               {eyebrow && (
//                 <span className="text-xs font-semibold uppercase tracking-wide text-brand-maroon">
//                   {eyebrow}
//                 </span>
//               )}
//               <h2 className="font-heading text-2xl font-bold text-brand-maroon sm:text-3xl">
//                 {title}
//               </h2>
//               <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
//                 {description}
//               </p>
//               {bulletsIntro && (
//                 <p className="text-sm font-semibold text-brand-dark-2">
//                   {bulletsIntro}
//                 </p>
//               )}
//               <ul className="grid grid-cols-1 gap-2 text-sm text-brand-dark-2 sm:grid-cols-2">
//                 {bullets.map((bullet) => (
//                   <li key={bullet} className="flex items-start gap-2">
//                     <span
//                       className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-maroon"
//                       aria-hidden="true"
//                     />
//                     {bullet}
//                   </li>
//                 ))}
//               </ul>
//               {ctaLabel && ctaHref && (
//                 <Link
//                   href={ctaHref}
//                   className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-maroon hover:underline"
//                 >
//                   {ctaLabel}
//                   <span aria-hidden="true">↗</span>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

interface FeatureSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  ctaLabel?: string;
  ctaHref?: string;
  bulletsIntro?: string;
}

/**
 * FeatureSection — simple, plain layout: rectangular image (rounded corners),
 * text column with diamond bullets, alternating sides. No color panel —
 * always sits on a plain white background.
 */
export default function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  ctaLabel,
  ctaHref,
  bulletsIntro,
}: FeatureSectionProps) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={`relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-[360px] ${
              imagePosition === "right" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className={`flex flex-col gap-3 ${
              imagePosition === "right" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-maroon">
                {eyebrow}
              </span>
            )}
            <h2 className="font-heading text-xl font-bold text-brand-maroon sm:text-2xl">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-brand-muted">
              {description}
            </p>
            {bulletsIntro && (
              <p className="text-sm font-semibold text-brand-dark-2">
                {bulletsIntro}
              </p>
            )}
            <ul className="flex flex-col gap-1.5 text-sm text-brand-dark-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-maroon"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-maroon hover:underline"
              >
                {ctaLabel}
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
