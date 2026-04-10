import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Instagram, Phone, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { contactApi } from '../services/api';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const response = await contactApi.submit(formData);
      
      if (response.success) {
        setSubmitSuccess(true);
        toast({
          title: '✅ Mensagem enviada com sucesso!',
          description: 'Obrigado pelo contato! Responderemos em até 24 horas.',
          duration: 6000,
          className: 'bg-green-50 border-green-500'
        });
        
        // Reset form after delay
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      toast({
        title: '❌ Erro ao enviar mensagem',
        description: 'Por favor, tente novamente ou entre em contato pelo WhatsApp.',
        variant: 'destructive',
        duration: 6000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'oriondigital182422@gmail.com',
      link: 'mailto:oriondigital182422@gmail.com'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@orion_digital_182422',
      link: 'https://www.instagram.com/orion_digital_182422/'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: 'Fale Conosco',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-blue-600">Contato</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ouvir suas ideias e transformar seu projeto em realidade.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vamos Conversar</h2>
                <p className="text-gray-600 mb-8">
                  Escolha o canal de sua preferência para entrar em contato conosco.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{info.title}</div>
                      <div className="text-gray-600 text-sm">{info.value}</div>
                    </div>
                  </a>
                );
              })}

              <Card className="mt-8 bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Resposta Rápida</h3>
                  <p className="text-sm text-gray-600">
                    Respondemos todas as mensagens em até 24 horas úteis.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Envie sua Mensagem
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 mb-2 block">
                          Nome Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 mb-2 block">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="seu@email.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                          Telefone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-gray-700 mb-2 block">
                          Serviço de Interesse *
                        </Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="">Selecione um serviço</option>
                          <option value="site">Desenvolvimento de Sites</option>
                          <option value="app">Aplicativo Mobile</option>
                          <option value="landing">Landing Page</option>
                          <option value="social">Gestão de Redes Sociais</option>
                          <option value="design">Design e Criação</option>
                          <option value="trafego">Tráfego Pago</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 mb-2 block">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Conte-nos sobre seu projeto..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-6 text-lg font-bold transition-all ${
                        submitSuccess 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Enviando...
                        </div>
                      ) : submitSuccess ? (
                        <>
                          <CheckCircle className="mr-2 w-5 h-5" />
                          Mensagem Enviada!
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                    
                    {submitSuccess && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-500 rounded-lg text-center">
                        <p className="text-green-700 font-semibold">
                          ✅ Sua mensagem foi enviada com sucesso!
                        </p>
                        <p className="text-green-600 text-sm mt-1">
                          Responderemos em até 24 horas úteis.
                        </p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Preferência por WhatsApp?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Clique no botão abaixo para iniciar uma conversa diretamente pelo WhatsApp
          </p>
          <Button
            size="lg"
            onClick={() => window.open('https://wa.me/5581999464238?text=' + encodeURIComponent('Quero estruturar meu sistema digital com a Orion.'), '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg"
          >
            <Phone className="mr-2 w-5 h-5" />
            Abrir WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;