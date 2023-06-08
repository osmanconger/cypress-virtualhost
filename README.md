# cypress-virtualhost

This is a repository with a simple react application served using nginx to demonstrate that Cypress cannot access virtual hosts. Application is accessible at http://myapp.localhost from Chrome version 114, but not from Cypress.  
<br/><br/>
**Commands to run the application**  

cd cypress-virtualhost   

docker compose build  

docker compose up  
<br/><br/>
**Commands to run Cypress**  

cd testing  

npm install  

npm run cypress  
