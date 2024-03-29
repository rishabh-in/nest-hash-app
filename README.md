# nest-app

## Description

## Introduction
This Git README.md provides an overview of the functionalities implemented in the application. The application exposes three APIs designed to handle user data and tokenization using the `jsonwebtoken` package.

## Functionality

### 1. **Generate Token API**
   - **Endpoint:** `/user`
   - **Method:** `POST`
   - **Description:** 
     - The user sends user data, including the `username` and `number`, to this API.
     - The API generates a hash value (token) using the `jsonwebtoken` package.
     - The hash value is returned to the user.

### 2. **Retrieve User Details API**
   - **Endpoint:** `/user/token`
   - **Method:** `POST`
   - **Description:** 
     - The user sends the hash value obtained from the first API to this endpoint.
     - The API decrypts and verifies the hash value using the `jsonwebtoken` package.
     - If the verification is successful, the corresponding user details are returned.

### 3. **List All Tokens API**
   - **Endpoint:** `/token/list`
   - **Method:** `GET`
   - **Description:** 
     - This API lists down all the hash tokens generated by the system.

## Implementation Details

- The application utilizes the `jsonwebtoken` package to generate tokens and handle encryption and verification.
- The first API generates a hash value (token) from the user-provided `username` and `number`.
- The second API decrypts and verifies the received hash value using the `jsonwebtoken` package and returns the corresponding user information.
- The third API lists down all the hash tokens.

## Usage

1. **Generate Token API**
   - **Endpoint:** `/user`
   - **Method:** `POST`
   - **Request Body Example:**
     ```json
     {
       "username": "john_doe",
       "number": "1234567890"
     }
     ```
   - **Response Example:**
     ```json
     {
       "message": "User added",
       "token": "generated_token_here"
     }
     ```

2. **Retrieve User Details API**
   - **Endpoint:** `/user/token`
   - **Method:** `POST`
   - **Request Body Example:**
     ```json
     {
       "token": "user_provided_token"
     }
     ```
   - **Response Example:**
     ```json
     {
       "message": "User details retrieved successfully",
       "data": {
         "username": "john_doe",
         "number": "1234567890"
       }
     }
     ```

3. **List All Tokens API**
   - **Endpoint:** `/token/list`
   - **Method:** `GET`
   - **Response Example:**
     ```json
     {
       "message": "Fetched all tokens",
       "tokens": [
         "token_1",
         "token_2",
         "token_3"
       ]
     }
     ```

## Dependencies
- The application relies on the `jsonwebtoken` package for token generation, encryption, and verification.

## How to Run
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

Feel free to reach out if you have any questions or need further assistance!

