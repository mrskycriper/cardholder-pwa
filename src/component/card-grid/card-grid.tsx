import IGridItem from "@/interface/IGridItem"

export default function CardGrid({ items }: { items: IGridItem[] }) {
    return (
        <article className="card-grid">
            {items.map(item => (
                <section key={item.id}><h2>{item.name}</h2></section>
            ))}
        </article>
    )
}
