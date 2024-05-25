import { mergeTypeDefs } from "@graphql-tools/merge";
import UserTypeDefs from "./user.typeDefs.js";
import TransationTypeDefs from "./transactions.typeDefs.js";

const typeDefs = mergeTypeDefs([UserTypeDefs, TransationTypeDefs]);

export default typeDefs;
