import {db} from "@/lib/db/drizzle";
import {destinations} from "@/lib/db/schema";

export default async function Home() {
    const destis = await db.select().from(destinations);
    return (
        <div>
            {destis.map((desti) => (
                <div key={desti.id}>
                    <h2>{desti.name}</h2>
                    <p>{desti.description}</p>
                </div>
            ))}
        </div>
    );
}
