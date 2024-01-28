# Spring Boot API with Spring Security 5.7.x

Credits / Notes taken from:

- [Spring Boot API with Spring Security and Docker (15-Oct-2022) - 3h - from getarrays.io | Roland Toussaint "Junior"](https://www.youtube.com/watch?v=0iNmWIi5rG4)
  - [Source code for "Spring Boot API with Spring Security and Docker"](https://github.com/getarrays/apiapplication)

<br/>

Related Spring Boot tutorial notes from me:

- [Spring Boot Full Stack with Angular Application - EmployeeManager - August 2022](https://github.com/radualexandrub/Study/blob/master/SpringBoot/SpringBootWithAngularCourse.md)
- [Spring Boot with Angular App: Server Ping Status Tracker - July 2023](https://github.com/radualexandrub/Study/blob/master/SpringBoot/SpringBootAngularPingStatusApp.md)
- [Spring Boot API with Spring Security 5.7.11 using HTTP Basic Auth with STATELESS Sessions - Youtube 3h tutorial from getarrays.io on Oct-2022](./SpringBootAPIwithSpringSecurity.md)

- Check out all my study notes here: https://github.com/radualexandrub/Study/tree/master

<br/>

Table of Contents (ToC):

- [Spring Boot API with Spring Security 5.7.x](#spring-boot-api-with-spring-security-57x)
- [Project Setup using Spring Boot 2.7.18](#project-setup-using-spring-boot-2718)
  - [Spring Initializr](#spring-initializr)
  - [Note: Clearing and Readding dependencies in IntelliJ](#note-clearing-and-readding-dependencies-in-intellij)
- [CRUD Operations - Data Model, Service, Repository, Controller](#crud-operations---data-model-service-repository-controller)
  - [Project Model - Data Representation](#project-model---data-representation)
  - [Project Repository - CRUD Operations in DB](#project-repository---crud-operations-in-db)
  - [Project Service Interface and Implementation - Business Logic](#project-service-interface-and-implementation---business-logic)
  - [(Optional) Response Model for each response from API](#optional-response-model-for-each-response-from-api)
  - [Project Resource / Controller - Expose the API](#project-resource--controller---expose-the-api)
- [Database Configuration using MySQL](#database-configuration-using-mysql)
- [Testing API with Postman](#testing-api-with-postman)
- [Spring Security 5.7.x - HTTP Basic Authentication](#spring-security-57x---http-basic-authentication)
  - [Web Security configuration using Spring Security 5.7.11 with STATELESS Sessions](#web-security-configuration-using-spring-security-5711-with-stateless-sessions)
  - [Account Model, Repository and Service](#account-model-repository-and-service)
    - [Account and Role Model](#account-and-role-model)
    - [Account and Role Repository](#account-and-role-repository)
    - [Account Service](#account-service)
      - [Password Encoder configuration](#password-encoder-configuration)
  - [User Details Service - Tell Spring Security how to load the users / accounts](#user-details-service---tell-spring-security-how-to-load-the-users--accounts)
  - [Account Authentication Provider](#account-authentication-provider)
  - [Account Resource / Controller](#account-resource--controller)
  - [(Optional) ApplicationStartRunner](#optional-applicationstartrunner)
  - [Testing Basic Auth with Postman](#testing-basic-auth-with-postman)
- [Deployment using Docker](#deployment-using-docker)

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

- [Unknown Coder - Spring Security 6 | How to Create a Login System with Spring Data JPA and JWTs - 07 April 2023 - 1h44m](https://youtu.be/TeBt0Ike_Tk)

- [Amigoscode - Spring Boot Roadmap - How To Master Spring Boot 23-Aug-2021 - 17min](https://www.youtube.com/watch?v=cehTm_oSrqA)

![Spring Roadmap by Amigoscode](./SpringBootAPIwithSpringSecurity/SpringBootRoadMap.png)

<br/>

# Project Setup using Spring Boot 2.7.18

## Spring Initializr

(Friday, January 05, 2024, 14:35)

[Spring Initializr - Initializr generates Spring Boot project with just what you need to start quickly!](https://start.spring.io/)

Project configuration:

- _Project:_ Maven Project
- _Spring Boot:_ Version 3.2.1 (Jan 2024)
- _Project Metadata:_
  - _Group (domain):_ "ENTER YOUR DOMAIN HERE" (for me it'll be [com.radubulai](https://radubulai.com))
  - _Artifact (the name of the application):_ springbootapisecurity
  - _Name:_ springbootapisecurity
  - _Description:_ Spring Boot REST API Application with authentication using Spring Security
  - _Package name (you could leave the autogenerated name):_ com.radubulai.springbootapisecurity
  - _Packaging:_ Jar
  - _Java Version:_ 17

Dependencies:

- **Spring Web** - Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container.
- **Spring Data JPA** - Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate (ORM - Object Relational Mappind).
- **Spring Security** - Highly customizable authentication and access-control framework for Spring applications
- **MySQL JDBC driver**
- **Validation** `I/O` - Bean Validation with Hibernate validator.
- **Lombok** `DEVELOPER TOOL` - Java annotation library which helps to reduce boilerplate code.

![SpringInitializr](./SpringBootAPIwithSpringSecurity/SpringInitializr01.jpg)

<br/>

🔴🔴🔴 Important Notes:

- For this tutorial, we will change Spring Boot Version to [2.7.18](https://spring.io/blog/2023/11/23/spring-boot-2-7-18-available-now/) that uses Spring Security 5.7.11. Reasong being that many parts (including syntax, method calling, classes) from the ["Get Arrays" Video Tutorial](https://www.youtube.com/watch?v=0iNmWIi5rG4) are deprecated in the new Spring Security 6.x (used in Spring Boot 3.x).
- I will try to adapt this tutorial to Spring Security 6.x (e.g. [6.2.1](https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html)) and Spring Boot 3.x (e.g. 3.2.1) in the future (in a separate tutorial)
- However, many companies will still use Spring Boot 2.7.x and Spring Security 5.x, so all the information here might still be relevant

<br/>

The contents of `pom.xml` file using Spring Boot 2.7.18:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<!-- https://github.com/spring-projects/spring-boot/releases/tag/v3.2.1 -->
		<!-- https://spring.io/blog/2023/11/23/spring-boot-2-7-18-available-now/ -->
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.7.18</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.radubulai</groupId>
	<artifactId>springbootapisecurity</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>springbootapisecurity</name>
	<description>Spring Boot REST API Application with authentication using Spring Security</description>
	<properties>
		<java.version>17</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<excludes>
						<exclude>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</exclude>
					</excludes>
				</configuration>
			</plugin>
		</plugins>
	</build>
</project>
```

<br/>

## Note: Clearing and Readding dependencies in IntelliJ

Note: If we change a major version of a package (e.g. Spring Boot from 3.x to 2.x) in `pom.xml`, IntelliJ will not recognize methods/classes that were changed:

- Go to `File` > `Project Structure` > `Libraries` > Clear all the libraries
- Go to `Maven` (right ribbon) > Reload all Maven Projects

![Reimport libraries](./SpringBootAPIwithSpringSecurity/SpringInitializr02_ReimportLibrariesIntelliJ.jpg)

Source: https://stackoverflow.com/questions/27694442/getting-gradle-dependencies-in-intellij-idea-using-gradle-build/34364528#34364528

<br/>

# CRUD Operations - Data Model, Service, Repository, Controller

[Spring Boot API with Spring Security and Docker - Architecture - 4m](https://youtu.be/0iNmWIi5rG4?t=244)

![Spring Boot Application Architecture](./SpringBootAPIwithSpringSecurity/SpringArchitecture01.jpg)

## Project Model - Data Representation

[Spring Boot API with Spring Security and Docker - Domain Model - 14m](https://youtu.be/0iNmWIi5rG4?t=839)

🟠 NOTE: On this tutorial, the main database model used is "Employee" -> In these notes/tutorial, we will use a "Project" (database) model, as in https://github.com/radualexandrub/Study/blob/master/SQL/MySQL_ChatGPT.md#project-schema (Radu-Alexandru Bulai - Friday, January 05, 2024)

- On `\src\main\java\com\radubulai\springbootapisecurity`: Create `model` package
- Inside `model` package, create `Project` java class

```java
// ./model/Project.java using Spring Boot 2.7.18:
package com.radubulai.springbootapisecurity.model;

import javax.persistence.*;
import javax.validation.constraints.*;
import lombok.*;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-05
 */
@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false, unique = true)
    @NotEmpty(message = "Project Key (Alphanumeric Project Identifier) cannot be empty or null")
    private String keyName;
    private String name;
    private String description;
    private String createdAt;
}
```

🔴 Note: In Spring Boot 3.2.1: `import javax.persistence.*;` and `import javax.validation.constraints.*;` (from Spring Boot 2.7.18) are replaced by `import jakarta.persistence.*;` and `import jakarta.validation.constraints.*;`

🟠 Note: If certain words reserved by MySQL are used (such as `insert`, `select`, `key`, etc), we would receive generic error `ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near` when first compiling (`mvn spring-boot:run`) the project to create the database schema - Reference: https://stackoverflow.com/questions/23446377/syntax-error-due-to-using-a-reserved-word-as-a-table-or-column-name-in-mysql

## Project Repository - CRUD Operations in DB

[Spring Boot API with Spring Security and Docker - Service Interface - 21m](https://youtu.be/0iNmWIi5rG4?t=1260)

- On `\src\main\java\com\radubulai\springbootapisecurity`: Create `repository` package
- Within `repository` package, create "ProjectRepository" java interface
- - This interface `ProjectRepository` will extend the `JpaRepository`. When extending from `JpaRepository` interface, we need to specify the model type (`Project`) and the ID data type (`Long`): `public interface ProjectRepository extends JpaRepository<Project, Long>`.

> Note: We can CTRL+Click on `JpaRepository` interface to see its decompilled .class file (its code), and look over its methods, eg: `findAll`, `saveAll`, `deleteAllInBatch`, etc... (those are useful methods as we don't need to implement them from scratch)

```java
// ProjectRepository.java
package com.radubulai.springbootapisecurity.repository;

import com.radubulai.springbootapisecurity.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-05
 */
public interface ProjectRepository extends JpaRepository<Project, Long> {

    void deleteProjectById(Long id);
    Optional<Project> findProjectById(Long id);
}
```

## Project Service Interface and Implementation - Business Logic

[Spring Boot API with Spring Security and Docker - Service Interface - 17m55s](https://youtu.be/0iNmWIi5rG4?t=1075)

- On `\src\main\java\com\radubulai\springbootapisecurity`: Create `service` package
- Within `service` package, create "ProjectService" java interface

```java
// ./service/ProjectService.java
package com.radubulai.springbootapisecurity.service;

import com.radubulai.springbootapisecurity.model.Project;

import java.util.List;

public interface ProjectService {

    List<Project> findAllProjects();

    Project findProjectById(Long id);

    Project addProject(Project project);

    Project updateProject(Project project);

    Boolean deleteProjectById(Long id);
}
```

- Inside `service` package we can create a `implementation` package, and here we'll have the `ProjectServiceImpl` java class
  - Inside `ProjectServiceImpl.java`, we create a `ProjectRepository` object where we will use the defined SQL / Query methods
  - Now, usually after declaring this `projectRepository` object, we needed to initialize it by calling the `public ProjectServiceImpl(ProjectRepository projectRepository) { this.projectRepository = projectRepository; }` constructor - however, since we use the Lombok library, we can simply add the `@RequiredArgsConstructor` annotation
  - We also need to annotate the `ProjectService` class repo with `@Service` decorator

```java
// ProjectServiceImpl.java
package com.radubulai.springbootapisecurity.service.implementation;

import com.radubulai.springbootapisecurity.exception.ProjectNotFoundException;
import com.radubulai.springbootapisecurity.model.Project;
import com.radubulai.springbootapisecurity.repository.ProjectRepository;
import com.radubulai.springbootapisecurity.service.ProjectService;
// import jakarta.transaction.Transactional; // Spring Boot 3.2.1
import javax.transaction.Transactional; // Spring Boot 2.7.18
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-05
 */
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository projectRepository;

    @Override
    public List<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Project findProjectById(Long id) {
        return projectRepository.findProjectById(id).orElseThrow(
                () -> new ProjectNotFoundException(String.format("Project by id %s was not found", id))
        );
    }

    @Override
    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Project updateProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Boolean deleteProjectById(Long id) {
        projectRepository.deleteProjectById(id);
        return Boolean.TRUE;
    }
}
```

> Notes on the annotations used:
>
> - `@Service`: This annotation is from the Spring Framework and is used to mark a class as a service component. It indicates that the class contains the business logic of the application. By annotating the class with `@Service`, it becomes eligible for auto-detection and can be injected into other Spring components, such as controllers.
> - `@RequiredArgsConstructor`: This is a Lombok annotation that automatically generates a constructor with required arguments based on the class's final fields. In this case, since the `ProjectRepository` field is marked as `final`, Lombok generates a constructor that accepts an instance of `ProjectRepository` and assigns it to the field. This eliminates the need for explicitly defining a constructor in the class.
> - `@Transactional`: This annotation is from the Spring Framework and is used to define the transactional behavior of a method or class. By annotating the class with `@Transactional`, all public methods in the class become transactional. Transactions ensure data consistency and integrity by enforcing ACID (Atomicity, Consistency, Isolation, Durability) properties when performing database operations.
> - `@Slf4j`: This annotation is from Lombok and is used to generate a logger field in the class. It automatically creates a logger instance with the name "log" that can be used for logging messages within the class. The logging framework used depends on the project's configuration.

Also, note that we have a dedicated ProjectNotFoundException within `exception` java package:

```java
// ProjectNotFoundException.java
package com.radubulai.springbootapisecurity.exception;

public class ProjectNotFoundException extends RuntimeException{
    public ProjectNotFoundException(String message) {
        super(message);
    }
}
```

## (Optional) Response Model for each response from API

(Separate from main tutorial) We will take the same approach from https://github.com/radualexandrub/Study/blob/master/SpringBoot/SpringBootAngularPingStatusApp.md#optional-response-model-for-each-response-from-api by responding with a custom `Response` whenever this REST API Server is called.

Before implementing the Resource/Controller, we can create a `Response` class (under `model` package) that we can send back to the end user (browser) no matter the response to the request is an error or a succesfull retrieve/update/etc of data. The `Response` will include several properties such as:

- `timeStamp`
- `statusCode` (the numerical status code)
- `status` (the corresponding `HttpStatus` enum value from Spring Framework, e.g. `OK` for 200, `CREATED` for 201, `MOVED_PERMANENTLY` for 301, `FOUND` for 302, `BAD_REQUEST` for 400, `UNAUTHORIZED` for 401, `NOT_FOUND` for 404, `INTERNAL_SERVER_ERROR` for 500, etc.)
- `reason` (a descriptive reason for the response)
- `message` (a human-readable message that can be shown to the end user)
- `developerMessage` (a more technical message for developers or for debugging purposes)
- `data`

Note, by default, if we do not implement such class, every response that our API will send will be the direct JSON data (and other details will be found in the header of the HTTP request).

```java
// Response.java
package com.radubulai.springbootapisecurity.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.experimental.SuperBuilder;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.Map;

@Data
@SuperBuilder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response {
    protected LocalDateTime timeStamp;
    protected int statusCode;
    protected HttpStatus status;
    protected String reason;
    protected String message;
    protected String developerMessage;
    protected Map<?, ?> data;
}
```

Annotations from above:

- `@Data` annotation from Lombok library generates boilerplate code for common methods such as getters, setters, `equals()`, `hashCode()`, and `toString()`
- `@SuperBuilder` annotation from Lombok library allows for a fluent builder API for constructing instances of the `Response` class (see below its usage in ProjectResource controller).
- `@JsonInclude(JsonInclude.Include.NON_NULL)` annotation from the Jackson library ensures that properties with null values are not included in the JSON serialization - it helps in producing a more concise and clean JSON response

## Project Resource / Controller - Expose the API

[Spring Boot API with Spring Security and Docker - Resource - 34m](https://youtu.be/0iNmWIi5rG4?t=2025)

- On `\src\main\java\com\radubulai\springbootapisecurity`: Create `resource` package
- Within `resource` package, create "ProjectResource" java class

```java
// ProjectResource.java
package com.radubulai.springbootapisecurity.resource;

import com.radubulai.springbootapisecurity.model.Project;
import com.radubulai.springbootapisecurity.model.Response;
import com.radubulai.springbootapisecurity.service.ProjectService;
// import jakarta.validation.Valid; // Spring Boot 3.2.1
import javax.validation.Valid; // Spring Boot 2.7.18
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static java.time.LocalDateTime.now;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-07
 * @apiNote Controller/Resource for Project
 */
@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectResource {
    private final ProjectService projectService;

    @GetMapping("")
    public ResponseEntity<Response> getAllProjects() {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("projects", projectService.findAllProjects()))
                        .message("Projects retrieved")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getProjectById(@PathVariable Long id) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("project", projectService.findProjectById(id)))
                        .message("Project retrieved")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }

    @PostMapping("")
    public ResponseEntity<Response> addProject(@RequestBody @Valid Project project) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("project", projectService.addProject(project)))
                        .message("Project created")
                        .status(HttpStatus.CREATED)
                        .statusCode(HttpStatus.CREATED.value())
                        .build());
    }

    @PostMapping("/save-all")
    public ResponseEntity<Response> addProjects(@RequestBody @Valid Project[] projects) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("projects", projectService.addProjects(projects)))
                        .message(String.format("%s Projects created", projects.length))
                        .status(HttpStatus.CREATED)
                        .statusCode(HttpStatus.CREATED.value())
                        .build());
    }

    @PutMapping("")
    public ResponseEntity<Response> updateProject(@RequestBody @Valid Project project) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("project", projectService.updateProject(project)))
                        .message("Project updated")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Response> deleteProjectById(@PathVariable Long id) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("deleted", projectService.deleteProjectById(id)))
                        .message("Project deleted")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }
}
```

<br/>

# Database Configuration using MySQL

From tutorial [Spring Boot API with Spring Security and Docker - Database Configuration - 59m](https://youtu.be/0iNmWIi5rG4?t=3541)

For more details, see my notes from here https://github.com/radualexandrub/Study/blob/master/SpringBoot/SpringBootAngularPingStatusApp.md#database-configuration

<br/>

After installing [MySQL 8.0 (448MB installer)](https://dev.mysql.com/downloads/installer/), we can open "MySQL 8.0 Command Line Client" (from Windows Start Menu).

🔵 Note: _(On Windows)_ If we cannot start the MySQL Server (eg. "MySQL Workbench" just crashes when we try to start the server):

- Open Windows Start Menu, search and open "Services", manually find `MySQL80` service -> Right click it -> Start.
- See more here: [Can't startup and connect to MySQL server](https://stackoverflow.com/questions/31387036/cant-startup-and-connect-to-mysql-server).

<br/>

To set up our database in our Java Spring Application, we need to go to `src/main/resource/application.yml` (Note: `application.properties` can be easily renamed/refactored to `application.yml`):

```yml
# application.yml using Spring Boot 3.2.1 and its dependecies
spring:
  datasource:
    # MySQL
    url: jdbc:mysql://localhost:3306/projectmanagerapp
    username: root
    password: microsoft
  jpa:
    show-sql: false
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQLDialect
        format_sql: true
debug: false
```

```yml
# application.yml using Spring Boot 2.7.18 and its dependencies
spring:
  datasource:
    # MySQL
    url: jdbc:mysql://localhost:3306/projectmanagerapp
    username: root
    password: microsoft
  jpa:
    show-sql: false
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        globally_quoted_identifiers: true
        dialect: org.hibernate.dialect.MySQL5InnoDBDialect
        format_sql: true
debug: false
```

For the MySQL setup:

- The default port for MySQL is 3306, so the DB address will be `localhost:3306`
- the name of the database will be `projectmanagerapp` => the address will be localhost:3306/`projectmanagerapp`

The `spring.jpa` section contains configuration settings for JPA (Java Persistence API) and Hibernate, the ORM (Object-Relational Mapping) framework.

- `show-sql: true` enables logging of SQL statements executed by Hibernate, providing visibility into the generated SQL queries (Note that this should always be disabled in production).
- `hibernate.ddl-auto:`
  - value `create` specifies that Hibernate should automatically create the database schema based on the entity mappings. This will create the necessary tables when the application starts. Note that this setting is typically used in development and should be handled differently in production.
  - value `update` means that Hibernate will update the database schema based on the entity classes' definitions if necesary.
- `properties.hibernate.dialect` specifies the dialect to use for the MySQL database. In this case, the `org.hibernate.dialect.MySQLDialect` dialect is selected, which is suitable for MySQL version 5 and InnoDB storage engine.
- `properties.hibernate.format_sql: true` enables the formatting of SQL statements logged by Hibernate, making them more readable for debugging purposes.

🟠 NOTE: Since we use Spring Boot 3 that uses Hibernate 6, Hibernate 6 changed how dialects work, and `org.hibernate.dialect.MySQLDialect` needs to be used (which configures itself based the actual server version). The version specific dialects containing InnoDB in their name were removed in Hibernate 6 - Reference https://stackoverflow.com/questions/74582403/jpa-hibernate-how-to-find-the-dialect

<hr/>

We can now create the `projectmanagerapp` MySQL database:

- Open "MySQL 8.0 Command Line Client", write: `create database projectmanagerapp;`
- We can check with `show databases;` command

![Project Database](./SpringBootAPIwithSpringSecurity/Database01.jpg)

We can run the Java Application from Terminal, in the main project directory:

```shell
mvn spring-boot:run
```

After running the app, the `Project` table from the `pingstatustracker` database is created automatically in MySQL and can be seen via MySQL Workbench App.

<br/>

Accessing http://localhost:8080/api/projects will redirect us to http://localhost:8080/login since we have "Spring Security" installed as a dependency in our project. The default username is `user` and the password can be found within Spring logs when first running the application:

![Project Database](./SpringBootAPIwithSpringSecurity/Database02.jpg)

![Project Database](./SpringBootAPIwithSpringSecurity/Database03.jpg)

<br/>

# Testing API with Postman

See my other notes from here https://github.com/radualexandrub/Study/blob/master/SpringBoot/SpringBootAngularPingStatusApp.md#testing-with-postman

<br/>

🔵 Send a GET request to http://localhost:8080/api/projects

![Postman test](./SpringBootAPIwithSpringSecurity/Postman01.jpg)

- ⬅the server will respond:

```json
{
  "timeStamp": "2024-01-07T20:28:05.2301537",
  "statusCode": 200,
  "status": "OK",
  "message": "Projects retrieved",
  "data": {
    "projects": [
      {
        "id": 1,
        "keyName": "PORTFOLIO",
        "name": "HappyCat Portfolio",
        "description": "HappyCat Customer Portfolio",
        "createdAt": "2024-01-06"
      },
      {
        "id": 2,
        "keyName": "CRMMANAGER",
        "name": "CRM Manager Backend API in Spring Boot",
        "description": "Official Project for the BACKEND of CRM Manager Application",
        "createdAt": "2024-01-07T20:26:48.465963800"
      }
    ]
  }
}
```

<br/>

🔵 Send a GET request to http://localhost:8080/api/projects/1 (id)

- ⬅The server will return:

```json
{
  "timeStamp": "2024-01-07T20:05:21.9751627",
  "statusCode": 200,
  "status": "OK",
  "message": "Project retrieved",
  "data": {
    "project": {
      "id": 1,
      "keyName": "PORTFOLIO",
      "name": "HappyCat Portfolio",
      "description": "HappyCat Customer Portfolio",
      "createdAt": "2024-01-06"
    }
  }
}
```

<br/>

🔵 Send a POST request with new Server information

- Open a new tab in Postman with the URL of http://localhost:8080/api/projects
- Set the request type to POST request
- Click on "Body" subtab
  - check the "raw" radio button
  - select "JSON" format
  - write a JSON without specifying the id (the id will be generated by Spring JPA)
  - ➡send

```json
{
  "keyName": "CRMMANAGER",
  "name": "CRM Manager Backend API in Spring Boot",
  "description": "Official Project for the BACKEND of CRM Manager Application"
}
```

- ⬅The server will respond:

```json
{
  "timeStamp": "2024-01-07T20:26:48.4659638",
  "statusCode": 201,
  "status": "CREATED",
  "message": "Project created",
  "data": {
    "project": {
      "id": 2,
      "keyName": "CRMMANAGER",
      "name": "CRM Manager Backend API in Spring Boot",
      "description": "Official Project for the BACKEND of CRM Manager Application",
      "createdAt": "2024-01-07T20:26:48.465963800"
    }
  }
}
```

🟠 Note: With Spring Security dependency installed in our project, we will receive a 401 Unauthorized response when trying to send a POST request. We can temporarily disable (comment) spring security dependency in the project main `pom.xml` in order to test our API (Reference https://stackoverflow.com/questions/45232071/springboot-401-unauthorized-even-with-out-security):

```xml
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

Reference: https://stackoverflow.com/questions/45232071/springboot-401-unauthorized-even-with-out-security

<br/>

🔵 Send UPDATE request to update a server

- Open a new tab in Postman with the URL of http://localhost:8080/api/projects
- Set the request type to PUT request
- Click on "Body" subtab, check the "raw" radio button, and select "JSON" format
- Instead of this entry (that we currenly have in our database):

```json
{
  "id": 1,
  "keyName": "PORTFOLIO",
  "name": "HappyCat Portfolio",
  "description": "HappyCat Customer Portfolio",
  "createdAt": "2024-01-06"
}
```

- ➡We'll send this project:

```json
{
  "id": 1,
  "keyName": "PORTFOLIO",
  "name": "Custom HappyCat Portfolio",
  "description": "Customized Portfolio for HappyCat Portfolio via separate contract"
}
```

- ⬅The server will respond:

```json
{
  "timeStamp": "2024-01-07T20:42:01.8811525",
  "statusCode": 200,
  "status": "OK",
  "message": "Project updated",
  "data": {
    "project": {
      "id": 1,
      "keyName": "PORTFOLIO",
      "name": "Custom HappyCat Portfolio",
      "description": "Customized Portfolio for HappyCat Portfolio via separate contract",
      "createdAt": "2024-01-06"
    }
  }
}
```

<br/>

🔵 Send DELETE request to delete a server http://localhost:8080/api/projects/3

- ⬅The server will respond:

```json
{
  "timeStamp": "2024-01-07T20:52:51.8763893",
  "statusCode": 200,
  "status": "OK",
  "message": "Project deleted",
  "data": {
    "deleted": true
  }
}
```

<br/>

Commit message as of 2024-01-07:

```
Create CRUD RESTful API for Project

1. Create Project Model class
2. Create ProjectRepository
3. Create ProjectService Interface and ProjectServiceImplementation
4. Create a Response model that include additional helpful properties
    - timeStamp
    - statusCode
    - status (e.g. OK 200, CREATED 201, BAD_REQUEST 400, INTERNAL_SERVER_ERROR 500, etc)
    - reason
    - message (a human-readable message that can be shown to the end user)
    - developerMessage (a more technical message for developers or for debugging purposes)
    - data
5. Create ProjectResource / Controller to expose API URLs
6. Database configuration in application.yml

- Temporarily comment spring-boot-starter-security in pom.xml for API Testing

(Sunday, January 07, 2024, 20:59)
```

<br/>

# Spring Security 5.7.x - HTTP Basic Authentication

- Protect API routes (Only unprotected routes can be accessed by non-authenticated users)
- Create new user account functionality
- Log in with existing account
- Authenticated users are authorized
- Roles to manage access control

[Spring Boot API with Spring Security and Docker - Security Overview - 1h09m](https://youtu.be/0iNmWIi5rG4?t=4140)

_From Roland Toussaint "Junior"_: Whenever we add the spring boot security dependency in our spring boot application, we will have a "Spring Security Filter Chain" in front of our application (the REST API) / in front of the "[Dispatcher Servlet](https://www.geeksforgeeks.org/what-is-dispatcher-servlet-in-spring/)":

![Spring Boot Security Application Architecture](./SpringBootAPIwithSpringSecurity/SpringArchitecture02.jpg)

In Spring Security, we have to configure an authentication provider - Spring Security also has a default authentication provider called [`DaoAuthenticationProvider`](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/dao-authentication-provider.html). We can also provide a `UserDetailsService` which tells spring security how to load the users (e.g. load users from memory / a file / database).

Spring Documentation:

- https://spring.io/guides/topicals/spring-security-architecture/
- Authentication Provider (does the actual authentication, checks for username password email etc) https://docs.spring.io/spring-security/site/docs/4.0.x/apidocs/org/springframework/security/authentication/AuthenticationProvider.html

AbstractUserDetailsAuthenticationProvider

<br/>

## Web Security configuration using Spring Security 5.7.11 with STATELESS Sessions

[Spring Boot API with Spring Security and Docker - Security Overview - 1h13m](https://youtu.be/0iNmWIi5rG4?t=4395)

Other useful resources:

- https://stackoverflow.com/questions/76993442/deprecated-csrf-and-requireschannel-methods-after-spring-boot-v3-migration
- https://codejava.net/frameworks/spring-boot/spring-security-fix-deprecated-methods
- https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter/

<br/>

Let's begin:

- On `\src\main\java\com\radubulai\springbootapisecurity`: Create `security` package
- Within `security` package, create `WebSecurityConfiguration` java class

```java
// WebSecurityConfiguration.java using Spring Security 5.7.11 and Spring Boot 2.7.18
package com.radubulai.springbootapisecurity.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-08
 */
@RequiredArgsConstructor
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration {
    private final AccountAuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder =
                http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.authenticationProvider(authenticationProvider);

        http.csrf().disable();
        http.authorizeHttpRequests()
                .antMatchers(HttpMethod.POST, "/api/accounts/**").permitAll();
        http.authorizeHttpRequests()
                .anyRequest()
                .hasAnyRole("USER", "ADMIN")
                .and()
                .httpBasic(Customizer.withDefaults())
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        return http.build();
    }
}
```

Notes:

- In Spring Security 6.x, we will also need to add `@Configuration` annotation:

```java
// In Spring Security 6.x, the annotations will be:
@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
/* @EnableGlobalMethodSecurity(prePostEnabled = true) is DEPRECATED
 * Use @EnableMethodSecurity instead which has prePostEnabled default true
 * https://stackoverflow.com/questions/74910066/enableglobalmethodsecurity-is-deprecated-in-the-new-spring-boot-3-0
 */
@EnableMethodSecurity
public class WebSecurityConfiguration {}
```

- We will create `AccountAuthenticationProvider` later, which will be used to verify if the password entered is not null and it matches the actual account's password (`AccountAuthenticationProvider` is a custom implementation for authenticating user accounts).

- `http.csrf().disable();` disables CSRF (Cross-Site Request Forgery) protection. This is acceptable in stateless scenarios, like when using JWT (JSON Web Tokens) for authentication.

- Authorization Configuration:

  - `.authorizeHttpRequests().antMatchers(HttpMethod.POST, "/api/accounts/**").permitAll();` permits all POST requests to "/api/accounts/\*\*" without authentication.
  - `.authorizeHttpRequests().anyRequest().hasAnyRole("USER", "ADMIN")` requires any other request to be authenticated and have either "USER" or "ADMIN" role.

- `.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);` configures session management to be stateless. This is common in RESTful APIs where sessions are not used, and each request is expected to carry authentication information.

---

> From ChatGPT 3.5 - Sunday, January 21, 2024

---

> A stateless session, also known as sessionless or token-based authentication, refers to a type of session management in which the server does not store any information about the client's state between requests. Each request from a client to the server is treated as an independent and self-contained transaction. In the context of web applications and APIs, stateless sessions are often associated with token-based authentication mechanisms.
>
> Key characteristics of stateless sessions:
>
> 1. **No Server-Side Session Storage:** - Unlike traditional server-side session management, where the server stores session information on behalf of the client, stateless sessions do not rely on server-side storage. Each request is self-contained and includes all the information needed for authentication.
> 2. **Token-Based Authentication:** - Stateless sessions often use tokens (e.g., JSON Web Tokens or JWTs) to carry authentication information. The client includes the token in the request header, and the server validates the token to authenticate the user.
> 3. **Scalability:** - Stateless sessions are inherently more scalable because the server does not need to maintain session state for each client. This makes it easier to distribute requests across multiple servers in a load-balanced environment.
> 4. **Reduced Server-Side Complexity:** - With stateless sessions, there is no need for the server to manage and persist session data. This simplifies server-side logic and eliminates the need for server affinity, making the system more robust and scalable.
> 5. **Independence of Requests:** - Each client request contains all the information needed for the server to process the request, including authentication details. The server does not rely on information from previous requests or maintain any client-specific state between requests.
> 6. **Token Expiration Handling:** - Token-based authentication often involves the use of expiration times within the tokens. Clients need to obtain new tokens periodically by re-authenticating, providing a mechanism for managing access and improving security.
>
> Stateless sessions are particularly well-suited for scenarios where scalability, simplicity, and independence of requests are critical, such as in RESTful APIs and microservices architectures. They are commonly used in combination with token-based authentication to secure communication between clients and servers in a stateless manner.

---

> HTTP Basic Authentication is a simple authentication scheme built into the HTTP protocol. **It involves the client sending a base64-encoded string containing both the username and password with each HTTP request**. The server, in turn, checks the provided credentials against its authentication system.
>
> In Spring Security, configuring HTTP Basic Authentication with default settings involves using the `httpBasic()` method.
>
> ```java
> http.httpBasic(Customizer.withDefaults());
> ```
>
> 1. **`httpBasic()`:** - This method is part of the `HttpSecurity` configuration in Spring Security. It indicates that you want to configure HTTP Basic Authentication for your application.
>
> 2. **`Customizer.withDefaults()`:** - The `Customizer` class is used to customize various aspects of Spring Security configurations. `withDefaults()` is a method that provides a set of default settings for HTTP Basic Authentication.
>
> When you use `httpBasic(Customizer.withDefaults())`, you are essentially configuring your application to use HTTP Basic Authentication with the following default settings:
>
> - **Username and Password Prompt:** - When a client tries to access a secured resource without providing valid credentials, the server responds with an HTTP 401 Unauthorized status and includes a `WWW-Authenticate` header, prompting the client to provide a username and password.
>
> - **Default Realm:** - The realm is a description of the protected area. With default settings, the realm is typically set to "Realm", but you can customize it if needed.
> - **Security Configuration for Stateless Authentication:** - It aligns with the stateless session management policy, meaning each request must contain valid authentication credentials, and there is no server-side session state (stateless session).
>
> Here's a simplified example of what an HTTP response header might look like when using HTTP Basic Authentication (Note: see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)
>
> ```
> HTTP/1.1 401 Unauthorized
> WWW-Authenticate: Basic realm="Realm"
> ```
>
> The client then includes an `Authorization` header in subsequent requests with the base64-encoded credentials:
>
> ```
> GET /secured/resource HTTP/1.1
> Host: example.com
> Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
> ```
>
> In the provided code, `Customizer.withDefaults()` is used to accept the default settings for HTTP Basic Authentication, providing a quick way to enable basic authentication in Spring Security with minimal configuration.

---

<br/>

## Account Model, Repository and Service

### Account and Role Model

[Spring Boot API with Spring Security and Docker - Account Domain Model - 1h13m](https://youtu.be/0iNmWIi5rG4?t=4834)

- In order to define the `authenticationProvider`, we first need to define the **user** accounts, namely the `Account` and `Role` models, repositories, and services.
- Inside `model` package, create `Account` java class

```java
// Account.java
package com.radubulai.springbootapisecurity.model;

// import jakarta.persistence.*; // for Spring Boot 3.2.1 and its dependencies
import javax.persistence.*; ; // for Spring Boot 2.7.18 and its dependencies
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-08
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    @NotNull
    private String username;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotNull
    private String password;
    private boolean enabled = true;
    private boolean credentialsExpired = false;
    private boolean expired = false;
    private boolean locked = false;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "AccountRole",
            joinColumns = @JoinColumn(name = "accountId", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "roleId", referencedColumnName = "id")
    )
    private Set<Role> roles;
}
```

Note: Using `@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)` will prevent the password from being exposed in the JSON response of an account (`password` field will be hidden if we make a GET request to `/api/accounts` or `api/accounts/<username>` endpoints).

<br/>

- Inside `model` package, create `Role` java class

```java
package com.radubulai.springbootapisecurity.model;

// import jakarta.persistence.*; // for Spring Boot 3.2.1 and its dependencies
import javax.persistence.*; ; // for Spring Boot 2.7.18 and its dependencies
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-08
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Role {
    @Id
    @GeneratedValue
    private Long id;
    private String code;
    private String name;

    // Role - High level
    // Permissions or authorities - more specific
}
```

![Database Account and Role Tables](./SpringBootAPIwithSpringSecurity/Database_AccountAndRole.jpg)

<br/>

### Account and Role Repository

[Spring Boot API with Spring Security and Docker - Account Repository - 1h28m](https://youtu.be/0iNmWIi5rG4?t=5326)

- Inside `repository` package, create `AccountRepository` java interface

```java
package com.radubulai.springbootapisecurity.repository;

import com.radubulai.springbootapisecurity.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-10
 */
public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findAccountByUsername(String username);
}
```

Note: The username needs to be unique.

<br/>

- Inside `repository` package, create `RoleRepository` java interface

```java
package com.radubulai.springbootapisecurity.repository;

import com.radubulai.springbootapisecurity.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findRoleByName(String name);
}
```

<br/>

### Account Service

[Spring Boot API with Spring Security and Docker - Account Service Implementation - 1h32m](https://youtu.be/0iNmWIi5rG4?t=5516)

- Inside `service` package, create `AccountService` java interface

```java
package com.radubulai.springbootapisecurity.service;

import com.radubulai.springbootapisecurity.model.Account;

import java.util.List;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-10
 */
public interface AccountService {
    Account createAccount(Account account);
    Account findAccountByUsername(String username);
    List<Account> findAllAccounts();
}
```

- Inside `service/implementation` package, create `AccountServiceImpl` java class

```java
// AccountServiceImpl.java
package com.radubulai.springbootapisecurity.service.implementation;

import com.radubulai.springbootapisecurity.model.Account;
import com.radubulai.springbootapisecurity.model.Role;
import com.radubulai.springbootapisecurity.repository.AccountRepository;
import com.radubulai.springbootapisecurity.repository.RoleRepository;
import com.radubulai.springbootapisecurity.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-10
 */
@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {
    private final AccountRepository accountRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Account createAccount(Account account) {
        account.setPassword(passwordEncoder.encode(account.getPassword()));
        Role role = roleRepository.findRoleByName("ROLE_USER");
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        account.setRoles(roles);
        return accountRepository.save(account);
    }

    @Override
    public Account findAccountByUsername(String username) {
        return accountRepository.findAccountByUsername(username);
    }

    @Override
    public List<Account> findAllAccounts() {
        return accountRepository.findAll();
    }
}
```

> 1. **Annotations:**
>
>    - `@Service`: Indicates that this class is a service component in a Spring application. It is used to annotate classes at the service layer, which typically contains business logic.
>    - `@RequiredArgsConstructor`: Lombok annotation that generates a constructor with required fields. In this case, it generates a constructor for the `AccountServiceImpl` class with the `accountRepository`, `roleRepository`, and `passwordEncoder` fields.
>
> 2. **createAccount Method:**
>
>    - `account.setPassword(passwordEncoder.encode(account.getPassword()));`: Encodes the user's password using the injected `PasswordEncoder`. This is crucial for storing passwords securely/encoded. The "account" object is retrieved from the `AccountResource` (Controller) when making a POST request to `/api/accounts`.
>    - `Role role = roleRepository.findRoleByName("ROLE_USER");`: Retrieves the user role ("ROLE_USER") from the database using the `RoleRepository` (so we can assign the role to the new user account).
>      - Note: the "ROLE_USER" entry must exist beforehand in the MySQL database. Here it would be better if we check/create an exception for this case.
>    - `Set<Role> roles = new HashSet<>(); roles.add(role);`: Creates a set of roles and adds the retrieved role to it.
>    - `account.setRoles(roles);`: Associates the set of roles with the user account.
>    - `return accountRepository.save(account);`: Saves the user account with the encoded password and associated role(s) to the database using the `AccountRepository`. The saved `Account` entity is then returned.
>
> 3. **findAccountByUsername Method:**
>
>    - `public Account findAccountByUsername(String username)`: Method for finding a user account by username.
>    - `return accountRepository.findAccountByUsername(username);`: Retrieves a user account from the database based on the provided username using the `AccountRepository`.
>
> 4. **findAllAccounts Method:**
>
>    - `public List<Account> findAllAccounts()`: Method for retrieving a list of all user accounts.
>    - `return accountRepository.findAll();`: Retrieves all user accounts from the database using the `AccountRepository`.
>
> This service class encapsulates the logic for managing user accounts, including creating accounts, finding accounts by username, and retrieving a list of all accounts. It integrates with repositories for database interaction and uses a password encoder for secure password storage.

<br/>

#### Password Encoder configuration

[Spring Boot API with Spring Security and Docker - Account Service Implementation - 1h37m](https://youtu.be/0iNmWIi5rG4?t=5853)

For the above `AccountServiceImpl`, we need to define the password encoder.

- Inside `security` package, create `SecurityConfiguration` java class

```java
package com.radubulai.springbootapisecurity.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-10
 */
@Configuration
public class SecurityConfiguration {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

---

> 1. **Annotations:**
>
>    - `@Configuration`: Indicates that this class is a configuration class for the Spring application context. It is used to define beans, configurations, and other settings.
>
> 2. **`passwordEncoder` Bean Method:**
>
>    - `@Bean`: Indicates that this method produces a bean that should be managed by the Spring container. Note: Beans created using `@Bean` have a singleton scope. This means that a single instance of the bean is shared across the entire Spring container. A Spring bean is essentially an instance of a class that is managed by the Spring container, and it is typically created from a class that is annotated with `@Component`, `@Service`, `@Repository`, or defined using `@Bean`.
>    - `public PasswordEncoder passwordEncoder()`: This method creates and configures a `PasswordEncoder` bean.
>    - `return new BCryptPasswordEncoder();`: It returns a new instance of `BCryptPasswordEncoder`. `BCryptPasswordEncoder` is one of the implementations of the `PasswordEncoder` interface provided by Spring Security.
>
> 3. **`BCryptPasswordEncoder`:**
>
>    - `BCryptPasswordEncoder` is a password encoder that uses the bcrypt hashing function. It's a popular choice for securely hashing passwords. The bcrypt algorithm incorporates a salt and is designed to be computationally expensive, making it resistant to brute-force attacks.
>
> 4. **Purpose:**
>    - The purpose of this configuration class is to define a bean for the `PasswordEncoder`. The `PasswordEncoder` is a crucial component in Spring Security for encoding and verifying passwords. When storing user passwords in a database, it's a best practice to store hashed and salted versions of the passwords to enhance security.
>    - By providing a `BCryptPasswordEncoder` bean, the application can use this bean to encode passwords before storing them and to verify passwords during the authentication process.
>    - The `BCryptPasswordEncoder` is a sensible default choice for password encoding in Spring Security. However, you can customize the password encoding strategy based on your application's security requirements.
>
> In summary, the `SecurityConfiguration` class ensures that a `BCryptPasswordEncoder` bean is available in the Spring application context, allowing other components, such as the `AccountServiceImpl`, to use it for secure password storage and verification in the authentication process.
>
> ---
>
> How BCryptPasswordEncoder Works:
>
> 1. **Hashing with Salt:** BCrypt uses a technique called "salt" to enhance password security. A salt is a random value unique to each password hash.
>
> 2. **Cost Factor:** BCrypt allows you to configure a cost factor, which determines the computational cost of hashing. Higher cost factors make hashing more computationally expensive and time-consuming, adding an extra layer of security.
>
> 3. **Hashing Algorithm:** BCrypt uses the Blowfish encryption algorithm internally. It's designed to be slow and computationally intensive, which helps protect against brute-force attacks.
>
> Example Usage:
>
> 1] Hashing a Password:
>
> ```java
> import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
>
> public class BCryptExample {
>
>     public static void main(String[] args) {
>         String rawPassword = "mySecretPassword";
>
>         // Create an instance of BCryptPasswordEncoder with a default strength (cost factor of 10)
>         BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
>
>         // Hash the password with salt
>         String hashedPassword = passwordEncoder.encode(rawPassword);
>
>         System.out.println("Raw Password: " + rawPassword);
>         System.out.println("Hashed Password: " + hashedPassword);
>     }
> }
> ```
>
> In this example, `rawPassword` is hashed using the `BCryptPasswordEncoder`. The resulting hash includes the salt, and the output will look something like this:
>
> ```
> Raw Password: mySecretPassword
> Hashed Password: $2a$10$XhBWssBDg/LupX.H6Sc9JeCx8kcKXeKzHDxjz5ntM1kLEyAT53b76
> ```
>
> 2] Verifying a Password:
>
> ```java
> import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
>
> public class BCryptExample {
>
>     public static void main(String[] args) {
>         String rawPassword = "mySecretPassword";
>         String hashedPassword = "$2a$10$XhBWssBDg/LupX.H6Sc9JeCx8kcKXeKzHDxjz5ntM1kLEyAT53b76";
>
>         // Create an instance of BCryptPasswordEncoder
>         BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
>
>         // Check if the raw password matches the hashed password
>         boolean matches = passwordEncoder.matches(rawPassword, hashedPassword);
>
>         System.out.println("Password Matches: " + matches);
>     }
> }
> ```
>
> In this example, the `matches` method is used to verify if the raw password matches the hashed password. It returns `true` if the passwords match, indicating a successful verification.
>
> This is a simple demonstration of how to hash and verify passwords using `BCryptPasswordEncoder`. It's important to note that the actual hashed password will be different each time due to the random salt generated during the hashing process. The `matches` method takes care of extracting the salt from the stored hash for verification.

---

<br/>

## User Details Service - Tell Spring Security how to load the users / accounts

[Spring Boot API with Spring Security and Docker - Account Service Implementation - 1h39m](https://youtu.be/0iNmWIi5rG4?t=5949)

Bafore we create the authenticationProvider (needed in `WebSecurityConfiguration` > `SecurityFilterChain`) we need to create the `UserDetailsService` interface and the `UserDetailsServiceImpl` class.

UserDetailsService implementation will tell _Spring Security_ how to load the users (that can be now stored in the MySQL database via `Account` table)

> _"Junior: We know how to load the users in Spring, but Spring Security does not know yet, and to tell Spring Security how, we need to implement/override the `loadUserByUsername` method within `UserDetailsService`"_

- Inside `service/implementation` package, create `UserDetailsServiceImpl` java class
  - Note: The `UserDetailsService` interface already exists in `org.springframework.security.core.userdetails.UserDetailsService;`, and we only need to override the `loadUserByUsername` method

```java
// UserDetailsServiceImpl.java
package com.radubulai.springbootapisecurity.service.implementation;

import com.radubulai.springbootapisecurity.model.Account;
import com.radubulai.springbootapisecurity.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-10
 */
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final AccountService accountService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountService.findAccountByUsername(username);

        if (account == null) {
            throw new UsernameNotFoundException(String.format("User %s not found", username));
        }
        if (account.getRoles() == null || account.getRoles().isEmpty()) {
            throw new RuntimeException(String.format("User %s has no roles", username));
        }
        Collection<SimpleGrantedAuthority> authorities = account.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName())).toList();
        return new User(account.getUsername(),
                account.getPassword(),
                account.isEnabled(),
                !account.isExpired(),
                !account.isCredentialsExpired(),
                !account.isLocked(),
                authorities);
    }
}
```

> The `UserDetailsServiceImpl` class is a service class that implements the Spring Security `UserDetailsService` interface. This interface is a core part of Spring Security, responsible for loading user-specific data for authentication.
>
> 1. **Annotations:**
>    - `@Service`: Indicates that this class is a service component in a Spring application.
>    - `@RequiredArgsConstructor`: Lombok annotation that generates a constructor with required fields.
> 2. **Fields:**
>    - `private final AccountService accountService;`: Autowired instance of `AccountService`, which presumably provides methods for accessing user account information.
> 3. **`loadUserByUsername` Method:**
>    - This method is from the `UserDetailsService` interface and is overridden here to load user-specific data during authentication.
>    - It takes a username as input and returns a `UserDetails` object containing user information.
>    - Inside the method, the `AccountService` is used to find an `Account` object by username.
>    - If the account is not found, it throws a `UsernameNotFoundException`.
>    - If the account doesn't have any roles associated with it, it throws a `RuntimeException`.
>    - It maps the roles associated with the account to `SimpleGrantedAuthority` objects, which represent the authorities (roles) granted to the user.
>    - Finally, it constructs and returns a `UserDetails` object with the username, password, account status (enabled, expired, credentials expired, locked), and authorities.

<br/>

## Account Authentication Provider

[Spring Boot API with Spring Security and Docker - Account Service Implementation - 1h45m](https://youtu.be/0iNmWIi5rG4?t=6326)

(Friday, Jan 26, 2024, 16:59)

This class is responsible for authenticating users based on the provided credentials and loading user details using the `UserDetailsService` created earlier.

- Inside `security` package, create `AccountAuthenticationProvider` java class

```java
// AccountAuthenticationProvider.java
package com.radubulai.springbootapisecurity.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * @author Radu-Alexandru Bulai (<a href="https://radubulai.com">https://radubulai.com</a>)
 * @version 1.0
 * @since 2024-01-08
 */
@Component
@RequiredArgsConstructor
public class AccountAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    @Override
    protected void additionalAuthenticationChecks(
            UserDetails userDetails,
            UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {

        if (authentication.getCredentials() == null || userDetails.getPassword() == null) {
            throw new BadCredentialsException("Credentials may not be null");
        }
        if (!passwordEncoder.matches((String) authentication.getCredentials(), userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }
    }

    @Override
    protected UserDetails retrieveUser(
            String username,
            UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
        return userDetailsService.loadUserByUsername(username);
    }
}
```

Now `AccountAuthenticationProvider authenticationProvider` can be used/injected within `SecurityFilterChain filterChain`.

<br/>

## Account Resource / Controller

[Spring Boot API with Spring Security and Docker - Account Resource - 1h50m](https://youtu.be/0iNmWIi5rG4?t=6645)

So far we do not have any users (or any roles) stored in the database, therefore the app resources are not accessible.

We can create the account resource class that will allow us to make POST requests to create new users/accounts (Note that in the `SecurityFilterChain`, we will allow such POST requests to http://localhost:8080/api/accounts/ URL).

- Inside `resource` package, create `AccountResource` java class

```java
package com.radubulai.springbootapisecurity.resource;

import com.radubulai.springbootapisecurity.model.Account;
import com.radubulai.springbootapisecurity.model.Response;
import com.radubulai.springbootapisecurity.service.AccountService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static java.time.LocalDateTime.now;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/accounts")
public class AccountResource {
    private final AccountService accountService;

    @GetMapping
    public ResponseEntity<Response> getAllAccounts() {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("accounts", accountService.findAllAccounts()))
                        .message("Accounts retrieved")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }

    @GetMapping("/{username}")
    public ResponseEntity<Response> getAccountByUsername(@PathVariable String username) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("account", accountService.findAccountByUsername(username)))
                        .message(String.format("Account %s retrieved", username))
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }

    @PostMapping
    public ResponseEntity<Response> createAccount(@RequestBody @Valid Account account) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("account", accountService.createAccount(account)))
                        .message("Account created")
                        .status(HttpStatus.CREATED)
                        .statusCode(HttpStatus.CREATED.value())
                        .build());
    }
}
```

<br/>

So far, here is how the codebase will look like:

![Spring Security 5.7.1.1 Project Codebase Example](./SpringBootAPIwithSpringSecurity/SpringSecurity5.7.1.1_ProjectCodebase01.jpg)

<br/>

Or, if we order the components by their implementation order:

![Spring Security 5.7.1.1 Project Codebase Example](./SpringBootAPIwithSpringSecurity/SpringSecurity5.7.1.1_ProjectCodebase02.jpg)

<br/>

## (Optional) ApplicationStartRunner

[Spring Boot API with Spring Security and Docker - Application Runner - 1h55m](https://youtu.be/0iNmWIi5rG4?t=6889)

Currently, since accounts needs to be associated with a role, we will also need to have some roles stored in the database when the application is running.

We can either insert some roles into the MySQL database by ourselves manually, e.g.:

```sql
INSERT INTO `projectmanagerapp`.`role` (`id`, `code`, `name`) VALUES ('1', '123', 'ROLE_USER');
INSERT INTO `projectmanagerapp`.`role` (`id`, `code`, `name`) VALUES ('2', '456', 'ROLE_ADMIN');
```

OR: we can use the `ApplicationStartRunner` class (implements `CommandLineRunner`) to insert some roles into the database automatically when the application starts.

- On `\src\main\java\com\radubulai\springbootapisecurity`: Create `initialization` package
- Inside `initialization` package, create `ApplicationStartRunner` java class

```java
// ApplicationStartRunner.java
package com.radubulai.springbootapisecurity.initialization;

import com.radubulai.springbootapisecurity.model.Role;
import com.radubulai.springbootapisecurity.repository.AccountRepository;
import com.radubulai.springbootapisecurity.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import static java.util.Arrays.asList;

@Component
@RequiredArgsConstructor
public class ApplicationStartRunner implements CommandLineRunner {
    private final RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        Role roleUser = new Role(1L, "123", "ROLE_USER");
        Role roleAdmin = new Role(2L, "456", "ROLE_ADMIN");
        roleRepository.saveAll(asList(roleUser, roleAdmin));
    }
}
```

> The `ApplicationStartRunner` class is a part of the application initialization process. It ensures that the database has the necessary roles available when the application starts.
>
> 1. **Annotations:**
>
>    - `@Component`: Indicates that this class is a Spring-managed component and should be automatically detected and registered as a bean in the Spring application context.
>    - `@RequiredArgsConstructor`: Lombok annotation that generates a constructor with required fields.
>
> 2. **Fields:**
>
>    - `private final RoleRepository roleRepository;`: Autowired instance of `RoleRepository`, which is used to interact with the database to store role entities.
>
> 3. **`run` Method:**
>
>    - This method is from the `CommandLineRunner` interface, and it's invoked when the Spring Boot application starts up.
>    - It creates instances of the `Role` entity representing different roles in the application. In this case, it creates "ROLE_USER" and "ROLE_ADMIN" roles.
>    - It saves these roles to the database using the `roleRepository.saveAll` method.
>
> 4. **Populating the Database:**
>    - When the Spring Boot application starts, the `run` method of the `ApplicationStartRunner` class is executed automatically.
>    - This ensures that the database is populated with the initial roles required for user management and authorization.

Note: The above might update the roles if they already exist in the database when starting the application. Optionally, we can check if the roles already exists in the database:

```java
@Slf4j
@Component
@RequiredArgsConstructor
public class ApplicationStartRunner implements CommandLineRunner {
    private final RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        createRoleIfNotExists(new Role(1L, "123", "ROLE_USER"));
        createRoleIfNotExists(new Role(2L, "456", "ROLE_ADMIN"));
    }

    private void createRoleIfNotExists(Role newRole) {
        Optional<Role> existingRole = Optional.ofNullable(roleRepository.findRoleByName(newRole.getName()));
        if (existingRole.isPresent()) {
            log.info("Role '{}' already exists in the database.", newRole.getName());
            return;
        }
        try {
            roleRepository.save(newRole);
            log.info("Role '{}' added in database.", newRole);
        } catch (Exception e) {
            assert log != null;
            log.error("Failed to add role '{}' in database: {}", newRole, e.getMessage());
        }
    }
}
```

<br/>

## Testing Basic Auth with Postman

(Sunday, January 28, 2024, 21:30)

[Spring Boot API with Spring Security and Docker - Application Runner - 2h00m](https://youtu.be/0iNmWIi5rG4?t=7250)

🔵 Send a GET request to http://localhost:8080/api/projects without basic auth credentials

- Expected Response: 401 Unauthorized

![Spring Security Postman](./SpringBootAPIwithSpringSecurity/Postman_Security01.jpg)

<br/>

🔵 Send a POST request to http://localhost:8080/api/accounts/ with new Account information (No auth credentials)

```json
{
  "username": "raduu",
  "password": "123"
}
```

⬅The server will respond:

```json
{
  "timeStamp": "2024-01-28T21:11:40.2450229",
  "statusCode": 201,
  "status": "CREATED",
  "message": "Account created",
  "data": {
    "account": {
      "id": 7,
      "username": "raduu",
      "enabled": true,
      "credentialsExpired": false,
      "expired": false,
      "locked": false,
      "roles": [
        {
          "id": 1,
          "code": "123",
          "name": "ROLE_USER"
        }
      ]
    }
  }
}
```

> Note: Using `@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)` in Account.java model will prevent the password from being exposed in the JSON response of an account (password field will be hidden if we make a GET or POST request to `/api/accounts` or `api/accounts/<username>` endpoints).

<br/>

🔵 Send a GET request to http://localhost:8080/api/projects with basic auth credentials

⬅The server will respond with Status 200 OK

![Spring Security Postman](./SpringBootAPIwithSpringSecurity/Postman_Security02.jpg)

```json
{
  "timeStamp": "2024-01-28T21:27:12.595993",
  "statusCode": 200,
  "status": "OK",
  "message": "Projects retrieved",
  "data": {
    "projects": [
      {
        "id": 1,
        "keyName": "PORTFOLIO",
        "name": "Custom HappyCat Portfolio",
        "description": "Customized Portfolio for HappyCat Portfolio via separate contract",
        "createdAt": "2024-01-06"
      },
      {
        "id": 2,
        "keyName": "CRMMANAGER",
        "name": "CRM Manager Backend API in Spring Boot",
        "description": "Official Project for the BACKEND of CRM Manager Application",
        "createdAt": "2024-01-07T20:26:48.465963800"
      }
    ]
  }
}
```

<br/>

🔵 Send a GET request to http://localhost:8080/api/accounts with basic auth credentials

⬅The server will respond with Status 200 OK

![Spring Security Postman](./SpringBootAPIwithSpringSecurity/Postman_Security03.jpg)

![Spring Security Postman](./SpringBootAPIwithSpringSecurity/Postman_Security04.jpg)

```json
{
  "timeStamp": "2024-01-28T21:29:31.0205829",
  "statusCode": 200,
  "status": "OK",
  "message": "Accounts retrieved",
  "data": {
    "accounts": [
      {
        "id": 7,
        "username": "raduu",
        "enabled": true,
        "credentialsExpired": false,
        "expired": false,
        "locked": false,
        "roles": [
          {
            "id": 1,
            "code": "123",
            "name": "ROLE_USER"
          }
        ]
      }
    ]
  }
}
```

<br/>
<br/>
<br/>

---

Commit message for all Spring Security implementation from above:

```md
Implement Security Filter Chain for REST API in Spring Security 5.7.11

- Downgrade Spring Boot 3.2.1 to Spring Boot 2.7.18
  - Spring Security 6.x will be downgrated as well to Spring Security 5.7.11
  - In Account.java, Project.java, Role.java models
    - Change imports of `import jakarta.persistence.*; import jakarta.validation.constraints.NotEmpty;` (Sprint Boot 3.2.1) to `import javax.persistence.*; import javax.validation.constraints.*;` (Spring Boot 2.7.18)
  - In application.yml
    - Change automatically dialect `dialect: org.hibernate.dialect.MySQLDialect` (Spring Boot 3.2.1) to `dialect: org.hibernate.dialect.MySQL5InnoDBDialect` (Spring Boot 2.7.18)
- pom.xml
  - Uncomment dependency org.springframework.boot
- Account.java, AccountRepository, AccountService + Role.java, RoleRepository
  - Implement Account and Role models, repositories and service
- UserDetailsServiceImpl.java
  - Implement User Details Service to tell Spring Security how to load the users / accounts
- AccountAuthenticationProvider.java
  - Implement Account Authentication Provider for validating user credentials and loading the user details from database (via UserDetailsServiceImpl by overriding the loadUserByUsername method)
- AccountResource.java
  - Expose REST API endpoints for Accounts (especially for POST request in order to create a new account)
- WebSecurityConfiguration.java
  - Define the SercurityFilterChain to set a series of security filters that intercept incoming HTTP Requests and apply security policies

(Sunday, January 28, 2024, 21:51 - Radu-Alexandru B.)
```

<br/>

# Deployment using Docker

[Spring Boot API with Spring Security and Docker - Dockerfile - 2h20m](https://youtu.be/0iNmWIi5rG4?t=8425)

TODO...
