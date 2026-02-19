import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Folder, Github, ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    links: { github: string; external: string };
}

const otherProjects: Project[] = [
    {
        title: "Banking Web App",
        description: "Secure and modern banking interface with real-time transaction tracking and dashboard analytics.",
        tags: ["React", "Node.js", "MongoDB"],
        links: { github: "#", external: "#" }
    },
    {
        title: "Hackathon Project",
        description: "Award-winning solution for smart city management using IoT sensors and real-time data visualization.",
        tags: ["Python", "IoT", "Flask"],
        links: { github: "#", external: "#" }
    },
    {
        title: "Mini AI Tools",
        description: "Collection of small AI utilities including image background remover and text summarizer.",
        tags: ["OpenAI API", "React", "Express"],
        links: { github: "#", external: "#" }
    }
];

export const OtherProjects = () => {
    return (
        <SectionWrapper id="projects" className="bg-black">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Other Noteworthy Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group p-6 rounded-xl bg-[#111] border border-white/5 hover:border-yellow-500/30 transition-all shadow-lg hover:shadow-yellow-500/10 flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <Folder size={40} className="text-yellow-500" />
                            <div className="flex gap-3 text-gray-400">
                                <a href={project.links.github} className="hover:text-white transition-colors"><Github size={20} /></a>
                                <a href={project.links.external} className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-yellow-400 transition-colors">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>

                        <div className="flex flex-wrap gap-3 text-xs text-gray-500 font-mono">
                            {project.tags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
