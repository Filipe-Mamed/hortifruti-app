import type React from "react";
import { Button } from "../../components/Button";
import { Modal as RBModal } from "react-bootstrap";

interface IModalProps {
  showModal: boolean;
  title: string;
  children: React.ReactNode;
  saveLabel?: string;
  closeLabel?: string;
  disableLabel?: boolean;
  centered?: boolean
  onSave?: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose?: () => void;
}

export function Modal({
  showModal,
  title,
  children,
  saveLabel,
  closeLabel,
  disableLabel,
  centered,
  onSave,
  onClose,
}: IModalProps) {
  return (
    <RBModal show={showModal} onHide={onClose} backdrop="static" centered={centered}>
      <form onSubmit={onSave}>
        <RBModal.Header closeButton>
          <RBModal.Title>{title}</RBModal.Title>
        </RBModal.Header>
        <RBModal.Body>{children}</RBModal.Body>
        <RBModal.Footer>
          <Button variant="danger" onClick={onClose}>
            {closeLabel}
          </Button>
          <Button variant="success" type="submit" disabled={disableLabel}>
            {saveLabel}
          </Button>
        </RBModal.Footer>
      </form>
    </RBModal>
  );
}
