import IGridItem from "@/interface/IGridItem";

export default function GridCard({ item }: { item: IGridItem }) {
    return(
        <section key={item.id} style={{color: item.text_color, background: item.background_color}}>
            <h2>{item.name}</h2>
            {/* <image></image> */}
        </section>
    )
}
