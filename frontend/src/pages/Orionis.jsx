import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, MessageCircle, TrendingUp, Zap, Users, Target, 
  Brain, BarChart3, Image, Link2, CheckCircle, ArrowRight,
  Sparkles, Send, X, Play
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Orionis = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Olá! Sou a Orionis. Como posso ajudar seu negócio a crescer hoje?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const features = [
    {
      icon: MessageCircle,
      title: "Atendimento Inteligente",
      description: "Chat, voz e multimodal. Atendimento 24/7 que nunca para.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Geração de Leads",
      description: "Captação e qualificação automática. Apenas leads prontos para comprar.",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "CRM Inteligente",
      description: "Sistema editável que se adapta ao seu negócio. Não o contrário.",
      color: "purple"
    },
    {
      icon: Link2,
      title: "Integrações Completas",
      description: "WhatsApp, Meta, APIs externas. Tudo conectado em um só lugar.",
      color: "cyan"
    },
    {
      icon: Zap,
      title: "Automação Total",
      description: "Marketing e vendas no piloto automático. Você foca na estratégia.",
      color: "yellow"
    },
    {
      icon: Brain,
      title: "IA Analítica",
      description: "Análise de dados e decisões inteligentes baseadas em informações reais.",
      color: "pink"
    },
    {
      icon: Image,
      title: "Geração de Conteúdo",
      description: "Imagens, textos e campanhas criadas automaticamente pela IA.",
      color: "orange"
    },
    {
      icon: Target,
      title: "Painel Centralizado",
      description: "Toda a operação em um único lugar. Controle total, visão completa.",
      color: "red"
    }
  ];

  const roles = [
    { title: "Vendedor", description: "Qualifica, apresenta e fecha vendas automaticamente" },
    { title: "Atendente", description: "Responde dúvidas e resolve problemas em segundos" },
    { title: "Analista", description: "Processa dados e gera insights acionáveis" },
    { title: "Estrategista", description: "Sugere ações baseadas em padrões e resultados" }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setChatMessages([...chatMessages, 
      { role: 'user', content: inputMessage },
      { role: 'assistant', content: 'Entendo sua necessidade. A Orionis pode automatizar esse processo completamente. Gostaria de agendar uma demonstração personalizada?' }
    ]);
    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzRUIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-600/20 text-purple-400 border-purple-600/50 px-6 py-3 text-base">
              <Bot className="w-5 h-5 mr-2 inline" />
              Business OS com IA
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Orionis
              </span>
            </h1>
            
            <p className="text-3xl md:text-4xl text-gray-300 mb-6 font-semibold">
              O Sistema Operacional da Sua Empresa
            </p>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Plataforma de inteligência artificial corporativa que transforma empresas em operações automatizadas, 
              escaláveis e altamente lucrativas. Mais do que um chatbot — um verdadeiro Business OS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setSimulatorOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg font-bold shadow-lg shadow-purple-600/50"
              >
                <Play className="mr-2 w-5 h-5" />
                Abrir Simulador
              </Button>
              
              <Button
                size="lg"
                onClick={() => setChatOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-6 text-lg font-bold shadow-lg shadow-blue-600/50"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Falar com Orionis IA
              </Button>
            </div>
          </div>

          {/* Visual Demo */}
          <Card className="bg-gray-900/50 border-purple-500/30 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse"></span>
                  Orionis Online
                </Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-purple-500/20">
                  <div className="text-purple-400 text-sm mb-2">Leads Qualificados</div>
                  <div className="text-white font-bold text-3xl">847</div>
                  <div className="text-green-400 text-xs flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +156% este mês
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-500/20">
                  <div className="text-blue-400 text-sm mb-2">Atendimentos IA</div>
                  <div className="text-white font-bold text-3xl">2.4k</div>
                  <div className="text-green-400 text-xs flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    24/7 ativo
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-cyan-500/20">
                  <div className="text-cyan-400 text-sm mb-2">Taxa Conversão</div>
                  <div className="text-white font-bold text-3xl">42.8%</div>
                  <div className="text-green-400 text-xs flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +18.3%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O Que a Orionis Faz */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O Que a Orionis Faz
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Conecta e automatiza todas as áreas do negócio em um único sistema inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-purple-600 transition-all hover:scale-105 group"
                >
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-${feature.color}-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${feature.color}-600 transition-all`}>
                      <IconComponent className={`w-7 h-7 text-${feature.color}-400 group-hover:text-white transition-colors`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-600/20 text-pink-400 border-pink-600/50">
              Diferencial Orionis
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Não Apenas Executa. <span className="text-purple-400">Aprende e Evolui.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A Orionis funciona como um time digital completo, operando 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-purple-500/30 text-center">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">
                    {index === 0 && '💼'}
                    {index === 1 && '🎧'}
                    {index === 2 && '📊'}
                    {index === 3 && '🎯'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{role.title}</h3>
                  <p className="text-gray-400">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Para Quem é a Orionis?
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, text: "Escalar vendas com previsibilidade" },
                  { icon: Zap, text: "Reduzir custos operacionais drasticamente" },
                  { icon: Bot, text: "Automatizar processos sem perder qualidade" },
                  { icon: Target, text: "Ter controle total da operação em tempo real" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-all">
                        <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xl text-white font-semibold">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-none">
              <CardContent className="p-12 text-center">
                <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Visão Orionis</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Transformar empresas comuns em máquinas inteligentes de crescimento, 
                  utilizando IA como base da operação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Pronto para Ter Seu Próprio Business OS?
          </h2>
          
          <p className="text-2xl text-white/90 mb-12">
            Agende uma demonstração e veja a Orionis transformando seu negócio em tempo real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold"
            >
              Agendar Demonstração
            </Button>
            
            <Button
              size="lg"
              onClick={() => setChatOpen(true)}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-12 py-6 text-xl font-bold"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              Conversar com Orionis
            </Button>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-gray-900 border-purple-500/30 max-h-[80vh] flex flex-col">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Orionis IA</h3>
                  <p className="text-green-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-200'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-800">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-gray-800 border-gray-700 text-white"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Simulator Modal */}
      {simulatorOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl bg-gray-900 border-purple-500/30">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <h3 className="text-white font-bold text-2xl">Simulador Orionis</h3>
              <Button
                variant="ghost"
                onClick={() => setSimulatorOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Play className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <p className="text-xl text-gray-300">
                  Simule como a Orionis pode transformar seu negócio
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-white font-semibold mb-4">Seu Negócio Hoje</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Atendimento manual limitado</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Leads perdidos fora do horário</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Processos desconectados</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30">
                  <h4 className="text-white font-semibold mb-4">Com Orionis</h4>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Atendimento IA 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>100% dos leads capturados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Sistema totalmente integrado</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button
                onClick={() => {
                  setSimulatorOpen(false);
                  navigate('/contact');
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-bold"
              >
                Quero Implementar a Orionis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Orionis;
