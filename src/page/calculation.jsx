import Desc from "../components/Desc";

const data = [
  {
    header: "CIVIXOR",
    opt: "WELCOME",
    textRight: false,
    image:
      "https://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    children:
      "Civixor is a civil engineering platform that provides detailed product specifications for construction and infrastructure projects. It serves as a reliable reference for materials, components, and technical standards, helping ensure efficient and accurate execution. Designed for both professionals and individuals with little to no engineering experience, Civixor makes technical information more accessible. The platform also offers consulting services to support effective application with practical and sustainable solutions.",
  },
  {
    header: "CIVIXOR",
    opt: "WELCOME",
    textRight: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    children:
      "Civixor is a civil engineering platform that provides detailed product specifications for construction and infrastructure projects. It serves as a reliable reference for materials, components, and technical standards, helping ensure efficient and accurate execution. Designed for both professionals and individuals with little to no engineering experience, Civixor makes technical information more accessible. The platform also offers consulting services to support effective application with practical and sustainable solutions.",
  },
  {
    header: "CIVIXOR",
    opt: "WELCOME",
    textRight: false,
    image:
      "https://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    children:
      "Civixor is a civil engineering platform that provides detailed product specifications for construction and infrastructure projects. It serves as a reliable reference for materials, components, and technical standards, helping ensure efficient and accurate execution. Designed for both professionals and individuals with little to no engineering experience, Civixor makes technical information more accessible. The platform also offers consulting services to support effective application with practical and sustainable solutions.",
  },
];

export default function CalculationPage() {
  return (
    <div>
      {data.map((item, index) => (
        <Desc key={index} {...item} />
      ))}
    </div>
  );
}
