"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30 px-margin-safe py-6 flex justify-between items-center max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 120 100" fill="currentColor" className="w-8 h-8 text-primary shrink-0">
            <rect x="16" y="15" width="20" height="70" rx="4" />
            <path d="M 46 50 L 81 15 H 106 L 71 50 L 106 85 H 81 Z" />
          </svg>
          <span className="font-headline-lg text-headline-lg-mobile tracking-tighter text-on-background">
            KAIVA
          </span>
        </div>
        <div className="hidden lg:flex gap-8 items-center">
          <a href="#soluciones" className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200">Soluciones</a>
          <a href="#trabajadores" className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200">Trabajadores Digitales</a>
          <a href="#tecnologia" className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200">Tecnología</a>
          <a href="#seguridad" className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200">Seguridad</a>
          <a href="#industrias" className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200">Industrias</a>
          <div className="h-4 w-px bg-outline-variant mx-2"></div>
          <a href="#contacto" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps hover:scale-[0.98] transition-all">Contacto</a>
        </div>
      </nav>

      <main className="pt-32">
        {/* 1. Hero Section */}
        <section className="px-margin-safe py-section-gap max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[80vh]">
          <div className="lg:col-span-6 space-y-content-gap">
            <div className="inline-block border border-outline px-3 py-1 rounded-full font-label-caps text-on-surface-variant">
              EJECUCIÓN AUTÓNOMA
            </div>
            <h1 className="font-display-xl text-display-xl leading-tight">
              Trabajadores digitales para empresas.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              KAIVA automatiza y ejecuta procesos empresariales mediante trabajadores digitales que entienden información, utilizan los sistemas existentes y realizan trabajo real con control humano.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#cta" className="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md font-bold hover:bg-on-surface-variant transition-all active:scale-95">
                Descubre qué podemos automatizar
              </Link>
              <Link href="#como-funciona" className="border border-outline text-primary px-8 py-4 rounded-full font-body-md font-medium hover:bg-surface-container transition-all">
                Conoce cómo funciona
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative flex justify-center items-center h-[500px] blueprint-grid rounded-lg border border-outline-variant mt-12 lg:mt-0">
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                {/* Systems Left */}
                <rect x="40" y="80" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#f9f9f9" />
                <text x="90" y="105" fontSize="12" textAnchor="middle" fill="currentColor" letterSpacing="1">ERP / CRM</text>
                
                <rect x="40" y="180" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#f9f9f9" />
                <text x="90" y="205" fontSize="12" textAnchor="middle" fill="currentColor" letterSpacing="1">EMAIL</text>
                
                <rect x="40" y="280" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#f9f9f9" />
                <text x="90" y="305" fontSize="12" textAnchor="middle" fill="currentColor" letterSpacing="1">DOCS</text>

                {/* Lines to KAIVA */}
                <path d="M140 100 L240 200" stroke="currentColor" strokeDasharray="4 4" />
                <path d="M140 200 L240 200" stroke="currentColor" strokeDasharray="4 4" />
                <path d="M140 300 L240 200" stroke="currentColor" strokeDasharray="4 4" />

                {/* KAIVA / WORKER Center */}
                <circle cx="300" cy="200" r="60" stroke="currentColor" strokeWidth="1" fill="#ffffff" />
                <circle cx="300" cy="200" r="50" stroke="currentColor" strokeDasharray="2 2" />
                <text x="300" y="195" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="2">KAIVA</text>
                <text x="300" y="215" fontSize="10" textAnchor="middle" fill="#5e5e5e" letterSpacing="1">WORKER</text>

                {/* Lines to Actions Right */}
                <path d="M360 200 L460 150" stroke="currentColor" strokeWidth="1" />
                <path d="M360 200 L460 250" stroke="currentColor" strokeWidth="1" />

                {/* Actions Right */}
                <rect x="460" y="130" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#1b1b1b" />
                <text x="510" y="155" fontSize="12" textAnchor="middle" fill="#ffffff" letterSpacing="1">EJECUTA</text>

                <rect x="460" y="230" width="100" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#1b1b1b" />
                <text x="510" y="255" fontSize="12" textAnchor="middle" fill="#ffffff" letterSpacing="1">REPORTA</text>
              </svg>
            </div>
          </div>
        </section>

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

        {/* 5. Ejemplos de Trabajadores */}
        <section id="soluciones" className="px-margin-safe py-section-gap max-w-container-max mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <span className="font-label-caps text-secondary mb-4 block">SOLUCIONES</span>
              <h2 className="font-headline-lg text-4xl font-medium">Ejemplos de Trabajadores Digitales</h2>
            </div>
            <p className="text-on-surface-variant text-sm max-w-xs mt-4 md:mt-0 pb-2 border-b border-outline-variant">
              Los trabajadores se diseñan alrededor de los procesos específicos de cada empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-outline-variant p-8 rounded-xl bg-white hover:border-primary transition-all group">
              <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">shopping_cart</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">Trabajador de Compras</h3>
              <p className="text-on-surface-variant font-body-sm">Gestiona solicitudes, cotizaciones, proveedores, órdenes y seguimiento.</p>
            </div>
            
            <div className="border border-outline-variant p-8 rounded-xl bg-white hover:border-primary transition-all group">
              <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">Trabajador Financiero</h3>
              <p className="text-on-surface-variant font-body-sm">Analiza facturas, órdenes, pagos, excepciones y aprobaciones.</p>
            </div>
            
            <div className="border border-outline-variant p-8 rounded-xl bg-white hover:border-primary transition-all group">
              <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">Trabajador Documental</h3>
              <p className="text-on-surface-variant font-body-sm">Analiza documentos, identifica información relevante y detecta faltantes.</p>
            </div>
            
            <div className="border border-outline-variant p-8 rounded-xl bg-white hover:border-primary transition-all group">
              <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">manufacturing</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">Trabajador de Operaciones</h3>
              <p className="text-on-surface-variant font-body-sm">Coordina procesos, detecta bloqueos y da seguimiento a tareas.</p>
            </div>
            
            <div className="border border-outline-variant p-8 rounded-xl bg-white hover:border-primary transition-all group">
              <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">Trabajador Comercial</h3>
              <p className="text-on-surface-variant font-body-sm">Investiga oportunidades, prospecta y da seguimiento a clientes.</p>
            </div>
            
            <div className="border border-dashed border-outline p-8 rounded-xl bg-surface/50 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-outline mb-2">add</span>
              <h3 className="font-headline-md text-lg text-on-surface-variant">A la medida</h3>
              <p className="text-outline font-body-sm mt-2">Adaptamos agentes a tus flujos</p>
            </div>
          </div>
        </section>

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

        {/* 10. Proceso */}
        <section className="px-margin-safe py-section-gap bg-surface-container-lowest border-t border-outline-variant/20">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-20">
              <span className="font-label-caps text-secondary mb-4 block">NUESTRO ENFOQUE</span>
              <h2 className="font-headline-lg text-4xl">De un problema real a un trabajador digital.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { title: '1. Descubrimos', desc: 'Identificamos procesos costosos y repetitivos.' },
                { title: '2. Diseñamos', desc: 'Definimos reglas, permisos e integraciones.' },
                { title: '3. Automatizamos', desc: 'Construimos el trabajador digital.' },
                { title: '4. Medimos', desc: 'Comparamos tiempo, costo, errores y capacidad.' },
                { title: '5. Escalamos', desc: 'Convertimos el proceso validado en producto.' }
              ].map((step, i) => (
                <div key={i} className="relative p-6 border border-outline-variant rounded-xl bg-white hover:-translate-y-2 transition-transform shadow-sm">
                  <h4 className="font-bold mb-3">{step.title}</h4>
                  <p className="text-sm text-on-surface-variant">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section id="contacto" className="px-margin-safe py-section-gap transition-all duration-700 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto bg-primary rounded-xl p-16 md:p-24 text-center text-on-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="font-display-xl text-4xl md:text-5xl tracking-tight leading-tight">
                ¿Qué trabajo podría hacer KAIVA por tu empresa?
              </h2>
              <p className="text-lg opacity-80 max-w-xl mx-auto font-light">
                Cuéntanos qué proceso consume tiempo, personas o dinero. Analizaremos si puede convertirse en un trabajador digital.
              </p>
              <div className="pt-8 max-w-xl mx-auto">
                {formStatus === "success" ? (
                  <div className="bg-white/10 border border-white/20 p-8 rounded-xl flex flex-col items-center">
                    <span className="material-symbols-outlined text-4xl mb-4 text-green-400">check_circle</span>
                    <h3 className="font-headline-md text-xl mb-2">Mensaje Recibido</h3>
                    <p className="text-white/80 font-light">Nuestro equipo analizará tus procesos y se pondrá en contacto pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-label-caps text-white/70 tracking-wider">Nombre</label>
                        <input id="name" required type="text" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-label-caps text-white/70 tracking-wider">Email Corporativo</label>
                        <input id="email" required type="email" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" placeholder="tu@empresa.com" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-label-caps text-white/70 tracking-wider">Empresa</label>
                      <input id="company" required type="text" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" placeholder="Nombre de tu empresa" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-label-caps text-white/70 tracking-wider">¿Qué proceso te gustaría automatizar?</label>
                      <textarea id="message" required rows={3} className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none" placeholder="Describe brevemente el proceso..."></textarea>
                    </div>
                    <button type="submit" disabled={formStatus === "submitting"} className="w-full bg-white text-primary px-8 py-4 rounded-lg font-headline-md text-base hover:scale-[1.01] transition-transform active:scale-[0.99] disabled:opacity-70 flex justify-center items-center gap-2 mt-2">
                      {formStatus === "submitting" ? (
                        <>
                          <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                          Enviando...
                        </>
                      ) : "Solicitar diagnóstico"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-margin-safe max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-outline-variant/30 bg-surface-container-lowest">
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 120 100" fill="currentColor" className="w-8 h-8 text-primary shrink-0">
              <rect x="16" y="15" width="20" height="70" rx="4" />
              <path d="M 46 50 L 81 15 H 106 L 71 50 L 106 85 H 81 Z" />
            </svg>
            <span className="font-headline-lg text-headline-lg-mobile text-on-background tracking-tighter">
              KAIVA
            </span>
          </div>
          <p className="text-on-surface-variant font-body-sm max-w-xs">
            Trabajadores digitales para empresas.
          </p>
          <p className="text-on-surface-variant text-xs opacity-50 pt-4">
            © {new Date().getFullYear()} KAIVA. Todos los derechos reservados.
          </p>
        </div>
        
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-primary mb-6">SOLUCIONES</h5>
          <ul className="space-y-4 font-body-sm text-on-surface-variant">
            <li><Link href="#" className="hover:text-primary transition-colors">Trabajadores Digitales</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Automatización Empresarial</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Integraciones</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Automatización de Procesos</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-primary mb-6">INDUSTRIAS</h5>
          <ul className="space-y-4 font-body-sm text-on-surface-variant">
            <li><Link href="#" className="hover:text-primary transition-colors">Construcción</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Manufactura</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Logística</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Energía</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Infraestructura</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-primary mb-6">EMPRESA</h5>
          <ul className="space-y-4 font-body-sm text-on-surface-variant">
            <li><Link href="#" className="hover:text-primary transition-colors">Nosotros</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Tecnología</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Seguridad</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Contacto</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-primary mb-6">LEGAL</h5>
          <ul className="space-y-4 font-body-sm text-on-surface-variant">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Términos</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
