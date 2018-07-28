let name = prompt("Имя: ");
let age = prompt("Мой возраст: ");
function App(name, age) {
    alert("Привет, меня зовут " + name + " и это моя первая программа");

    function showSkills() {
        let skills = [
        	"html",
        	"css",
        	"средние знания jquery",
        	"небольшие знания js",
        	"gulp",
        	"bower",
        	"npm",
        	"git, Github и Bitbacket",
        	"bootstarap 3/4",
        	"PascalABC"
        ]
        for (let i = 0; i < skills.length; i++) {
        	document.write(skills[i], "<br>")
        }
    }
    showSkills();

    function checkAge() {
        if (age => 18) {
        	alert("Кстати ведь мне 18 и я могу веселиться!!!")
        } else {
        	alert("Мне еще нет 18, но я уже многое умею")
        }
    }
    checkAge(age);
    function calkPow(num) {
        alert("Результат: " + num + " во второй степени = " + num * num);
    }
    calkPow(4);
}
App("Zahar", "13");