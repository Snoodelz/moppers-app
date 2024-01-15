"use client";
import type { Song } from "@/db/schema";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
	Textarea,
} from "@nextui-org/react";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import SimpleQuill from "./simpleQuill";
import Tiptap from "./TipTap";

interface SongFormModalProps {
	song?: Song | null;
	action: (formData: FormData, lyrics: string) => void;
}

export function SongFormModal({ song, action }: SongFormModalProps) {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const formRef = useRef<HTMLFormElement>(null);
	const [lyrics, setLyrics] = useState("");

	useLayoutEffect(() => {
		if (song?.lyrics) {
			setLyrics(song.lyrics);
		}
	}, [song?.lyrics]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		action(formData, lyrics);
		onClose();
	};

	const handleChange = (content: string) => {
		setLyrics(content);
		console.log("Content changed:", content);
	};
	const buttonText: string = song ? "Redigera" : "Lägg till låt";
	const buttonSubmitText: string = song ? "Ändra" : "Lägg till";

	return (
		<>
			<Button onPress={onOpen} color="primary">
				{buttonText}
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="xl">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Låt</ModalHeader>
							<ModalBody>
								<form
									onSubmit={handleSubmit}
									ref={formRef}
									//action={action}
									className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4 pt-8"
								>
									<Input
										variant="bordered"
										isRequired
										type="text"
										label="Titel"
										name="title"
										autoFocus
										defaultValue={song?.title ?? ""}
									/>
									<Input
										variant="bordered"
										type="text"
										label="Melodi"
										name="melody"
										defaultValue={song?.melody ?? ""}
									/>
									<SimpleQuill value={lyrics} onChange={handleChange} />
								</form>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onPress={() => formRef.current?.requestSubmit()}>
									{buttonSubmitText}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

export default SongFormModal;
