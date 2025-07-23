import { UserProps } from "@/interfaces";
import { Address } from "@/interfaces";

const UserCard: React.FC<UserProps & Address> = ({
  name,
  username,
  email,
  website,
  address,
}) => {
  return (
    <>
      <div className="flex flex-col shadow-sm rounded-sm p-4">
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
        <p>Address: {address?.city}</p>
      </div>
    </>
  );
};

export default UserCard;
