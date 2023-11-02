export default function Heading(props: {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  let heading;

  switch (props.level) {
    case 1:
      heading = (
        <h1
          className="text-3xl tracking-wider py-2 md:py-4 text-bold md:text-5xl"
          style={{ fontFamily: "Poppins" }}
        >
          {props.children}
        </h1>
      );
      break;
    case 2:
      heading = (
        <h2
          className="text-3xl tracking-wider py-2 md:py-4 text-bold md:text-5xl"
          style={{ fontFamily: "Poppins" }}
        >
          {props.children}
        </h2>
      );
      break;
    case 3:
      heading = (
        <h3
          className="text-3xl tracking-wider py-2 md:py-4 text-bold md:text-5xl"
          style={{ fontFamily: "Poppins" }}
        >
          {props.children}
        </h3>
      );
      break;
    case 4:
      heading = (
        <h4
          className="text-3xl tracking-wider py-2 md:py-4 text-bold md:text-5xl"
          style={{ fontFamily: "Poppins" }}
        >
          {props.children}
        </h4>
      );
      break;
    case 5:
      heading = (
        <h5
          className="text-3xl tracking-wider py-2 md:py-4 text-bold md:text-5xl"
          style={{ fontFamily: "Poppins" }}
        >
          {props.children}
        </h5>
      );
      break;
    case 6:
      heading = (
        <h6
          className="text-3xl tracking-wider py-2 md:py-4 text-bold md:text-5xl"
          style={{ fontFamily: "Poppins" }}
        >
          {props.children}
        </h6>
      );
      break;
    default:
      heading = (
        <h1
          className="text-3xl tracking-wider py-2 md:py-4 text-bold md:text-5xl"
          style={{ fontFamily: "Poppins" }}
        >
          {props.children}
        </h1>
      );
  }

  return heading;
}
