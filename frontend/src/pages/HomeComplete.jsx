import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, TrendingUp, Zap, Target, Brain, MessageCircle, 
  BarChart3, Users, Sparkles, AlertCircle, Rocket, Search, Globe, 
  FileText, Database, Bot, GraduationCap, X
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const HomeComplete = () => {
  const navigate = useNavigate();
  
  const whatsappNumber = "5581999464238";
  const whatsappMessage = encodeURIComponent("Olá! Quero estruturar meu sistema digital com a Orion.");

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const solutions = [
    {
      icon: Globe,
      title: "Desenvolvimento de Sites Estratégicos",
      description: "Sites otimizados para conversão, performance e posicionamento. Cada elemento pensado para transformar visitas em resultados.",
      features: ["Design focado em conversão", "Performance otimizada", "Mobile-first", "Integração completa"]
    },
    {
      icon: FileText,
      title: "Landing Pages de Alta Conversão",
      description: "Páginas focadas em geração de leads e vendas. Testes A/B, copy persuasiva e design que converte.",
      features: ["Copy estratégica", "Design persuasivo", "Testes A/B", "Métricas em tempo real"]
    },
    {
      icon: Search,
      title: "SEO Estratégico",
      description: "Otimização para posicionamento orgânico e crescimento sustentável. Tráfego qualificado sem depender de anúncios.",
      features: ["Auditoria completa", "Otimização técnica", "Conteúdo estratégico", "Link building"]
    },
    {
      icon: Database,
      title: "CRM Personalizado",
      description: "Organização e controle total do funil comercial. Cada lead rastreado, cada oportunidade maximizada.",
      features: ["Funil visual", "Automação de tarefas", "Relatórios inteligentes", "Integração total"]
    },
    {
      icon: Zap,
      title: "Automação de Marketing",
      description: "Fluxos inteligentes que trabalham 24h. Nutrição, segmentação e conversão no piloto automático.",
      features: ["Fluxos personalizados", "Segmentação avançada", "Multi-canal", "ROI mensurável"]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp AI Platform",
      description: "Sistema inteligente de atendimento automatizado com IA integrada e personalizável. Qualificação e conversão 24/7.",
      features: ["IA conversacional", "Atendimento 24/7", "Qualificação automática", "Integração CRM"]
    },
    {
      icon: Brain,
      title: "IA Aplicada ao Crescimento",
      description: "Qualificação automática, lead scoring e análise estratégica. Decisões baseadas em dados, crescimento previsível.",
      features: ["Lead scoring", "Análise preditiva", "Otimização contínua", "Insights acionáveis"]
    }
  ];

  const roadmap = [
    { step: "SEO", icon: Search, description: "Atração qualificada" },
    { step: "Site", icon: Globe, description: "Apresentação estratégica" },
    { step: "Landing Pages", icon: FileText, description: "Conversão otimizada" },
    { step: "Captação", icon: Target, description: "Geração de leads" },
    { step: "CRM", icon: Database, description: "Organização" },
    { step: "Automação", icon: Zap, description: "Processos inteligentes" },
    { step: "WhatsApp AI", icon: MessageCircle, description: "Atendimento 24/7" },
    { step: "Faturamento", icon: TrendingUp, description: "Crescimento previsível" }
  ];

  const problems = [
    { icon: AlertCircle, title: "Site que não converte", description: "Visitas não se transformam em leads" },
    { icon: Search, title: "SEO inexistente", description: "Invisível nos mecanismos de busca" },
    { icon: Database, title: "Leads desorganizados", description: "Oportunidades perdidas no caos" },
    { icon: Users, title: "Atendimento manual", description: "Tempo perdido em tarefas repetitivas" },
    { icon: BarChart3, title: "Falta de previsibilidade", description: "Crescimento baseado em sorte" },
    { icon: Target, title: "Marketing sem estratégia", description: "Investimento sem retorno claro" }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* SEO Meta Tags - Will be handled by React Helmet or similar */}
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background with Logo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/30 to-gray-950"></div>
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url(https://customer-assets.emergentagent.com/job_digital-studio-53/artifacts/caw0ghel_ChatGPT%20Image%201%20de%20mar.%20de%202026%2C%2012_39_57.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzRUIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/50 px-4 py-2 text-sm animate-pulse">
                Infraestrutura Digital Completa
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Construímos{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  Sistemas Digitais
                </span>
                {' '}que Transformam Visitas em Faturamento Previsível.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
                <span className="text-blue-400 font-semibold">Site. SEO. Landing Pages. CRM. Automação. WhatsApp com IA.</span>
                <br />
                Tudo integrado em um único sistema estratégico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/50"
                >
                  Solicitar Diagnóstico Estratégico
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openWhatsApp}
                  className="border-2 border-green-500/50 bg-gray-900/50 text-white hover:bg-green-500/10 hover:border-green-500 px-8 py-6 text-lg font-semibold transition-all"
                >
                  <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
                  Falar com Especialista
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">5.2x</div>
                  <div className="text-gray-500 text-sm">ROI Médio</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">93%</div>
                  <div className="text-gray-500 text-sm">Automação</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-gray-500 text-sm">Funcionamento</div>
                </div>
              </div>
            </div>

            {/* Right Content - Combined Mockup with 3D Animation */}
            <div className="relative">
              {/* Animated 3D-like gradient background */}
              <div className="absolute inset-0 opacity-40 animate-pulse">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl rounded-full"></div>
              
              {/* Main Dashboard Card */}
              <Card className="relative bg-gray-900/90 border-blue-500/30 shadow-2xl overflow-hidden mb-4">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Sistema Integrado</h3>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50 text-xs">
                      <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1 animate-pulse"></span>
                      Online
                    </Badge>
                  </div>
                  
                  {/* Growth Chart */}
                  <div className="h-32 flex items-end justify-between space-x-1 mb-4">
                    {[45, 52, 48, 65, 72, 68, 85, 95, 88, 100, 98, 110].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t transition-all hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-800/50 p-3 rounded">
                      <div className="text-gray-400 text-xs mb-1">Leads</div>
                      <div className="text-white font-bold">1,847</div>
                      <div className="text-green-400 text-xs flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +42%
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded">
                      <div className="text-gray-400 text-xs mb-1">Conv.</div>
                      <div className="text-white font-bold">38.4%</div>
                      <div className="text-green-400 text-xs flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +24%
                      </div>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded">
                      <div className="text-gray-400 text-xs mb-1">ROI</div>
                      <div className="text-white font-bold">6.8x</div>
                      <div className="text-green-400 text-xs flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +51%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp AI Preview */}
              <Card className="relative bg-gray-900/90 border-green-500/30 shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <span className="text-white font-semibold text-sm">WhatsApp AI</span>
                    <Badge className="bg-green-500/20 text-green-400 text-xs">Ativo</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-800 p-2 rounded-lg text-xs text-gray-300">
                      Olá! Posso ajudar? 👋
                    </div>
                    <div className="bg-blue-600/20 p-2 rounded-lg text-xs text-blue-300 ml-8">
                      IA qualificando automaticamente...
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-24 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A maioria das empresas tem{' '}
              <span className="text-gray-500">presença digital</span>.
              <br />
              Poucas têm <span className="text-blue-400">sistema</span>.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Identifique se sua empresa está improvisando ou estruturando crescimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <Card key={index} className="bg-gray-900 border-red-500/20 hover:border-red-500/50 transition-all group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{problem.title}</h3>
                    <p className="text-gray-500 text-sm">{problem.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO COMPLETA - ROADMAP */}
      <section className="py-24 bg-gray-950" id="metodo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/50">
              Infraestrutura Digital Integrada
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Do Tráfego ao Faturamento
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sistema completo que transforma cada etapa em crescimento mensurável
            </p>
          </div>

          {/* Roadmap Visual */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative">
              {roadmap.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={index}
                    className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-all hover:scale-105 cursor-pointer group"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-all">
                        <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-white font-bold text-sm mb-1">{item.step}</h3>
                      <p className="text-gray-500 text-xs">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NOSSAS SOLUÇÕES */}
      <section className="py-24 bg-gray-900/50" id="solucoes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossas Soluções
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cada componente focado em resultado. Todos integrados para crescimento previsível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-all hover:scale-105 group"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
                      <IconComponent className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500">{feature}</span>
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

      {/* ORION ACADEMY */}
      <section className="py-24 bg-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">
                Orion Academy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Aprenda antes de escalar.
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Não basta ter as ferramentas. É preciso saber usar. Nossa academy prepara sua equipe para extrair o máximo do sistema.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <GraduationCap className="w-8 h-8 text-purple-500 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Masterclasses</h3>
                  <p className="text-gray-500 text-sm">Treinamentos intensivos estratégicos</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <Users className="w-8 h-8 text-purple-500 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Mentoria</h3>
                  <p className="text-gray-500 text-sm">Acompanhamento individualizado</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <Target className="w-8 h-8 text-purple-500 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Implementação</h3>
                  <p className="text-gray-500 text-sm">Aplicação prática assistida</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <Rocket className="w-8 h-8 text-purple-500 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Escalonamento</h3>
                  <p className="text-gray-500 text-sm">Crescimento sustentável</p>
                </div>
              </div>

              <Button
                onClick={() => navigate('/contact')}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Conhecer a Orion Academy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-purple-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Módulos Disponíveis</h3>
                  <ul className="space-y-4">
                    {[
                      "Fundamentos de Crescimento Digital",
                      "Automação de Marketing Avançada",
                      "WhatsApp AI Platform - Implementação",
                      "CRM Estratégico na Prática",
                      "SEO e Posicionamento Orgânico",
                      "Landing Pages que Convertem",
                      "Análise de Dados e Otimização"
                    ].map((module, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{module}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Não entregamos <span className="text-gray-500">serviços isolados</span>.
            <br />
            Entregamos <span className="text-blue-400">estrutura</span>.
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
            Enquanto agências vendem tráfego ou site, a Orion constrói sistema completo integrado. 
            Cada componente conversa com o outro. Cada métrica impacta a próxima decisão. 
            Crescimento deixa de ser acaso e passa a ser estratégia.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-red-500 mb-4 line-through opacity-50">
                  Agência
                </div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start space-x-2 text-gray-500">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Serviços isolados</span>
                  </li>
                  <li className="flex items-start space-x-2 text-gray-500">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Sem integração</span>
                  </li>
                  <li className="flex items-start space-x-2 text-gray-500">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Crescimento imprevisível</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 border-blue-500 transform scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-white mb-4">
                  Orion
                </div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Sistema integrado</span>
                  </li>
                  <li className="flex items-start space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Tudo conectado</span>
                  </li>
                  <li className="flex items-start space-x-2 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Crescimento previsível</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-white mb-4">Resultado</div>
                <div className="space-y-3">
                  <div className="bg-blue-600/10 p-3 rounded">
                    <div className="text-blue-400 font-bold text-2xl">5.2x</div>
                    <div className="text-gray-400 text-sm">ROI Médio</div>
                  </div>
                  <div className="bg-blue-600/10 p-3 rounded">
                    <div className="text-blue-400 font-bold text-2xl">93%</div>
                    <div className="text-gray-400 text-sm">Automação</div>
                  </div>
                  <div className="bg-blue-600/10 p-3 rounded">
                    <div className="text-blue-400 font-bold text-2xl">100%</div>
                    <div className="text-gray-400 text-sm">Previsível</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sparkles className="w-20 h-20 text-white mx-auto mb-8 opacity-90 animate-pulse" />
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ou você estrutura agora,
            <br />
            <span className="text-blue-100">ou continuará improvisando.</span>
          </h2>
          
          <p className="text-2xl text-blue-50 mb-12 max-w-3xl mx-auto">
            Empresas que constroem sistemas crescem. Empresas que improvisam sobrevivem. Escolha seu caminho.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-8 text-xl font-bold shadow-2xl transition-all hover:scale-105"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Quero estruturar meu crescimento agora
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-3 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-8 text-xl font-bold transition-all"
            >
              Solicitar Diagnóstico Gratuito
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-50">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">100% personalizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Crescimento previsível</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComplete;
