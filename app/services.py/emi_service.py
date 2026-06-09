from app.config import RATES

def calculate_emi(data):
    bank = data.bank
    loan = data.loan_type
    amount = data.amount
    years = data.years

    if bank not in RATES:
        raise ValueError("Invalid bank")

    if loan not in RATES[bank]:
        raise ValueError("Invalid loan type")

    rate = RATES[bank][loan]

    monthly_rate = rate / 12 / 100
    months = years * 12

    emi = (amount * monthly_rate * (1 + monthly_rate) ** months) / \
          ((1 + monthly_rate) ** months - 1)

    return {
        "bank": bank,
        "loan_type": loan,
        "interest_rate": rate,
        "monthly_emi": round(emi, 2)
    }