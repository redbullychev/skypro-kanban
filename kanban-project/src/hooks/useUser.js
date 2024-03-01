import { useContext } from "react";
import { UserConext } from "../contexts/user";

export function useUser() {
    return useContext(UserConext);
}