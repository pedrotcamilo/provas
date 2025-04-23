function conversao() {
    const temp_c = parseInt(document.getElementById("temp_c").value)
    const result = document.getElementById("result")
    feedback = null

    if (isNaN(temp_c)) {
        alert("Por favor insira um valor válido")
        return
    }

    const conversao_f = (temp_c * (9/5)) + 32
    
    if (conversao_f < 50) {
        feedback = "está bem frio!"
    } else if (conversao_f < 77) {
        feedback = "está agradável"
    } else if (conversao_f >= 77) {
        feedback = "está quente!"
    }

    result.innerHTML = `A temperatura é de <b>${conversao_f}°F</b>, ${feedback}`
}