import { assets } from "../assets/assets";
import ImageTrail from "../lib/ImageTrail";

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
  return (
    <div className="chooseUsContainer">
      <h1 className="sectionTitle">Why Choose Exchange Legal Services?</h1>
      {chooseUsData.map((item, index) => (
        <div className="chooseUsList flex-center"  key={index}>
          <div className="hoverimg">
            <ImageTrail
              key="ImageTrail"
              items={[
                "https://cdn.pixabay.com/photo/2024/05/09/19/16/ai-generated-8751655_1280.jpg",
                "https://cdn.pixabay.com/photo/2024/05/09/19/16/ai-generated-8751655_1280.jpg",
                "https://cdn.pixabay.com/photo/2024/05/09/19/16/ai-generated-8751655_1280.jpg",
                "https://cdn.pixabay.com/photo/2024/05/09/19/16/ai-generated-8751655_1280.jpg",
                "https://cdn.pixabay.com/photo/2024/05/09/19/16/ai-generated-8751655_1280.jpg",
              ]}
              variant={2}
            />
          </div>
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
