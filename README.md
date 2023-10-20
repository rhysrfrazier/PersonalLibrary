# Personal Library
A fullstack application for personal library management. Full CRUD through the back end, and read and update functionality (so far) in the front end.
## Vision
The long-term goal for this app is an all-in one system for managing a personal library, including full front end CRUD and intuitive user flows. If you've ever found yourself unable to remember whether you read all the books in a series; if your e-reader is dead but you simply must know whether you already own a copy of a book a relative want to gift you; or if you just want a full list of every book in your library in your back pocket because you ~~have a problem and want to cary information about your books like some people cary wallet-size photos of their kids~~ love books, this app is meant to help!

[Here](https://app.diagrams.net/#G1SZsPjMf_hK2G27OZyC_7a-4iw9ece2qr)'s the rough wireframe for user flows.

## Status as of October 20th
While the Library Management app isn't fully finished at present, you, hypothetical user, can still search your antique books and your novels with a variety of criteria, and you can categorize unread books as read, as well as add ratings and comments.

Check out the [demo video](https://drive.google.com/file/d/1OgI3lM5diENGOzimUn5YB2AlpK0UrBeu/view?usp=sharing)!

<img width="360" alt="Screenshot of homepage" src="https://github.com/rhysrfrazier/PersonalLibrary/assets/140181425/892169ef-0ad5-4bc9-ba03-e1728fd535f4">

## ERD/Backend Planning
<img width="802" alt="ERD showing authors as a parent collection for special collections, novels, and academic books" src="https://github.com/rhysrfrazier/PersonalLibrary/assets/140181425/956cec99-b7d2-4b56-a84f-b7d4da4f62a5">

## Tech Stack
- JS
- CSS
- HTML
- MongoDB
- Express
- Node

## Stretch Goals:
### Hamburger menu contents:
* A seperate form for more comprehensive updates (updates beyond just rating, comments, and changing unread to read)
* A form for getting a new book, which incorporates a form to create a new author document in the database if needed. Upon successful creation of the book, the user should have the choice to go back to the home page or add another directly.
* Delete functionality
* Make all other functional pages accessible through the hamburger as well
### General
* Linking all author names on result cards to pages with more information about that specific author
* Include all books within the library written by a given author in their result card
* In the database search: if a book is unrated but read, include a button to rate and add comments
* In the database search: if a book is unread, include a button to mark as read that redirects to the update as read form
* Make sure all error types have messages
* Clean up code (remove comments, add turnary conditionals where it makes sense to)
* Responsive styling for computer screen. The app is built for phone screen right now because that makes most sense for the kind of use, but it should at least not be ugly on the computer.
* Deployment???
  


