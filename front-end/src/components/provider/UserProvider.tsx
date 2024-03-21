"use client";

import React from "react";
import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { useRouter } from "next/navigation";

type DataType = {
  isLogin: boolean;
};

export const UserContext = createContext<DataType>({} as DataType);

export default function UserProvider({ children }: any) {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const token = localStorage.getItem("Token");
  // const token = typeof window !== "undefined" && localStorage.getItem("Token");

  useEffect(() => {
    if (!token) {
      // console.log("token undefined");
      return;
    }

    const verifyToken = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/tokenCheck",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(result.data, "res data");
        if (data === "Token is invalid") {
          setIsLogin(false);
        } else {
          setIsLogin(true);
        }
      } catch (error: any) {
        console.log(error.message, " verify token error");
      }
    };
    verifyToken();
  }, [token]);

  return (
    <UserContext.Provider value={{ isLogin }}>{children}</UserContext.Provider>
  );
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQGdtYWlsLmNvbSIsImlhdCI6MTcwNzE4ODM3MiwiZXhwIjoxNzA3Mjc0NzcyfQ.Z1eI-wcE5mZpRAwXxn7dPuV-AMxEtlwBe5NmtJezgQU
// localStorage.removeItem("Token");
// router.push("/login");
