import { deleteSongAction } from "@/app/lib/actions";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { DeleteIcon } from "./icons";

export default function RemoveModal({ id, title }: { id: number; title: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="danger" onPress={onOpen}>
        <DeleteIcon />
        Ta bort
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Ta bort</ModalHeader>
              <ModalBody>
                <p>Är du säker på att du vill ta bort &quot;{title}&quot;?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => deleteSongAction(id)}>
                  Ta bort
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
