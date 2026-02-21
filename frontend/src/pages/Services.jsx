import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../mock/mockData';
import * as Icons from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const servicePackages = [
    {
      name: 'Pacote Start',
      description: 'Ideal para pequenos negócios que estão começando',
      features: [
        'Landing Page ou Site Institucional',
        'Design Responsivo',
        'SEO Básico',
        'Formulário de Contato',
        '1 Mês de Suporte'
      ],
      highlight: false
    },
    {
      name: 'Pacote Growth',
      description: 'Para empresas que querem crescer online',
      features: [
        'Site Completo ou E-commerce',
        'Integração com APIs',
        'SEO Avançado',
        'Painel Administrativo',
        'Gestão de Redes Sociais (3 meses)',
        '3 Meses de Suporte'
      ],
      highlight: true
    },
    {
      name: 'Pacote Enterprise',
      description: 'Soluções completas e personalizadas',
      features: [
        'Plataforma Web + App Mobile',
        'Arquitetura Escalável',
        'Integrações Customizadas',
        'Estratégia de Marketing Digital',
        'Tráfego Pago Gerenciado',
        'Suporte Dedicado 24/7'
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-blue-600">Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções digitais completas para impulsionar o crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon];
              // Assign IDs based on service type
              let serviceId = '';
              if (service.title.includes('Sites')) serviceId = 'web';
              else if (service.title.includes('Mobile')) serviceId = 'mobile';
              else if (service.title.includes('Landing')) serviceId = 'landing';
              else if (service.title.includes('Redes')) serviceId = 'social';
              else if (service.title.includes('Design')) serviceId = 'marketing';
              else if (service.title.includes('Tráfego')) serviceId = 'traffic';
              
              return (
                <Card
                  id={serviceId}
                  key={service.id}
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pacotes de Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o pacote ideal para as necessidades do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-all ${
                  pkg.highlight
                    ? 'border-2 border-blue-600 transform md:-translate-y-4'
                    : ''
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-8">{pkg.description}</p>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => navigate('/contact')}
                    className={`w-full ${
                      pkg.highlight
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Trabalhamos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nosso processo ágil e transparente para entregar projetos de excelência
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Descoberta',
                description: 'Entendemos suas necessidades, objetivos e desafios'
              },
              {
                step: '02',
                title: 'Planejamento',
                description: 'Criamos a estratégia e roadmap do projeto'
              },
              {
                step: '03',
                title: 'Desenvolvimento',
                description: 'Executamos com entregas incrementais e feedback contínuo'
              },
              {
                step: '04',
                title: 'Lançamento',
                description: 'Publicamos e monitoramos resultados com suporte dedicado'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Começar Seu Projeto?
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            Entre em contato e receba uma proposta personalizada
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;