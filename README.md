# Password Manager

This Password Manager application is designed to securely store and manage your passwords. Built with **Node.js**, **React**, **HTML**, **CSS**, and connected to a **MySQL database**, this tool ensures that your sensitive information is encrypted and protected using **AES-256-CTR** encryption via the **CryptoJS** library.

## Features

- **Password Storage**: Securely stores and manages passwords in a MySQL database.
- **Authentication**: Uses **CryptoJS** to securely hash and encrypt passwords for storage and retrieval.
- **AES-256-CTR Encryption**: Each password is encrypted using AES (Advanced Encryption Standard) with a 256-bit key, utilizing the **CTR (Counter Mode)** mode of operation, ensuring strong security.
- **User Interface**: Developed using **React**, the user interface is simple, intuitive, and responsive, making it easy to add, view, and manage passwords.
- **Database**: A **MySQL** database is used to store encrypted passwords along with other relevant metadata.

## Technologies Used

- **Frontend**: 
  - React
  - HTML, CSS
- **Backend**:
  - Node.js (with Express)
  - MySQL Database
  - CryptoJS (for password encryption)
- **Encryption**: 
  - AES-256-CTR via CryptoJS

## How It Works

1. **Password Encryption**: When a password is entered by the user, it is encrypted using the **AES-256-CTR** encryption algorithm before being stored in the database.
2. **Authentication**: When retrieving passwords, the encrypted data is sent from the database, decrypted using the same encryption method.
3. **MySQL Database**: The encrypted password is securely stored in a MySQL database, ensuring that the plain-text passwords are never exposed.
4. **Frontend UI**: The frontend React application provides an interface to add, view, and manage the passwords. The passwords are encrypted at all times.

## Installation

### Prerequisites

1. **Node.js** - Make sure Node.js is installed on your machine.
2. **MySQL Database** - Set up a MySQL database and create a table to store user credentials.

### Steps

1. Clone this repository:
   ```bash
   git clone <repository-url>
2. cd client
   npm install
3. cd server
   npm install
4. Set up your MySQL database:
   Create a database and configure the database connection in server/config/database.js (or similar).
5. npm start in client and server directories


