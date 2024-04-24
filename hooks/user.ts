// import { gql_client } from "@/client/api"
// import { getCurrentUser_query } from "@/graphql/queries/user"
// import { useQuery } from "@tanstack/react-query"
// import { RequestDocument } from "graphql-request";


// // interface CurrentUserResponse {
// //     getCurrentUser: {
// //       id: string;
// //       firstName: string;
// //       lastName: string;
// //       email: string;
// //       profileImage?: string;
// //     }
// //   }


// export const useCurrentUser = () => {
//     const query = useQuery({
//       queryKey: ["currentUser"],
//     //   queryFn: () => gql_client.request<CurrentUserResponse>(getCurrentUser_query as RequestDocument),
//       queryFn: async () => {
//         try {
//           const data = await gql_client.request(getCurrentUser_query);
//           return data;
//         } catch (error) {
//           console.error("Error fetching current user:", error);
//           throw new Error("Failed to fetch current user");
//         }
//       },
      
//         });
    
//     return({...query, user : query.data?.getCurrentUser})
    
  
//   };