"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Bem-vindos ao nosso casamento!
          </h1>
          <p className="text-xl text-gray-600">
            Celebrando o amor e o início de uma nova jornada
          </p>
        </header>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl shadow-lg flex items-center justify-center">
              <p className="text-gray-600 text-center px-6">Foto do casal 1</p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-teal-200 to-teal-300 rounded-2xl shadow-lg flex items-center justify-center">
              <p className="text-gray-600 text-center px-6">Foto do casal 2</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Nossa História
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Somos [Nome do Noivo] e [Nome da Noiva], e estamos muito felizes em compartilhar 
                este momento especial com vocês. Nossa história começou há [X anos], quando nos 
                conhecemos [como vocês se conheceram].
              </p>
              <p>
                Desde então, construímos juntos momentos inesquecíveis, superamos desafios e 
                crescemos lado a lado. Hoje, estamos prontos para dar o próximo passo e oficializar 
                nosso amor.
              </p>
              <p>
                A presença de cada um de vocês é o maior presente que poderíamos receber. 
                No entanto, se desejarem nos presentear, preparamos uma lista especial de 
                itens que nos ajudarão a construir nosso novo lar.
              </p>
            </div>
          </div>

          <div className="aspect-video bg-gradient-to-br from-pink-100 to-teal-100 rounded-2xl shadow-lg flex items-center justify-center">
            <p className="text-gray-600 text-center px-6">Foto do casal 3</p>
          </div>
        </section>

        <div className="text-center">
          <Button
            onClick={() => router.push("/presentes")}
            size="lg"
            className="text-lg px-8 py-6 rounded-xl shadow-lg"
          >
            Ver Lista de Presentes
          </Button>
        </div>

        <footer className="text-center mt-16 text-gray-600">
          <p>Com amor, os noivos ❤️</p>
        </footer>
      </div>
    </div>
  );
}
