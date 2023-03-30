import { get_cookie } from "@/utils/functions";
import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";


export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
});
