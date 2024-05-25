const TransationTypeDefs = `#graphql

    type Transaction {
        _id: ID!
        userId: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String!
        date: String!
    }

    type Query {
        transactions: [Transaction]
    }

    type Mutation {
        addTransaction(input: CreateTransactionInput): Transaction!
        updateTransaction(input: UpdateTransactionInput): Transaction!
        deleteTransaction(transactionId: ID!): Transaction
    }

    input CreateTransactionInput {
        userId: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String!
        date: String!
    }

    input UpdateTransactionInput {
        transactionId: ID!
        description: String
        paymentType: String
        category: String
        amount: Float
        location: String
        date: String
    }
`;

export default TransationTypeDefs;
