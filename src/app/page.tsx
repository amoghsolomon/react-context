import Cart from "@/components/cart";
import Packages from "@/components/packages";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto py-6 grid grid-cols-3 gap-8">
      <Sidebar />
      <section className="col-span-2">
        <div className="bg-gray-200 w-full aspect-video" />
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Packages />
          <Cart />
        </div>
      </section>
    </main>
  );
}
