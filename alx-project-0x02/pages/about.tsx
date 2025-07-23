import React from "react";
import Button from "@/components/common/Button";
import { ButtonProps } from "@/interfaces";

const buttonsData: ButtonProps[] = [
  { title: "Small", size: "small", shape: "rounded-sm" },
  { title: "Medium", size: "medium", shape: "rounded-md" },
  { title: "Large", size: "large", shape: "rounded-full" },
];

const About: React.FC<ButtonProps> = () => {
  return (
    <main>
      <section>
        <h1>About</h1>
        <div className="grid grid-cols-3 gap-4 p-4">
          {buttonsData.map(({ title, size, shape }, index) => (
            <Button key={index} title={title} size={size} shape={shape} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
