import React from "react";
import { Chart } from "react-google-charts";
import Api from '../../Api'

export const options = {
chart: {
    title: "Entradas de produtos",
    subtitle: "Entradas de produtos em 2022",
},
};

export var firebaseData = [];
export var dataGraph = [];

const Charts = () => {

    React.useMemo(async() => {
        var firebaseDataAux = [
            ["Mês", "Valor"],
            ['Janeiro', 0],
            ['Fevereiro', 0],
            ['Março', 0],
            ['Abril', 0],
            ['Maio', 0],
            ['Junho', 0],
            ['Julho', 0],
            ['Agosto', 0],
            ['Setembro', 0],
            ['Outubro', 0],
            ['Novembro', 0],
            ['Dezembro', 0]
        ];
        
        try {
            firebaseData = await Api.getEntradas();
            for (let i = 0; i < firebaseData.length; i++) {
                if (firebaseData[i].tipo === 'itens') {
                  if (firebaseData[i].mesRef === 0) {
                    firebaseDataAux[1][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 1) {
                    firebaseDataAux[2][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 2) {
                    firebaseDataAux[3][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 3) {
                    firebaseDataAux[4][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 4) {
                    firebaseDataAux[5][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 5) {
                    firebaseDataAux[6][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 6) {
                    firebaseDataAux[7][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 7) {
                    firebaseDataAux[8][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 8) {
                    firebaseDataAux[9][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 9) {
                    firebaseDataAux[10][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 10) {
                    firebaseDataAux[11][1] += Number(firebaseData[i].valorProduto);
                  }
        
                  if (firebaseData[i].mesRef === 11) {
                    firebaseDataAux[12][1] += Number(firebaseData[i].valorProduto);
                  }
                }
            }
            console.log(firebaseData)
            console.log(firebaseDataAux)
            dataGraph = firebaseDataAux;
        } catch (error) {
            console.log(error)
        } 
    }, [])
    
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={dataGraph}
      options={options}
    />
  )
}
export default Charts;