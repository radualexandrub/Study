# Spring Boot API with Spring Security 6

Credits / Notes taken from:

- [Unknown Coder - Spring Security 6 | How to Create a Login System with Spring Data JPA and JWTs - 07 April 2023 - 1h44m](https://youtu.be/TeBt0Ike_Tk)

<br/>

Related Spring Boot tutorial notes from me:

- [Spring Boot Full Stack with Angular Application - EmployeeManager - written on August 2022](https://github.com/radualexandrub/Study/blob/master/SpringBoot/SpringBootWithAngularCourse.md)
- [Spring Boot with Angular App: Server Ping Status Tracker - written on July 2023](https://github.com/radualexandrub/Study/blob/master/SpringBoot/SpringBootAngularPingStatusApp.md)
- [Spring Boot 2.7.18 API with Spring Security 5.7.11 using HTTP Basic Auth with STATELESS Sessions - Youtube 3h tutorial from getarrays.io - written on Jan-2024](./SpringBootAPIwithSpringSecurity.md)

- Check out all my study notes here: https://github.com/radualexandrub/Study/tree/master

<br/>

Table of Contents (ToC):

- [Spring Boot API with Spring Security 6](#spring-boot-api-with-spring-security-6)
  - [Project Setup using Spring Boot 3.2.2](#project-setup-using-spring-boot-322)
- [Spring Initializr](#spring-initializr)

<br/>

Other useful resources:

- What is REST (API)? https://30secondsofinterviews.org/

> REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.
>
> Generally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like `posts`, `users`, `comments`, and a RESTful API exposes access to this data with:
>
> - An identifier for the resource. This is known as the endpoint or URL for the resource.
> - The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.
>
> Here is an example of the URL and HTTP method with a `posts` resource:
>
> - Reading: `/posts/` => GET
> - Creating: `/posts/new` => POST
> - Updating: `/posts/:id` => PUT
> - Destroying: `/posts/:id` => DELETE

<br/>

- [Amigoscode Spring Boot 3 + Spring Security 6 - JWT Authentication and Authorisation - 03 January 2023 - 2h05m](https://youtu.be/KxqlJblhzfI)

- [Amigoscode - Spring Boot Roadmap - How To Master Spring Boot 23-Aug-2021 - 17min](https://www.youtube.com/watch?v=cehTm_oSrqA)

![Spring Roadmap by Amigoscode](./SpringBootAPIwithSpringSecurity/SpringBootRoadMap.png)

<br/>

## Project Setup using Spring Boot 3.2.2

# Spring Initializr

https://start.spring.io/
