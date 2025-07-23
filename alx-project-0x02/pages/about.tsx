import React from "react";
import Button from "@/components/common/Button";


const About: React.FC<> = () => {
  return (
    <main>
      <section>
        <h1>About</h1>
        <div className="grid grid-cols-3 gap-4 p-4">
            <Button title="small" size="small" shape="rounded-sm"/>
            <Button title="Medium" size="medium" shape="rounded-md"/>
            <Button title="Large" size="large" shape="rounded-full"/>
        </div>
      </section>
    </main>
  );
};

export default About;
