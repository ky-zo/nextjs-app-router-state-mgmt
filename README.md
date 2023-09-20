### This repo is a representation of possible data fetching patterns.

File structure:

![alt Tree](/tree.jpg)

#### There are three patterns used in this repo:

1. **Server and drilling:** Data is fetched in the Layout and Page, then passed down to the componets below
1. **Server and drilling and react query:**
   - Layout - fetches the data on server and passes them down to Server and Client components, direct children that use the User Data
   - Client Component - fetches the data using React Query and Server Action, because direct parent is not a server component
1. **Server and react query:**
   - Data is fetched directly in the components that need the data, using Server functions or React query - depending on the type of the component.
