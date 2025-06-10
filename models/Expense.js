const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        min: 0.01
    },
    description: {
        type: String,
        required: true
    },
    paid_by: {
        type: String,
        required: true
    },
    split_between: {
        type: [String],
        required: true
    },
    split_type: {
        type: String,
        enum: ['equal'],
        default: 'equal'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Expense', expenseSchema);
