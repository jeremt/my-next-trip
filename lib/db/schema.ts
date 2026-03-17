import {pgTable, serial, text} from "drizzle-orm/pg-core";

export const destinations = pgTable("destinations", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
    description: text("description").notNull(),
});
