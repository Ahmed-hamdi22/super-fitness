type Props = {
  text: string;
  shadow?: string;
};

export default function WorkoutsLogo({ text, shadow }: Props) {
  return (
    <h1
      className={`absolute text-transparent text-6xl sm:text-7xl font-bold font-baloo uppercase 
        [-webkit-text-stroke:2px_#A8A8A8] 
        [text-stroke:1px_#A8A8A8]`}
      style={shadow ? { textShadow: shadow } : {}}
    >
      {text}
    </h1>
  );
}
