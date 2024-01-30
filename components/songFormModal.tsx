"use client";
import type { Song } from "@/db/schema";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useLayoutEffect, useRef, useState } from "react";
import { EditIcon, PlusIcon } from "./icons";
import SimpleQuill from "./simpleQuill";

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
    setLyrics("");
  };

  const handleChange = (content: string) => {
    setLyrics(content);
  };
  const buttonText: React.ReactNode = song ? <p>Redigera</p> : <p className="align-top">Lägg till låt</p>;
  const buttonIcon: React.ReactNode = song ? <EditIcon /> : <PlusIcon />;
  const buttonSubmitText: string = song ? "Ändra" : "Lägg till";

  return (
    <>
      <Button onPress={onOpen} color="primary" startContent={buttonIcon}>
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
                  className="flex w-full flex-col flex-wrap gap-4 pt-8 md:flex-nowrap"
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
