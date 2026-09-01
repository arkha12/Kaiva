/**
 * Contrato del formulario de demo.
 *
 * Vive aparte de `src/app/actions.ts` a propósito: un módulo `"use server"`
 * sólo puede exportar funciones async, así que exportar desde ahí el estado
 * inicial lo dejaba llegando como `undefined` al render y el formulario
 * reventaba en el prerender.
 */
export type DemoState = {
  status: "idle" | "success" | "error";
  errors: Record<string, string>;
};

export const initialDemoState: DemoState = { status: "idle", errors: {} };
