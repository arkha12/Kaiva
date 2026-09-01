"use server";

import type { DemoState } from "@/lib/demo";

/**
 * Solicitud de demo.
 *
 * TODO: hoy la acción valida y devuelve OK, pero **no persiste nada**. No hay
 * backend, CRM ni waitlist conectados todavía (ver CLAUDE.md, "Pendiente").
 * Cuando se decida el destino, el envío se engancha justo donde está marcado
 * abajo; el contrato de `DemoState` no tiene que cambiar.
 */

const required: { name: string; label: string }[] = [
  { name: "nombre", label: "Escribe tu nombre." },
  { name: "empresa", label: "Escribe el nombre de tu dealer." },
  { name: "ciudad", label: "Escribe tu ciudad." },
  { name: "email", label: "Escribe tu correo." },
  { name: "telefono", label: "Escribe un teléfono o WhatsApp." },
];

// Deliberadamente laxo: sólo descarta lo que claramente no es un correo. Un
// patrón estricto rechaza direcciones válidas y el costo de un falso negativo
// aquí es perder un lead.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function requestDemo(
  _prev: DemoState,
  formData: FormData,
): Promise<DemoState> {
  const errors: Record<string, string> = {};

  for (const field of required) {
    const value = String(formData.get(field.name) ?? "").trim();
    if (!value) errors[field.name] = field.label;
  }

  const email = String(formData.get("email") ?? "").trim();
  if (email && !EMAIL.test(email)) {
    errors.email = "Ese correo no se ve válido.";
  }

  for (const field of ["inventario", "vendedores"]) {
    const value = String(formData.get(field) ?? "").trim();
    if (value && !/^\d{1,5}$/.test(value)) {
      errors[field] = "Usa sólo números.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  // TODO: aquí va el envío real (correo, CRM o waitlist). Mientras tanto la
  // solicitud se pierde a propósito en vez de fingir que se guardó.

  return { status: "success", errors: {} };
}
