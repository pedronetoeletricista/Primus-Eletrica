import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Yuri Ferreira',
    rating: 5,
    text: 'Empresa idônea, atendimento impecável e máximo respeito com o contratante. O profissional Pedro foi o melhor prestador de serviço com quem já trabalhei. Responsável, íntegro e indubitavelmente confiável.',
    date: '20/11/2025'
  },
  {
    name: 'Caroline Coutinho',
    rating: 5,
    text: 'Ótimo profissional, podem pedir sem medo. Eu indico!',
    date: '23/11/2025'
  },
  {
    name: 'Sueli Rodrigues',
    rating: 5,
    text: 'Correspondeu às minhas expectativas. O eletricista Pedro é impecável, gostei muito!',
    date: '05/12/2025'
  },
  {
    name: 'Geovanna Ferreira',
    rating: 5,
    text: 'Excelente profissional. Atendimento em emergência, muito atencioso, explicou tudo com clareza e executou o serviço com agilidade e competência.',
    date: '05/01/2025'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading semântico */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#1E3A5F] mb-4">
            Avaliações de Clientes da Primus Elétrica
          </h2>

          <p className="text-gray-600 text-lg">
            Depoimentos reais de clientes atendidos na Baixada Santista
          </p>
        </div>
        
        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">

              {/* Estrelas */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]"
                  />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-700 mb-4">
                “{testimonial.text}”
              </p>

              {/* Autor */}
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#1E3A5F]">
                  {testimonial.name}
                </span>
                <span className="text-sm text-gray-500">
                  {testimonial.date}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Link Google */}
        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/search?sca_esv=83052c8b1ac74795&sxsrf=ANbL-n5XBxXq5iZpvtCidQoVPiD5CB4DTw:1768306288894&q=avalia%C3%A7%C3%B5es+sobre+primus+el%C3%A9trica"
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

