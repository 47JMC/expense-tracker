import * as motion from "motion/react-client";

type Props = {
  mainHeading: string;
  description: string;
};

function FeatureDisplay({ mainHeading, description }: Props) {
  return (
    <motion.div
      className="rounded-lg border-2 m-2 p-3 border-gray-700 bg-slate-800 hover:bg-slate-950 transition-all"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      viewport={{ once: true }}
    >
      <p className="font-['Outfit'] text-base font-medium">{mainHeading}</p>
      <p className="font-['Outfit'] text-sm text-gray-400 font-medium">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureDisplay;
