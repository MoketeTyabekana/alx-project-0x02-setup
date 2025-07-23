import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({title,onClick}) => {
  return (
    <>
      <button onClick={onClick} className="px-4 py-2 bg-blue-400 text-white font-bold rounded-full hover:bg-blue-600 ease-in-out 0.6s">
        {title}
      </button>
    </>
  );
};

export default Button;
