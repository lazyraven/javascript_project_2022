console.log("index.js file called");
// index.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/12.1.0//firebase-firestore.js";

// // ✅ Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDM68ZvlbTiu2z3gstdzTaW6wDTl0C3SoE",
  authDomain: "fullstack-interview-checklist.firebaseapp.com",
  projectId: "fullstack-interview-checklist",
  storageBucket: "fullstack-interview-checklist.firebasestorage.app",
  messagingSenderId: "988231979757",
  appId: "1:988231979757:web:9cdb8d2c918fddb6bdb2e4",
  // measurementId: "G-HNBNPR15E9"
};

// // Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// // const app = initializeApp(firebaseConfig);
// // const db= getAnalytics(app);

// const tableBody = document.getElementById("questionTable");
const addBtn = document.getElementById("addBtn");
const newQuestionInput = document.getElementById("newQuestion");
const shareBtn = document.getElementById("shareBtn");
const formContainer = document.getElementById("formContainer");
const actionHeader = document.getElementById("actionHeader");

// // 🔑 Get userId (either from URL ?id=... or localStorage)
const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("id");

let isOwner = false;
if (!userId) {
  userId = localStorage.getItem("userId");
  if (!userId) {
    userId = "user_" + crypto.randomUUID();
    localStorage.setItem("userId", userId);
  }
  isOwner = true;
}

const questionsCol = collection(db, "questions", userId, "items");

// Render table
function renderTable(questions) {
  tableBody.innerHTML = "";
  questions.forEach((q) => {
    const row = document.createElement("tr");

    // Checkbox
    const tdCheckbox = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = q.done;
    if (!isOwner) checkbox.disabled = true; // read-only mode for shared links
    checkbox.addEventListener("change", async () => {
      if (isOwner) {
        await updateDoc(doc(db, "questions", userId, "items", q.id), {
          done: checkbox.checked,
        });
      }
    });
    tdCheckbox.appendChild(checkbox);

    //     // Question text
    const tdText = document.createElement("td");
    tdText.textContent = q.text;

    // Delete button
    const tdAction = document.createElement("td");
    if (isOwner) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", async () => {
        await deleteDoc(doc(db, "questions", userId, "items", q.id));
      });
      tdAction.appendChild(deleteBtn);
    }
    row.appendChild(tdCheckbox);
    row.appendChild(tdText);
    if (isOwner) row.appendChild(tdAction);

    tableBody.appendChild(row);
  });
}

// Add new question
if (isOwner) {
  addBtn.addEventListener("click", async () => {
    const text = newQuestionInput.value.trim();
    if (text) {
      await addDoc(questionsCol, { text, done: false });
      newQuestionInput.value = "";
    }
  });
} else {
  // Hide add form and action column if not owner
  formContainer.style.display = "none";
  actionHeader.style.display = "none";
}

// Share link
if (isOwner) {
  shareBtn.addEventListener("click", () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?id=${userId}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Shareable link copied to clipboard:\n" + shareUrl);
    });
  });
}

// Listen for realtime updates
onSnapshot(questionsCol, (snapshot) => {
  const questions = snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
  renderTable(questions);
});
