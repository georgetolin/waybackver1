import React from 'react'
import ReactDOM from 'react-dom/client'
import WaybackMachine from './WaybackMachine'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WaybackMachine />
  </React.StrictMode>,
)
```

**5. Move your component to `src/WaybackMachine.jsx`**

### **Your folder structure:**
```
your-repo/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   └── WaybackMachine.jsx
└── README.md 
