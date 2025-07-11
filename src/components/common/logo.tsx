type Props = {
  text: string;
};

export default function WorkoutsLogo({ text }: Props) {
  return (
    <h1
      className={`absolute text-transparent text-5xl sm:text-7xl font-bold  uppercase opacity-50
        [-webkit-text-stroke:2px_#A8A8A8] 
        [text-stroke:1px_#A8A8A8]`}
    >
      {text}
    </h1>
  );
}
