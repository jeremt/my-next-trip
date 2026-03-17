import {integer, pgTable, serial, text} from "drizzle-orm/pg-core";

export const destinations = pgTable("destinations", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
    description: text("description").notNull(),
    price: integer("price").notNull(),
});

export const comments = pgTable("comments", {
    id: serial("id").primaryKey(),
    rating: integer("rating").notNull(),
    message: text("message").notNull(),
    destinationId: integer("destination_id")
        .notNull()
        .references(() => destinations.id, {onDelete: "cascade"}),
});
