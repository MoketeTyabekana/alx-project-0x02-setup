import React from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <main>
      <section>
        <h1>Home</h1>
        <div className="grid grid-cols-3 justify-between gap-2 mt-10">
             <Card
             title="Mokete Tyabekana"
             content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium tenetur sapiente nam iure? Debitis sed similique esse amet sint omnis?"
             />

                  <Card
     title="Mokete Tyabekana"
     content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium tenetur sapiente nam iure? Debitis sed similique esse amet sint omnis?"
     />

          <Card
     title="Mokete Tyabekana"
     content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium tenetur sapiente nam iure? Debitis sed similique esse amet sint omnis?"
     />
        </div>
      </section>
      
    </main>
  );
};

export default Home;
