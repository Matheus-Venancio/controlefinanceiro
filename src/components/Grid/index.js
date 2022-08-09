import React from "react";
import GridItem from "../Griditem"
import * as C from"./styles";

const Grid = ({itens, setItens}) =>{

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID); //Faz um filtro e carrega todas as ações
        setItens(newArray)//Seta o id
        localStorage.setItem("transactions", JSON.stringify(newArray));//Seta o id da exclusao
    }

    return(
      <C.Table>
       <C.Thead>
        <C.Tr>
            <C.Th width={40}>Descrição</C.Th>
            <C.Th width={40}>Valor</C.Th>
            <C.Th width={10} alignCenter>
                Tipo
            </C.Th>
            <C.Th width={10}></C.Th>{/*Exclusao**/}
        </C.Tr>
       </C.Thead>
       <C.Tbody>{/**Passa os items que recebr do grid */}
       {itens?.map((item, index) =>(
        <GridItem key={index} item={item} onDelete ={onDelete}/>//Para carregar no gri item
       ))}

       </C.Tbody>
      </C.Table>
    )
}

export default Grid