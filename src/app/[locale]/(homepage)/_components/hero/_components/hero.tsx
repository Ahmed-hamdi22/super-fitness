import ProgressBar from "@/components/feater/progress-bar";

export default function Hero() {
  return <h1>hero
    <ProgressBar currentStep={3} />
  </h1>;
}
