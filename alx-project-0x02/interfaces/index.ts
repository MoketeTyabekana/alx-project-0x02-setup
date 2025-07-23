


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

export interface UserProps  {
    id?:       number;
    name:     string;
    username: string;
    email:    string;
    address?:  Address;
    phone?:    string;
    website:  string;
    company?:  Company;
}

export interface Address {
    street?:  string;
    suite?:   string;
    city?:    string;
    zipcode?: string;
    geo?:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export interface UsersPageProps {
  users: UserProps[];
}



