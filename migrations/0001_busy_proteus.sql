CREATE TABLE "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"rating" integer NOT NULL,
	"message" text NOT NULL,
	"destination_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;