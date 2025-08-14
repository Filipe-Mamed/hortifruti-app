import { useEffect, useState } from "react";
import { Card } from "../../shared/components/Card";

import { SContainer, SEmptyMessage } from "./Dashboard.styled";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { api } from "../../shared/services";
import { Toast } from "../../shared/components/Toastify";
import { getErrorMessage } from "../../shared/utils";

interface ICategoriaInfo {
  nome: string;
  quantidade: number;
}

export function Dashboard() {
  const [data, setData] = useState<ICategoriaInfo[]>([]);

  const fetchData = () => {
    api
      .get("/dashboard")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        Toast({ message: getErrorMessage(error), type: "error" });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card>
      <SContainer>
        <div>
          <h3>Dashboard</h3>
        </div>
        {data.length === 0 ? (
          <SEmptyMessage>Nenhuma categoria cadastrada</SEmptyMessage>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quantidade" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </SContainer>
    </Card>
  );
}
