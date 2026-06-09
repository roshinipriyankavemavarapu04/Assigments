async function calculateEMI() {
    const bank = document.getElementById("bank").value;
    const loan = document.getElementById("loan").value;
    const amount = document.getElementById("amount").value;
    const years = document.getElementById("years").value;

    // Validation
    if (bank && !loan) {
        alert("Please select loan type");
        return;
    }

    if (!bank || !loan || !amount || !years) {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:8000/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bank: bank,
                loan_type: loan,
                amount: parseFloat(amount),
                years: parseInt(years)
            })
        });

        const data = await response.json();

        document.getElementById("result").innerText =
            "Monthly EMI: ₹" + data.monthly_emi;

    } catch (error) {
        alert("Error connecting to server");
    }
}