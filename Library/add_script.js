import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, setDoc } from 'firebase/firestore';

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB07DRv8iUahm2QEm_ogqZ6Bb1rBQHGdLY',
  authDomain: 'library-e11db.firebaseapp.com',
  projectId: 'library-e11db',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a book to Firestore
function addBookToFirestore(title, author, bookNumber, genre, series, type) {
  // Reference to the "Books" collection
  const booksRef = collection(db, 'Books');

  // Create a new document with the book title as the document ID
  const bookDoc = doc(booksRef, title);

  // Data to be added to the document
  const bookData = {
    Author: author,
    BookNumber: bookNumber,
    Genre: genre,
    Series: series === 'Yes',
    Type: type,
  };

  // Add or update the document in Firestore
  setDoc(bookDoc, bookData)
    .then(() => {
      alert('Book added to Firestore');
    })
    .catch((error) => {
      console.error('Error adding book: ', error);
    });
}