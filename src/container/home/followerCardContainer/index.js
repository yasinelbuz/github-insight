import React from "react";
import UserCard from "@/components/userCard";
import { FollowerCard } from "@/components/follow";

export default function FollowerCardContainer() {
   return <section>
      <div className="container">
         <div style={{ height: "400px", backgroundColor: "#fff", marginTop: "10px", overflow: "auto", padding: "20px" }}>
            <FollowerCard />
         </div>
      </div>
   </section >
}
