from fastapi import APIRouter, HTTPException, status
from typing import List, Optional
from models import (
    Project, ProjectCreate,
    Testimonial, TestimonialCreate,
    Contact, ContactCreate,
    Stats, APIResponse,
    ChatRequest, ChatResponse, ChatMessage
)
from database import (
    projects_collection,
    testimonials_collection,
    contacts_collection,
    stats_collection
)
import logging
from datetime import datetime
from dotenv import load_dotenv
import os
from uuid import uuid4

# Load environment variables
load_dotenv()

logger = logging.getLogger(__name__)

router = APIRouter()


# Projects Endpoints
@router.get("/projects", response_model=dict)
async def get_projects(
    category: Optional[str] = None,
    featured: Optional[bool] = None,
    limit: Optional[int] = None
):
    """Get all projects with optional filters"""
    try:
        query = {}
        if category:
            query["category"] = category
        if featured is not None:
            query["featured"] = featured
        
        # Default limit to prevent unbounded queries in production
        default_limit = limit if limit else 100
        cursor = projects_collection.find(query, {"_id": 0}).limit(default_limit)
        
        projects = await cursor.to_list(length=None)
        
        return {
            "success": True,
            "data": projects
        }
    except Exception as e:
        logger.error(f"Error fetching projects: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch projects"
        )


@router.get("/projects/{project_id}", response_model=dict)
async def get_project(project_id: str):
    """Get a single project by ID"""
    try:
        project = await projects_collection.find_one({"id": project_id}, {"_id": 0})
        
        if not project:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Project not found"
            )
        
        return {
            "success": True,
            "data": project
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch project"
        )


# Testimonials Endpoints
@router.get("/testimonials", response_model=dict)
async def get_testimonials(approved: bool = True):
    """Get all testimonials"""
    try:
        query = {"approved": approved} if approved is not None else {}
        # Limit testimonials to prevent unbounded queries in production
        testimonials = await testimonials_collection.find(query, {"_id": 0}).limit(50).to_list(length=None)
        
        return {
            "success": True,
            "data": testimonials
        }
    except Exception as e:
        logger.error(f"Error fetching testimonials: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch testimonials"
        )


# Contact Form Endpoint
@router.post("/contact", response_model=dict, status_code=status.HTTP_201_CREATED)
async def create_contact(contact_data: ContactCreate):
    """Submit contact form"""
    try:
        contact = Contact(**contact_data.dict())
        contact_dict = contact.dict()
        
        result = await contacts_collection.insert_one(contact_dict)
        
        if not result.inserted_id:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to save contact message"
            )
        
        logger.info(f"New contact form submission from {contact.email}")
        
        return {
            "success": True,
            "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            "data": {"id": contact.id}
        }
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit contact form"
        )


# Stats Endpoint
@router.get("/stats", response_model=dict)
async def get_stats():
    """Get website statistics"""
    try:
        stats = await stats_collection.find_one({"id": "default"}, {"_id": 0, "id": 0})
        
        if not stats:
            # Return default stats if not found
            stats = {
                "projectsCompleted": "150+",
                "clientsSatisfied": "80+",
                "yearsExperience": "5+",
                "successRate": "98%"
            }
        
        return {
            "success": True,
            "data": stats
        }
    except Exception as e:
        logger.error(f"Error fetching stats: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch statistics"
        )


# Health check
@router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}


# Admin - Get all contacts
@router.get("/contacts", response_model=dict)
async def get_all_contacts():
    """Get all contact messages for admin"""
    try:
        contacts = await contacts_collection.find({}, {"_id": 0}).sort("createdAt", -1).to_list(length=None)
        return {
            "success": True,
            "data": contacts
        }
    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contacts"
        )


# Admin - Mark contact as read
@router.patch("/contacts/{contact_id}", response_model=dict)
async def update_contact_status(contact_id: str):
    """Mark contact as read"""
    try:
        result = await contacts_collection.update_one(
            {"id": contact_id},
            {"$set": {"status": "read"}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Contact not found"
            )
        
        return {
            "success": True,
            "message": "Contact marked as read"
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating contact: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update contact"
        )


# Orionis AI Chat Endpoint
@router.post("/orionis/chat", response_model=ChatResponse)
async def orionis_chat(chat_request: ChatRequest):
    """Chat with Orionis AI - Business OS Assistant"""
    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage
        
        # Generate or use existing session ID
        session_id = chat_request.session_id or str(uuid4())
        
        # Get API key from environment
        api_key = os.getenv("EMERGENT_LLM_KEY")
        if not api_key:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="API key not configured"
            )
        
        # System message for Orionis
        system_message = """Você é Orionis, uma IA especializada em Business OS e infraestrutura de crescimento digital.

Seu papel é:
- Ajudar empresas a estruturarem seus sistemas digitais para crescimento previsível
- Explicar como integração de SEO, Sites, Landing Pages, CRM, Automação e WhatsApp AI criam resultados
- Qualificar leads fazendo perguntas estratégicas sobre os desafios do negócio
- Ser consultivo, direto e focado em ROI e resultados mensuráveis
- Usar tom profissional mas acessível, evitando jargões desnecessários

Foco principal: transformar operações improvisadas em sistemas inteligentes e escaláveis."""
        
        # Initialize LLM Chat with Gemini 2.5 Flash (most economical)
        chat = LlmChat(
            api_key=api_key,
            session_id=session_id,
            system_message=system_message
        ).with_model("gemini", "gemini-2.5-flash")
        
        # Create user message
        user_message = UserMessage(text=chat_request.message)
        
        # Get AI response
        ai_response = await chat.send_message(user_message)
        
        logger.info(f"Orionis chat - Session: {session_id}, Message processed successfully")
        
        return ChatResponse(
            success=True,
            response=ai_response,
            session_id=session_id
        )
        
    except Exception as e:
        logger.error(f"Error in Orionis chat: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao processar mensagem: {str(e)}"
        )