import express from "express";
const app=express();

//creating diffrent routes
//it also has two parameters first is route and another is callback function which have two 
//parameters req  ,res
app.get('/api/products' ,(req ,res)=>{
    const products = [
        {
            id: 1,
            name: 'Table Wooden',
            price: 250,
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.poornima.edu.in%2Fwp-content%2Fuploads%2F2023%2F10%2Fhighest-score-of-rohit-sharma-in-ipl_0ebae7e33.jpg%3Fstrip%3Dall&tbnid=9wqr2HlUE343-M&vet=12ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0..i&imgrefurl=https%3A%2F%2Fgim.ac.in%2Fmodules%2Fcustom%2Fcustom_faculty%2Fimages%2Fcricket%2Frohit-sharma-2022-ipl-runs-2%2F&docid=niCUhQOoWHJQfM&w=800&h=1421&q=rohit%20sharma&ved=2ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0'
        },
        {
            id: 2,
            name: 'Chair Comfort',
            price: 120,
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.poornima.edu.in%2Fwp-content%2Fuploads%2F2023%2F10%2Fhighest-score-of-rohit-sharma-in-ipl_0ebae7e33.jpg%3Fstrip%3Dall&tbnid=9wqr2HlUE343-M&vet=12ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0..i&imgrefurl=https%3A%2F%2Fgim.ac.in%2Fmodules%2Fcustom%2Fcustom_faculty%2Fimages%2Fcricket%2Frohit-sharma-2022-ipl-runs-2%2F&docid=niCUhQOoWHJQfM&w=800&h=1421&q=rohit%20sharma&ved=2ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0'
        },
        {
            id: 3,
            name: 'Lamp LED',
            price: 50,
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.poornima.edu.in%2Fwp-content%2Fuploads%2F2023%2F10%2Fhighest-score-of-rohit-sharma-in-ipl_0ebae7e33.jpg%3Fstrip%3Dall&tbnid=9wqr2HlUE343-M&vet=12ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0..i&imgrefurl=https%3A%2F%2Fgim.ac.in%2Fmodules%2Fcustom%2Fcustom_faculty%2Fimages%2Fcricket%2Frohit-sharma-2022-ipl-runs-2%2F&docid=niCUhQOoWHJQfM&w=800&h=1421&q=rohit%20sharma&ved=2ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0'
        },
        {
            id: 4,
            name: 'Sofa Lounge',
            price: 400,
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.poornima.edu.in%2Fwp-content%2Fuploads%2F2023%2F10%2Fhighest-score-of-rohit-sharma-in-ipl_0ebae7e33.jpg%3Fstrip%3Dall&tbnid=9wqr2HlUE343-M&vet=12ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0..i&imgrefurl=https%3A%2F%2Fgim.ac.in%2Fmodules%2Fcustom%2Fcustom_faculty%2Fimages%2Fcricket%2Frohit-sharma-2022-ipl-runs-2%2F&docid=niCUhQOoWHJQfM&w=800&h=1421&q=rohit%20sharma&ved=2ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0'
        },
        {
            id: 5,
            name: 'Bookshelf Modern',
            price: 180,
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.poornima.edu.in%2Fwp-content%2Fuploads%2F2023%2F10%2Fhighest-score-of-rohit-sharma-in-ipl_0ebae7e33.jpg%3Fstrip%3Dall&tbnid=9wqr2HlUE343-M&vet=12ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0..i&imgrefurl=https%3A%2F%2Fgim.ac.in%2Fmodules%2Fcustom%2Fcustom_faculty%2Fimages%2Fcricket%2Frohit-sharma-2022-ipl-runs-2%2F&docid=niCUhQOoWHJQfM&w=800&h=1421&q=rohit%20sharma&ved=2ahUKEwj829ni8pODAxXzSGwGHW5kCAEQMygBegQIARB0'
        },
        {
            id: 6,
            name: 'Mirror Wall',
            price: 90,
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.poornima.edu.in%2Fwp-content%2Fuploads%2F2023%2F10%2Fhighest-score-of-rohit-sharma-in-ipl_0ebae7e33.jpg%3Fstrip%3Dall&tbnid=9wqr2HlUE343-M&vet=12ah'
        },]  
        
        //we can simply do res.send(products)
        //but since we need delay we will use settimeout
        //if we want ro search prosucts which have metal in them
        //then we will use this url and it has search query qhich searches for metal
        //so to make it work we will filter our products
        //http:://localhost:3000/api/products?search =metal
        if(req.query.search)
        {
        const filteredproduct=products.filter(product  =>product.name.includes(req.query.search));
        res.send(filteredproduct);
        //if we will not return thenapp will crash

        return;
        }
        
        
        setTimeout(() => {
            res.send(products);  
        },3000);
  
})
const port=process.env.port||3000;
//listen has two parameters one of it is port and another is callback function
app.listen(port , ()=>{
   console.log(`Server running on port :${port}`);
});

