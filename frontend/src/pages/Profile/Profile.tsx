import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";

import { SProfileWrapper, ModalParagraph } from "./Profile.styled";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../shared/services";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../shared/components/Toastify";
import { getErrorMessage } from "../../shared/utils";
import { Modal } from "../../shared/components/Modal";

interface IProfileData {
  nome: string;
  email: string;
  criadoEm: string;
}

export function Profile() {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState<IProfileData>({
    nome: "",
    email: "",
    criadoEm: "",
  });
  const [showModal, setShowModal] = useState(false);

  const fetchProfileData = useCallback(() => {
    api
      .get("/auth/perfil/")
      .then((res) => {
        setProfileData(res.data);
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  const handleDeleteAccount = () => {
    api
      .delete("/auth/perfil/")
      .then(() => {
        Toast({
          message: "Sua foi conta excluída com sucesso",
          type: "success",
        });
        navigate("/login");
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  const transformDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("pt-BR");
  };

  return (
    <Card>
      <SProfileWrapper>
        <h2>Perfil</h2>
        <div className="profile-info">
          <div>
            <h4>Nome:</h4>
            <p>{profileData.nome}</p>
          </div>
          <div>
            <h4>Email:</h4>
            <p>{profileData.email}</p>
          </div>
          <div>
            <h4>Criada em:</h4>
            <p>{transformDate(profileData.criadoEm)}</p>
          </div>
        </div>
        <div>
          <Button
            type="button"
            variant="danger"
            onClick={() => setShowModal(true)}
          >
            Excluir conta
          </Button>
        </div>
      </SProfileWrapper>
      <Modal
        title="Excluir conta"
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleDeleteAccount}
        closeLabel="Cancelar"
        saveLabel="Excluir"
      >
        <ModalParagraph>
          Tem certeza que deseja excluir sua conta?
        </ModalParagraph>
      </Modal>
    </Card>
  );
}
