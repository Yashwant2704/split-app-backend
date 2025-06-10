const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
    const expenses = await Expense.find();
    res.json({ success: true, data: expenses });
};

exports.addExpense = async (req, res) => {
    const { amount, description, paid_by, split_between } = req.body;
    if (!amount || !description || !paid_by || !split_between || !split_between.length) {
        return res.status(400).json({ success: false, message: 'All fields required' });
    }
    try {
        const expense = await Expense.create({ amount, description, paid_by, split_between });
        res.status(201).json({ success: true, data: expense, message: 'Expense added successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.updateExpense = async (req, res) => {
    try {
        const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ success: false, message: 'Expense not found' });
        res.json({ success: true, data: updated });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        const deleted = await Expense.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ success: false, message: 'Expense not found' });
        res.json({ success: true, message: 'Expense deleted' });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
