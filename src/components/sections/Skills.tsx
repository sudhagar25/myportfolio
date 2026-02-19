import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import {
    SiC, SiJavascript, SiPython, SiGithub,
    SiPostgresql, SiHtml5, SiCss3, SiPycharm
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skills = [
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: SiPython, color: "#3776AB", featured: true },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "AI Integration", icon: FaBrain, color: "#FFD700" },
    { name: "PyCharm", icon: SiPycharm, color: "#000000" },
];

export const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-[#1e1f26] py-24 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black-rich/50 via-transparent to-black-rich/50 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 tracking-tight">
                        My Skills
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full opacity-80" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                            }}
                            className={`
                                relative p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all duration-300
                                ${skill.featured
                                    ? "bg-gradient-to-br from-gold/20 to-orange-500/20 border border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                                    : "bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10"
                                }
                            `}
                        >
                            {/* Icon Container */}
                            <div className={`
                                p-4 rounded-full transition-transform duration-300 group-hover:scale-110
                                ${skill.featured ? "bg-gold/20 text-gold" : "bg-black/30 text-gray-300 group-hover:text-white"}
                            `}>
                                <skill.icon size={32} />
                            </div>

                            {/* Skill Name */}
                            <h3 className={`
                                font-medium text-lg tracking-wide
                                ${skill.featured ? "text-gold font-bold" : "text-gray-400 group-hover:text-white"}
                            `}>
                                {skill.name}
                            </h3>

                            {/* Featured Badge */}
                            {skill.featured && (
                                <div className="absolute -top-3 -right-3">
                                    <span className="flex h-6 w-6 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-6 w-6 bg-gold items-center justify-center text-[10px] text-black-rich font-bold">★</span>
                                    </span>
                                </div>
                            )}

                            {/* Hover Glow Effect */}
                            <div className={`
                                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                                ${skill.featured ? "bg-gold/5" : "bg-white/5"}
                            `} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
