import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, Calendar, CheckCircle, Search, Lock, RefreshCw, Download, LogOut, Trash2, Copy, MessageCircle, TrendingUp, Clock, Users } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

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
        toast({
          title: '✅ Marcada como lida',
          duration: 2000
        });
        fetchContacts();
      }
    } catch (error) {
      console.error('Erro ao marcar como lida:', error);
    }
  };

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email);
    toast({
      title: '📋 Email copiado!',
      duration: 2000
    });
  };

  const exportToCSV = () => {
    const csv = [
      ['Nome', 'Email', 'Telefone', 'Serviço', 'Mensagem', 'Status', 'Data'],
      ...filteredContacts.map(c => [
        c.name,
        c.email,
        c.phone || '',
        c.service,
        c.message.replace(/,/g, ';'),
        c.status,
        new Date(c.createdAt).toLocaleString('pt-BR')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contatos_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    
    toast({
      title: '📥 CSV exportado!',
      duration: 2000
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const getStats = () => {
    const today = new Date().setHours(0, 0, 0, 0);
    return {
      total: contacts.length,
      new: contacts.filter(c => c.status === 'new').length,
      today: contacts.filter(c => new Date(c.createdAt).setHours(0, 0, 0, 0) === today).length
    };
  };

  const filteredContacts = contacts
    .filter(contact => {
      const matchesSearch = 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        filterStatus === 'all' || 
        (filterStatus === 'new' && contact.status === 'new') ||
        (filterStatus === 'read' && contact.status === 'read');
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });

  const stats = getStats();

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Painel Admin</h1>
            <p className="text-gray-400">Gerencie as mensagens de contato</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={fetchContacts}
              disabled={loading}
              className="border-gray-700 hover:bg-gray-800"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Atualizar
            </Button>
            <Button
              variant="outline"
              onClick={exportToCSV}
              className="border-gray-700 hover:bg-gray-800"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar CSV
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-red-700 text-red-400 hover:bg-red-950"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm mb-1">Total</p>
                  <p className="text-3xl font-bold text-white">{stats.total}</p>
                </div>
                <Users className="w-10 h-10 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm mb-1">Novas</p>
                  <p className="text-3xl font-bold text-white">{stats.new}</p>
                </div>
                <TrendingUp className="w-10 h-10 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm mb-1">Hoje</p>
                  <p className="text-3xl font-bold text-white">{stats.today}</p>
                </div>
                <Clock className="w-10 h-10 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-600 to-cyan-700 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-sm mb-1">Taxa Resposta</p>
                  <p className="text-3xl font-bold text-white">
                    {contacts.length > 0 ? Math.round((stats.total - stats.new) / stats.total * 100) : 0}%
                  </p>
                </div>
                <CheckCircle className="w-10 h-10 text-cyan-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-gray-900 border-gray-800 mb-6">
          <CardContent className="p-4">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Buscar por nome, email ou mensagem..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('all')}
                  className="flex-1"
                >
                  Todas
                </Button>
                <Button
                  variant={filterStatus === 'new' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('new')}
                  className="flex-1"
                >
                  Novas
                </Button>
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white text-sm"
              >
                <option value="newest">Mais Recentes</option>
                <option value="oldest">Mais Antigas</option>
              </select>
            </div>
          </CardContent>
        </Card>

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
                        <button
                          onClick={() => copyEmail(contact.email)}
                          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {contact.email}
                          <Copy className="w-3 h-3" />
                        </button>
                        {contact.phone && (
                          <a
                            href={`https://wa.me/55${contact.phone.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-green-400 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            {contact.phone}
                          </a>
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
                    <div className="flex gap-2">
                      {contact.status === 'new' && (
                        <Button
                          size="sm"
                          onClick={() => markAsRead(contact.id)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Marcar Lida
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{contact.message}</p>
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
