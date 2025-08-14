import { useState, useEffect } from "react";
import { Card } from "../../shared/components/Card";
import { api } from "../../shared/services";
import { Toast } from "../../shared/components/Toastify";
import { getErrorMessage } from "../../shared/utils";
import { SContainer } from "./Report.styled";
import { LowStockProducts } from "./components/LowStockProducts";
import { RecentProducts } from "./components/RecentProducts";

export function Report() {
  const [lowStock, setLowStock] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);

  const fetchLowStockProducts = () => {
    api
      .get("/relatorio/estoque-baixo")
      .then((res) => {
        setLowStock(res.data);
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  const fetchRecentProducts = () => {
    api
      .get("/relatorio/ultimos-produtos")
      .then((res) => {
        setRecentProducts(res.data);
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  const formatDate = (date: string) => {
    const data = new Date(date);
    return data.toLocaleDateString("pt-BR");
  };

  useEffect(() => {
    fetchLowStockProducts();
    fetchRecentProducts();
  }, []);
  return (
    <Card>
      <SContainer>
        <h3>Produtos com estoque baixo</h3>
        <LowStockProducts lowStock={lowStock} />
      </SContainer>
      <SContainer>
        <h3>Produtos criados recentemente</h3>
        <RecentProducts
          recentProducts={recentProducts}
          formatDate={formatDate}
        />
      </SContainer>
    </Card>
  );
}
