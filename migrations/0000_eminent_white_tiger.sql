CREATE TABLE "destinations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	CONSTRAINT "destinations_name_unique" UNIQUE("name")
);
