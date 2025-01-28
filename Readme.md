# Instagram Backend

This project is the backend for an Instagram-like application. It provides APIs for user authentication, posting photos, liking posts, and following other users.

## Features

- User authentication (signup, login, logout)
- CRUD operations for posts (Pending)
- Like and unlike posts (Pending)
- Follow and unfollow users (Pending)
- Comment on posts (Pending)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/instagram-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd instagram-backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/instagram-backend
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the server:
    ```bash
    npm start
    ```
2. The server will be running on `http://localhost:1111`.

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Sign up a new user
- `POST /api/auth/login` - Log in an existing user
- `POST /api/auth/logout` - Log out the current user

### Posts

- `POST /api/posts` - Create a new post
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post by ID
- `PUT /api/posts/:id` - Update a post by ID
- `DELETE /api/posts/:id` - Delete a post by ID

### Likes

- `POST /api/posts/:id/like` - Like a post
- `POST /api/posts/:id/unlike` - Unlike a post

### Follows

- `POST /api/users/:id/follow` - Follow a user
- `POST /api/users/:id/unfollow` - Unfollow a user

### Comments

- `POST /api/posts/:id/comments` - Add a comment to a post
- `GET /api/posts/:id/comments` - Get all comments for a post

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For any inquiries, please contact [yourname@example.com](mailto:yourname@example.com).
