import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ExternalLink } from 'lucide-react';
import { categories } from '../mock/mockData';
import { projectsApi } from '../services/api';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await projectsApi.getAll();
        if (response.success) {
          setProjects(response.data);
          setFilteredProjects(response.data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-blue-600">Portfólio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados que entregamos aos nossos clientes.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center bg-gray-100 p-2 rounded-lg">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.value}
                    className="px-4 py-2 text-sm font-medium transition-all duration-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:scale-105 hover:bg-gray-200"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 text-white">
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        Ver Detalhes
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                      {categories.find((c) => c.value === project.category)?.label || project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-green-600">
                      ✓ {project.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Quer Ver Seu Projeto Aqui?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Vamos conversar sobre como podemos ajudar seu negócio a crescer
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = '/contact'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg"
          >
            Iniciar Meu Projeto
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;