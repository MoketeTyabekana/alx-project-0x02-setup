

export interface CardProps{
   title: string,
   content: string,
}

export interface ButtonProps {
  title: string;
  onClick: () => void;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}
