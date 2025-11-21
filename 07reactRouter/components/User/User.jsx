import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl flex justify-center p-4">
      user: {id}
    </div>
  );
}

export default User;
