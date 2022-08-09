import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume"
import GlobalStyle from "./styles/global";

const App = () => {
    const data = localStorage.getItem("transactions"); {/*COlocando o local storage em uma const */ }
    const [transactionsList, setTransactionsList] = useState(//Vese se existe algo no localStorage
        data ? JSON.parse(data) : [] //Se existir, ele vai fazer um parse para o JSON, caso nao, retona uma lista vazia
    );

    const [income, setIncome] = useState(0);//è as entradas no state
    const [expense, setExpense] = useState(0);//è as saidas no state
    const [total, setTotal] = useState(0);//è as total no state

    useEffect (() => {
      const amountExpense = transactionsList //Vai pegar da trnsdstionlist
        .filter((item) => item.expense) //Filtra os items que sao saisas
        .map((transaction) => Number(transaction.amount)) //Mapea os items que são os valores (pega os valores da saida)

        const amountInconme = transactionsList //Vai pegar da trnsdstionlist
        .filter((item) => !item.expense) //Filtra os items que sao saisas
        .map((transaction) => Number(transaction.amount)) //Mapea os items que são os valores (pega os valores da saida)

        const expense = amountExpense.reduce((acc, cur) => acc + cur,0).toFixed(2);
        const income = amountInconme.reduce((acc, cur) => acc + cur,0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);//se as entradas for menor que a saida, ele coloca uma saida de menos e depois coloca o total
    }, [transactionsList]);//Qaundo mudar a lista de transação, ele muda o calculo

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction]//recebendo transação e pegando em um neewarray todos os item e adicionando novas ações

        setTransactionsList(newArrayTransactions)

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))//seta no localstorage esse item passando o novo array
    };

    return (
        <>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>{/**Sete transitionliste seta novamente e muda os totais**/}
            <GlobalStyle />
        </>

    );
};

export default App;