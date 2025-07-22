import { CardProps } from "@/interfaces";

const Card:React.FC<CardProps>=({title,content})=>{
    return(
        <div className="p-4 shadow-sm rounded-sm">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p>{content}</p>
        </div>
    )
}

export default Card;