import Link from "next/link";

export default function Grid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <Link key={index} href={`/slides/presentation/${index + 1}`}>
            <div className="h-52 lg:h-64 flex justify-center items-center bg-blue-500 text-white text-3xl font-bold rounded-lg cursor-pointer hover:drop-shadow-2xl hover:scale-110 duration-300">
              Slide {index + 1}
            </div>
          </Link>
        ))}
    </div>
  );
}
