import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firabaseConfig';

export const firestoreFetch = async (idcategory) => {
    let q;
    if (idcategory) {
        q = query(collection(db, "productList"), where('category', '==', parseInt(idcategory)));
    } else {
        q = query(collection(db, "productList"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "productList", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
    console.log("El documento no existe");
    }
}