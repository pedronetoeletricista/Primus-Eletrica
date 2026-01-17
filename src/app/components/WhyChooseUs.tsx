import { Clock, Shield, Award, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Chegamos em até 1 hora em casos de emergência na Baixada Santista.'
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Profissionais qualificados, normas técnicas e equipamentos adequados.'
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Mais de 15 anos de atuação em serviços elétricos residenciais.'
  },
  {
    icon: HeartHandshake,
    title: 'Preço Justo',
    description: 'Orçamento transparente, sem custos ocultos ou surpresas.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading semântico */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#1E3A5F] mb-4">
            Por que escolher a Primus Elétrica
          </h2>

          <p className="text-gray-600 text-lg">
            Eletricista de confiança em Santos, São Vicente, Praia Grande e Cubatão
          </p>
        </div>
        
        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FBBF24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#1E3A5F]" />
                </div>

                {/* H3 correto */}
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                  {benefit.title}
                </h3>

                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

