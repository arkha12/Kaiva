"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    const animateItems = document.querySelectorAll(
      'section, [class*="col-span-"], .animate-on-scroll'
    );
    animateItems.forEach((item) => {
      item.classList.add(
        "transition-all",
        "duration-700",
        "opacity-0",
        "translate-y-10"
      );
      observer.observe(item);
    });

    return () => {
      animateItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-32">
        <Hero />

        {/* 2. ¿Qué es un Trabajador Digital? */}
        <section id="trabajadores" className="px-margin-safe py-section-gap bg-surface-container-lowest border-y border-outline-variant/20">
          <div className="max-w-container-max mx-auto text-center mb-16">
            <span className="font-label-caps text-secondary mb-4 block">CAPACIDAD LABORAL DIGITAL</span>
            <h2 className="font-headline-lg text-4xl md:text-5xl font-medium max-w-3xl mx-auto">Más que automatización.</h2>
            <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mt-6">
              Un Trabajador Digital es un sistema de IA diseñado para ejecutar procesos empresariales completos, no solamente responder preguntas.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative mt-20 hidden md:block">
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-outline-variant/50"></div>
            <div className="flex justify-between relative z-10">
              {['ENTIENDE', 'ANALIZA', 'DECIDE', 'PIDE APROBACIÓN', 'EJECUTA', 'REPORTA'].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-14 h-14 rounded-full bg-white border border-outline flex items-center justify-center font-label-caps text-[10px] text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    {`0${idx+1}`}
                  </div>
                  <span className="mt-4 font-label-caps text-on-surface-variant text-center max-w-[100px]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 md:mt-24 p-8 bg-surface-container rounded-xl text-center border border-outline-variant/30">
            <p className="font-body-md text-on-surface">
              <strong>Las decisiones críticas permanecen bajo control humano.</strong><br/>
              KAIVA ejecuta dentro de permisos, reglas y procesos definidos por la empresa.
            </p>
          </div>
        </section>

        {/* 3. El Problema */}
        <section className="px-margin-safe py-section-gap max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display-xl text-4xl md:text-5xl leading-tight mb-8">
                Las empresas ya tienen software. Lo que todavía falta es capacidad para ejecutar.
              </h2>
              <p className="text-on-surface-variant font-body-lg">
                Ya utilizas ERPs, Excel, correo electrónico, documentos, CRMs, y plataformas operativas.
                <br/><br/>
                Pero muchas personas todavía tienen que mover información entre sistemas, revisar documentos, perseguir aprobaciones, preparar órdenes, hacer seguimiento y coordinar procesos.
              </p>
            </div>
            <div className="bg-primary text-white p-12 md:p-16 rounded-2xl">
              <h3 className="font-headline-md text-3xl mb-6">KAIVA se ocupa del trabajo que todavía requiere personas.</h3>
              <div className="h-[1px] bg-white/20 w-full my-8"></div>
              <ul className="space-y-4 font-body-md opacity-80">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Extraer datos de PDFs y correos</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Actualizar el ERP automáticamente</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Validar reglas de negocio complejas</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Preparar borradores para aprobación</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Cómo funciona */}
        <section id="como-funciona" className="px-margin-safe py-section-gap bg-surface-container-lowest border-y border-outline-variant/20 blueprint-grid">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <span className="font-label-caps text-secondary mb-4 block">ARQUITECTURA</span>
              <h2 className="font-headline-lg text-4xl font-medium">Cómo funciona KAIVA</h2>
              <p className="text-on-surface-variant font-body-md mt-4">KAIVA funciona con la infraestructura tecnológica que tu empresa ya utiliza. No somos otro ERP.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="p-8 border border-outline-variant rounded-xl bg-white w-full md:w-64 text-center shadow-sm">
                <div className="font-label-caps text-primary mb-4">TUS SISTEMAS</div>
                <div className="space-y-2 text-sm text-on-surface-variant">
                  <div className="p-2 bg-surface-container rounded">ERP</div>
                  <div className="p-2 bg-surface-container rounded">Excel / PDFs</div>
                  <div className="p-2 bg-surface-container rounded">Email</div>
                </div>
              </div>

              <div className="text-primary material-symbols-outlined text-4xl hidden md:block">arrow_forward</div>
              <div className="text-primary material-symbols-outlined text-4xl md:hidden rotate-90">arrow_forward</div>

              <div className="p-10 border-2 border-primary rounded-xl bg-primary text-white w-full md:w-72 text-center shadow-lg transform hover:scale-105 transition-transform">
                <div className="font-headline-md mb-2">KAIVA</div>
                <div className="font-label-caps opacity-80 mb-6">TRABAJADOR DIGITAL</div>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-white/10 rounded">Analiza</span>
                  <span className="px-2 py-1 bg-white/10 rounded">Decide</span>
                  <span className="px-2 py-1 bg-white/10 rounded">Ejecuta</span>
                </div>
              </div>

              <div className="text-primary material-symbols-outlined text-4xl hidden md:block">arrow_forward</div>
              <div className="text-primary material-symbols-outlined text-4xl md:hidden rotate-90">arrow_forward</div>

              <div className="p-8 border border-outline-variant rounded-xl bg-white w-full md:w-64 text-center shadow-sm">
                <div className="font-label-caps text-primary mb-4">RESULTADOS</div>
                <div className="space-y-2 text-sm text-on-surface-variant">
                  <div className="p-2 border border-outline-variant/50 rounded flex items-center justify-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Tareas Listas</div>
                  <div className="p-2 border border-outline-variant/50 rounded flex items-center justify-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Datos Actualizados</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionsSection />

        {/* 6. Industrias */}
        <section id="industrias" className="px-margin-safe py-section-gap bg-primary text-white">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16">
              <h2 className="font-display-xl text-4xl md:text-5xl mb-6">Construcción es el comienzo.</h2>
              <p className="font-body-lg text-white/70 max-w-2xl">
                Construimos trabajadores digitales para industrias donde los procesos complejos todavía dependen de trabajo manual.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-t border-white/20 pt-12">
              {[
                { name: 'Construcción', focus: true },
                { name: 'Manufactura' },
                { name: 'Logística' },
                { name: 'Energía' },
                { name: 'Infraestructura' },
                { name: 'Servicios Empresariales' }
              ].map((ind, i) => (
                <div key={i} className={`p-6 border rounded-lg ${ind.focus ? 'border-white bg-white/10' : 'border-white/10'}`}>
                  {ind.focus && <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-2">Enfoque Actual</span>}
                  <h4 className="font-headline-md text-lg">{ind.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Resultados */}
        <section className="px-margin-safe py-section-gap max-w-container-max mx-auto line-art-pattern relative">
          <div className="absolute inset-0 bg-background/90 z-0"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-4xl font-medium mb-4">No automatizamos por automatizar.</h2>
              <p className="text-on-surface-variant text-xl">Automatizamos donde existe impacto económico.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 border border-outline-variant shadow-sm flex items-start gap-6">
                <div className="text-primary material-symbols-outlined text-3xl">timer</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Menos Tiempo</h4>
                  <p className="text-on-surface-variant text-sm">Procesos que antes tardaban horas pueden ejecutarse mucho más rápido.</p>
                </div>
              </div>

              <div className="bg-white p-8 border border-outline-variant shadow-sm flex items-start gap-6">
                <div className="text-primary material-symbols-outlined text-3xl">autorenew</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Menos Trabajo Repetitivo</h4>
                  <p className="text-on-surface-variant text-sm">Los equipos pueden dedicar tiempo a tareas de mayor valor estratégico.</p>
                </div>
              </div>

              <div className="bg-white p-8 border border-outline-variant shadow-sm flex items-start gap-6">
                <div className="text-primary material-symbols-outlined text-3xl">check_circle</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Menos Errores</h4>
                  <p className="text-on-surface-variant text-sm">Procesos consistentes, trazables y 100% auditables en cada paso.</p>
                </div>
              </div>

              <div className="bg-white p-8 border border-outline-variant shadow-sm flex items-start gap-6">
                <div className="text-primary material-symbols-outlined text-3xl">trending_up</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Más Capacidad</h4>
                  <p className="text-on-surface-variant text-sm">Las empresas pueden manejar más operaciones sin aumentar proporcionalmente su estructura.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Seguridad */}
        <section id="seguridad" className="px-margin-safe py-section-gap bg-surface-container-lowest border-y border-outline-variant/20">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <span className="font-label-caps text-secondary mb-4 block">CONTROL EMPRESARIAL</span>
              <h2 className="font-headline-lg text-4xl mb-6">Automatización con control.</h2>
              <p className="text-on-surface-variant font-body-lg mb-8">
                Autonomía donde aporta valor. Control humano donde importa.
              </p>
              <div className="h-[1px] w-full bg-outline-variant mb-8"></div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                  </div>
                  <div>
                    <h5 className="font-bold">Permisos Limitados</h5>
                    <p className="text-sm text-on-surface-variant mt-1">Cada trabajador tiene acceso restringido y limitado a su función.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                  </div>
                  <div>
                    <h5 className="font-bold">Aprobación Humana</h5>
                    <p className="text-sm text-on-surface-variant mt-1">Las acciones sensibles requieren autorización explícita.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">history</span>
                  </div>
                  <div>
                    <h5 className="font-bold">Auditoría Total</h5>
                    <p className="text-sm text-on-surface-variant mt-1">Cada acción, decisión y consulta queda registrada.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/30 flex justify-center items-center h-full min-h-[400px]">
              <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg border border-outline-variant/50 relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="text-xs text-on-surface-variant mb-4 font-mono-metric">LOG ID: 8943-KAIVA-EXEC</div>
                <h4 className="font-bold mb-2">Aprobación Pendiente</h4>
                <p className="text-sm text-on-surface-variant mb-6">El Trabajador Financiero solicita emitir pago de $45,000.00 a Proveedor Industrial S.A.</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-primary text-white text-sm font-medium rounded">Aprobar</button>
                  <button className="flex-1 py-2 border border-outline text-primary text-sm font-medium rounded">Rechazar</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Competencia / Posicionamiento */}
        <section className="px-margin-safe py-section-gap max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-4xl mb-16">El Ecosistema</h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16">
            <div className="flex-1 p-8 border-b-4 border-outline-variant hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-2xl mb-4">ERP</h3>
                <p className="font-body-lg font-medium">Organiza y registra.</p>
              </div>
            </div>

            <div className="flex-1 p-8 border-b-4 border-outline-variant hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-2xl mb-4">Software Empresarial</h3>
                <p className="font-body-lg font-medium">Gestiona información y procesos.</p>
              </div>
            </div>

            <div className="flex-1 p-8 border-b-4 border-primary bg-surface-container transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-2xl mb-4">KAIVA</h3>
                <p className="font-body-lg font-medium">Ejecuta el trabajo.</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-on-surface font-light leading-relaxed">
              KAIVA no busca reemplazar los sistemas que ya funcionan. Busca hacerlos más útiles al ejecutar el trabajo que todavía realizan personas.
            </p>
          </div>
        </section>

        <ProcessSection />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
