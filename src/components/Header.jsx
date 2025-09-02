import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <img src="/logo.svg" alt="Logo" srcset="" />

      <ul className="hidden md:flex gap-15 ">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Inicio
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Buscar
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Nuevo
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Viejo
        </li>
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link to={"/add-listing"}>
            <Button>Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <Link to={"/add-listing"}>
          <Button>Add New Listing</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
