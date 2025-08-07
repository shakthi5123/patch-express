//Basic about patch request
// import express from "express";
// const app = express();
// const port = 3000;

// app.use(express.json());

// let users = {
//     1: {name: "shakthi", age: 21, email: "shakthi@example.com"}
// }

// app.patch("/users/:id", (req, res) => {
//     const userId = req.params.id;
//     const updates = req.body;

//     if(!users[userId]){
//         return res.status(404).send("User not found");
//     }

//     // Update only provided fields
//     users[userId] = {...users[userId], ...updates}
//     res.send(`User  ${userId} updated ${JSON.stringify(users[userId])}`);
// })

// app.listen(port, ()=> {
//     console.log(`Server is running on http://localhost:${port}`);
// })

// Challenge with patch request

// import express from "express";
// const app = express();
// const port = 3000;

// app.use(express.json());

// let books = {
//   1: { title: "Atomic Habits", author: "James Clear", year: 2018 },
//   2: { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
// };

// app.patch("/books/:id", (req, res) => {
//     const bookId = req.params.id;
//     const updates = req.body;

//     if(!books[bookId]) {
//         return res.status(404).send("Book not found");
//     }

//     books[bookId] = {...books[bookId], ...updates}
//     res.send(`Books with ${bookId} updated: ${JSON.stringify(books[bookId])}`);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// Challenge 3 


import express from "express";
const app = express();
const port = 3000;  

app.use(express.json());

let products = {
    101: { name: "Wireless Mouse", price: 799, inStock: true },
    102: { name: "Keyboard", price: 1499, inStock: false },
}

app.patch("/products/:id", (req, res) => {
    const productsId = req.params.id;
    const updates = req.body;

    if(!products[productsId]){
        return res.status(404).send("Products not found");
    }

    products[productsId] = { ...products[productsId], ...updates };
    res.send(`Product with ID ${productsId} updated: ${JSON.stringify(products[productsId])}`);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});