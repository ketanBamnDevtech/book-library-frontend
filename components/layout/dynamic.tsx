import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { get_cookie } from "@/utils/functions";
import Header from "../header";

interface LayoutProps {
  children: React.ReactNode,
  isPrivate: boolean
}

const DynamicLayout = ({ children, isPrivate = false }: LayoutProps) => {
  const router = useRouter();
  const [isAuthenticated, setisAuthenticated] = useState<string>("")

  useEffect(() => {
    if (isPrivate) {
      let authToken = get_cookie('token') ?? "";
      authToken ? setisAuthenticated(authToken) : router.push('/')
    }
  }, []);

  if (isPrivate && !isAuthenticated) {
    return null;
  }

  return (
    <section>
      <Header/>
      <div className="custom-container">{children}</div>
      <footer>
        Footer
      </footer>
    </section>
  );
};


export default DynamicLayout
