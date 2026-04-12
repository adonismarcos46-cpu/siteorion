import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, Calendar, CheckCircle, Search, Lock } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const ADMIN_PASSWORD = 'orion2024';
  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchContacts();
    } else {
      alert('Senha incorreta!');
    }
  };

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/contacts`);
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
      }
    } catch (error) {
      console.error('Erro ao buscar contatos:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (contactId) => {
    try {
      const response = await fetch(`${API_URL}/api/contacts/${contactId}`, {
        method: 'PATCH'
      });
      const data = await response.json();
      if (data.success) {
        fetchContacts();
      }
    } catch (error) {
      console.error('Erro ao marcar como lida:', error);
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      filterStatus === 'all' || 
      (filterStatus === 'new' && contact.status === 'new') ||
      (filterStatus === 'read' && contact.status === 'read');
    
    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gray-900 border-blue-500/30">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-2">Admin - Orion Digital</h1>
              <p className="text-gray-400">Acesso restrito</p>
            </div>
            <form onSubmit={handleLogin}>
              <Input
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 bg-gray-800 border-gray-700 text-white"
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Painel Admin</h1>
          <p className="text-gray-400">Gerencie as mensagens de contato</p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Buscar por nome, email ou mensagem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-800 text-white"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterStatus === 'all' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('all')}
              className="flex-1"
            >
              Todas ({contacts.length})
            </Button>
            <Button
              variant={filterStatus === 'new' ? 'default' : 'outline'}
              onClick={() => setFilterStatus('new')}
              className="flex-1"
            >
              Novas ({contacts.filter(c => c.status === 'new').length})
            </Button>
          </div>
        </div>

        {/* Contacts List */}
        {loading ? (
          <div className="text-center text-gray-400 py-12">Carregando...</div>
        ) : filteredContacts.length === 0 ? (
          <div className="text-center text-gray-400 py-12">Nenhuma mensagem encontrada</div>
        ) : (
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <Card key={contact.id} className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{contact.name}</h3>
                        <Badge className={contact.status === 'new' ? 'bg-green-500' : 'bg-gray-600'}>
                          {contact.status === 'new' ? 'Nova' : 'Lida'}
                        </Badge>
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          {contact.service}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {contact.email}
                        </div>
                        {contact.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {contact.phone}
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(contact.createdAt).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                    {contact.status === 'new' && (
                      <Button
                        size="sm"
                        onClick={() => markAsRead(contact.id)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Marcar como Lida
                      </Button>
                    )}
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">{contact.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
