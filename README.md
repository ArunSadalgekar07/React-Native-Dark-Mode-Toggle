# React Native Dark Mode Toggle

This is a simple React Native app that allows users to switch between light mode and dark mode using a toggle switch.

## Features
- Toggle between light and dark mode
- Uses `useState` for state management
- Changes background color and text color dynamically
- Utilizes `SafeAreaView` and `SafeAreaProvider` for a smooth UI experience

## Demo Video

[Watch the Demo](https://github.com/user-attachments/assets/213dbb71-70a4-4594-a2c8-4ce821cc4d7c)




## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- React Native CLI or Expo CLI
- Android Studio (for Android) / Xcode (for iOS)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the app:
   - For Android:
     ```sh
     npx react-native run-android
     ```
   - For iOS:
     ```sh
     npx react-native run-ios
     ```

## Usage
- Open the app.
- Tap the toggle switch to switch between light mode and dark mode.
- The background and text color will change accordingly.

## Code Overview
### `App.js`
- Uses `useState` to manage the dark mode state.
- `Switch` component toggles the theme.
- `SafeAreaProvider` and `SafeAreaView` ensure a proper layout on different devices.
- `StyleSheet` is used for styling the components dynamically.

## Dependencies
- `react-native`
- `react-native-safe-area-context`

## Contributing
Feel free to contribute by forking the repository and submitting a pull request.

## License
This project is licensed under the MIT License.

