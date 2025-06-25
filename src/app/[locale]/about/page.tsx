import Slider from "@/components/common/slider";

export default function AboutPage() {
  

  return (
    <div className="flex flex-row">
      {/* Test */}
      <Slider
        title="What is your weight"
        measure="kg"
        min={20}
        max={200}
        initialValue={50}
        step={1}
        windowSize={7}
      />
    </div>
  );
}
