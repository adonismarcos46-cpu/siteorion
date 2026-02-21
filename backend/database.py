from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
db_name = os.environ['DB_NAME']

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Collections
projects_collection = db.projects
testimonials_collection = db.testimonials
contacts_collection = db.contacts
stats_collection = db.stats


async def seed_initial_data():
    """Seed database with initial data if empty"""
    
    # Check if data already exists
    project_count = await projects_collection.count_documents({})
    if project_count > 0:
        print("Database already seeded, skipping...")
        return
    
    print("Seeding database with initial data...")
    
    # Seed Projects
    projects = [
        {
            "id": "1",
            "title": "E-commerce Tecnologia Premium",
            "category": "sites",
            "description": "Plataforma completa de e-commerce com design moderno e sistema de pagamento integrado.",
            "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
            "results": "Aumento de 150% nas conversões online",
            "image": "https://images.unsplash.com/photo-1481487196290-c152efe083f5",
            "featured": True
        },
        {
            "id": "2",
            "title": "App de Gestão Financeira",
            "category": "apps",
            "description": "Aplicativo mobile para controle financeiro pessoal com dashboard intuitivo.",
            "technologies": ["React Native", "Firebase", "Chart.js"],
            "results": "10.000+ downloads em 3 meses",
            "image": "https://images.unsplash.com/photo-1740591526503-54ae91793a1a",
            "featured": True
        },
        {
            "id": "3",
            "title": "Landing Page Imobiliária",
            "category": "landing",
            "description": "Landing page de alta conversão para lançamento imobiliário com tour virtual.",
            "technologies": ["Next.js", "Tailwind CSS", "Google Analytics"],
            "results": "Taxa de conversão de 28%",
            "image": "https://images.unsplash.com/photo-1519222970733-f546218fa6d7",
            "featured": True
        },
        {
            "id": "4",
            "title": "Campanha Redes Sociais - Moda",
            "category": "social",
            "description": "Estratégia completa de conteúdo para marca de moda sustentável.",
            "technologies": ["Photoshop", "Canva", "Meta Business"],
            "results": "Crescimento de 300% no engajamento",
            "image": "https://images.unsplash.com/photo-1587033411391-5d9e51cce126",
            "featured": False
        },
        {
            "id": "5",
            "title": "Site Institucional Advocacia",
            "category": "sites",
            "description": "Website profissional para escritório de advocacia com área do cliente.",
            "technologies": ["WordPress", "PHP", "MySQL"],
            "results": "Aumento de 200% em consultas qualificadas",
            "image": "https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa",
            "featured": False
        },
        {
            "id": "6",
            "title": "App Delivery Restaurante",
            "category": "apps",
            "description": "Aplicativo de delivery com sistema de pedidos em tempo real.",
            "technologies": ["Flutter", "Node.js", "PostgreSQL"],
            "results": "500+ pedidos/dia processados",
            "image": "https://images.unsplash.com/photo-1702390810913-6c36aed75588",
            "featured": False
        },
        {
            "id": "7",
            "title": "Gestão de Mídias - Fitness",
            "category": "gestao",
            "description": "Administração completa de redes sociais para academia com 5 unidades.",
            "technologies": ["Meta Business", "Hootsuite", "Analytics"],
            "results": "Aumento de 180% em matrículas",
            "image": "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
            "featured": False
        },
        {
            "id": "8",
            "title": "Landing Page SaaS",
            "category": "landing",
            "description": "Página de conversão para software de gestão empresarial.",
            "technologies": ["React", "Tailwind", "Framer Motion"],
            "results": "ROI de 450% em campanhas pagas",
            "image": "https://images.unsplash.com/photo-1707836885254-79b6e3d7b18d",
            "featured": False
        }
    ]
    
    await projects_collection.insert_many(projects)
    print(f"✓ Inserted {len(projects)} projects")
    
    # Seed Testimonials
    testimonials = [
        {
            "id": "1",
            "name": "Carlos Mendes",
            "role": "CEO, TechStart Solutions",
            "content": "A Orion Digital transformou nossa presença online. O novo site aumentou nossas conversões em 150% e a equipe foi extremamente profissional.",
            "rating": 5,
            "avatar": "CM",
            "approved": True
        },
        {
            "id": "2",
            "name": "Marina Silva",
            "role": "Diretora de Marketing, FitLife Academias",
            "content": "Trabalho impecável na gestão das nossas redes sociais. Em 6 meses, triplicamos nosso engajamento e dobramos as matrículas.",
            "rating": 5,
            "avatar": "MS",
            "approved": True
        },
        {
            "id": "3",
            "name": "Roberto Almeida",
            "role": "Fundador, GourmetExpress",
            "content": "O aplicativo desenvolvido pela Orion superou nossas expectativas. Interface intuitiva e suporte sempre presente. Recomendo!",
            "rating": 5,
            "avatar": "RA",
            "approved": True
        },
        {
            "id": "4",
            "name": "Juliana Costa",
            "role": "Gerente Comercial, Imóveis Premium",
            "content": "A landing page criada teve uma taxa de conversão excepcional. O investimento se pagou na primeira semana. Profissionais de alto nível.",
            "rating": 5,
            "avatar": "JC",
            "approved": True
        }
    ]
    
    await testimonials_collection.insert_many(testimonials)
    print(f"✓ Inserted {len(testimonials)} testimonials")
    
    # Seed Stats
    stats = {
        "id": "default",
        "projectsCompleted": "100+",
        "clientsSatisfied": "45+",
        "yearsExperience": "3+",
        "successRate": "93%"
    }
    
    await stats_collection.insert_one(stats)
    print("✓ Inserted stats")
    
    print("Database seeding completed successfully!")