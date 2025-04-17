import {useEffect} from "react";
import {motion} from "framer-motion";
import Project from "./Home/Projects/Project";
import {ProjectData} from "../data/service";

const GlowingCard = ({base, spread, projectInfo}) => {
  return (
    <motion.article
      className="relative w-full rounded-xl p-2 shadow-lg backdrop-blur-sm"
      style={{
        "--base": base,
        "--spread": spread,
        "--outer": 1,
      }}
      data-glow
    >
      <Project item={projectInfo} />
      <div className="absolute inset-0" data-glow></div>
    </motion.article>
  );
};

const ServiceCards = () => {
  useEffect(() => {
    const syncPointer = ({x, y}) => {
      document.documentElement.style.setProperty("--x", x.toFixed(2));
      document.documentElement.style.setProperty(
        "--xp",
        (x / window.innerWidth).toFixed(2)
      );
      document.documentElement.style.setProperty("--y", y.toFixed(2));
      document.documentElement.style.setProperty(
        "--yp",
        (y / window.innerHeight).toFixed(2)
      );
    };

    document.body.addEventListener("pointermove", syncPointer);
    return () => document.body.removeEventListener("pointermove", syncPointer);
  }, []);

  return (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="max-w-[1240px] px-10 grid md:grid-cols-2 grid-cols-1 justify-center gap-8 bg-background py-10">
        {ProjectData[0].map((item) => (
          <GlowingCard
            key={item.id}
            projectInfo={item}
            base={80}
            spread={500}
          />
        ))}
        {/* <GlowingCard base={220} spread={200} />
      <GlowingCard base={80} spread={500} />
      <GlowingCard base={80} spread={500} />
      <GlowingCard base={80} spread={500} />
      <GlowingCard base={80} spread={500} />
      <GlowingCard base={80} spread={500} />
      <GlowingCard base={220} spread={200} />
      <GlowingCard base={80} spread={500} />
      <GlowingCard base={220} spread={200} /> */}
      </div>
    </div>
  );
};

export default ServiceCards;
