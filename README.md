🚀 PriceTale - Every Price Has a Story
PriceTale is a web application designed to track the price history of products on popular Indian e-commerce websites. By providing a product's URL, users can visualize its price fluctuations over time, empowering them to make informed purchasing decisions and buy at the best possible price.

✨ Features
User Authentication: A secure login and sign-up system allows users to have a personalized experience.

Guest Mode: Users can try out the core functionality of the app without needing to create an account.

Personalized Dashboard: Logged-in users have access to a dashboard to view their saved items.

Watchlist: Save products to a personal watchlist for easy access and future tracking.

Price Alerts: Set up notifications for tracked products to be alerted when the price drops.

AI-Powered Insights: For each product, the app provides:

An AI Verdict on whether it's a good time to buy based on its price history.

An AI Review Summary with a star rating to give a quick overview of customer feedback.

Interactive Price Charts: Historical price data is displayed on a clean, interactive chart powered by Chart.js.

💻 Tech Stack
The project is built with a modern full-stack architecture, separating the client-side and server-side logic.

Category

Technology

Description

Frontend

HTML, Tailwind CSS, JavaScript, Chart.js

A single-page interface for a fast, responsive user experience.

Backend

Python, Flask, Flask-CORS

A lightweight server to handle API requests, business logic, and database interactions.

Database

Google Firebase Firestore

A scalable, real-time NoSQL cloud database to store user and product data.

Dev Tools

VS Code, pip, Firebase Admin SDK

Standard tools for development, package management, and database administration.

🛠️ Setup and Installation
To get a local copy up and running, follow these simple steps.

Prerequisites
Python 3.x installed on your machine.

A Google Firebase project with Firestore enabled.

Installation
Clone the Repository

git clone [https://github.com/your-username/pricetale.git](https://github.com/your-username/pricetale.git)
cd pricetale

Set Up Firebase Credentials

Download your serviceAccountKey.json file from your Firebase project settings.

Rename it to pricetale-serviceAccountKey.json.

Place this file in the root directory of the project.

Install Python Dependencies

pip install -r requirements.txt

(Note: You will need to create a requirements.txt file containing Flask, Flask-Cors, and firebase-admin)

Seed the Database (One-Time Step)

Populate your Firestore database with sample product data by running the seeding script:

python seed_database.py

Run the Backend Server

Start the Flask server. It will run on http://127.0.0.1:5000.

python app.py
