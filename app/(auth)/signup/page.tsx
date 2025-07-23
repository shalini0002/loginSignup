import Image from "next/image";
import Link from "next/link";
import { Signup } from "../../../components/Signup";

export default function() {
  return (
    <div>
    <Signup />
  </div>
  );
}


// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface User {
//   name: string;
//   email: string;
// }

// const Signup = () => {
//   const [userData, setUserData] = useState<User>();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/user")
//       .then((response) => {
//         setUserData(response.data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="flex flex-col justify-center h-screen">
//       <div className="flex justify-center">
//         <div className="border p-8 rounded">
//           <div>Name: {userData?.name}</div>
//           <div>Email: {userData?.email}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
