import { initializeApp } from "firebase/app";


// Firestore
import { getFirestore, collection, getDocs, onSnapshot, 
         addDoc, deleteDoc, doc,
         query, where,
         orderBy, serverTimestamp,
         getDoc, updateDoc,
} from "firebase/firestore";

// Authentication
import {
  getAuth, 
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCT8lakHGy40xgEkGN1Rj7rLMp7hyXuLZU",
  authDomain: "instagram-clone-007-vitejs.firebaseapp.com",
  projectId: "instagram-clone-007-vitejs",
  storageBucket: "instagram-clone-007-vitejs.appspot.com",
  messagingSenderId: "219097229227",
  appId: "1:219097229227:web:5aec54d7633b179074d4ee",
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();


//collection ref
const colRef = collection(db, 'posts');

// Queries
// const q = query(colRef, where("username", "==", "cyber"), orderBy("createdAt", "asc"));
const q = query(
  colRef,
  // where("username", "==", "cyber"),
  orderBy("createdAt", "asc")
);

// export { db, colRef, getDocs };
//getCollectiondata
// getDocs(colRef)
//   .then((snapshot) => {
//     let postss = [];
//     snapshot.docs.forEach((doc) => {
//       postss.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(postss);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// realtime collection data
onSnapshot(colRef, (snapshot) => {
  let postss = [];
  snapshot.docs.forEach((doc) => {
    postss.push({ ...doc.data(), id: doc.id });
  });
  console.log(postss);
})

// Snapshot with query
// onSnapshot(q, (snapshot) => {
//   let postss = [];
//   snapshot.docs.forEach((doc) => {
//     postss.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(postss);
// });


// Get single Document
// const docRef = doc(db, "posts", "#doc_id_in_firestore");
// getDoc(docRef)
//   .then((doc) => {
//     console.log(doc.data(), doc.id);
//   })

//realtime single data
// onSnapshot(docRef, (doc) => {
//   console.log(doc.data(), doc.id);
// })

//adding documents
const addPostForm = document.querySelector('.add')
addPostForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    caption: addPostForm.caption.value,
    usernames: addPostForm.username.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    addPostForm.reset();
  })
})


// deleting documents
const deletePostForm = document.querySelector(".delete");
deletePostForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "posts", deletePostForm.id.value);

  deleteDoc(docRef)
    .then(() => {
      deletePostForm.reset();
    })

});


// Updating documents
const updatePostForm = document.querySelector(".update");
updatePostForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const docRef = doc(db, "posts", updatePostForm.id.value);

  updateDoc(docRef, {
    username: updatePostForm.username.value,
    caption: updatePostForm.caption.value,
  })
  .then(() => {
    updatePostForm.reset();
  });
});













// AUTHENTICATION STARTS ==============================================================

const auth = getAuth();


//Authentication
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log("User created : ",cred.user);
        signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    })
}); 


// Logout
const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", (e) => {

  signOut(auth)
    .then(() => {
      console.log("User logged out");
    })
    .catch((err) => {
      console.log(err.message);
    })

}); 


// login
const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();


    const email = loginForm.email.value;
    const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("User Logged in : ", cred.user);
      loginForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });

}); 


// subsvribinng to auth changes
onAuthStateChanged(auth, (user) => {
  console.log("User state changed", user);
})

// Unsubscribing from changes
const unsubBtn = document.querySelector(".unsub");

// ------------all-------------
const unsubCol = onSnapshot(q, (snapshot) => {
  let postss = [];
  snapshot.docs.forEach((doc) => {
    postss.push({ ...doc.data(), id: doc.id });
  });
  console.log(postss);
});

// ---------one-------------
const unsubDoc = onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
})

const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log("User state changed", user);
});

unsubBtn.addEventListener("click", () => {

  console.log("Unsubscribing...");
  unsubCol();
  unsubDoc();
  unsubAuth();

});





// AUTHENTICATION ENDS =============================================================================================