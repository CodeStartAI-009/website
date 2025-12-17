import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

/* -------------------- Project Links -------------------- */

const ProjectsLinks = ({ repo }: { repo?: string }) => {
  if (!repo) return null;

  return (
    <div className="flex items-center gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={repo}
      >
        <Button variant="default" size="sm">
          GitHub
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

/* -------------------- Skills -------------------- */

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  shadcn: { title: "ShadCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  socketio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  vite: { title: "Vite", bg: "black", fg: "white", icon: <SiVite /> },
  netlify: { title: "Netlify", bg: "black", fg: "white", icon: <SiNetlify /> },
  html: { title: "HTML5", bg: "black", fg: "white", icon: <SiHtml5 /> },
  css: { title: "CSS3", bg: "black", fg: "white", icon: <SiCss3 /> },
  bootstrap: { title: "Bootstrap", bg: "black", fg: "white", icon: <SiBootstrap /> },
  maven: { title: "Maven", bg: "black", fg: "white", icon: <SiApachemaven /> },
  cplusplus: { title: "C++", bg: "black", fg: "white", icon: <SiCplusplus /> },
  arduino: { title: "Arduino", bg: "black", fg: "white", icon: <SiArduino /> },
};

/* -------------------- Project Type -------------------- */

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
};

/* -------------------- Projects -------------------- */

const projects: Project[] = [
   
];

export default projects;
