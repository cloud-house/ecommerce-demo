import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { Card } from "../../ui/dashboard/card";
import { revenue } from "@/app/lib/placeholder-data";

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Sprzedaż" value={1230} type="collected" />
        <Card title="Obroty" value={1230} type="pending" />
        <Card title="Zamówienia" value={120} type="invoices" />
        <Card title="Klienci" value={100} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart title="Wartość sprzedaży" revenue={revenue} />
        <RevenueChart title="Zamówienia" revenue={revenue} />
      </div>
    </main>
  );
}
