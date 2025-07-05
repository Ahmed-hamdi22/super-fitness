export default function Playicon() {
  return (
    <div className="relative w-14 h-14">
      {/* Outer circle */}
      <div className="absolute inset-0 rounded-full bg-flame-orange-500 opacity-30"></div>

      {/* Middle circle */}
      <div className="absolute inset-1 rounded-full bg-flame-orange-500 opacity-60"></div>

      {/* Inner circle*/}
      <div className="absolute inset-2 rounded-full bg-flame-orange-500"></div>

      {/* Triangle icon*/}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
        >
          <polygon points="8,5 8,19 19,12" />
        </svg>
      </div>
    </div>
  );
}
