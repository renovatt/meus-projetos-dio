(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}m e ${sec}s`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function salvar(veiculo) {
            localStorage.setItem("patio", JSON.stringify(veiculo));
        }
        function adicionar(veiculo, salvo) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${veiculo.cliente}</td>
            <td>${veiculo.modelo}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
            <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
        `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remover(this.dataset.placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salvo)
                salvar([...ler(), veiculo]);
        }
        function remover(placa) {
            const { entrada, cliente } = ler().find(veiculo => veiculo.placa === placa);
            const tempo = calTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veículo do senhor(a) ${cliente} permaneceu por ${tempo}. Deseja encerrar o cadastro?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function render() {
            $("#patio").innerHTML = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    patio().render();
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b, _c;
        const cliente = (_a = $("#cliente")) === null || _a === void 0 ? void 0 : _a.value;
        const modelo = (_b = $("#modelo")) === null || _b === void 0 ? void 0 : _b.value;
        const placa = (_c = $("#placa")) === null || _c === void 0 ? void 0 : _c.value;
        if (!cliente || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        patio().adicionar({ cliente, modelo, placa, entrada: new Date().toISOString() }, true);
    });
})();
