import Button from "@/components/common/Button";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-800 bg-opacity-50 ">
      <form
        action=""
        className="w-2/3 flex flex-col  p-4 shadow-md bg-white rounded-md"
      >
        <h1 className="py-4 border-b border-gray-200 text-2xl text-center font-bold uppercase text-blue-400">Add a new Post</h1>
        <div className=" flex flex-col gap-2 my-2 ">
          <label htmlFor="title" className="text-gray-600 font-semibold">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Your Title"
            className="px-4 py-2 border-gray-200 border-2 outline-0 "
          />
        </div>

            <div className=" flex flex-col gap-2 my-4 ">
      <label htmlFor="title" className="text-gray-600 font-semibold">
       Text Content
      </label>
      <textarea
       
        name="content"
        placeholder="Enter Your Content"
        className="px-4 py-2 border-gray-200 border-2 outline-0"
      />
    </div>
         <div className="flex justify-between">
     <Button onClick={handleCloseModal} title="Add Post" />
    <Button onClick={handleCloseModal} title="Close Form" />
  </div>
      </form>
    
    
    
    
    </div>
  );
};

export default PostModal;
