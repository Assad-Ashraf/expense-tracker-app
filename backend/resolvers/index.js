import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import TransactionResolver from "./transactions.resolver.js";

const resolvers = mergeResolvers([userResolver, TransactionResolver]);

export default resolvers;
