import { graphql } from "../../gql";

export const verifyGoogleTokenUser_query= graphql(`#graphql

query verifyGoogleToken($token:String!){
    verifyGoogleToken(token:$token)

}
`)

export const getCurrentUser_query= graphql(`#graphql

 query getCurrentUser{
    getCurrentUser {
    id
    email
  }

}
`)