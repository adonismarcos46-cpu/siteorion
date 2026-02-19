import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../mock/mockData';
import { projectsApi, testimonialsApi, statsApi } from '../services/api';
import * as Icons from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ projectsCompleted: '150+', clientsSatisfied: '80+', yearsExperience: '5+', successRate: '98%' });
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch stats
        const statsResponse = await statsApi.get();
        if (statsResponse.success) {
          setStats(statsResponse.data);
        }
        
        // Fetch featured projects
        const projectsResponse = await projectsApi.getFeatured();
        if (projectsResponse.success) {
          setFeaturedProjects(projectsResponse.data.slice(0, 3));
        }
        
        // Fetch testimonials
        const testimonialsResponse = await testimonialsApi.getAll();
        if (testimonialsResponse.success) {
          setTestimonials(testimonialsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const statsArray = [
    { label: 'Projetos Concluídos', value: stats.projectsCompleted },
    { label: 'Clientes Satisfeitos', value: stats.clientsSatisfied },
    { label: 'Anos de Experiência', value: stats.yearsExperience },
    { label: 'Taxa de Sucesso', value: stats.successRate }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNzcxNTM3NzMxfDA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-blue-900/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme Sua
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Presença Digital
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Desenvolvimento web, aplicativos mobile e estratégias de marketing digital que geram resultados reais para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/portfolio')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all hover:scale-105"
              >
                Ver Portfólio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transition-all"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quem Somos
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A <span className="font-semibold text-blue-600">Orion Digital</span> é especializada em criar soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Com uma equipe experiente e metodologia comprovada, transformamos desafios em oportunidades através de tecnologia de ponta e estratégias inteligentes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Foco em resultados mensuráveis',
                  'Metodologia ágil e transparente',
                  'Suporte contínuo e dedicado'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button onClick={() => navigate('/about')} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Saiba Mais Sobre Nós
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Inovação</h3>
                <p className="text-sm text-gray-600">Tecnologias de ponta</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow mt-8">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Precisão</h3>
                <p className="text-sm text-gray-600">Estratégias focadas</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Crescimento</h3>
                <p className="text-sm text-gray-600">Resultados escaláveis</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow mt-8">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Qualidade</h3>
                <p className="text-sm text-gray-600">Excelência garantida</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para elevar sua presença digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      {IconComponent && <IconComponent className="w-7 h-7 text-blue-600" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => navigate('/services')} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos trabalhos recentes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    ✓ {project.results}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => navigate('/portfolio')} size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Ver Portfólio Completo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Depoimentos de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pronto Para Começar?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Entre em contato e vamos transformar suas ideias em realidade
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg transition-all hover:scale-105"
          >
            Falar com Especialista
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;