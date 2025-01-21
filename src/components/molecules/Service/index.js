import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Architecture and Design:",
      icon: <DiAtom />,
      description:
        "I take the lead in designing and architecting software applications, ensuring that they are not only scalable and maintainable but also align perfectly with our business requirements."
        +" I create detailed technical specifications to guide our team through the development process.",
    },
    {
      id: 2,
      title: "Code Development and Review: ",
      icon: <FiServer />,
      description:
        "I write high-quality, efficient, and clean code that adheres to best practices. Part of my role involves conducting thorough code reviews, where I ensure that our codebase remains robust and maintainable while sharing constructive feedback with my teammates.",
    },
    {
      id: 3,
      title: "Mentorship and Leadership: ",
      icon: <BiPalette />,
      description:
        "I actively mentor and support junior developers, helping them grow their skills and navigate challenges. I enjoy leading project teams, facilitating collaboration, and fostering a positive team environment that encourages knowledge sharing and professional development.",
    },
    {
      id: 4,
      title: "Collaboration with Stakeholders: ",
      icon: <FiServer />,
      description:
        "I work closely with product managers, designers, and other stakeholders to gather requirements and share technical insights. I ensure that the software we develop meets our users' needs and aligns with our business goals.",
    },
    {
      id: 5,
      title: "Problem Solving and Debugging: ",
      icon: <FiServer />,
      description:
      "When complex technical issues arise, I take the initiative to diagnose and resolve these problems efficiently. I strive to implement effective solutions that enhance our applications' performance and deliver a better user experience.",
    },
    {
      id: 6,
      title: "Continuous Improvement and Innovation: ",
      icon: <FiServer />,
      description:
        "I stay updated with industry trends and emerging technologies, continuously advocating for improvements within our team. I enjoy introducing new tools, methodologies, or frameworks that enhance our development process and drive innovation in our projects.",
    },
  ];
  return (
    <div className="py-20 parent"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
