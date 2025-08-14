import { useCallback, useEffect, useMemo, useState } from "react";
import {
  SContainer,
  SHeader,
  SMainContainer,
  SNotFoundMessage,
  SButtonChildren,
  SIconMore,
  ContainerSpinner,
} from "./Products.styled";
import { Card } from "../../shared/components/Card";
import { Button } from "../../shared/components/Button";
import type { ICategory } from "../../types";
import type { IProductsList } from "../../types";
import { api } from "../../shared/services";
import { Toast } from "../../shared/components/Toastify";
import { getErrorMessage } from "../../shared/utils";
import { ProductTable } from "../Products/components/ProductTable/";
import { AddProduct } from "./components/AddProduct";
import { EditProduct } from "./components/EditProduct";
import { SearchProduct } from "./components/SearchProduct";
import { Spinner } from "../../shared/components/Spinner";

interface FormData {
  id: string;
  nome: string;
  categoriaId: string;
  preco: string;
  estoque: string;
}

export function Products() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState({
    nome: "",
    categoriaId: "",
    preco: "",
    estoque: "",
  });
  const [productsList, setProductsList] = useState<IProductsList[]>([]);
  const [editingProduct, setEditingProduct] = useState<FormData>({
    id: "",
    nome: "",
    categoriaId: "",
    preco: "",
    estoque: "",
  });
  const [search, setSearch] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const getCategoryName = useCallback(
    (categoriaId: string) => {
      const category = categories.find(
        (category) => category.id === categoriaId
      );
      return category ? category.nome : "";
    },
    [categories]
  );

  const filterProducts = useMemo(() => {
    const data = search.trim().toLowerCase();
    return productsList.filter((product) => {
      const productName = product.nome.toLowerCase();
      const categoryName = getCategoryName(product.categoriaId)?.toLowerCase();
      return productName.includes(data) || categoryName?.includes(data);
    });
  }, [search, productsList, getCategoryName]);

  const fetchCategories = () => {
    api
      .get("/categoria")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  const handleChangeEditProduct = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditingProduct({
      ...editingProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeProduct = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const fetchProducts = () => {
    api
      .get("/produto")
      .then((res) => {
        setProductsList(res.data);
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  const newProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newProductData = {
      ...products,
      preco: Number(products.preco),
      estoque: Number(products.estoque),
    };

    api
      .post("/produto", newProductData)
      .then(() => {
        setProducts({
          nome: "",
          categoriaId: "",
          preco: "",
          estoque: "",
        });
        setShowModal(false);
        fetchProducts();
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  const handleClose = () => {
    setShowModal(false);
    setProducts({
      nome: "",
      categoriaId: "",
      preco: "",
      estoque: "",
    });
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    setIsLoading(false);
  }, []);

  const editProduct = (id: string, data: Partial<FormData>) => {
    const newFormData = {
      ...data,
      nome: data.nome,
      categoriaId: data.categoriaId,
      preco: Number(data.preco),
      estoque: Number(data.estoque),
    };

    api
      .put(`/produto/${id}`, newFormData)
      .then(() => {
        Toast({ message: "Produto editado com sucesso", type: "success" });
        setShowEditModal(false);
        fetchProducts();
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  const handleEditProduct = (product: IProductsList) => {
    setEditingProduct({
      id: product.id || "",
      nome: product.nome,
      categoriaId: product.categoriaId,
      preco: String(product.preco),
      estoque: String(product.estoque),
    });
    setShowEditModal(true);
  };

  const deleteProduct = (id: string) => {
    api
      .delete(`/produto/${id}`)
      .then(() => {
        fetchProducts();
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  return (
    <>
      <SMainContainer>
        <SHeader>
          <div>
            <SearchProduct
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            variant="success"
            type="button"
            borderRadius="50rem"
            onClick={() => setShowModal(true)}
          >
            <SButtonChildren>
              <SIconMore />
              Adicionar Produto
            </SButtonChildren>
          </Button>
          <AddProduct
            showModal={showModal}
            onClose={handleClose}
            newProduct={newProduct}
            value={products}
            onChange={handleChangeProduct}
            categories={categories}
          />
        </SHeader>
        <Card>
          <SContainer>
            <div>
              <h3>Lista de produtos</h3>
            </div>
            {isLoading ? (
              <ContainerSpinner>
                <Spinner fontSize="1.6rem">Carregando...</Spinner>
              </ContainerSpinner>
            ) : filterProducts.length === 0 && search.trim() !== "" ? (
              <SNotFoundMessage>Produto não encontrado</SNotFoundMessage>
            ) : (
              <ProductTable
                searchProduct={filterProducts}
                getCategoryName={getCategoryName}
                editProduct={editProduct}
                deleteProduct={deleteProduct}
                onEditClick={handleEditProduct}
              />
            )}
          </SContainer>
        </Card>
      </SMainContainer>
      <EditProduct
        showModal={showEditModal}
        onClose={() => setShowEditModal(false)}
        editProduct={editProduct}
        onChange={handleChangeEditProduct}
        formData={editingProduct}
        categories={categories}
      />
    </>
  );
}
