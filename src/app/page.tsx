import clientPromise from "../mongo/db";

interface iCategory {
    
}

async function getCardCategories() {
    const client = await clientPromise
    const database = client.db('cardholder');
    const categories = await database.collection('categories').find().toArray();

    return categories;
}

export default async function Home() {
    const categories = await getCardCategories() as []
    return (
        <div className="App">
            <div className="card-grid">
                {categories.map(category => (
                    <div key={category.category_id}><h2>{category.name}</h2></div>
                ))}
            </div>
        </div>
    )
}
