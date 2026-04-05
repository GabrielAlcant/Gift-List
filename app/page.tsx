"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import casal1 from "../images/casal/casal1.jpeg";
import casal2 from "../images/casal/casal2.jpeg";
import casal3 from "../images/casal/casal3.jpeg";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <Image
                src={casal1}
                alt="Casal feliz 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <Image
                src={casal2}
                alt="Casal feliz 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80">
              <Image
                src={casal3}
                alt="Casal feliz 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Nossa História
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Somos Daniel e Laiana, Nossa história começou de forma simples, 
                mas cheia de significado — como quem não imagina que um encontro pode mudar tudo. 
                Entre conversas, risadas e descobertas, fomos construindo um sentimento verdadeiro, 
                que cresceu com o tempo e se fortaleceu em cada momento compartilhado.
              </p>
              <p>
                Aprendemos a caminhar juntos, celebrando as alegrias e enfrentando os desafios lado a lado, 
                sempre com respeito, carinho e parceria. Cada etapa vivida nos trouxe até aqui, 
                mais unidos e certos de que queremos escrever todos os próximos capítulos juntos.
              </p>
              <p>
                Hoje, damos um novo passo em nossa jornada, cheios de amor, esperança e gratidão 
                por tudo o que vivemos e por tudo o que ainda está por vir. 
                E ter vocês ao nosso lado nesse momento torna tudo ainda mais especial.
              </p>
              <p>
                A presença de cada um de vocês é o maior presente que poderíamos receber. 
                No entanto, se desejarem nos presentear, preparamos uma lista especial de 
                itens que nos ajudarão a construir nosso novo lar.
              </p>
            </div>
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
          <p>Com amor, Daniel e Laiana</p>
        </footer>
      </div>
    </div>
  );
}
