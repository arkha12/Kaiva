import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { SectionHeader } from "@/components/sections/SectionHeader";

const columns = [
  "Vehículo",
  "Precio",
  "Costo",
  "Margen estimado",
  "Kilometraje",
  "Días en inventario",
  "Estado",
];

const rows = [
  {
    car: "Mazda CX-5 2022",
    price: "$389,000",
    cost: "$332,000",
    margin: "$57,000",
    km: "38,400 km",
    days: "14",
    state: "Disponible",
    tone: "border-success/30 bg-success-bg text-success",
  },
  {
    car: "Toyota Corolla 2023",
    price: "$345,000",
    cost: "$298,000",
    margin: "$47,000",
    km: "22,100 km",
    days: "31",
    state: "En negociación",
    tone: "border-brand/30 bg-brand-light text-brand",
  },
  {
    car: "Kia Sportage 2022",
    price: "$412,000",
    cost: "$371,000",
    margin: "$41,000",
    km: "45,900 km",
    days: "68",
    state: "Requiere atención",
    tone: "border-danger/30 bg-danger-bg text-danger",
  },
  {
    car: "Nissan Sentra 2021",
    price: "$215,000",
    cost: "$182,000",
    margin: "$33,000",
    km: "48,000 km",
    days: "9",
    state: "Disponible",
    tone: "border-success/30 bg-success-bg text-success",
  },
];

const capabilities = [
  "VIN y datos del vehículo",
  "Precio y costo",
  "Margen estimado",
  "Kilometraje",
  "Aging",
  "Estado de venta",
  "Clientes interesados",
  "Deals relacionados",
];

export function Inventory() {
  return (
    <section id="inventario" className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Inventory Intelligence"
          title="Tu inventario también debería decirte qué hacer."
          body="Consulta cada vehículo, cuánto tiempo lleva disponible y qué está ocurriendo alrededor de él."
        />

        <Reveal className="mt-16">
          <DeviceFrame variant="gradient" label="Karva Pro · Inventario">
            {/* La tabla no cabe en un teléfono: hace scroll dentro de su propia
                caja para que el documento nunca scrollee en horizontal. */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[46rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-4 py-3.5 text-xs font-semibold tracking-wide whitespace-nowrap text-ink-subtle uppercase"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.car} className="border-b border-border last:border-0">
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-ink">
                        {row.car}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap text-ink-muted tabular-nums">
                        {row.price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap text-ink-muted tabular-nums">
                        {row.cost}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap text-success tabular-nums">
                        {row.margin}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap text-ink-muted tabular-nums">
                        {row.km}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap text-ink-muted tabular-nums">
                        {row.days}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${row.tone}`}
                        >
                          {row.state}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DeviceFrame>
        </Reveal>

        <Stagger
          step={0.05}
          className="mt-12 grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((item) => (
            <StaggerItem key={item}>
              <div className="border-t border-border pt-3.5 text-body text-ink-muted">
                {item}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-lead text-justified-center text-ink-muted">
            Karva puede identificar vehículos que requieren atención antes de
            que el inventario se convierta en capital inmovilizado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
