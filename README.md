### This repo is a representation of possible data fetching patterns.

File structure:

![alt Tree](/treeV2.jpg)

#### There are three patterns used in this repo:

1. **Server and drilling:** Data for User and Projects is fetched in the Layout and Page, then passed down to the components below
1. **Server and drilling and react query:**
   - User Data:
     - Layout gets User Data and passes it to Server and Client Menu
     - Client Component Child gets the data through React Query because direct parent is not a server component
   - UserProjects Data:
     - is fetched directly in the ServerMenu and Client Component Child (react Query)
1. **Server and react query:** Data is fetched directly in the components that need the data, using Server functions or React query - depending on the component type.
