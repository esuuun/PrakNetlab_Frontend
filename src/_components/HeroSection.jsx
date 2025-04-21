import Highlighter from "../components/ui/highlighter";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { ModeToggle } from "../components/ui/modeToggle";
import { useTheme } from "../components/theme-provider";

const HeroSection = () => {
  const { theme } = useTheme();
  const [state, setState] = useState(false);

  const navigation = [
    { title: "SBD", path: "#netlabList" },
    { title: "DMJ", path: "#netlabList" },
    { title: "OS", path: "#netlabList" },
  ];

  const logoSrc =
    theme === "dark"
      ? "src/assets/netlab/logo_light.svg"
      : "src/assets/netlab/logo_dark.svg";

  return (
    <>
      <header>
        <nav className="md:-translate-x-10 items-center px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
            <a href="#">
              <img src={logoSrc} width={120} height={50} alt="Netlab logo" />
            </a>
            <button
              className="text-foreground outline-none md:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
              state ? "" : "hidden"
            }`}
          >
            <li className="order-2 pb-5 md:pb-0">
              <ModeToggle />
            </li>
            <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li
                  className="text-foreground text-lg hover:text-primary"
                  key={idx}
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-foreground font-bold text-4xl md:text-5xl">
            Welcome to
            <span className="text-primary"> Network Laboratory</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            explicabo veniam laboriosam sit quibusdam. Odio natus quos voluptas
            consequuntur in ratione vero, doloremque accusantium.
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 flex">
          <a href="#netlabList">
            <Button size="lg">Get Started</Button>
          </a>
          <a href="#netlabList">
            <Button variant="outline" size="lg" className="text-primary">
              Learn More
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
