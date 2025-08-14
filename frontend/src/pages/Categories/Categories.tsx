import React, { useEffect, useState } from "react";
import { Card } from "../../shared/components/Card";
import { api } from "../../shared/services/";
import { getErrorMessage } from "../../shared/utils";
import { SContainer, STitle, SSectionTitle } from "./Categories.styled";
import { Toast } from "../../shared/components/Toastify";
import { CategoryForm } from "./components/CategoryForm";
import { CategoryList } from "./components/CategoryList";
import type {ICategory} from "../../types"

interface IErrors {
  message: string;
}

export function Categories() {
  const [categories, setCategories] = useState({
    nome: "",
  });
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [errors, setErrors] = useState<IErrors>({ message: "" });

  const fetchCategories = () => {
    api
      .get("/categoria")
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategories({
      ...categories,
      [e.target.name]: e.target.value,
    });
    setErrors({ message: "" });
  };

  const newCategories = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    api
      .post("/categoria", categories)
      .then(() => {
        setCategories({
          nome: "",
        });
        fetchCategories();
      })
      .catch((error) => {
        setCategories({
          nome: "",
        });
        setErrors({ message: getErrorMessage(error) });
      });
  };

  const deleteCategory = (id: string) => {
    api
      .delete(`/categoria/${id}`)
      .then(() => {
        fetchCategories();
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "warn" });
      });
  };

  return (
    <>
      <Card>
        <SContainer>
          <STitle>Adicionar Categorias</STitle>
          <CategoryForm
            nome={categories.nome}
            onChange={handleChange}
            onSubmit={newCategories}
            errorMessage={errors.message}
          />
          <div>
            <SSectionTitle>Categorias</SSectionTitle>
          </div>
          <CategoryList categories={categoryList} onDelete={deleteCategory} />
        </SContainer>
      </Card>
    </>
  );
}