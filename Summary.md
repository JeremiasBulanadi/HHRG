# Summary

### 1. How long did it take to complete the work.
The work took around 25 hours; 5 hours of which are spent on the backend, while the rest was spent on the frontend.

### 2. What did you research to complete the work.
For the backend, I mostly needed to relearn Express since I haven't used it since college. Although a lot more research was spent on trying to handle state management on the frontend side.

### 3. Question: If you did use a database for the backend project, what kind would you use and why? 
I'd probably go still for a relational databse setup like mySQL. There's not too much data orgnizing that would benefit me here that the Non-relational database setups provide. Plus its a lot more familiar and is faster to process.

### 4. Can you give an example of how would you delete an employee from the database?
I'd probably be have the backend wait to receive authorized DELETE requests from the frontend. Whenever one comes through, use the data in the request to find the row with the correct ID. And then have that specific row in the Employees table be dropped.
