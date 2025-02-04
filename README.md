# CW-Codewalnut-timer-assesment
# Timer App

A feature-rich **React Timer App** built using **Redux Toolkit** . This app allows users to create, edit, start, stop, restart, and delete multiple timers while persisting data using **localStorage**.

## Features

- 🕒 **Multiple Timers:** Run multiple timers simultaneously.
- 🔄 **Pause & Resume:** Toggle timers on and off.
- 🔁 **Restart Timer:** Reset timers to their original duration.
- ❌ **Delete Timer:** Remove timers when no longer needed.
- 🔔 **Sound Notification:** A beep sound plays when a timer ends.
- 🔔 **Snackbar Notification:** Displays an alert when a timer completes.
- 📌 **LocalStorage Support:** Timers persist across page refreshes.

## Tech Stack

- **Frontend:** React, TypeScript, Redux Toolkit, Tailwind CSS
- **State Management:** Redux Toolkit with localStorage
- **Notifications:** Sonner (toast/snackbar)
- **Audio Handling:** Web Audio API

## Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Sanoop77m/CW-Codewalnut-timer-assesment.git
   cd CW-Codewalnut-timer-assesment
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Run the App:**
   ```sh
   npm run dev
   ```

## Usage

1. Click **"Add Timer"** to create a new timer.
2. Set a title, duration, and description.
3. Press **"Start"** to begin counting down.
4. When the timer ends, a notification will appear with a sound.
5. Press **"Dismiss"** on the snackbar to stop the sound.

## Folder Structure

```
/timer-app
│── src/
│   ├── components/       # UI Components (TimerItem, TimerControls, etc.)
│   ├── store/            # Redux Toolkit store
│   ├── utils/            # Helper functions (time formatting, audio handling)
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main application file
│   ├── index.tsx         # Entry point
│
│── public/               # Static files
│── package.json          # Dependencies & scripts
│── README.md             # Project documentation
```


