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
        <table>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Address City</td>
            <td>{address?.city}</td>
          </tr>
          <tr>
            <td>Email Address</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{website}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default UserCard;
