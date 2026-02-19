import { motion } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Contact = () => {
    return (
        <SectionWrapper id="contact" className="bg-black-rich relative py-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 flex items-center justify-center gap-6"
                >
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold" />
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
                        Contact <span className="text-gold">Me</span>
                    </h2>
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold" />
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <ContactCard
                        icon={<Mail size={24} />}
                        title="Email"
                        value="sudhagarmurugan06@gmail.com"
                        href="mailto:sudhagarmurugan06@gmail.com"
                        delay={0.1}
                    />
                    <ContactCard
                        icon={<Phone size={24} />}
                        title="Phone"
                        value="+91 6369209187"
                        href="tel:+916369209187"
                        delay={0.2}
                        isGoldIcon={true}
                    />
                    <ContactCard
                        icon={<MapPin size={24} />}
                        title="Location"
                        value="Coimbatore, India"
                        href="https://maps.google.com"
                        delay={0.3}
                    />
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="mailto:sudhagarmurugan06@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 border border-gold/50 text-gold rounded-full font-medium text-lg hover:bg-gold hover:text-black-rich transition-all duration-300 group hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    >
                        Let's Work Together
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Footer Line */}
                <div className="mt-24 border-t border-white/5 pt-8 text-center">
                    <p className="text-gray-500 text-sm font-sans tracking-wider uppercase">
                        © 2026 SUDHAGAR M. All Rights Reserved.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

const ContactCard = ({ icon, title, value, href, delay, isGoldIcon = false }: {
    icon: React.ReactNode,
    title: string,
    value: string,
    href: string,
    delay: number,
    isGoldIcon?: boolean
}) => (
    <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="glass p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 group hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 bg-charcoal/40 backdrop-blur-md"
    >
        <div className={`p-4 rounded-full transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
            ${isGoldIcon
                ? "bg-gold text-black-rich"
                : "bg-white/5 text-gray-400 group-hover:bg-gold group-hover:text-black-rich"
            }
        `}>
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-serif text-white mb-1 group-hover:text-gold transition-colors">{title}</h4>
            <p className="text-gray-400 text-sm font-light group-hover:text-white transition-colors">{value}</p>
        </div>
    </motion.a>
);
