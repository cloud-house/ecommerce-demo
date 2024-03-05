import RevenueChart from "@/app/ui/dashboard/home/revenue-chart";
import { Card } from "../ui/dashboard/home/card";
import { revenue } from "@/app/lib/placeholder-data";
import { formatCurrency } from "@/app/lib/utils";

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Sprzedaż" value={formatCurrency(55100)} type="salary" />
        <Card
          title="Średnia wartość zamówienia"
          value={formatCurrency(1230)}
          type="checkoutValue"
        />
        <Card title="Zamówienia" value={120} type="orders" />
        <Card title="Klienci" value={100} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart title="Wartość sprzedaży" revenue={revenue} />
        <RevenueChart title="Zamówienia" revenue={revenue} />
      </div>
    </main>
  );
}
