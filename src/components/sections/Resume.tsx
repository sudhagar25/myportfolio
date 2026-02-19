import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { FileText, Download, Eye } from "lucide-react";

export const Resume = () => {
    return (
        <SectionWrapper id="resume" className="bg-black-rich py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col items-center gap-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
                        Resume
                    </h2>
                    <div className="h-[1px] w-24 bg-gold rounded-full" />
                    <p className="text-gray-400 font-light max-w-xl mx-auto">
                        A detailed overview of my skills, projects, and technical expertise.
                    </p>
                </motion.div>

                {/* Resume Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="glass max-w-2xl mx-auto p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl group hover:border-gold/30 transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Icon / Preview Placeholder */}
                        <div className="w-24 h-32 bg-charcoal rounded-lg border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all">
                            <FileText size={40} className="text-gray-500 group-hover:text-gold transition-colors" />
                        </div>

                        {/* Content & Actions */}
                        <div className="flex-1 text-left space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Sudhagar M - Resume</h3>
                                <p className="text-sm text-gray-400">PDF Document • Professional CV</p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/Sudhaa%20Resume.pdf"
                                    download="Sudhaa_Resume.pdf"
                                    className="flex items-center gap-2 px-6 py-3 bg-gold text-black-rich font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105"
                                >
                                    <Download size={18} />
                                    Download
                                </a>
                                <a
                                    href="/Sudhaa%20Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 hover:border-gold/50 hover:text-gold transition-all"
                                >
                                    <Eye size={18} />
                                    View File
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
};
