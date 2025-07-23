import Button from "@/components/common/Button";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({isOpen,onClose }) => {
if (!isOpen) return null;


const handleCloseModal=()=>{
   onClose();
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-400 bg-opacity-50">
      <form action="" className="w-2/3 p-4 shadow-md bg-white rounded-md">
        <h1>Form Modal</h1>
         <Button onClick={handleCloseModal} title="Close Form" />

      </form>
    </div>
  );
};

export default PostModal;
