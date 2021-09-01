const userForm = document.querySelector(".quiz-form")
const btn = document.querySelector("#submit-btn")
const testing = document.querySelector("#test")


btn.addEventListener("click", quiz)





function quiz() {

    let forms = new FormData(userForm)

    const ans = ["15cm", "32cm", "6", "35"]
    let score = 0;
    let i = 0;

    for (let val of forms.values()) {

        if (val === ans[i] || val===ans[i].length) {
            
            score = score + 1

        }
        i = i + 1
    }

    if (score == 4) {
        testing.innerText = `Yay!! Your score is ` + score
    } else {
        testing.innerText = `Your score is ` + score
    }

}