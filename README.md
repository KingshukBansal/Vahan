# Basic Headless CMS

A rudimentary headless CMS with extremely basic CRUD functionality, similar to a simplified version of Strapi.js. This project enables users to create different entities from the frontend by specifying attributes and their types. Upon entity creation, the application automatically generates a table definition in an RDBMS (MySQL or PostgreSQL only). Users can then perform CRUD operations (Create, Read, Update, Delete) on the created entities directly from the frontend.

## Technologies Used

- React
- Tailwind CSS
- Node.js
- Express.js
- MySQL

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/KingshukBansal/Vahan.git
    ```

2. **Install Dependencies:**

    ```bash
    cd Vahan/client
    npm install

    cd ../server
    npm install
    ```

3. **Create .env Files:**

    Create separate `.env` files in both the `client` and `server` folders. These files will store sensitive environment variables. Add all the environment variables as mentioned below.

    ##### Important:

    - Replace placeholders with your actual MySQL credentials and database name.
    - Ensure `.env` files are not committed to version control (e.g., add them to your `.gitignore`).

4. **Start the Development Server:**

    Run `npm start` in both the `client` and `server` folders to start the frontend and backend servers concurrently:

    ```bash
    cd client
    npm start

    cd ../server
    npm start
    ```

    This will typically start the frontend server on `http://localhost:3000` and the backend API on `http://localhost:8080` (adjust ports as needed).

## Environment Variables

In order to run this project locally or deploy it to a server, you need to set up the following environment variables:

### Server Configuration

- `PORT`: The port on which the server will run.

### Database Configuration

- `DB_HOST`: The host address of your database server.
- `DB_USER`: The username used to authenticate with the database server.
- `DB_PASSWORD`: The password used to authenticate with the database server.
- `DB_NAME`: The name of the database to be used by the application.
- `DB_CONNECT_TIMEOUT`: The timeout duration (in milliseconds) for connecting to the database.
- `DB_DATE_STRINGS`: Boolean value indicating whether to treat date strings as UTC (`true`) or local (`false`) time.

### Frontend Configuration

- `REACT_APP_BASE_URL`: The base URL of the backend server used in the React frontend application.

Make sure to properly set these environment variables either in your local development environment or in your server environment before running the project.

## Usage

Once the project is running, you can use the frontend interface to create, read, update, and delete entities:

### Create Entities

- Specify the entity name and its attributes with their data types (e.g., string, number, Date).
- The system will automatically create a corresponding table in your MySQL database.

### CRUD Operations

- Create, view, edit, and delete data entries within the created entities using the provided frontend interface.

## Additional Notes

- This is a basic implementation and may require further development for more complex use cases.
- Consider security best practices when storing sensitive data in environment variables. Explore environment variable management tools for production environments.
- Feel free to contribute or raise issues on the GitHub repository.
