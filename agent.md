# Workspace rules

- This is pnpm workspace as a monorepo.
- We use TypeScript for all code and rely on type safety.
- The workspace is structured with multiple packages, each with its own `package.json`.
- We are using `pnpm` as the package manager.
- We are using nuxt v4 for our full-stack applications.
- For modularity and easy maintenance, we use nuxt layers to separate concerns. 
- Apps live in the `/apps/*` directory and layers live in the `/layers/*` directory.
- Each layer comes with its own playground app for testing and development.
- To create a new layer we use the template command `pnpm create nuxt -t layer <layer-name>`.
- After layer creation, we check for Nuxt v4 compatibility and update the directory structure if necessary.

## Coding rules

- We rely on maintancen and readability of the code.
- We make sure to use the SOLID principles in our code.
    - S: Single Responsibility Principle --> Make sure each module has a single responsibility and does not heavily depend on others.
    - O: Open/Closed Principle --> Modules should be open for extension but closed for modification. This means you can add new functionality without changing existing code.
    - L: Liskov Substitution Principle --> Ensure that objects of a superclass can be replaced with objects of a subclass without affecting the correctness of the program. Use Polymorphism to structure your code and reduce if clauses.
    - I: Interface Segregation Principle --> Clients should not be forced to depend on interfaces they do not use. This means creating smaller, more specific interfaces rather than a large, general-purpose one.
    - D: Dependency Inversion Principle --> High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). This helps to reduce coupling and increase flexibility.
- We are using the Ports and Adapters architecture (also known as Hexagonal Architecture) to structure our code so that we can easily swap out implementations without affecting the rest of the system.
- We write tests before writing code (TDD) to ensure that our code is correct and maintainable. Make sure to write tests which don't require a complicated setup. A complecated setup is a sign of breaking the SOLID principles.
- We use the latest convention for testing tools which are recommended by the Nuxt team.
- We work in tiny increments to have a safe development process. Remember "slow is smooth, and smooth is fast". This means we make small changes, test them, and then move on to the next change ensuring that our overall speed will be faster.

## Feature development

- On the go we will derive new features and document them in markdown files in the `/requirements` directory.
- Each feature will have its own directory in the `/requirements` directory.
- We define the bounded context and the use cases for each feature. It is important to clarify the interactions between the contexts and how it is agreed on to update interfaces.
- If we identify any gaps or inconsistencies in the requirements, we will address them before implementation.

## Overall Project Goals

- The goal of the project is to develop a personal tool that helps users to manager their knowledge work by collection sourece 
also described as artifacts, and create insights and their own toughts on any topic. It is focused on understanding and learning and should support the user in this by applying best practices and limiting freedom to not have to invent a new knowledge system on their own.


