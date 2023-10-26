export default function Heading(props: {
  children: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <h1
      className="text-3xl tracking-wider mb-4 text-bold md:text-5xl"
      style={{ fontFamily: "Poppins" }}
    >
      {props.children}
    </h1>
  );
}
