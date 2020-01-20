# Random Users

It's a react native app using expo as a boilerplate, with a blank configuration.

When the app start, on the componentDidMount the randomusers api is called and render 20 users at the beginning, when I scroll down to the bottom of the list, the api is called again using pagination on the flatlist.
Also, the app is using native-base as a default stylesheet.
When the user touch one user of the list, the user will go to the detail screen, where you can see: The picture, name, country and other things.

Furthermore, you can change the profile picture touching on the picture and it will open the camera to take the picture and it will save automatically in the respective user.

The app uses redux with redux saga to store the data and handle the detail screen, also, update the store when the user take the picture.

## Installation
```
Yarn install
Yarn start
```