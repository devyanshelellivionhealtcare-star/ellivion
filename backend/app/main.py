"""Ellivion Healthcare — FastAPI backend.

Run with: uvicorn app.main:app --reload --port 8000
"""
from datetime import datetime
from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(title="Ellivion Healthcare API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in production
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- Models ----------
class Product(BaseModel):
    id: int
    name: str
    category: str
    price: float
    desc: str


class ContactMessage(BaseModel):
    first_name: str = Field(min_length=1, max_length=80)
    last_name: str = Field(min_length=1, max_length=80)
    email: EmailStr
    subject: str = Field(min_length=1, max_length=200)
    message: str = Field(min_length=5, max_length=4000)


class NewsletterSignup(BaseModel):
    email: EmailStr


class Role(BaseModel):
    title: str
    dept: str
    location: str


class PressRelease(BaseModel):
    title: str
    date: str


# ---------- In-memory data ----------
PRODUCTS: List[Product] = [
    Product(id=1, name="NMN", category="Nutraceutical", price=1500,
            desc="Vitamin C + niacinamide for an even, luminous glow."),
    Product(id=2, name="Kumkumadi Tailam", category="Daily Care", price=3000,
            desc="Ceramide-rich barrier repair for soft, plump skin."),
    Product(id=3, name="Attar", category="Daily Care", price=2100,
            desc="Gentle gel-to-foam wash with rose & chamomile."),
    Product(id=4, name="Aloe vera & Turmeric Soap", category="Daily Care", price=285,
            desc="Cold-pressed squalane and rosehip for overnight nourishment."),
  
]

ROLES: List[Role] = [
    Role(title="Senior Formulation Chemist", dept="R&D", location="Mumbai"),
    Role(title="Brand Designer", dept="Creative", location="Remote · India"),
    Role(title="Lead Dermatology Researcher", dept="Science", location="Mumbai"),
    Role(title="Performance Marketing Manager", dept="Growth", location="Remote · Global"),
    Role(title="Customer Experience Lead", dept="Operations", location="Mumbai"),
]

PRESS: List[PressRelease] = [
    PressRelease(title="Ellivion closes $24M Series B led by Forerunner", date="March 18, 2026"),
    PressRelease(title="Spring Bloom Collection launches with three new formulas", date="February 4, 2026"),
    PressRelease(title="Ellivion partners with AIIMS Dermatology", date="November 12, 2025"),
]

CONTACT_INBOX: list[dict] = []
NEWSLETTER_LIST: list[str] = []


# ---------- Routes ----------
@app.get("/api/health")
def health():
    return {"status": "ok", "service": "ellivion-api", "time": datetime.utcnow().isoformat()}


@app.get("/api/products", response_model=List[Product])
def list_products():
    return PRODUCTS


@app.get("/api/products/{product_id}", response_model=Product)
def get_product(product_id: int):
    for p in PRODUCTS:
        if p.id == product_id:
            return p
    raise HTTPException(status_code=404, detail="Product not found")


@app.post("/api/contact")
def submit_contact(msg: ContactMessage):
    record = {**msg.model_dump(), "received_at": datetime.utcnow().isoformat()}
    CONTACT_INBOX.append(record)
    return {"ok": True, "message": "Thanks — we'll be in touch soon."}


@app.post("/api/newsletter")
def newsletter_signup(payload: NewsletterSignup):
    if payload.email in NEWSLETTER_LIST:
        return {"ok": True, "message": "You're already subscribed."}
    NEWSLETTER_LIST.append(payload.email)
    return {"ok": True, "message": "Welcome to the Ellivion ritual."}


@app.get("/api/careers", response_model=List[Role])
def list_roles():
    return ROLES


@app.get("/api/press", response_model=List[PressRelease])
def list_press():
    return PRESS
