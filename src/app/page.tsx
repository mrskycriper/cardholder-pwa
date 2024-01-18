import CardGrid from "@/component/card-grid/card-grid";
import clientPromise from "@/mongo/db";

async function getCardCategories() {
    const client = await clientPromise
    const database = client.db('cardholder');
    const categories = await database.collection('categories').find().toArray();

    return categories;
}

export default async function Home() {
    const categories = await getCardCategories() as []
    return (
        <CardGrid items={categories}></CardGrid>
    )
}
