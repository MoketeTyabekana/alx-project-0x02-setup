import React from "react";
import { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <main className="px-10 py-4">
        <section>
          <div className="flex justify-between items-center py-4 ">
            <h1 className="text-2xl text-blue-400 font-bold">Posts</h1>
            <Button title="Add New Post" onClick={handleOpenModal} />
            <PostModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-between gap-2 mt-10">
            <Card
              title="Mokete Tyabekana"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium tenetur sapiente nam iure? Debitis sed 
similique esse amet sint omnis?"
            />
            <Card
              title="Mokete Tyabekana"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium tenetur sapiente nam iure? Debitis sed 
similique esse amet sint omnis?"
            />
            <Card
              title="Mokete Tyabekana"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium tenetur sapiente nam iure? Debitis sed 
similique esse amet sint omnis?"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
