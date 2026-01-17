import { Zap, AlertTriangle, Lightbulb, Cable, Shield, Home } from 'lucide-react';

const services = [
  {
    icon: AlertTriangle,
    title: 'Emergências Elétricas 24h',
    description: 'Atendimento imediato para quedas de energia, curtos-circuitos e riscos elétricos.',
    emergency: true
  },
  {
    icon: Zap,
    title: 'Instalações Elétricas',
    description: 'Instalação completa de sistemas elétricos residenciais e comerciais.',
    emergency: false
  },
  {
    icon: Cable,
    title: 'Manutenção Elétrica Preventiva',
    description: 'Inspeção e manutenção regular para evitar falhas e acidentes elétricos.',
    emergency: false
  },
  {
    icon: Lightbulb,
    title: 'Iluminação Residencial',
    description: 'Instalação e reparo de iluminação, LED e sistemas automatizados.',
    emergency: false
  },
  {
    icon: Shield,
    title: 'Quadros de Distribuição',
    description: 'Montagem, manutenção e atualização de quadros elétricos.',
    emergency: false
  },
  {
    icon: Home,
    title: 'Automação Residencial',
    description: 'Instalação de sistemas inteligentes para conforto, segurança e economia.',
    emergency: false
  }
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="servicos">
      <div className="max-w-6xl mx-auto">

        {/* Heading semântico */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#1E3A5F] mb-4">
            Serviços de Eletricista Residencial e Emergencial
          </h2>

          <p className="text-gray-600 text-lg">
            Atendimento elétrico profissional em Santos, São Vicente, Praia Grande e Cubatão
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all ${
                  service.emergency ? 'border-2 border-[#FBBF24] relative' : ''
                }`}
              >
                {service.emergency && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    URGENTE
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    service.emergency ? 'bg-[#FBBF24]' : 'bg-[#1E3A5F]'
                  }`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* H3 correto para SEO */}
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

