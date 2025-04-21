"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function QuizClient() {
  const params = useParams();
  const [categoria, setCategoria] = useState<string | null>(null);

  useEffect(() => {
    if (params?.categoria) {
      setCategoria(params.categoria as string);
    }
  }, [params]);

  if (!categoria) return null;

  return (
    <h1 className="text-3xl">Categoria: {categoria}</h1>
  );
}