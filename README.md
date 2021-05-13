# CONTEXT  and GOAL

This Application is simple but complete.

Using Expo I scan a code bar and send it throu a list using Redux. In the Tab of the Codes you can filter QR you have scan 

This App is simple but help understand the concepts of React-Native using Redux.

![til](./app/assets/scanBar.gif)


## Main Tecnologies 

### React Native 

* A framework for building native apps with React.

### Redux
* Redux is a predictable state container for JavaScript apps.

### React Navigation

* navigator provides a way for your app to transition between screens and manage navigation history. 

### ESLint 

* statically analyzes your code to quickly find problems.
Expo is a framework and a platform for universal React applications.

# Running the project

* Clone this project

git clone < project-url.git >

* npm install

* npm start

# PROCCESS

I didn't have time to make a video of the process because Ubuntu, didn't let me record , but I will try to explain in this doc.

1. First I make the two Screens of the List and of the  code Scanner and make a SafeAreaView with the component Screen to work in all tabs

2. I make first scrreen of the scanner the expo-barcode-scanner so I can read the Qr and send an alert with the data without saving it.

3. I make the Flatlist of the and the component of the item list

4. I make the navigation with design so I can change move from I screen to another 

5. I implemented redux functionality so the bar code could read the data and then sen it to the FlatList

6. I implemented the input so I need to make another variable and action in Redux so I could filter the data and could delete the link 

7. I install Eslint with some rules, but did't have time to finish the tests files