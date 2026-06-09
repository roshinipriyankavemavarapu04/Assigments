from fastapi import FastAPI
from app.routes import emi

app = FastAPI()

app.include_router(emi.router)