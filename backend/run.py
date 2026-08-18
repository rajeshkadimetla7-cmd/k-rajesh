import uvicorn
from app.seed import seed

if __name__ == "__main__":
    print("Seeding database...")
    seed()
    print("Starting StockFlow WMS API on http://localhost:8000")
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
