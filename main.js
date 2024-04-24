// Definer en variabel
let greeting
// Gi den en verdi
greeting = "En vilkårlig verdi"

// Gjøre noe med den variabelen
// console.log(greeting)

// Omdefinere verdien til variabelen (gi den en ny verdi)
greeting = "En helt ny verdi"
// console.log(greeting)

// Definer konstanter
const constantVariabel = "I am Constant"

let changeableVariable = "Testing"

// Nest linje crasher progammet
// constantVariabel = "This does not work"

/**
 * Flere linjer med 
 * kommentarer
 */

let notDefined
// console.log(notDefined)

let notYetDefined = null
// console.log(notYetDefined)

// Komplekse typer

// Lister (Array)
const numbers = [1, 2, 3, 4,]
// console.log(numbers)

// Sammling med informasjon (Object)
const person = {
    email: "lars.gunnar@jobloop.no",
    name: "Lars Gunnar",
    age: 34
}
// console.log(person)


/**
 * ==========================
 * Change theme functionality
 * ==========================
 */

// Først finne <button> elementet
let buttonElement = document.getElementById("theme-changer")

function changeTheme() {
    // Først finne det korrekte html elementet
    const root = document.documentElement

    // Så finn ut hvilket tema vi er på nå
    const currentTheme = root.dataset.theme
    const themeIsBright = currentTheme === "light"

    if (themeIsBright) {
        // Viss lyst tema skift til mørkt
        root.dataset.theme = "dark"
    } else {
        // Viss mørkt tema skift til lyst
        root.dataset.theme = "light"
    }
}

buttonElement.addEventListener("click", changeTheme)
