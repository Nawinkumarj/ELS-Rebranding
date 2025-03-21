import { assets } from "../assets/assets";
import useChangeColor from "../Hooks/useChangeColor";

const chooseUsData = [
  {
    icon: assets.chooseUs_Icon1,
    title: "Beyond The Billable Hour",
    description: "Efficiency with quality- Our top priority.",
  },
  {
    icon: assets.chooseUs_Icon2,
    title: "Creative and Flexible Solutions",
    description: "Discovering creative and flexible solutions for legal needs.",
  },
  {
    icon: assets.chooseUs_Icon3,
    title: "Experience and Expertise",
    description: "Extensive experience, expertise at your service.",
  },
  {
    icon: assets.chooseUs_Icon4,
    title: "Ethics and Values",
    description: "Prioritizing ethics and values in interactions.",
  },
];

const ChooseUs = () => {

  const colorRefs = useChangeColor();

  return (
    <div className="chooseUsContainer">
      <h1 ref={(el) => (colorRefs.current[0] = el)} className="sectionTitle">Why Choose Exchange Legal Services?</h1>
      {chooseUsData.map((item, choose) => (
        <div className="chooseUsList flex-center"  key={choose}>
          <div className="leftside flex-center">
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ChooseUs;
