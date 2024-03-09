
# book-search-and-save

---

## Table of Contents

- [Project Description](#project-description)
- [How to run this project](#how-to-run-this-project)
- [How to use this project](#how-to-use-this-project)
- [Credits](#credits)
- [License](#license)

## Project Description

Book Search and Save is a full-stack application that allows users to search for books and save them in a personal list to view collectively. Each search result contains the title, author(s), and a description of the book.

## How to run this project

Click on the following image to visit the deployed site:

[![React Dev Portfolio - demo image](<client/src/assets/book search and save - demo.png>)](https://odo-react-portfolio.netlify.app)

## How to use this project

Navigate between pages by clicking the links in the top-right corner of the page.

Note: Must be logged in to view, save, or delete books from your list.

### Search For Books

Use the search bar to enter a book title. Click the "Submit Search" button to receive a list of books that either match the exact search or find books with a relatable title.

While logged in, a "Save this Book!" button will appear at the bottom of each book description. Click this button to save the book in your personal list.

When the "Save this Book!" button is clicked, the button text will change to "This book has already been saved!" and its font will be greyed out. This will disable the button's save functionality until it is removed from your personal list.

### See Your Books

Your personal list of saved books are displayed on this page. Any entry can be deleted by clicking the "Delete this Book!" button at the bottom of each book description. When a book is deleted, it will no longer appear in the list.

### Login / Sign Up / Logout

The login page requires an email address and password that belong to an existing account. Entering this information and clicking the "Submit" button will log the user in, allowing them to save / delete books and view their personal list.

The sign up page requires a username, email address, and password to create a new account. The username and email address must be different from any existing accounts. Clicking the "Submit" button will create the acocunt and log the user in.

The logout button will log the user out of their account and redirect back to a version of the "Search For Books" page for guest users. This option will only show up if the user is already logged in.

## Credits

Tyler Odo

## License

Default