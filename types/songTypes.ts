import { ReactNode } from "react";

export type SongArray = SongProps[];

export interface SongProps {
	id: string;
	title: string;
	melody: string;
	lyrics: ReactNode;
}
