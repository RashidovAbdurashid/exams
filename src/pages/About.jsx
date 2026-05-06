import { useEffect, useState } from "react";

const About = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();

        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="border p-4 rounded-xl shadow">
          <h2 className="font-bold">{user.name}</h2>

          <p>
            City:
            {user?.address?.city}
          </p>
        </div>
      ))}
    </div>
  );
};

export default About;
