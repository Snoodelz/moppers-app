import { mysqlTable, varchar, text, int } from "drizzle-orm/mysql-core";

export const songs = mysqlTable("songs", {
	id: int("id").primaryKey().autoincrement(),
	title: varchar("title", { length: 256 }).notNull(),
	melody: varchar("melody", { length: 256 }),
	lyrics: text("lyrics").notNull(),
});

export type Song = typeof songs.$inferSelect;
export type NewSong = typeof songs.$inferInsert;
