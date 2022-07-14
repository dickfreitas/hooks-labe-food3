import React from "react";
import {exemplo} from "./styledProfilePage"
import { useProtected } from "../../hooks/useProtected";


export default function ProfilePagePage () {

  useProtected()
  return (
    <div>
        Profile Page
    </div>
  );
}