import { Outlet, useLocation } from "react-router-dom";

const steps = [
  "/about/intro",
  "/about/fundamentals",
  "/about/generation",
  "/about/detection",
  "/about/impact",
];

const AboutLayout = () => {
  const location = useLocation();
  const currentIndex = steps.indexOf(location.pathname);

  const progress = ((currentIndex + 1) / steps.length) * 100;

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* 🔹 PROGRESS BAR GLOBAL */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AboutLayout;
