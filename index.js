const checkBtn = document.querySelector("#btn")
const input = document.querySelectorAll(".tri")
const msg = document.querySelector("#message")

checkBtn.addEventListener("click", checkTriangle)

function getInput() {
    let input1 = input[0].value
    let input2 = input[1].value
    let input3 = input[2].value
    let sum1 = Number(input1) + Number(input2) + Number(input3)
    return sum1
}


function checkTriangle() {
    var sum = getInput()
    if (sum !== 180) {
        msg.innerText = `Oops! ` + sum + ` do not form a triangle.180 degrees angle forms a triangle.`
    }
    if (sum === 180) {
        msg.innerText = `Bingo!! ` + sum + ` degrees a triangle`
    }
}