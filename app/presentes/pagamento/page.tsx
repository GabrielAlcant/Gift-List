"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QRCode from "qrcode";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [pixKey, setPixKey] = useState("");
  
  const giftName = searchParams.get("name") || "Presente";
  const giftPrice = searchParams.get("price") || "R$ 0,00";
  const giftId = searchParams.get("id") || "";

  const pixKeysRef = useRef([
    "exemplo1@pix.com",
    "11987654321",
    "12345678000190",
    "exemplo2@pix.com",
    "21987654321"
  ]);

  useEffect(() => {
    const randomKey = pixKeysRef.current[Math.floor(Math.random() * pixKeysRef.current.length)];
    setPixKey(randomKey);

    const priceValue = giftPrice.replace("R$", "").replace(",", ".").trim();
    const pixPayload = `PIX|Chave:${randomKey}|Valor:${priceValue}|Presente:${giftName}`;

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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
