import { useState, useEffect } from "react";
import { api } from "@/lib/axios";
import { Title, Container } from "../init/styles";
import { ContentWrapper } from "./styles"
import { GraphsContainer } from "./styles";
import { Navbar } from "@/components/Navbar";
import { Loading } from "@/components/Loading";
import { Dropdown } from "@/components/Dropdown";


const Reports = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [title, setTitle] = useState("Relátorio Mensal");
  const [selectedMonth, setSelectedMonth] = useState("Mês Atual");

  const [graficoMarcasTotalBase64, setGraficoMarcasTotalBase64] = useState("");
  const [graficoMarcasMensalBase64, setGraficoMarcasMensalBase64] = useState("");

  const [graficoPecasTotalBase64, setGraficoPecasTotalBase64] = useState("");
  const [graficoPecasMensalBase64, setGraficoPecasMensalBase64] = useState("");

  const handleGetIaData = async (selectedMonth: string) => {
    try {
      const res = await api.get(`/dados`);
      const data = await res.data;

      setGraficoMarcasMensalBase64(data.grafico_mensal_marcas_base64);
      setGraficoMarcasTotalBase64(data.grafico_marcas_base64);

      setGraficoPecasMensalBase64(data.grafico_mensal_pecas_base64)
      setGraficoPecasTotalBase64(data.grafico_pecas_base64)

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(
        "Não foi possível carregar os dados, tente novamente em outro momento"
      );
    }
  };

  useEffect(() => {
    if(selectedMonth === "Mês Atual") {
      setTitle("Relátorio Mensal");
      return;
    }

    setTitle("Relátorio Geral")
  }, [selectedMonth])

  useEffect(() => {
    handleGetIaData(selectedMonth);
  }, [selectedMonth]);

  return (
    <Container>
      <Navbar />
      <ContentWrapper>
        <Title>{title}</Title>
        <Dropdown 
          selectedOption={selectedMonth}
          onSelectedOption={setSelectedMonth}
          items={["Mês Atual", "Todos os Meses"]} 
        />

        <GraphsContainer>
          
          {
            isLoading ? (
              <Loading />
            ) : (
              selectedMonth === "Mês Atual" ? (
                <>
                  <img
                    src={`data:image/png;base64,${graficoPecasMensalBase64}`}
                  />
                    <img
                    src={`data:image/png;base64,${graficoMarcasMensalBase64}`}
                  />
                </>
              ): (
                <>
                  <img
                    src={`data:image/png;base64,${graficoPecasTotalBase64}`}
                  />
                  <img
                    src={`data:image/png;base64,${graficoMarcasTotalBase64}`}
                  />
                </>
              ) 
            )
          }
        </GraphsContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Reports;

