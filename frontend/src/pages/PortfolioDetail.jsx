import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, CheckCircle, ExternalLink, Calendar, Target } from 'lucide-react';
import { projectsApi } from '../services/api';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await projectsApi.getById(id);
        if (response.success) {
          setProject(response.data);
          
          // Fetch related projects from same category
          const relatedResponse = await projectsApi.getByCategory(response.data.category);
          if (relatedResponse.success) {
            // Filter out current project and limit to 3
            const filtered = relatedResponse.data
              .filter(p => p.id !== id)
              .slice(0, 3);
            setRelatedProjects(filtered);
          }
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-600">Carregando projeto...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Projeto não encontrado</h2>
        <Button onClick={() => navigate('/portfolio')}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          Voltar ao Portfólio
        </Button>
      </div>
    );
  }

  const categoryLabels = {
    sites: 'Sites Institucionais',
    apps: 'Aplicativos Mobile',
    landing: 'Landing Pages',
    social: 'Campanhas Sociais',
    design: 'Design & Arte',
    gestao: 'Gestão de Mídias',
    trafego: 'Tráfego Pago'
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/portfolio')}
            className="mb-8 text-white hover:text-blue-300 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar ao Portfólio
          </Button>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600 text-white">
                {categoryLabels[project.category] || project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {project.description}
              </p>
              <div className="flex items-center space-x-2 text-green-400 font-semibold">
                <CheckCircle className="w-6 h-6" />
                <span>{project.results}</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-3xl"></div>
              <img
                src={project.image}
                alt={project.title}
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Technologies */}
            <Card className="col-span-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-600" />
                  Tecnologias Utilizadas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 text-base border-blue-200 text-blue-700 bg-blue-50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Type */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Categoria
                </h3>
                <p className="text-gray-600 text-lg">
                  {categoryLabels[project.category] || project.category}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Project Features */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Características do Projeto
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Design Moderno</h3>
                    <p className="text-gray-600">Interface intuitiva e responsiva para todos os dispositivos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Performance Otimizada</h3>
                    <p className="text-gray-600">Carregamento rápido e experiência fluida</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">SEO Otimizado</h3>
                    <p className="text-gray-600">Melhor ranqueamento nos mecanismos de busca</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Suporte Contínuo</h3>
                    <p className="text-gray-600">Manutenção e atualizações regulares</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Projetos Relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Card
                    key={relatedProject.id}
                    className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all"
                    onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedProject.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {categoryLabels[relatedProject.category]}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Gostou deste projeto?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Vamos criar algo incrível para o seu negócio também!
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Solicitar Orçamento
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
