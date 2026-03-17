import {db} from "@/lib/db/db";
import {comments, destinations} from "@/lib/db/schema";
import {eq, sql} from "drizzle-orm";

export default async function Home() {
    const destis = await db
        .select({
            id: destinations.id,
            name: destinations.name,
            description: destinations.description,
            commentCount: sql<number>`count(${comments.id})`.mapWith(Number),
        })
        .from(destinations)
        .leftJoin(comments, eq(destinations.id, comments.destinationId))
        .groupBy(destinations.id);
    return (
        <div>
            <h1 className="text-2xl">🌴 My next trip</h1>
            {destis.map((desti) => (
                <div key={desti.id}>
                    <h2 className="text-lg">
                        {desti.name} ({desti.commentCount})
                    </h2>
                    <p>{desti.description}</p>
                </div>
            ))}
        </div>
    );
}
