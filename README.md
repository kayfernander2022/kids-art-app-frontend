# Kids Art App 

The Kids Art App is a React frontend application where the user can store an image and description of their childs artwork to display to friends and family.

### [Link to Kids Art App](kids-art-app-frontend.netlify.app)

### Technologies Used

- React
- react-router-dom
- django
- CSS
- imageKit.io

### Component Architecture

[![](https://mermaid.ink/img/pako:eNpl0LEOwiAQBuBXITdponFnMKlFjZODOokDgdM2ttAgjRrju3tATGxkgv8DjuMF2hkEDufG3XWlfGB7IS2jURyLrjux6XS-GG370GAYZ1jEjJVHCTMJp59MxIiumPHaDGUZRXtUAYfAVlH6zpD8H2PrqAap9lDLpBtr8JEDkYJd5e55vUxrekuZihY61M5mWn3pkKr-0vpLIpXMBBNo0beqNvRNr7hRQqiwpU44TY3yVwnSvmmf6oPbPa0GHnyPE8h9iVpdvGqBn1Vzw_cHKfhttQ?type=png)](https://mermaid.live/edit#pako:eNpl0LEOwiAQBuBXITdponFnMKlFjZODOokDgdM2ttAgjRrju3tATGxkgv8DjuMF2hkEDufG3XWlfGB7IS2jURyLrjux6XS-GG370GAYZ1jEjJVHCTMJp59MxIiumPHaDGUZRXtUAYfAVlH6zpD8H2PrqAap9lDLpBtr8JEDkYJd5e55vUxrekuZihY61M5mWn3pkKr-0vpLIpXMBBNo0beqNvRNr7hRQqiwpU44TY3yVwnSvmmf6oPbPa0GHnyPE8h9iVpdvGqBn1Vzw_cHKfhttQ)


### Frontend Route Table

| Route    | Element    | Loader |Action| Description|
| :---    | :----: | :----:    | :----   |:----   |
|/        |Index  | indexLoader|         |Display a list of art|
|/art/:id |Show   | artLoader  |          |Display a specific piece of art|
|/create  |Create |         | artCreateAction|Handles submission of create form for art|
|/update/:id  |Update |      |artUpdateAction|Handles submission of update form for art|
|/delete/:id |Delete |       |artDeleteAction|Handles submission of delete form for art|


### Mockups
![mockups here](./public/project4wireframe1.jpeg)

### Trello Workspace
[Trello Board](https://trello.com/b/ORFSAKW2/kids-art-app-project)