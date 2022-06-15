import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firabaseConfig';

export const firestoreFetch = async (category) => {
    let q;
    if (category) {
        q = query(collection(db, "productList"), where('category', '==', category));
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

//export const firestoreFetchOne = async (id) => {
//    const docRef = doc(db, "productList", id);
//    const docSnap = await getDoc(docRef);
    
//    if (docSnap.exists()) {
//        return {
//            id: id,
//            ...docSnap.data()
 //       }
//} else {
//console.log("El documento no existe");
 //   }
//}