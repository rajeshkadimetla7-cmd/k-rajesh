# StockFlow WMS

**Professional Warehouse Management System** built for hackathon demo.

Inventory is the **single source of truth**. Every restock, order reservation, replacement and shipment updates the same central inventory atomically.

## Features

- JWT Authentication (admin / warehouse roles)
- Dashboard with live stats + activity log
- Inventory by category with search & stock badges
- Restocking with transaction history
- Order Placement with stock reservation
- Orders with availability-based prioritization
- Order Tracking: Verify → Damaged/Missing → Replace → Ship
- Low Stock / Out of Stock module
- Damaged & Missing records
- Analytics charts (Recharts)
- Full audit trail

## Tech Stack

**Frontend:** React 18 + TypeScript + Vite + Tailwind CSS + React Router + Lucide + Recharts  
**Backend:** FastAPI + SQLAlchemy + Pydantic + JWT + SQLite (PostgreSQL ready)

## Demo Credentials

| Username   | Password      | Role      |
|------------|---------------|-----------|
| admin      | admin123      | Admin     |
| warehouse  | warehouse123  | Operator  |

## Quick Start (Local)

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python run.py
```

API runs at http://localhost:8000  
Docs: http://localhost:8000/docs

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at http://localhost:5173

## Environment

Copy `backend/.env.example` → `backend/.env`

```
DATABASE_URL=sqlite:///./stockflow.db
JWT_SECRET=change-me-in-production
```

## Project Structure

```
stockflow-wms/
├── backend/
│   ├── app/
│   │   ├── main.py          # All API routes
│   │   ├── models.py        # SQLAlchemy models
│   │   ├── schemas.py       # Pydantic schemas
│   │   ├── auth.py          # JWT + password hashing
│   │   ├── database.py
│   │   └── seed.py          # Demo data
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── src/
│   │   ├── pages/           # All modules
│   │   ├── components/
│   │   ├── services/api.ts
│   │   └── types/
│   └── package.json
└── README.md
```

## Core Workflow

1. Login → Dashboard
2. Inventory → view real stock
3. Restock → quantity increases, status updates
4. Order Placement → reserve stock (available decreases)
5. Orders → prioritised by fulfillment ratio → Accept
6. Tracking → Verify (good/damaged/missing) → Replace if needed → Ship
7. Low Stock / Damaged / Analysis update automatically

## API Overview

- `POST /api/auth/login`
- `GET  /api/products`
- `POST /api/restocks`
- `POST /api/orders`
- `POST /api/orders/{id}/accept`
- `POST /api/orders/{id}/verify`
- `POST /api/orders/{id}/replace`
- `POST /api/orders/{id}/ship`
- `GET  /api/inventory/low-stock`
- `GET  /api/dashboard/stats`
- `GET  /api/analytics`

## Notes

- SQLite is used by default for zero-config demo. Change `DATABASE_URL` for PostgreSQL.
- All stock mutations are transactional.
- Frontend proxies `/api` to backend in development.

## License

MIT – built for educational / hackathon use.
