import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Cidade } from "./pages/Cidade";
import { Privacidade } from "./pages/Privacidade";

import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { MobileFixedButtons } from "./components/MobileFixedButtons";

// IMPORTS dos duplicados (note o espaço antes de (cidades))
import { FloatingWhatsApp as FloatingWhatsAppCidades } from "./components/FloatingWhatsApp (cidades)";
import { MobileFixedButtons as MobileFixedButtonsCidades } from "./components/MobileFixedButtons (cidades)";

function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  const CITY_ROUTES = ["/santos", "/sao-vicente", "/praia-grande", "/cubatao"];
  const isCityPage = CITY_ROUTES.includes(pathname);

  return (
    <div className="min-h-screen bg-white">
      {children}

      {isCityPage ? (
        <>
          <FloatingWhatsAppCidades />
          <MobileFixedButtonsCidades />
        </>
      ) : (
        <>
          <FloatingWhatsApp />
          <MobileFixedButtons />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/santos" element={<Cidade cidade="Santos" />} />
        <Route path="/sao-vicente" element={<Cidade cidade="São Vicente" />} />
        <Route path="/praia-grande" element={<Cidade cidade="Praia Grande" />} />
        <Route path="/cubatao" element={<Cidade cidade="Cubatão" />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </Layout>
  );
}
