# React Router Dom v6 Nested Route Issue

This repository demonstrates a bug encountered when using nested routes within a route defined with a wildcard path ('*') in React Router Dom v6. Nested routes under the wildcard route fail to render correctly.

## Bug Description

The issue is that nested routes within a wildcard route are not rendering. The components associated with these nested routes are not being displayed when navigating to their respective paths.

## Solution

The solution involves restructuring the routes to avoid nesting within the wildcard route. By placing the nested routes at a higher level or reorganizing the routing logic, the rendering issue is resolved.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that nested routes under the wildcard route do not render.
5. Refer to the `AppSolution.js` file for a working solution.