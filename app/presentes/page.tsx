"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GiftList() {
  const router = useRouter();
  const [gifts, setGifts] = useState([
    {
      id: 1,
      name: "Aspirador de Pó",
      description: "Praticidade para manter a casa sempre limpa.",
      price: "R$ 139,00",      
      image: "/images/products/aspirador.webp",      
      chosen: false,
    },
    {
      id: 2,
      name: "Cafeteira Elétrica",
      description: "Para começar as manhãs com mais sabor.",
      price: "R$ 489,00",
      image: "/images/products/cafeteira eletrica.webp",
      chosen: false,
    },
    {
      id: 3,
      name: "Micro-ondas",
      description: "Facilita o dia a dia com rapidez e eficiência.",
      price: "R$ 1229,00",
      image: "/images/products/micro-ondas.webp",
      chosen: false,
    },
    {
      id: 4,
      name: "Lava-Louças",
      description: "Economia de tempo e água para a rotina do casal.",
      price: "R$ 1957,00",
      image: "/images/products/lava louças.avif",
      chosen: false,
    },
    {
      id: 5,
      name: "Lavadora de Roupas",
      description: "Praticidade para cuidar das roupas do casal.",
      price: "R$ 1998,00",
      image: "/images/products/lavadoura de roupas.avif",
      chosen: false,
    },
    {
      id: 6,
      name: "Jogo/Kit pano de prato",
      description: "Conjunto de panos de prato para a cozinha do casal.",
      price: "R$ 98,00",
      image: "/images/products/pano de prato.webp",
      chosen: false,
    },
    {
      id: 7,
      name: "Grill Elétrico",
      description: "Para preparar refeições deliciosas e saudáveis.",
      price: "R$ 222,00",
      image: "/images/products/grill eletrico.jpg",
      chosen: false,
    },
    {
      id: 8,
      name: "Fritadeira Airfryer",
      description: "Cozinhar de forma mais saudável e prática.",
      price: "R$ 329,00",
      image: "/images/products/air fryer.jpg",
      chosen: false,

    },
    {
      id: 9,
      name: "Liquidificador",
      description: "Ideal para preparar sucos, vitaminas e receitas diversas.",
      price: "R$ 139,00",
      image: "/images/products/liquidificador.webp",
      chosen: false,
    },
    {
      id: 10,
      name: "Batedeira",
      description: "Perfeita para preparar bolos, massas e muito mais.",
      price: "R$ 89,00",
      image: "/images/products/batedeira.avif",
      chosen: false,
    },
    {
      id: 11,
      name: "Roupão de Banho",
      description: "Conforto e estilo para os momentos de relaxamento.",
      price: "R$ 79,00",
      image: "/images/products/roupao de banho.jpg",
      chosen: false,
    },
    {
      id: 12,
      name: "Smart TV",
      description: "Entretenimento de qualidade para o casal.",
      price: "R$ 1498,00",
      image: "/images/products/smart tv.avif",
      chosen: false,
    },
    {
      id: 13,
      name: "Edredom Casal",
      description: "Conforto e estilo para os momentos de relaxamento.",
      price: "R$ 109,00",
      image: "/images/products/edredom casal.jpg",
      chosen: false,
    },
    {
      id: 14,
      name: "Jogo De Talheres",
      description: "Conjunto de talheres para a mesa do casal.",
      price: "R$ 65,00",
      image: "/images/products/jogo de talheres.webp",
      chosen: false,
    },
    {
      id: 15,
      name: "Ferro de Passar Roupas",
      description: "Perfeito para manter as roupas do casal impecáveis.",
      price: "R$ 85,00",
      image: "/images/products/ferro de passar.webp",
      chosen: false,
    },
    {
      id: 16,
      name: "Kit Pratos",
      description: "Conjunto de pratos para a mesa do casal.",
      price: "R$ 93,00",
      image: "/images/products/kit pratos.jpg",
      chosen: false,
    },
    {
      id: 17,
      name: "Pijama Combinando",
      description: "Conjunto de pijamas combinando para o casal.",
      price: "R$ 72,00",
      image: "/images/products/pijama casal.webp",
      chosen: false,
    },
    {
      id: 18,
      name: "Doação de Livre Valor",
      description: "Contribua com o valor que desejar para ajudar o casal a construir seu lar.",
      price: "Livre Valor",
      image: "/images/products/livre valor.png",
      chosen: false,
    },
  ]);

  function chooseGift(id: number) {
    const gift = gifts.find((g) => g.id === id);
    if (gift) {
      router.push(
        `/presentes/pagamento?id=${gift.id}&name=${encodeURIComponent(
          gift.name
        )}&price=${encodeURIComponent(gift.price)}`
      );
    }
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
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src={gift.image}
                  alt={gift.name}
                  fill
                  className="object-cover"
                />
              </div>
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
        Com carinho, Daniel e Laiana 
      </footer>
    </div>
  );
}
