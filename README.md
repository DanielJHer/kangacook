## Introduction
This project is a web application that leverages a React frontend and a Django backend. The frontend is deployed on AWS S3, and the backend is deployed on AWS EC2. The frontend communicates with the backend using HTTP requests to retrieve and manipulate data.

## Tech Stack

### Frontend
- **React:** A JavaScript library for building user interfaces. It allows for the creation of reusable UI components and the development of complex, interactive web applications.
- **AWS S3:** Amazon Simple Storage Service (S3) is used to host and serve the static files of the React application. It provides scalable storage and easy integration with other AWS services.

### Backend
- **Django:** A high-level Python web framework that encourages rapid development and clean, pragmatic design. 
- **Gunicorn:** A Python WSGI HTTP server for UNIX. It is used to serve the Django application.
- **Nginx:** A high-performance HTTP server and reverse proxy. It is used to serve static files and proxy requests to the Gunicorn server.
- **AWS EC2:** Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity. It is used to host the Django backend.

### Communication
- **HTTP/HTTPS:** The frontend communicates with the backend using HTTP/HTTPS requests to fetch and manipulate JSON data. 
- **CORS:** Cross-Origin Resource Sharing (CORS) is configured on the backend to allow the frontend to communicate with it.
