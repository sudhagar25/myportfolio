import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";

export const About = () => {
    return (
        <SectionWrapper id="about" className="bg-black-rich relative overflow-hidden py-32">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                {/* Header with Gold Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col items-center gap-4"
                >
                    <h2 className="text-5xl md:text-6xl font-bold font-serif text-white tracking-tight">
                        About
                    </h2>
                    <div className="h-[2px] w-24 bg-gold rounded-full" />
                </motion.div>

                {/* Clean Paragraph Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass p-10 md:p-14 rounded-3xl border border-white/5 bg-charcoal/40 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-gold/20 transition-all duration-500"
                >
                    {/* Subtle Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -z-10 group-hover:bg-gold/10 transition-all duration-1000" />

                    <p className="text-gray-300 leading-relaxed text-xl md:text-2xl font-light font-sans text-center">
                        I am a tech-driven problem solver passionate about the convergence of <span className="text-white font-medium">Artificial Intelligence</span> and <span className="text-white font-medium">Modern Web Development</span>. My work revolves around building intelligent systems that optimize workflows and drive meaningful impact through automation. Dedicated to continuous learning, I thrive on tackling complex engineering challenges. <span className="text-gold font-serif italic block mt-6 text-2xl md:text-3xl">"I architect scalable digital solutions that merge logic with creativity to elevate human potential."</span>
                    </p>
                </motion.div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-charcoal/50 rounded-full blur-[80px] pointer-events-none" />
        </SectionWrapper>
    );
};
