import {db} from "@/lib/db/drizzle";
import {destinations} from "@/lib/db/schema";

export default async function Home() {
    const destis = await db.select().from(destinations);
    return (
        <div>
            <h1 className="text-2xl">🌴 My next trip</h1>
            {destis.map((desti) => (
                <div key={desti.id}>
                    <h2 className="text-lg">{desti.name}</h2>
                    <p>{desti.description}</p>
                </div>
            ))}
        </div>
    );
}
