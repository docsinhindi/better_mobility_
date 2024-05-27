import Container from "@/components/layout/page-layout";
import ServicesOpportunities from "@/components/services-opportunities";

const TYPES_OF_SERVICES = [
  {
    src: "/home/svg/transport.svg",
    title: "Transport Consultancy",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    src: "/home/svg/consultant.svg",
    title: "Vertical & Horizontal Transportation Systems Consultant",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    src: "/home/svg/opportunities.svg",
    title: "Business opportunities",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    src: "/home/svg/internation.svg",
    title: "International and non-profit",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
];

const Services = () => {
  return (
    <Container className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="flex flex-col gap-2">
        <span className="relative w-fit font-normal text-xl before:border-2 before:absolute before:top-0 before:left-0 before:h-full before:border-yellow-400 bg-gray-100 py-1 px-2">
          What We Do
        </span>
        <h2 className="font-semibold text-2xl md:text-5xl">
          Safe & Reliable Cargo Solutions
        </h2>
      </div>
      <ul className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-16">
        {TYPES_OF_SERVICES?.map((props, i) => (
          <ServicesOpportunities key={i} {...props} />
        ))}
      </ul>
    </Container>
  );
};
export default Services;
