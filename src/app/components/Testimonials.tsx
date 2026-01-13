import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Cliente 1',
    rating: 5,
    text: 'Aguardando importação dos depoimentos do Google Meu Negócio',
    date: 'Recente'
  },
  {
    name: 'Cliente 2',
    rating: 5,
    text: 'Aguardando importação dos depoimentos do Google Meu Negócio',
    date: 'Recente'
  },
  {
    name: 'Cliente 3',
    rating: 5,
    text: 'Aguardando importação dos depoimentos do Google Meu Negócio',
    date: 'Recente'
  },
  {
    name: 'Cliente 4',
    rating: 5,
    text: 'Aguardando importação dos depoimentos do Google Meu Negócio',
    date: 'Recente'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#1E3A5F] mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-gray-600 text-lg">
            Avaliações reais do Google Meu Negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#1E3A5F]">{testimonial.name}</span>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://share.google/j3jMPrVUzqObHuCXU" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A5F] hover:text-[#FBBF24] font-semibold underline"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
