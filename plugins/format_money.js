// # PLUGINS PREÇO // JAVASCRIPT - Criei um pluggin onde posso chamar em qualquer lugar/arquivo dentro da pags

export default (context, inject) => {

    inject('format_money', (value, db = true) => {
        
        if(value == '' || value == false){
            return
        }

        // Remove o R$ pontos e virgulas
        value = value.replace('R$', '')
        value = value.replace('BRL', '')
        value = value.replace('.', '')
        value = value.replace(',', '')
        value = value.replace(' ', '')

        // Pega os ultimos dois caractere (centavos)
        let centavos = value.slice(-2)

        // Remove os ultimos dois caracteres
        let sem_centavos = value.substr(0, value.length -2);
        
        // Junta tudo
        value = `${sem_centavos}.${centavos}`
        
        // Formata para real
        if(db == true){
            value = Number(value).toFixed(2)
            console.log(value)
        }else{
            value = value.toLocaleString('pt-br', {minimumFractionDigits: 2})

        }
        return value
        
    })  
}