import React from 'react';
import { ArrowRight, Target, Users, Zap, Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { SplineScene } from '../components/ui/spline-scene';
import { Spotlight } from '../components/ui/spotlight';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada projeto é planejado com métricas claras e objetivos mensuráveis para garantir o ROI.'
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Utilizamos as tecnologias mais recentes para criar soluções modernas e eficientes.'
    },
    {
      icon: Users,
      title: 'Parceria Verdadeira',
      description: 'Trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e desafios.'
    },
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Equipe especializada com anos de experiência em desenvolvimento e marketing digital.'
    }
  ];

  const differentials = [
    'Metodologia ágil com entregas incrementais',
    'Comunicação transparente durante todo o projeto',
    'Código limpo e bem documentado',
    'Suporte técnico contínuo pós-lançamento',
    'Análise de dados e otimizações constantes',
    'Treinamento da equipe do cliente'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-blue-600">Orion Digital</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em transformar visões em realidade digital, combinando criatividade, tecnologia e estratégia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Projetos Entregues</div>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação dos Clientes</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-600 mb-6">
                Capacitar empresas e empreendedores a alcançarem seu máximo potencial no ambiente digital, oferecendo soluções tecnológicas inovadoras e estratégias de marketing que geram resultados mensuráveis.
              </p>
              <p className="text-lg text-gray-600">
                Acreditamos que cada negócio é único e merece uma abordagem personalizada. Por isso, não oferecemos soluções prontas - criamos estratégias sob medida que refletem a identidade e os objetivos de cada cliente.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Equipe trabalhando"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-blue-500/20">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            <div className="flex flex-col md:flex-row h-full">
              {/* Left content */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                  Tecnologia Interativa
                </h2>
                <p className="text-lg text-neutral-300 max-w-lg mb-8">
                  Criamos experiências digitais imersivas que capturam atenção e elevam seu design. 
                  Explore o futuro do desenvolvimento web com animações 3D e interatividade avançada.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-neutral-300">Animações 3D Personalizadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-neutral-300">Experiências Imersivas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-neutral-300">Design Interativo</span>
                  </div>
                </div>
              </div>

              {/* Right content - 3D Scene */}
              <div className="flex-1 relative min-h-[300px] md:min-h-0">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7"
                alt="Visão de futuro"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Visão</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ser referência em transformação digital, reconhecida pela excelência técnica, inovação e pelos resultados extraordinários que entregamos aos nossos clientes.
              </p>
              <p className="text-lg text-gray-600">
                Queremos estar à frente das tendências tecnológicas, sempre explorando novas possibilidades para criar experiências digitais que não apenas atendem, mas superam as expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nosso Diferencial Competitivo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O que nos torna a escolha ideal para seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{differential}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Crescer Juntos?
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            Estamos prontos para ouvir suas ideias e transformá-las em realidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/portfolio')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Ver Nossos Projetos
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg"
            >
              Entrar em Contato
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;