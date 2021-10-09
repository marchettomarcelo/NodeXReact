import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Botao } from "./Styled-Components/Calculator";

const App = () => {

    const [exercicios, setExercicios] = useState("")

    const menosExercicioss = (menos = true) => {
        var novoNum

        if (menos) {
            var novoNum = exercicios - 1
        } else {
            var novoNum = exercicios + 1
        }

        //POST REQUEST NAO ESTA FUNCIONANDO
        
        fetch("/atualizar",{
            method:"POST",
            headers:{ 'Content-Type': 'application/json',
            'Accept': 'application/json' },
            body: JSON.stringify({exercicios : novoNum}),

        }).then(setExercicios(novoNum))


    }

    // buscar o numero de exercicios
        useEffect(() => {
            fetch("/exerciciosfeitos")
                .then((res) => {
                    res.json().then((resJSON) => {
                        console.log(resJSON.exercicios)
                        setExercicios(resJSON.exercicios)

                    })
                })
        }, [])




        return (


            <div>
                <h1>{exercicios}</h1>
                <Botao onClick={() => menosExercicioss()}> - </Botao>
                <Botao onClick={() => menosExercicioss(false)}>+ </Botao>

            </div>
        )

    
}

ReactDOM.render(<App />, document.getElementById('root'))

