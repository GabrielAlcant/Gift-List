"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QRCode from "qrcode";

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [pixKey, setPixKey] = useState("");
  
  const giftName = searchParams.get("name") || "Presente";
  const giftPrice = searchParams.get("price") || "R$ 0,00";
  const giftId = searchParams.get("id") || "";

  const pixKeyValue = "00020126580014BR.GOV.BCB.PIX0136efc40199-2587-4b80-8b3f-7daebc9559185204000053039865802BR5919Daniel Araujo Costa6009SAO PAULO62140510Qw4QAdKKFZ63048133";

  useEffect(() => {
    setPixKey(pixKeyValue);

    // Se precisar ajustar valor dinamicamente, gere payload EMVco com valor a partir de giftPrice.
    // Aqui usamos a string completa fornecida pelo usuário (inclui CRC) para testar diretamente.
    const pixPayload = pixKeyValue;

    QRCode.toDataURL(pixPayload, {
      width: 300,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    })
      .then((url) => {
        setQrCodeUrl(url);
      })
      .catch((err) => {
        console.error("Erro ao gerar QR Code:", err);
      });
  }, [giftName, giftPrice]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-teal-100 p-6 flex items-center justify-center">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Pagamento PIX</h1>
            <p className="text-2xl font-bold mb-2">Instruções de Pagamento:</p>
            <p className="text-gray-600">
              1. Abra o aplicativo do banco ou carteira digital que suporta pagamentos via PIX no seu celular.
            </p>
            <p className="text-gray-600">
              2. Selecione a opção &quot;Pagar com QR Code&quot; ou &quot;Pagar com Chave PIX Copia e Cola&quot;
            </p>
            <p className="text-gray-600">
              3. Escaneie o QR Code abaixo ou copie e cole a chave PIX
            </p>
            <p className="text-gray-600 mb-2">
              4. Digite o valor exibido na tela e conclua o pagamento
            </p>

            <p className="text-gray-600">Presente escolhido: {giftName}</p>
            <p className="text-2xl font-bold text-green-700 mt-2">{giftPrice}</p>
          </div>

          {qrCodeUrl && (
            <div className="flex flex-col items-center mb-6">
              <img
                src={qrCodeUrl}
                alt="QR Code PIX"
                className="rounded-lg shadow-md mb-4"
              />
              <div className="bg-gray-100 p-4 rounded-lg w-full">
                <p className="text-sm text-gray-600 mb-1">Chave PIX:</p>
                <p className="font-mono text-sm break-all font-semibold">{pixKey}</p>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <Button
              className="w-full"
              onClick={() => {
                navigator.clipboard.writeText(pixKey);
                alert("Chave PIX copiada!");
              }}
            >
              Copiar chave PIX
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push("/presentes")}
            >
              Voltar para lista
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push("/")}
            >
              ← Voltar para Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-pink-100 to-teal-100 p-6 flex items-center justify-center"><div className="text-center">Carregando...</div></div>}>
      <PaymentContent />
    </Suspense>
  );
}
