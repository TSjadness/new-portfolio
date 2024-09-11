"use client";

import HomePage from "@/components/home/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export function AppRoutes() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
