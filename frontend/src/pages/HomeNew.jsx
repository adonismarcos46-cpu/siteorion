import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Target, Brain, MessageCircle, BarChart3, Users, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const HomeNew = () => {
  const navigate = useNavigate();
  
  const whatsappNumber = "5581999464238";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um Diagnóstico Estratégico para estruturar o crescimento da minha empresa com IA.");

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const solutions = [
    {
      name: "Orion Core",
      subtitle: "Base Inteligente",
      description: "Estrutura completa de captação + CRM + automação integrada. O alicerce do seu crescimento previsível.",
      features: ["Site otimizado para conversão", "CRM personalizado", "Automações essenciais", "Dashboard de métricas"],
      highlight: false
    },
    {
      name: "Orion Engage",
      subtitle: "Engajamento Escalável",
      description: "Sistema completo de nutrição e relacionamento automatizado com leads e clientes.",
      features: ["Fluxos de automação avançados", "Segmentação inteligente", "Multi-canal integrado", "ROI mensurável"],
      highlight: false
    },
    {
      name: "Orion Smart",
      subtitle: "Inteligência Aplicada",
      description: "IA trabalhando 24/7 na qualificação, atendimento e conversão dos seus leads.",
      features: ["IA conversacional", "Qualificação automática", "Respostas instantâneas", "Aprendizado contínuo"],
      highlight: true
    },
    {
      name: "Orion Supreme",
      subtitle: "Arquitetura Completa",
      description: "Ecossistema completo de crescimento: da primeira visita até o pós-venda automatizado.",
      features: ["Todas as soluções integradas", "Consultoria estratégica dedicada", "Suporte prioritário 24/7", "Otimização contínua"],
      highlight: false
    }
  ];

  const roadmap = [
    { step: "Tráfego", icon: Users, description: "Atração qualificada" },
    { step: "Captação", icon: Target, description: "Conversão otimizada" },
    { step: "Qualificação", icon: CheckCircle, description: "Filtragem inteligente" },
    { step: "CRM", icon: BarChart3, description: "Gestão centralizada" },
    { step: "Automação", icon: Zap, description: "Processos inteligentes" },
    { step: "IA", icon: Brain, description: "Decisões escaláveis" },
    { step: "Faturamento", icon: TrendingUp, description: "Crescimento previsível" }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzRUIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/50 px-4 py-2 text-sm">
                Arquitetura de Crescimento
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Arquitetura de Crescimento com{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Inteligência Artificial Aplicada.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                Estruturamos sistemas inteligentes que transformam visitas em faturamento previsível.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/50"
                >
                  Solicitar Diagnóstico Estratégico
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openWhatsApp}
                  className="border-2 border-gray-700 bg-gray-900/50 text-white hover:bg-gray-800 hover:border-green-500 px-8 py-6 text-lg font-semibold transition-all"
                >
                  <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
                  Falar com Especialista
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="mt-12 flex items-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Crescimento Previsível</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>IA Aplicada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>ROI Mensurável</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl rounded-full"></div>
              <Card className="relative bg-gray-900/90 border-gray-800 shadow-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Dashboard de Crescimento</h3>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/50">
                      +127% MoM
                    </Badge>
                  </div>
                  
                  {/* Simulated Chart */}
                  <div className="h-48 flex items-end justify-between space-x-2 mb-6">
                    {[40, 52, 48, 65, 72, 68, 85, 95, 88, 100].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="text-gray-400 text-xs mb-1">Leads</div>
                      <div className="text-white font-bold text-xl">1,247</div>
                      <div className="text-green-400 text-xs flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +32%
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="text-gray-400 text-xs mb-1">Conversão</div>
                      <div className="text-white font-bold text-xl">34.2%</div>
                      <div className="text-green-400 text-xs flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +18%
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <div className="text-gray-400 text-xs mb-1">ROI</div>
                      <div className="text-white font-bold text-xl">5.7x</div>
                      <div className="text-green-400 text-xs flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +45%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="py-24 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Não somos agência. <span className="text-blue-400">Somos estrutura.</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
            Enquanto agências entregam peças isoladas, nós construímos ecossistemas completos de crescimento. 
            Integramos site, CRM, automação, IA e estratégia comercial em uma arquitetura única que trabalha 24/7 
            transformando visitas em faturamento previsível.
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: Target, label: "Site Estratégico", description: "Otimizado para conversão" },
              { icon: BarChart3, label: "CRM Integrado", description: "Gestão centralizada" },
              { icon: Zap, label: "Automação", description: "Processos inteligentes" },
              { icon: Brain, label: "IA Aplicada", description: "Decisões escaláveis" },
              { icon: TrendingUp, label: "Estratégia Comercial", description: "Crescimento previsível" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/20 transition-all group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MÉTODO ORION - ROADMAP */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/50">
              Método Orion
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Do Tráfego ao Faturamento
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Arquitetura completa que transforma cada etapa em crescimento mensurável
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 relative">
              {roadmap.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-all hover:scale-105 cursor-pointer group"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all">
                        <IconComponent className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-white font-bold mb-2">{item.step}</h3>
                      <p className="text-gray-500 text-xs">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/50">
              Soluções Escaláveis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha Sua Arquitetura
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Do básico ao ecossistema completo. Crescimento previsível em qualquer escala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all hover:scale-105 ${
                  solution.highlight
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 border-blue-500'
                    : 'bg-gray-900 border-gray-800 hover:border-blue-600'
                }`}
              >
                {solution.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${solution.highlight ? 'text-white' : 'text-white'}`}>
                      {solution.name}
                    </h3>
                    <p className={`text-sm font-medium ${solution.highlight ? 'text-blue-100' : 'text-blue-400'}`}>
                      {solution.subtitle}
                    </p>
                  </div>

                  <p className={`mb-6 ${solution.highlight ? 'text-white/90' : 'text-gray-400'}`}>
                    {solution.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${solution.highlight ? 'text-white' : 'text-blue-500'}`} />
                        <span className={solution.highlight ? 'text-white/90' : 'text-gray-400'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => navigate('/contact')}
                    className={`w-full ${
                      solution.highlight
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Conhecer Solução
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-24 bg-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resultados Reais
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Empresas que estruturaram seu crescimento com a Orion Digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "+324%", label: "Crescimento em Leads", company: "TechStart Solutions" },
              { metric: "5.2x", label: "Retorno sobre Investimento", company: "GrowthLab" },
              { metric: "93%", label: "Taxa de Automação", company: "ScaleUp Corp" }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 text-center group hover:border-blue-600 transition-all">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                    {item.metric}
                  </div>
                  <div className="text-white font-semibold mb-2">{item.label}</div>
                  <div className="text-gray-500 text-sm">{item.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-8 opacity-80" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empresas que estruturam crescem.
            <br />
            <span className="text-blue-100">Empresas que improvisam sobrevivem.</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12">
            Pare de depender de sorte. Comece a construir um sistema previsível de crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg font-bold shadow-2xl transition-all hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Ativar Minha Estrutura Agora
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-6 text-lg font-bold transition-all"
            >
              Agendar Diagnóstico Gratuito
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>100% personalizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Resultado garantido</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeNew;
