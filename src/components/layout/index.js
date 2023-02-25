import React from "react";
import Header from "../header";
import NavBar from "../navbar";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <NavBar/>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
