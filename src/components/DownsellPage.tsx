import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Book, CircleArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const DownsellPage: React.FC = () => {
  const isMobile = useIsMobile();
  return <div className="min-h-screen bg-beige-100 font-montserrat">
      {/* Header Section with Background - Optimized for mobile */}
      <div className="relative w-full h-[250px] md:h-[400px] bg-gradient-to-b from-beige-200 to-beige-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=70')] md:bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-beige-100 bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-4 md:mb-6 p-3 md:p-4 bg-white bg-opacity-80 rounded-full shadow-md">
            <Book size={isMobile ? 36 : 48} className="text-softBlue-500" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            Palavra Diária
          </h1>
          <p className="text-base md:text-xl text-gray-600">Sua conexão diária com a sabedoria divina</p>
        </div>
      </div>

      {/* Main Content - Improved padding for mobile */}
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-5xl">
        {/* Bloco 1 - Introdução com oferta atraente */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
            Ainda em Busca de Orientação Espiritual Diária? Nós Temos Algo Especial Para Você!
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Para quem não aceitou a oferta, temos um presente de agradecimento: uma ferramenta poderosa para lhe ajudar a se conectar com as palavras da Bíblia todos os dias – fácil, rápido e com uma experiência única.
          </p>
        </div>

        {/* Bloco 2 - Apresentação da Oferta do Downsell */}
        <Card className="p-4 md:p-8 mb-6 md:mb-8 bg-white shadow-lg border-gold-300 border">
          <div className="text-center mb-4 md:mb-6">
            <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6">
              Se você ainda está em busca de um guia diário para te fortalecer, a solução está aqui! Imagine poder receber uma palavra poderosa todos os dias, inspirando sua jornada e trazendo clareza em momentos cruciais. Sem complicação, só a força da palavra divina!
            </p>
            <a href="https://pay.cakto.com.br/ns4fk9q" target="_blank" rel="noopener noreferrer">
              <Button className="bg-softBlue-500 hover:bg-softBlue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-md text-base md:text-lg animate-pulse-glow shadow-lg w-full md:w-auto"> começar agora por apenas R$ 16,90</Button>
            </a>
          </div>
        </Card>

        {/* Bloco 3 - Garantia e Reforço do Valor da Oferta */}
        <div className="bg-beige-200 p-4 md:p-6 rounded-lg mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="md:w-1/4 flex justify-center">
              <Book size={isMobile ? 80 : 120} className="text-gold-500" strokeWidth={1} />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 text-center md:text-left">
                Transforme sua Jornada Espiritual
              </h3>
              <p className="text-gray-700 mb-4 text-center md:text-left text-sm md:text-base">
                Receba todos os dias uma palavra personalizada diretamente no seu celular e você ainda terá +1 bonus! Imagine a sensação de começar o seu dia com uma reflexão poderosa da Bíblia. E por apenas R$ 16,90, você terá acesso a esse maravilhoso benefício diário. Não perca essa oportunidade única!
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 4 - O que você vai ganhar - Mobile optimized grid */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 text-center mb-4 md:mb-8">
            O que você vai ganhar:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-4 md:p-6 text-center bg-white hover:shadow-md transition-shadow">
              <div className="h-10 md:h-12 flex items-center justify-center mb-2 md:mb-4">
                <CircleArrowRight size={isMobile ? 32 : 40} className="text-gold-500" />
              </div>
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Versículos Personalizados</h4>
              <p className="text-gray-600 text-sm md:text-base">Geração diária de versículos personalizados para sua vida</p>
            </Card>

            <Card className="p-4 md:p-6 text-center bg-white hover:shadow-md transition-shadow">
              <div className="h-10 md:h-12 flex items-center justify-center mb-2 md:mb-4">
                <CircleArrowRight size={isMobile ? 32 : 40} className="text-gold-500" />
              </div>
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Desenvolvimento Espiritual</h4>
              <p className="text-gray-600 text-sm md:text-base">Desenvolvimento espiritual contínuo com reflexões diárias</p>
            </Card>

            <Card className="p-4 md:p-6 text-center bg-white hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <div className="h-10 md:h-12 flex items-center justify-center mb-2 md:mb-4">
                <CircleArrowRight size={isMobile ? 32 : 40} className="text-gold-500" />
              </div>
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2">Sempre Disponível</h4>
              <p className="text-gray-600 text-sm md:text-base">Fácil de usar e sempre disponível na palma da sua mão</p>
            </Card>
          </div>
        </div>

        {/* Bloco 5 - Elementos de urgência */}
        <Card className="p-4 md:p-6 bg-gold-100 border-gold-300 border mb-8 md:mb-12">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">⏰ ATENÇÃO!</h3>
            <p className="text-base md:text-lg text-gray-700">
              Oferta válida até o fim de hoje! Só para quem perdeu a primeira oportunidade, então não espere mais. Aproveite enquanto ainda está disponível!
            </p>
          </div>
        </Card>

        {/* Bloco 6 - Testemunhos - Stacked on mobile */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 text-center mb-4 md:mb-8">
            O que estão dizendo sobre nós:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="p-4 md:p-6 bg-white shadow-sm">
              <p className="italic text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                "Desde que comecei a receber os versículos diários, minha vida tem sido transformada. É como ter uma luz guiando meu caminho todos os dias."
              </p>
              <Separator className="mb-3 md:mb-4" />
              <p className="font-semibold text-sm md:text-base">Maria C.</p>
            </Card>
            
            <Card className="p-4 md:p-6 bg-white shadow-sm">
              <p className="italic text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                "As reflexões diárias me ajudaram a encontrar paz nos momentos mais difíceis. É incrível como cada mensagem parece ser exatamente o que eu precisava ouvir."
              </p>
              <Separator className="mb-3 md:mb-4" />
              <p className="font-semibold text-sm md:text-base">João P.</p>
            </Card>
          </div>
        </div>

        {/* Bloco 7 - Chamada para ação final - Better mobile layout */}
        <div className="text-center mb-8 md:mb-12 py-4 md:py-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
            Não perca essa chance de transformar seus dias com a sabedoria da Bíblia.
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Aproveite enquanto está disponível e comece sua jornada agora mesmo.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center">
            <a href="https://pay.cakto.com.br/ns4fk9q" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button className="bg-softBlue-500 hover:bg-softBlue-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-md text-base md:text-lg w-full">
                Começar agora por R$ 16,90
              </Button>
            </a>
            <a href="https://pay.cakto.com.br/itbbung" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button variant="outline" className="border-softBlue-500 text-softBlue-500 hover:bg-softBlue-100 py-2 md:py-3 px-4 md:px-6 rounded-md text-base md:text-lg w-full"> perder essa oferta que Deus mandou</Button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-beige-300 pt-4 md:pt-6 text-center text-xs md:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Palavra Diária. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não está afiliado com nenhuma denominação religiosa específica.</p>
        </div>
      </div>
    </div>;
};
export default DownsellPage;