from fastapi import APIRouter, HTTPException, status
from typing import List, Optional
from models import (
    Project, ProjectCreate,
    Testimonial, TestimonialCreate,
    Contact, ContactCreate,
    Stats, APIResponse
)
from database import (
    projects_collection,
    testimonials_collection,
    contacts_collection,
    stats_collection
)
import logging
from datetime import datetime

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
        
        cursor = projects_collection.find(query, {"_id": 0})
        if limit:
            cursor = cursor.limit(limit)
        
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
        testimonials = await testimonials_collection.find(query, {"_id": 0}).to_list(length=None)
        
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