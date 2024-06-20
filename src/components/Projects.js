import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "MovieFlix",
    href: "https://movie-flix-pi.vercel.app/",
    imageSrc:
      "https://fastly.picsum.photos/id/861/5000/3333.jpg?hmac=gtGlGlhgov_p1Qv5alPB5qMx2Oen2YHFiMft8S_Znfs",
    used: "ReactJS, Vite",
    description: "An Extensive Movie DB.",
  },
  {
    id: 2,
    name: "Exceed",
    href: "https://christa890.github.io/Excel-Clone/",
    imageSrc:
      "https://fastly.picsum.photos/id/504/5000/3333.jpg?hmac=tciW_3YQNlNNRCEM360bpaoyliNKAZ4aioVTTNLmTZk",
    used: "Javascript",
    description: "Excel clone app ",
  },
  {
    id: 3,
    name: "WeatherAPP",
    href: "https://remarkable-gumdrop-bfc80a.netlify.app/",
    imageSrc:
      "https://fastly.picsum.photos/id/110/5000/3333.jpg?hmac=AvUBrnXG4ebvrtC08T95vEzD1I9SryZ8KSQ4iJ9tb9s",

    used: "ReactJS, TailwindCSS",
    description: "Real-time Weather information "
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <div className="-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8 flex justify-center ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
