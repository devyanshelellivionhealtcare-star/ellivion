# Ellivion Backend (Python / FastAPI)

A separate Python backend for the Ellivion Healthcare site. Use this when you
need server-side APIs (e.g. contact form submissions, product catalog,
newsletter signups) that aren't part of the TanStack Start frontend.

## Stack
- Python 3.11+
- FastAPI + Uvicorn
- Pydantic for validation

## Run locally

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Then the frontend can POST to `http://localhost:8000/api/contact`, etc.

## Endpoints
- `GET  /api/health`           — health check
- `GET  /api/products`         — product catalog
- `POST /api/contact`          — contact form submission
- `POST /api/newsletter`       — newsletter signup
- `GET  /api/careers`          — open positions
- `GET  /api/press`            — press releases
