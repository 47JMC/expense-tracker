import DemoChart from "../components/charts/DemoChart";
import FeatureDisplay from "../components/FeatureDisplay";
import DemoLineChart from "../components/charts/DemoLineChart";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

function Home() {
  return (
    <div className="flex-1 m-4 p-2 flex-col gap-7 flex items-center justify-center">
      <div className="flex w-full max-w-5xl gap-8 px-8 items-center">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[36px] font-medium font-['Outfit'] flex-1"
        >
          Your all in one <br />
          expense tracking solution
        </motion.p>
        <div className="w-125 shrink-0">
          <DemoChart />
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-[36px] font-['Outfit'] font-semibold "
      >
        Start tracking today
      </motion.p>
      <motion.div
        initial={{ x: 70, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Link
          to="/dashboard"
          className="p-3 m-2 bg-blue-600 font-medium text-md font-['Outfit'] hover:bg-blue-800 transition-all border-2 border-blue-950 hover:border-green-500 rounded-xl"
        >
          Go to dashboard
        </Link>
        <Link
          to="/transactions"
          className="p-3 m-2 bg-blue-600 font-medium text-md font-['Outfit'] hover:bg-blue-800 transition-all border-2 border-blue-950 hover:border-green-500 rounded-xl"
        >
          Go to transactions
        </Link>
      </motion.div>
      <p className="text-[38px] font-medium font-['Fredoka']">Features</p>
      <div className="flex gap-2">
        <FeatureDisplay
          mainHeading="Categories ⭐"
          description="Organise your expenses into categories."
        />
        <FeatureDisplay
          mainHeading="Search 🔎"
          description="Quikcly search through your expenses!"
        />
        <FeatureDisplay
          mainHeading="Analyze your expenses easily 📊"
          description="Analyze your expenses easily with graphs"
        />
      </div>
      <motion.p
        className="text-[36px] font-['Fredoka'] font-medium"
        initial={{ opacity: 0, x: -125 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        See more with Charts
      </motion.p>
      <motion.div
        className="flex w-full justify-between gap-2"
        initial={{ opacity: 0, x: -125 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <DemoChart />
        <DemoLineChart />
      </motion.div>
      <p className="text-[45px] font-bold font-['Outfit'] p-2 m-2">
        Thank you for considering us!
      </p>
    </div>
  );
}

export default Home;
