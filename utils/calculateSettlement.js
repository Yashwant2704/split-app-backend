function calculateSettlement(balances) {
    const debtors = [];
    const creditors = [];

    for (const [person, balance] of Object.entries(balances)) {
        const rounded = Math.round(balance * 100) / 100;
        if (rounded < 0) debtors.push({ person, amount: -rounded });
        else if (rounded > 0) creditors.push({ person, amount: rounded });
    }

    const settlements = [];

    while (debtors.length && creditors.length) {
        const debtor = debtors[0];
        const creditor = creditors[0];

        const amount = Math.min(debtor.amount, creditor.amount);
        settlements.push({
            from: debtor.person,
            to: creditor.person,
            amount: Math.round(amount * 100) / 100
        });

        debtor.amount -= amount;
        creditor.amount -= amount;

        if (debtor.amount < 0.01) debtors.shift();
        if (creditor.amount < 0.01) creditors.shift();
    }

    return settlements;
}

module.exports = calculateSettlement;
