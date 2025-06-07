# Onboarding-Dashboard-App
This is a simple multi-step onboarding wizard with a dashboard, built using **React** and **basic CSS**.

---

## 🚀 Features

### 🔹 Onboarding Wizard (3 Steps)
1. **Personal Info** (Name, Email)
2. **Business Info** (Company Name, Industry, Size)
3. **Preferences** (Theme, Dashboard Layout)

- Input validation for required fields
- Navigation with "Next", "Back", and "Submit"
- Visual progress bar

### 🔹 Dashboard Page
- Auto-redirects after onboarding
- Displays:
  - User Info
  - Team Members Count
  - Active Projects
  - Notifications
- Fully responsive layout

---

## 🛠 Tech Stack

- React
- React Router
- Axios
- CSS 
- Optional: localStorage or Dummy API

---

## 📦 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm start
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🔄 Dummy API (Optional)

To use `json-server` as a fake backend:

### Install it globally:
```bash
npm install -g json-server
```

### Create `db.json`:
```json
{
  "users": []
}
```

### Start the server:
```bash
json-server --watch db.json --port 5000
```

### Use in React:
```js
axios.post('http://localhost:5000/users', formData);
```

---

## 🧾 License

Free to use for educational and demo purposes.

---

## 👩‍💻 Author

Developed as a frontend task demo with React and love ❤️

