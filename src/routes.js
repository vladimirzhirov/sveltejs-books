import Books from "./pages/Books.svelte";
import Book from "./pages/Book.svelte";
import About from "./pages/About.svelte";

export default [
    {
        path: "/",
        component: Books
    },
    {
        path: "/books",
        component: Books
    },
    {
        path: "/books/edit/:uid",
        component: Book
    },
    {
        path: "/books/create",
        component: Book
    },
    {
        path: "/about",
        component: About
    }
]