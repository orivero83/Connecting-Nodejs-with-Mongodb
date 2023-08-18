# Connecting Node.js and MongoDB

This repository contains a basic example of how to connect a Node.js application to a MongoDB database. In less than 5 minutes, you'll have a basic understanding of how to establish this connection.

## Prerequisites

Before you begin, make sure you have the following components installed on your machine:

- Node.js: https://nodejs.org/
- MongoDB: https://www.mongodb.com/try/download/community

## Quick Steps

1. **Clone this repository:**

   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install  /  express  /  mongoose
   ```

3. **Configure MongoDB Connection:**

   In the `index.js` file, replace `<MONGODB_URL>` with the URL of your MongoDB database. You can obtain this URL from your MongoDB account or set up a local database.

4. **Run the Application:**

   ```bash
   node index.js
   ```

## Project Structure

- `index.js`: This is the main application file. It contains the server configuration and basic routes. Make sure to keep the MongoDB connection information secure and do not share it publicly.

## Contribution

If you find any errors or possible improvements, feel free to make a pull request. All contributions are welcome!

## Additional Resources

- Node.js Documentation: https://nodejs.org/documentation/
- MongoDB Documentation: https://docs.mongodb.com/
- Express.js (web framework for Node.js): https://expressjs.com/

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---
JavaScript code in view.


const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

mongoose.connect('mongodb://127.0.0.1:27017/crud', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB' + err);
})
