import { query, collection, limit, getDocs, where, orderBy } from "firebase/firestore";

import { Drink } from "@/models/drink";
import { store } from "@remote/firebase";

export async function getDrinks() {
  const drinkQuery = query(collection(store, "DRINK"), orderBy("rank", "asc"));
  const drinkSnapshot = await getDocs(drinkQuery);

  const items = drinkSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Drink),
  }));

  return { items };
}

export async function getTopDrinks() {
  const searchQuery = query(collection(store, "DRINK"), where("rank", "<=", 3), orderBy("rank"));
  const drinkSnapshot = await getDocs(searchQuery);

  return drinkSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Drink),
  }));
}

export async function getRandomDrink() {
  const randomRank = Math.floor(Math.random() * 15) + 1;
  const randomQuery = query(collection(store, "DRINK"), where("rank", "==", randomRank));
  const drinkSnapshot = await getDocs(randomQuery);

  return {
    id: drinkSnapshot.docs[0].id,
    ...(drinkSnapshot.docs[0].data() as Drink),
  };
}

export async function getSearchDrink(drinkType: number, carbonationLevel: number, sweetnessLevel: number) {
  const searchQuery = query(
    collection(store, "DRINK"),
    where("type", "==", drinkType),
    where("carbonation", "<=", carbonationLevel),
    where("sweetness", "<=", sweetnessLevel),
    orderBy("sweetness", "desc"),
    orderBy("carbonation", "desc"),
    limit(1)
  );

  const drinkSnapshot = await getDocs(searchQuery);

  if (drinkSnapshot.empty) {
    return null;
  }

  return {
    id: drinkSnapshot.docs[0].id,
    ...(drinkSnapshot.docs[0].data() as Drink),
  };
}

