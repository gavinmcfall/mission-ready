import { useParams } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  console.log("User Profile ID: " + params.id);
  return (
    <div>
      <h2>User Profile</h2>
      <p>The user ID is: {params.id}</p>
    </div>
  );
}

export default UserProfile;
