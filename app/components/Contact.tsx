"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's build something great"
          description="Available for freelance work and full-time roles. Drop a message — I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <p className="text-muted text-lg leading-relaxed">
              Whether you have a project in mind, a role to discuss, or just want to connect —
              my inbox is always open.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "sonidivyesh2004@gmail.com",
                  href: "mailto:sonidivyesh2004@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Ahmedabad, India",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-accent group-hover:scale-105 transition-transform shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-muted uppercase font-bold tracking-[0.2em]">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-semibold truncate hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-10 rounded-3xl"
          >
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-secondary/60 border border-white/6 rounded-xl px-5 py-3.5 text-white placeholder:text-muted/50 outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-secondary/60 border border-white/6 rounded-xl px-5 py-3.5 text-white placeholder:text-muted/50 outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-secondary/60 border border-white/6 rounded-xl px-5 py-3.5 text-white placeholder:text-muted/50 outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full !py-4 mt-2 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
