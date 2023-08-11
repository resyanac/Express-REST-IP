
![RESYANA CAHYANITA](https://github.com/RevoU-FSSE-2/week-8-resyanac/assets/135514670/a50bbcf0-fec7-4eaf-86f5-1ffc0840d738)

# INTRODUCTION

Hello, Resya here! 23 years old girl in +8 GMT (East Borneo) timezone. I am a Tax Collector and software engineer. The 8th assignment are assigned to a simple rest api server about financial tracking. 

# Financial Tracking REST API Server

The Financial Tracking REST API Server is a simple application that allows users to manage their financial transactions and assets through a set of CRUD (Create, Read, Update, Delete) operations. This API is designed to help users track their financial activities and keep a record of their transactions. 

## Features

- Create new transactions with details such as recipient, description, and amount.
- Retrieve a list of transactions, either all transactions or based on specified filters.
- Update existing transactions to reflect changes or corrections.
- Delete transactions that are no longer needed.

## Endpoints

The API provides the following endpoints for interacting with transactions and assets:

- `GET /transactions`: Retrieve a list of all transactions.
- `GET /transactions/{id}`: Retrieve details of a specific transaction.
-  `POST /transactions`: Create a new transaction.
- `PUT /transactions/{id}`: Update details of a specific transaction.
- `PATCH /transactions/{id}`: Partially update details of a specific transaction.
- `DELETE /transactions/{id}`: Delete a specific transaction.

## HTTP Methods

- `POST`: Used for creating new transactions or assets.
- `GET`: Used for retrieving transactions or assets.
- `PUT`: Used for updating transactions or assets.
- `PATCH`: Used for updating partial of transactions or assets.
- `DELETE`: Used for deleting transactions or assets.

## Deployment
![Screen Shot 2023-08-11 at 23 52 05](https://github.com/RevoU-FSSE-2/week-8-resyanac/assets/135514670/187bd856-0691-49c5-a056-0fd987a4cd5a)

This application  deployed using [resyanac-week-8](  
https://week-8-resyanac.cyclic.app) :

1. Sign up on Cyclic or your chosen deployment platform.
2. Connect your repository to the deployment platform.
3. Configure environment variables for database settings and other configurations.
4. Trigger a deployment. The platform will build and deploy your API server.

## TESTING

This application can be tested using POSTMAN
<img width="1440" alt="Screen Shot 2023-08-11 at 23 52 13" src="https://github.com/RevoU-FSSE-2/week-8-resyanac/assets/135514670/1356e213-52bb-48b0-88a1-b1f423d72c50">



