import { db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function getProducts() {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Fehler beim Abrufen der Produkte:', error);
    return [];
  }
}

export async function getRecommendations() {
  try {
    const recommendationsRef = collection(db, 'recommendations');
    const snapshot = await getDocs(recommendationsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Fehler beim Abrufen der Empfehlungen:', error);
    return [];
  }
}

export async function getBlogPosts() {
  try {
    const blogRef = collection(db, 'blog');
    const snapshot = await getDocs(blogRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Fehler beim Abrufen der Blog-Posts:', error);
    return [];
  }
} 