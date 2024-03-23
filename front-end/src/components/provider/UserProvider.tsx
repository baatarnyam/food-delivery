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

  const token = typeof window !== "undefined" && localStorage.getItem("Token");

  useEffect(() => {
    if (!token || token) {
      router.push("./home");
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
        // console.log({ data });
        setIsLogin(true);
      } catch (error: any) {
        console.log(error.message, "verify token error");
      }
    };
    verifyToken();
  }, [token]);

  return (
    <UserContext.Provider value={{ isLogin }}>{children}</UserContext.Provider>
  );
}

// localStorage.removeItem("Token");
