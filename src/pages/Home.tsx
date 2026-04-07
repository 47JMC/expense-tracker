import DemoChart from "../components/DemoChart";

function Home() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex w-full max-w-5xl gap-8 px-8 items-center">
        <p className="text-[36px] font-medium font-['Outfit'] flex-1">
          Your all in one <br />
          expense tracking solution
        </p>
        <div className="w-125 shrink-0">
          <DemoChart />
        </div>
      </div>
    </div>
  );
}

export default Home;
