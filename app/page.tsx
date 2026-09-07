// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import Hero from "@/components/sections/Hero";
// import FeatureSection from "@/components/sections/FeatureSection";
// import CapacityDevelopment from "@/components/sections/CapacityDevelopment";
// import ManagementDevelopmentProgram from "@/components/sections/ManagementDevelopmentProgram";
// import TransformationHub from "@/components/sections/TransformationHub";
// import TrainingConsultant from "@/components/sections/TrainingConsultant";
// import CtaBanner from "@/components/sections/CtaBanner";
// import Testimonials from "@/components/sections/Testimonials";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />

//         <FeatureSection
//           id="lms"
//           title="Learning Management System"
//           description="TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape."
//           bulletsIntro="Some of our courses include:"
//           bullets={[
//             "Business Analysis",
//             "Design Thinking",
//             "Effective Communication",
//             "Entrepreneurship",
//             "Career Development",
//             "Business Model",
//           ]}
//           imageSrc="/corpImage.png"
//           imageAlt="Two professionals, a man in a suit and a woman in business attire, smiling"
//           imagePosition="left"
//           ctaLabel="Learn More"
//           ctaHref="#lms-learn-more"
//         />

//         <FeatureSection
//           id="corporate-trainings"
//           title="Corporate Trainings"
//           description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
//           bullets={[
//             "Leadership Training",
//             "Strategic Planning and Implementation",
//             "Project Management",
//             "Sustainability Training",
//             "Customised Training",
//           ]}
//           imageSrc="/CorpTrain.png"
//           imageAlt="Corporate training session with a facilitator presenting to a team at a whiteboard"
//           imagePosition="right"
//           background="lavender"
//         />

//         <FeatureSection
//           id="personalised-training"
//           title="Personalised Individual Training"
//           description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
//           bullets={[
//             "Leadership Development",
//             "Soft Skills Development",
//             "Industry Specific Knowledge",
//             "Technical Skills Enhancement",
//             "Time Management and Productivity",
//             "Career Development",
//           ]}
//           imageSrc="/PersTrain.png"
//           imageAlt="A focused professional woman listening intently in an individual training session"
//           imagePosition="left"
//         />

//         <CapacityDevelopment />
//         <ManagementDevelopmentProgram />
//         <TransformationHub />
//         <TrainingConsultant />

//         <CtaBanner
//           id="growth"
//           eyebrow="Want to accelerate professional growth and development at your organisation?"
//           heading="See how we can help."
//           ctaLabel="Book a Consultation"
//           ctaHref="#consultation"
//         />

//         <CtaBanner
//           heading="Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here."
//           ctaLabel="Book a Consultation"
//           ctaHref="#consultation"
//         />

//         <Testimonials />

//         <CtaBanner
//           id="contact"
//           eyebrow="Ready to be a part of something extraordinary?"
//           heading="Let's work together to create a difference"
//           ctaLabel="Get In Touch"
//           ctaHref="#get-in-touch"
//         />
//       </main>
//       <Footer />
//     </>
//   );
// }

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LmsSection from "@/components/sections/LmsSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CapacityDevelopment from "@/components/sections/CapacityDevelopment";
import ManagementDevelopmentProgram from "@/components/sections/ManagementDevelopmentProgram";
import TransformationHub from "@/components/sections/TransformationHub";
import TrainingConsultant from "@/components/sections/TrainingConsultant";
import CtaBanner from "@/components/sections/CtaBanner";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <LmsSection
          id="lms"
          title="Learning Management System"
          description="TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape."
          bulletsIntro="Some of our courses include:"
          bullets={[
            "Business Analysis",
            "Design Thinking",
            "Effective Communication",
            "Entrepreneurship",
            "Career Development",
            "Business Model",
          ]}
          imageSrc="/corpImage.png"
          imageAlt="Two professionals, a man in a suit and a woman in business attire, smiling"
          ctaLabel="Learn More"
          ctaHref="#lms-learn-more"
        />

        <FeatureSection
          id="corporate-trainings"
          title="Corporate Trainings"
          description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
          bullets={[
            "Leadership Training",
            "Strategic Planning and Implementation",
            "Project Management",
            "Sustainability Training",
            "Customised Training",
          ]}
          imageSrc="/CorpTrain.png"
          imageAlt="Corporate training session with a facilitator presenting to a team at a whiteboard"
          imagePosition="right"
          background="lavender"
        />

        <FeatureSection
          id="personalised-training"
          title="Personalised Individual Training"
          description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
          bullets={[
            "Leadership Development",
            "Soft Skills Development",
            "Industry Specific Knowledge",
            "Technical Skills Enhancement",
            "Time Management and Productivity",
            "Career Development",
          ]}
          imageSrc="/PersTrain.png"
          imageAlt="A focused professional woman listening intently in an individual training session"
          imagePosition="left"
        />

        <CapacityDevelopment />
        <ManagementDevelopmentProgram />
        <TransformationHub />
        <TrainingConsultant />

        <CtaBanner
          id="growth"
          eyebrow="Want to accelerate professional growth and development at your organisation?"
          heading="See how we can help."
          ctaLabel="Book a Consultation"
          ctaHref="#consultation"
        />

        {/* <CtaBanner
          heading="Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here."
          ctaLabel="Book a Consultation"
          ctaHref="#consultation"
        /> */}

        <Testimonials />

        <CtaBanner
          id="contact"
          eyebrow="Ready to be a part of something extraordinary?"
          heading="Let's work together to create a difference"
          ctaLabel="Get In Touch"
          ctaHref="#get-in-touch"
        />
      </main>
      <Footer />
    </>
  );
}
