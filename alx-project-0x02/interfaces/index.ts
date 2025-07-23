


export interface CardProps{
   title: string,
   content: string,
}

export interface PostProps{
    userId:number;
    title:string;
    body:string
    id:number
}

export interface PostsPageProps {
  posts: PostProps[];
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
shape?: "rounded-sm" | "rounded-md" | "rounded-full";
className?: string;

}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}



