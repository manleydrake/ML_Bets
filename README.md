# Sports Analysis Application  
The purpose of this application is to implement a machine learning algorithm that applies predictive analysis to determine which team is most likely to win. This will help users decide which team is most beneficial to place bets on.


## About 


### Functionality 
* Predictive Analysis
    * Who's going to win
    * Potential margin of victory
* Give game insight
    * Key matchups
    * Previous game statistics
    * Any player/injury updates that would affect game

### Tools and Technology
* Visual Studio 
* Visual Studio Code 
* Git 
* Python 
* SQL 
* ASP.Net MVC (C#)
* React.js 
* Bootstrap
* Azure/AWS
## High Level Steps for Development 
1. Scrape NBA Stats using Python Script              DONE (2/21/2021)
* Creating API Calls from [NBA Stats](Stats.NBA.com) DONE (2/21/2021)
* Clean data 
* Creating/Updating Database                         DONE (2/21/2021)          
* Error Handling  
* Testing (Load, Scalability)
### Process
   For this process we primarly referred to and used https://jaebradley.github.io/basketball_reference_web_scraper/api/, an API that scrapes information from          https://www.basketball-reference.com/. This helped us condense "scraping" and "creating an API" into one step. An added benefit of this API is it peridocially      updates the data.
### Database
   For our database we decided to use Azure, to which we connected our jyupter notebook containing the API Basketball_Reference Web Scraper.
   

2. ML Analysis 
* Machine learning model implemented 
* Attributes required
* Error Handling 
* Decide what Variables we are going to predict 
* Analysis storage location ?
* Testing (Regression, Unit, Load, Scalability)

### Machine Learning Models
   The purpose of these algorithm are to predict a winning team, therefore, this is a classification problem, since a category needs to be predicted. All of these models will utilize trianning examples (past data), features (columns), target variable (variable we are trying to predict ie. winning team), and predictor variables (variables used to make predictions of the target variable).
#### K-nearest-neghbors (KNN) along with normalization. 
   The purpose of the KNN algorithm is to determine (predicit) which class is the most commonly appearing amoung the k closest training examples.

3. Build Web API 
* ASP.Net MVC API endpoints 
* Error Handling 
* Testing (Automation, Speed, Postman)
4. Front End Development 
* TBD (Page Layout, Page Numbers, etc.)
* UAT Testing 
    * Testers ?
    * 5-6 Users play with user interface and see functionality     
5. Security 
* SSO Implementation 



## Links 

[NBA MySQL Server](https://medium.com/@jman4190/building-an-nba-mysql-database-with-python-c653fa15333c) 

[Azure with Jupyter Notebook](https://docs.microsoft.com/en-us/azure/machine-learning/how-to-run-jupyter-notebooks)
## Getting Started 