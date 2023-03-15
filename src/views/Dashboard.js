import React, { useEffect, useState } from "react";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import UsersList from "components/organisms/UsersList/UsersList";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
   const [students, setStudents] = useState([]);
   const [gropusStudenten, setgropusStudenten] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      axios
         .get("/groups")
         .then(({ data }) => setgropusStudenten(data.groupss))
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      axios
         .get(`/studentsListByGroup/${id || gropusStudenten[0]}`)
         .then(({ data }) => setStudents(data.studentsOfGroup))
         .catch((err) => console.log(err));
   }, [id, gropusStudenten]);
   return (
      <ViewWrapper>
         <nav>
            {gropusStudenten.map((grouppp) => (
               <Link key={grouppp} to={`/group/${grouppp}`}>
                  {grouppp} {".. "}
               </Link>
            ))}
         </nav>
         <UsersList users={students} />
      </ViewWrapper>
   );
};

export default Dashboard;
