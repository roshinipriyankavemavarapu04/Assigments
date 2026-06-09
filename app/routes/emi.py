from fastapi import APIRouter, HTTPException
from app.schemas.emi_schema import EMIRequest
from app.services.emi_service import calculate_emi

router = APIRouter()

@router.post("/calculate")
def calculate(data: EMIRequest):
    try:
        return calculate_emi(data)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))