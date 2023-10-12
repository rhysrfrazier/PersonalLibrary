# Personal Library
A fullstack application for personal library management
## ERD/Backend Planning
<img width="802" alt="ERD showing authors as a parent collection for special collections, novels, and academic books" src="https://github.com/rhysrfrazier/PersonalLibrary/assets/140181425/956cec99-b7d2-4b56-a84f-b7d4da4f62a5">

## User Stories
I want to be able to: 
* browse all books in each collection (MVP)
* search all books in each collection by title or author (MVP - at least novels)
* generate a random unread book
* search for unread books by genre or subgenre
* update an unread book set "read" to true, add a rating, and add a comment (MVP)

## Stretch goals:
* add new books in the front end via a form. If the author entered isn't in the database, generate a new form automatically to create an author object, save it and link it to the book when the book is saved to the database
* search and delete books from the db. make an alert that says "are you sure?" first
* hook up a historical events api for the years the authors were alive so I don't have to add than manually
* Add an additional collection of academic books with all of the same functionality of the other collections

## Starting wireframe (WIP)
https://app.diagrams.net/#G1SZsPjMf_hK2G27OZyC_7a-4iw9ece2qr
