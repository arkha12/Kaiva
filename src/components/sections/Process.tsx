"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery", description: "Analyzing technical requirements and mapping business logic to scalable architectures." },
  { id: "02", title: "Architecture", description: "Designing system topologies, database schemas, and microservice boundaries." },
  { id: "03", title: "Development", description: "Writing clean, typed, and tested code using modern engineering standards." },
  { id: "04", title: "Launch", description: "Deploying via CI/CD pipelines with zero downtime and automated provisioning." },
  { id: "05", title: "Scale", description: "Monitoring telemetry, optimizing performance, and handling increased load." },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative z-10 border-t border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Engineering Lifecycle</h2>
          <p className="text-lg text-white/60">
            A systematic approach to building software that guarantees reliability from inception to scale.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-8 md:pl-0 md:border-l-0">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:flex-1 md:text-center group"
              >
                {/* Mobile indicator */}
                <div className="md:hidden absolute -left-[2.3rem] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/40 group-hover:bg-white transition-colors" />
                
                {/* Desktop indicator */}
                <div className="hidden md:flex mx-auto w-8 h-8 rounded-full bg-black border border-white/20 items-center justify-center mb-6 group-hover:border-white transition-colors relative z-10">
                  <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                </div>
                
                <div className="text-sm font-mono text-white/40 mb-2">{step.id}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed md:px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
