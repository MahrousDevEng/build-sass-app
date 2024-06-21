import Clock from "@/components/Clock";

export default function HomePage() {
  return (
    <main className="flex-center h-screen w-full">
      <Clock serverTime={new Date()} />
    </main>
  );
}
