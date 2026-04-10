from pydantic import BaseModel, Field, EmailStr, validator
from typing import List, Optional
from datetime import datetime
import uuid


class ProjectBase(BaseModel):
    title: str
    category: str
    description: str
    technologies: List[str]
    results: str
    image: str
    featured: bool = False

    @validator('category')
    def validate_category(cls, v):
        valid_categories = ['sites', 'apps', 'landing', 'social', 'design', 'gestao', 'trafego']
        if v not in valid_categories:
            raise ValueError(f'Category must be one of {valid_categories}')
        return v


class ProjectCreate(ProjectBase):
    pass


class Project(ProjectBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True


class TestimonialBase(BaseModel):
    name: str
    role: str
    content: str
    rating: int = Field(ge=1, le=5)
    avatar: str


class TestimonialCreate(TestimonialBase):
    pass


class Testimonial(TestimonialBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    approved: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True


class ContactBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    service: str
    message: str = Field(..., min_length=10, max_length=1000)


class ContactCreate(ContactBase):
    pass


class Contact(ContactBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "new"
    createdAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True


class Stats(BaseModel):
    projectsCompleted: str
    clientsSatisfied: str
    yearsExperience: str
    successRate: str


class APIResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None


# Orionis Chat Models
class ChatMessage(BaseModel):
    role: str  # 'user' or 'assistant'
    content: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None


class ChatResponse(BaseModel):
    success: bool
    response: str
    session_id: str