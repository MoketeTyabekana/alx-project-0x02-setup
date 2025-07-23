import { type CardProps } from "@/interfaces";

const Card:React.FC<CardProps>=({title,content})=>{
    return(
        <div className="p-4 shadow-sm rounded-sm">
          <h1 className="text-2xl font-bold mb-2 text-shadow-sm text-blue-400 uppercase">{title}</h1>
          <p className="text-gray-500">{content}</p>
        </div>
    )
}

export default Card;