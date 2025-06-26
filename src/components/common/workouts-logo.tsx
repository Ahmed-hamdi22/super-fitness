type Props = {
  text: string;
};

export default function WorkoutsLogo({ text }: Props) {
  return (
    <h1
      className={`absolute text-transparent text-6xl sm:text-7xl font-bold font-baloo-2 uppercase 
        [-webkit-text-stroke:2px_#A8A8A8] 
        [text-stroke:1px_#A8A8A8]`}
    >
      {text}
    </h1>
  );
}
