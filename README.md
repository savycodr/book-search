## Book Search
This is an app that keeps track of books. It allows the user to search Google Books for a book by entering a title. The user can select a book from the results and save it to the database. The user can also see all of the saved books in the database and delete a book.

## Instructions
1. Visit the [Book Search](https://clickybird.herokuapp.com/) website. 
2. Enter the title of a book. Select the Search button. A list of books from Google Books will appear.
3. Select the view button for one of the books. A new tab will open and visit the Google website for that book.
4. Select the Save button for the book.
5. In the Nav Bar slect saved books. You will see the book that you have saved.
6. Select the delete button. The book will be removed from the list.

## Technology
* This app uses stateful React components to keep track of the books. It uses stateless React components to display the books.
* Books are stored in a Mongo Database. Mongoose is used for the ORM.
* Express is used for routing.
* Axios is used to handle the API call to Google Books.
* The app follows MVC design pattern.
* The app is deployed on Heroku.
* The HTML uses Bootstrap CSS libraries.

