"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GiftList() {
  const [gifts, setGifts] = useState([
    {
      id: 1,
      name: "Conjunto de Panelas",
      description: "Perfeito para preparar refeições especiais juntos.",
      price: "R$ 600,00",
      chosen: false,
    },
    {
      id: 2,
      name: "Jogo de Cama Queen",
      description: "Conforto e elegância para o novo lar.",
      price: "R$ 350,00",
      chosen: false,
    },
    {
      id: 3,
      name: "Cafeteira Elétrica",
      description: "Para começar as manhãs com mais sabor.",
      price: "R$ 420,00",
      chosen: false,
    },
    {
      id: 4,
      name: "Liquidificador",
      description: "Ideal para sucos e receitas rápidas.",
      price: "R$ 280,00",
      chosen: false,
    },
    {
      id: 5,
      name: "Experiência Romântica",
      description: "Jantar especial ou viagem inesquecível.",
      price: "Valor livre",
      chosen: false,
    },
  ]);

  function chooseGift(id) {
    setGifts((prev) =>
      prev.map((gift) =>
        gift.id === id ? { ...gift, chosen: true } : gift
      )
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-teal-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold"> Lista de Presentes</h1>
        <p className="text-gray-600 mt-2">
          Ajude o casal a começar essa nova fase com muito amor 
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {gifts.map((gift) => (
          <Card key={gift.id} className="rounded-2xl shadow-md">
            <CardContent className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-2">{gift.name}</h2>
              <p className="text-gray-600 flex-grow">{gift.description}</p>
              <span className="font-bold text-green-700 mt-4">
                {gift.price}
              </span>

              <Button
                className="mt-5"
                disabled={gift.chosen}
                onClick={() => chooseGift(gift.id)}
              >
                {gift.chosen ? "Presente escolhido " : "Escolher presente"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <footer className="text-center mt-12 text-gray-600">
        Com carinho, os noivos 
      </footer>
    </div>
  );
}
