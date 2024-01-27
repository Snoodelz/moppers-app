"use client";

import { authenticateAction } from "@/app/lib/actions";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useRef, useState } from "react";

export default function LoginFormModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    authenticateAction(formData).then((res) => {
      console.log(res);
      if (res) {
        onClose();
      } else {
        setErrorMessage("Fel lösenord");
      }
    });
  };

  //reset error message on open
  const handleOpen = () => {
    setErrorMessage("");
    onOpen();
  };

  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <Button variant="bordered" onPress={handleOpen}>
        Logga in
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Login</ModalHeader>
              <ModalBody>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <Input type="password" name="password" label="Lösenord" required autoFocus />
                  <p className="text-danger-500 pt-2" color="primary">
                    {errorMessage}
                  </p>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button onPress={() => formRef.current?.requestSubmit()} color="primary">
                  Logga in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
