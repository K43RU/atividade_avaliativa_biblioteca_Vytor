const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  getDoc,
  deleteDoc,
  getDocs } = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyDPlGhD8qOzWDb4LOc7cxNKwEVRHvAmcB4",
  authDomain: "atividadebibliotecavytor.firebaseapp.com",
  projectId: "atividadebibliotecavytor",
  storageBucket: "atividadebibliotecavytor.appspot.com",
  messagingSenderId: "222635174134",
  appId: "1:222635174134:web:6c10c1b006afd3b43524d7",
  measurementId: "G-PQYMVS2BF0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function salvar(nomeTabela, id, dado) {
  if (id) {
    const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
    const savedData = {
      ...dado,
      id: id
    }
    return savedData;
  } else {
    const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
    const savedData = {
      ...dado,
      id: referenceEntity.id
    }
    return savedData;
  }
}

async function pegar(nomeTabela) {
  const tableRef = collection(db, nomeTabela);
  const q = query(tableRef);

  const querySnapshot = await getDocs(q);

  const lista = [];

  querySnapshot.forEach((doc) => {
    const data = {
      ...doc.data(),
      id: doc.id
    }
    lista.push(data);
  });
  return lista;
}

module.exports = {
  salvar,
  pegar
}
