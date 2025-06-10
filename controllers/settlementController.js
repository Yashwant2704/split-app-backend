const Expense = require('../models/Expense');
const calculateSettlement = require('../utils/calculateSettlement');

exports.getPeople = async (req, res) => {
    const expenses = await Expense.find();
    const people = new Set();
    expenses.forEach(e => {
        people.add(e.paid_by);
        e.split_between.forEach(p => people.add(p));
    });
    res.json({ success: true, data: Array.from(people) });
};

exports.getBalances = async (req, res) => {
    const expenses = await Expense.find();
    const balances = {};

    for (const e of expenses) {
        const perPerson = e.amount / e.split_between.length;

        e.split_between.forEach(p => {
            balances[p] = (balances[p] || 0) - perPerson;
        });

        balances[e.paid_by] = (balances[e.paid_by] || 0) + e.amount;
    }

    res.json({ success: true, data: balances });
};

exports.getSettlements = async (req, res) => {
    const expenses = await Expense.find();
    const balances = {};

    for (const e of expenses) {
        const perPerson = e.amount / e.split_between.length;

        e.split_between.forEach(p => {
            balances[p] = (balances[p] || 0) - perPerson;
        });

        balances[e.paid_by] = (balances[e.paid_by] || 0) + e.amount;
    }

    const settlements = calculateSettlement(balances);
    res.json({ success: true, data: settlements });
};
