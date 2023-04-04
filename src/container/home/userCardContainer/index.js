import React from "react";
import UserCard from '@/components/userCard';

export default function UserCardContainer({ data }) {
   return <section>
      <div className="container">
         <UserCard data={data} />
      </div>
   </section>
}
