"use client";

import { motion } from "framer-motion";
import { Database, LineChart, Workflow } from "lucide-react";

const features = [
  {
    id: "crm",
    title: "Enterprise CRM",
    description: "Scalable customer relationship architectures built for high-throughput data processing and unified insights.",
    icon: Database,
    color: "from-blue-500/20 to-blue-500/0",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "analytics",
    title: "Advanced Analytics",
    description: "Real-time telemetry and predictive models processing millions of events to drive strategic decisions.",
    icon: LineChart,
    color: "from-purple-500/20 to-purple-500/0",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: "automations",
    title: "Intelligent Automations",
    description: "Event-driven microservices that eliminate manual workflows and reduce operational friction.",
    icon: Workflow,
    color: "from-emerald-500/20 to-emerald-500/0",
    border: "group-hover:border-emerald-500/50"
  }
];

export function Features() {
  return (
    <section id="solutions" className="py-24 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Robust solutions for complex systems</h2>
          <p className="text-lg text-white/60">
            We engineer high-performance software primitives that power modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative glass-panel p-8 overflow-hidden transition-colors ${feature.border}`}
            >
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
