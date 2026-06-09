from pydantic import BaseModel

class EMIRequest(BaseModel):
    bank: str
    loan_type: str
    amount: float
    years: int