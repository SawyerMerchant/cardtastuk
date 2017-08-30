# Card Tastuk

[![Card Tastuk](http://i.imgur.com/VJvo4Ry.png)](https://cardtastuk.herokuapp.com)
## Introduction
Card Tastuk is an ecommerce platform that allows users to upload large spreadsheets of their contacts and turn them into physical greeting cards which are automatically mailed to the addresses included in the spreadsheet.

Card Tastuk leverages Ruby on Rails in the back end with React/Redux on the front end.

## Technologies Used
Ruby and Rails is used to power the back end. The back end was completely built by my partner, [John Sawyer](https://github.com/sawyermerchant).

My responsibility was for the front end, which was built with React/Redux. Stylesheets are managed with SASS. Authentication is handled by Devise on the back end, which interacts with Redux to store necessary API credentials.

Card Tastuk leverages modern JavaScript practices like async/await to improve code readability.

The signature pad's original code came from [this repository](https://github.com/StrollHealth/react-signature), but was then modified in order to enable touch screen functionality.

## Getting Started
Please view the deployment section for a link to the live project. You can download the files labeled `25Contacts.csv` or `exampleContacts.csv` to experiment with the file uploading feature.

## Deployment Link
A deployed version of this project may be found [here.](https://cardtastuk.herokuapp.com)