# 🪄 The Wizarding World Book App** 📚✨

Welcome to a magical React Native app built to bring the world of Harry Potter books to your fingertips.
This project showcases an enchanting blend of functionality, creativity, and technical expertise.
Whether you're a Potterhead or a React Native enthusiast, there's something in this app for you!

---

## 🎯 **Features**

### **🏠 Home Tab Screen**
- Browse a list of **Harry Potter books**, fetched from [Potter API](https://potterapi-fedeperin.vercel.app/en/books).
- Data caching for **24 hours**, ensuring a smooth user experience even without an internet connection.
- View key details for each book:
  - **Title**
  - **Release Date**
  - **Cover Image**
 
    
### **❤️ Favorites Tab Screen**
- View all books marked as favorites.
- Persist favorites using **local storage**, ensuring they are saved even after closing the app.
- Remove books from favorites at any time.

### **📖 Book Details Screen**
- Dive into detailed information about each book:
  - **Title**
  - **Release Date**
  - **Description**
  - **Cover Image**
  - **Number of Pages**
- Mark a book as a **Favorite** with the tap of a button.

### **🔍 Search**
- Search books by **Title** across both tabs:
  - In **Home**, find books by title.
  - In **Favorites**, filter books by both title and description.
- Implements **Debounce** for an optimized search experience.

### **🔀 Sorting**
- Sort books by:
  - **Title** (A–Z)
  - **Number of Pages**
  - **Release Date**

---

## 🎨 **Extra Features**
- **Grid View** toggle for a visually stunning book display.
---

## 💡 **Tech Stack**
- **React Native Expo** for mobile app development.
- **Redux Toolkit** for Client state management.
- **Redux Persist** for local storage of favorites.
- **React Query** for efficient data fetching.
---

## 🚀 **How to Run the App**


This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
