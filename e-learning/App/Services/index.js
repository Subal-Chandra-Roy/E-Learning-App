import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clubery9t076407uwegjssn5h/master";

export const getCourseList = async (level) => {
  const query =
    gql`
    query CourseList {
        courses(where: {level: ` +
    level +
    `}) {
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
            title
            content {
              heading
              description {
                markdown
              }
              output {
                markdown
              }
            }
          }
          description {
            markdown
          }
        }
      }
      
    `;

  const result = await request(MASTER_URL, query);
  return result;
};
export const enrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
    mutation MyMutation {
      createUserEnrolledCourse(
        data: {courseId: "` +
    courseId +
    `", userEmail: "` +
    userEmail +
    `", course: {connect: {id: "` +
    courseId +
    `"}}}
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
        edges {
          node {
            id
          }
        }
      }
    }
    
    `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
