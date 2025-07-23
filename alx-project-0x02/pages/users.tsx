import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UsersPageProps, UserProps } from "@/interfaces";
import { GetStaticProps } from "next";

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <main className="px-10 py-4">
        <section>
          <div className="grid grid-cols-3 gap-4">
            {users.slice(0,20).map(({ id,name, username, address, email,website }) => (
              <UserCard
               key={id}
                website={website}
                name={name}
                address={address}
                email={email}
                username={username}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();
  return { props: { users } };
};

export default Users;
