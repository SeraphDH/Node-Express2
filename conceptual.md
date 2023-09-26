### Conceptual Exercise

Answer the following questions below:
 - What is a JWT?
JWT stands for "JSON Web Token." It is a compact, self-contained way to represent information between parties as a JSON object. JWTs are often used for securely transmitting information between a client and a server, and they are commonly used for authentication and authorization purposes in web applications.

 - What is the signature portion of the JWT? What does it do?
The signature portion of a JWT is one of its three main parts, along with the header and the payload. The signature is created by taking the encoded header, encoded payload, a secret key (or private key in the case of RS256), and a specified algorithm (e.g., HMAC SHA-256), and then hashing these components together. The signature is used to verify that the JWT has not been tampered with during transmission and that it was created by a trusted party. It ensures the integrity and authenticity of the data within the JWT.

 - If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, a JWT's payload is encoded, not encrypted, which means that if an attacker intercepts the JWT, they can easily decode and view the contents of the payload. Therefore, sensitive information should not be stored in the payload of a JWT unless it is intended to be publicly accessible.

 - How can you implement authentication with a JWT? Describe how it works at a high level.
JWT-based authentication works by having the server issue a JWT to a client after the client successfully logs in. The client then includes this JWT in subsequent requests to the server. Here's a high-level overview:

Authentication: The client provides valid credentials (e.g., username and password) to the server.
JWT Creation: Upon successful authentication, the server generates a JWT containing relevant user information (payload), signs it, and sends it back to the client.
Client Requests: The client includes the JWT in the Authorization header of subsequent requests to the server.
Server Validation: The server verifies the JWT's signature using its secret key (or public key if using RS256), ensuring it hasn't been tampered with. If the signature is valid, the server extracts the user information from the payload and grants access.
Compare and contrast unit, integration, and end-to-end tests.

Unit Tests: These tests focus on testing individual components or functions in isolation. They are typically small in scope and do not involve external dependencies. Unit tests are fast and help ensure that each piece of code works correctly in isolation.
Integration Tests: Integration tests check the interactions between different components, modules, or services within an application. They ensure that these parts work correctly together as a system. Integration tests may involve databases, external APIs, and other dependencies.
End-to-End Tests: End-to-end tests simulate user interactions with the entire application or a substantial part of it. They test the complete flow of a feature or user journey, often from the user interface. End-to-end tests are slower but provide confidence in the overall functionality of the application.

 - What is a mock? What are some things you would mock?
A mock is a simulated or fake object or component used in software testing to replace real dependencies and control their behavior during testing. Mocks are particularly useful in unit and integration testing. Some things you might mock include:

External services or APIs to avoid making actual network requests.
Database operations to prevent changes to the actual database during testing.
Functions or methods that have unpredictable behavior or side effects.
Hardware devices or sensors for testing software that interacts with physical devices.
 - What is continuous integration?
Continuous Integration (CI) is a software development practice where code changes are frequently and automatically integrated into a shared repository, followed by automated build and test processes. The primary goal of CI is to detect and address integration issues early in the development process, ensuring that the codebase remains stable and functional as new changes are added.

 - What is an environment variable and what are they used for?
Environment variables are variables that are part of the environment in which a process runs. They store configuration settings, system information, or other values that applications and services can access. Environment variables are used for various purposes, including:

Storing sensitive information like API keys or database credentials.
Configuring application settings, such as environment (development, production, etc.), debug modes, or feature flags.
Providing system information, like the path to executable files or system-specific parameters.

 - What is TDD? What are some benefits and drawbacks?
Test-Driven Development (TDD) is a software development methodology where developers write tests before writing the actual code. The process typically involves the following steps:

Write a failing test case.
Write the minimum code necessary to pass the test.
Refactor and optimize the code while ensuring that all tests still pass.
Benefits of TDD include improved code quality, better test coverage, early detection of defects, and increased confidence in code changes. However, drawbacks may include potential overhead in terms of time and effort spent writing tests, and the need for a mindset shift in development practices.

 - What is the value of using JSONSchema for validation?
JSONSchema is a standard for defining the structure and constraints of JSON data. Using JSONSchema for validation offers several benefits:

Data Validation: JSONSchema allows you to specify the expected structure of JSON data, which helps ensure that the data conforms to your expectations.
Documentation: JSONSchema serves as a form of documentation, making it clear what data should look like and how it should be structured.
Code Generation: JSONSchema can be used to generate code for data serialization/deserialization and validation, saving development time.
Interoperability: JSONSchema provides a standardized way to describe JSON data, which is useful in APIs and data exchange formats.

 - What are some ways to decide which code to test?
The decision on which code to test can be based on factors like:

Critical Functionality: Test code that is critical to the application's core functionality.
Complexity: Test complex code that is more likely to contain bugs.
Frequently Changing Code: Test code that undergoes frequent changes to catch regressions.
External Dependencies: Test code that interacts with external services or APIs.
Boundary Cases: Test code with different input boundaries and edge cases.
Business Logic: Test code that implements important business rules or calculations.

 - What does RETURNING do in SQL? When would you use it?
In SQL, the RETURNING clause is used in an INSERT, UPDATE, or DELETE statement to retrieve the values of columns affected by the operation. It allows you to obtain the values of specific columns for the rows that were inserted, updated, or deleted. You would use RETURNING when you need to access the values of the affected rows after performing the operation, often in situations where you want to retrieve generated values, such as auto-incremented IDs, or verify the changes made by the operation.

 - What are some differences between Web Sockets and HTTP?
 Connection Type:

HTTP: HTTP is a request-response protocol, meaning that a client sends a request to a server, and the server responds with a single response. It follows a stateless model, where each request-response pair is independent and doesn't maintain a persistent connection.
Web Sockets: Web Sockets allow full-duplex communication, where both the client and server can send data to each other at any time once a connection is established. Web Sockets maintain a persistent, low-latency connection, suitable for real-time applications.
Connection Establishment:

HTTP: HTTP follows a connectionless model, where a new connection is established for each request-response cycle. This can result in higher overhead when multiple requests are needed.
Web Sockets: Web Sockets establish a single, long-lived connection between the client and server. This connection can be reused for multiple messages, reducing overhead.
Data Format:

HTTP: HTTP primarily transfers data in plain text or structured formats like JSON or XML. The data is usually sent as part of the request or response body.
Web Sockets: Web Sockets transmit data as binary frames or text frames, allowing for more efficient binary data transfer. The data is sent as individual messages over the established connection.
Usage and Use Cases:

HTTP: HTTP is commonly used for traditional web browsing, RESTful API communication, and stateless request-response interactions. It is suitable for scenarios where real-time, bidirectional communication is not a requirement.
Web Sockets: Web Sockets are ideal for real-time applications like chat applications, online gaming, live updates, and collaborative tools, where low latency and bidirectional communication are crucial.
Overhead:

HTTP: HTTP requests and responses include headers that can add overhead, especially for small payloads. Multiple requests may result in redundant header information.
Web Sockets: Web Sockets have lower overhead compared to HTTP for continuous data transfer since the connection is persistent, and headers are minimal.
Security:

HTTP: HTTP can use security measures like HTTPS (HTTP Secure) to encrypt data in transit. Security features are typically applied at the transport layer.
Web Sockets: Web Sockets can also use secure connections (wss://), providing encryption for data in transit. Security features can be implemented at the application level.
Browser Support:

HTTP: Supported by all web browsers, as it is the foundation for web communication.
Web Sockets: Supported by modern web browsers, but may require polyfills or additional configurations for older browsers.
State Handling:

HTTP: Stateless by design, which means each request-response pair is independent, and the server does not maintain client state between requests.
Web Sockets: Web Sockets can maintain state on the server and allow for push notifications to clients without the need for repeated polling.
In summary, the choice between Web Sockets and HTTP depends on the specific requirements of your application. If you need low-latency, bidirectional, and persistent communication, Web Sockets are a better choice. If you have traditional request-response interactions or RESTful APIs, HTTP is more appropriate. In some cases, applications may use both protocols to meet different communication needs.

- Did you prefer using Flask over Express? Why or why not (there is no right
answer here --- we want to see how you think about technology)?
I preferred using Flask because I felt like it was easier to understand for me.  
