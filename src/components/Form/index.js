import React, {useState} from "react"; //import states
import * as C from"./styles";


const Form = () =>{

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState("");

    const handleSave = () => {
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        }else if(amount < 1){
            alert("O valor tem que ser positivo");
            return;
        }
    };


    return( 
    <C.Container>
        <C.InputContent>
            <C.Label>Descrição</C.Label>
            <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
            <C.Label>Value</C.Label>
            <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
        </C.InputContent>
        <C.RadioGroup>
            <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)}  />
            <C.Label htmlFor="rIncome">Entrada</C.Label>{/**Deixa selecionada a label**/}
            <C.Input type="radio" id="rExpenses" defaultChecked name="group1" onChange={() => setExpense(!isExpense)}  />
            <C.Label htmlFor="rExpenses">Saida</C.Label>{/**Deixa selecionada a label**/}
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
    </C.Container>
    )
}

export default Form