import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clubery9t076407uwegjssn5h/master";

export const getCourseList=async(level)=>{
    const query=gql`
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          name
          price
          level
          tags
          time
          author
          banner {
            url
          }
          chapters {
            id
          }
        }
      }
      
    `

    const result= await request(MASTER_URL, query);
    return result;
}