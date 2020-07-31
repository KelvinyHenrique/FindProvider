function getData(providerCodes) {
    console.log(providerCodes);
    let url = `https://apisite.dpcnet.com.br/api/fornecedor/${providerCodes}`;
    const params = {
        method: 'GET'
    }

    const data = fetch(url, params)
        .then((response) => response.json())
        .then((json) => {
            return (json);
        });

    return data;
}

async function getProviders(providerCodes) {
    var fornecedor = await getData(providerCodes);
    console.log(fornecedor);
    const selectOne = (element) => document.querySelector(element);
    mostrar();
    selectOne('.providerCode').innerHTML = "&nbsp" + fornecedor.cod_fornecedor;
    selectOne('.providerReason').innerHTML = "&nbsp" + fornecedor.razao;
    selectOne('.providerFantasy').innerHTML = "&nbsp" + fornecedor.fantasia;
    selectOne('.providerStatus').innerHTML = "&nbsp" + fornecedor.status;
};


function mostrar() {
    var element = document.getElementById("box");
    element.classList.add("show");
}