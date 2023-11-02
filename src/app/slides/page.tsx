import Grid from "@/components/slides/grid";
import Heading from "@/components/typography/heading";

export default function Slides() {
  return (
    <div className="px-8 py-8">
      <div className="flex flex-col items-center md:items-start w-full gap-4 pb-8 ">
        <Heading level={2}>My Slide Decks ✨</Heading>
        <p className="text-gray-400" style={{ fontFamily: "Poppins" }}>
          Because I absolutely love presenting
        </p>
      </div>
      <Grid />
    </div>
  );
}
