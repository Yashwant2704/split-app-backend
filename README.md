# Split App Backend (Like Splitwise)

This is a backend system that helps groups split expenses and calculate who owes whom.

## Features

Add, update, delete expenses  
Auto-calculates balances and optimized settlements  
Validation and error handling  
Ready for deployment

## Tech Stack

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Render.com (for deployment)

## API Endpoints

### Expense Management
- GET `/expenses` - list all expenses
- POST `/expenses` - add new expense
- PUT `/expenses/:id` - update an expense
- DELETE `/expenses/:id` - delete an expense

### Settlements & People
- GET `/people` - list all participants
- GET `/balances` - show net balances
- GET `/settlements` - optimized transactions to settle up

## How to Run

1. Clone this repo  
2. Create a `.env` file based on `.env.example`  
3. Run: `npm install`  
4. Start server: `npm start`

## Deployment

This app is deployed on Render.com.

Link - [text](https://split-app-backend-x4jd.onrender.com/)

## License

MIT
