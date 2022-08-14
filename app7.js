
// El Programa Requiere Usuario / Contraseña
// El Programa valida si los datos son Validos o No
// Require elegir una opcion del Menu

//1"Este es un filtro de Records de tipo Genero Femenino";
//2"Este es un filtro de Records de tipo Genero Masculino";
//3"Muestar La Lista de Nombres Completos";
//4"Acumulador de Masa de todos los records (TOTAL)";
//5"Falso o Verdadero, Si Tenemos Stock Menor a 200 ?";
//6"Falso o Verdadero Precio menor a 200";
//7"Total de Personajes con mayor o igual a dos Lugares de recidencia";
//8"Actualizacion de Invetario ";

// El programa procesa la opcion elegida
// El programa consulta si dese salir

var usernames = ["Maria", "Mario", "Carlos", "Juan", "Pedro"];
var passwords = ["admin123", "admin123", "admin123", "admin123", "admin123"];

let StarWCharacter = [
    { 'id': 001, 'f_name': 'Luke     ', 'l_name': 'Skywalker', 'gender': 'M', 'dead': true, 'price': 172, 'stock': 1, 'courses': ['Tatooine', 'Naboo'] },
    { 'id': 002, 'f_name': 'Darth    ', 'l_name': 'Vader    ', 'gender': 'M', 'dead': true, 'price': 202, 'stock': 2, 'courses': ['Stewjon', 'Kamino'] },
    { 'id': 003, 'f_name': 'Obi-Wan  ', 'l_name': 'Kenobi   ', 'gender': 'M', 'dead': true, 'price': 182, 'stock': 1, 'courses': ['Tatooine', 'Stewjon', 'Kamino'] },
    { 'id': 004, 'f_name': 'Anakin    ', 'l_name': 'Skywalker', 'gender': 'M', 'dead': true, 'price': 190, 'stock': 3, 'courses': ['Naboo'] },
    { 'id': 005, 'f_name': 'Chewbacca ', 'l_name': '         ', 'gender': 'M', 'dead': false, 'price': 230, 'stock': 3, 'courses': ['Tatooine', 'Stewjon', 'Kamino'] },
    { 'id': 006, 'f_name': 'Han       ', 'l_name': 'Solo     ', 'gender': 'M', 'dead': true, 'price': 180, 'stock': 4, 'courses': ['Naboo', 'Corellia'] },
    { 'id': 012, 'f_name': 'Leia      ', 'l_name': 'Organa   ', 'gender': 'F', 'dead': false, 'price': 150, 'stock': 1, 'courses': ['Naboo', 'Corellia', 'Kamino'] },
    { 'id': 013, 'f_name': 'Rey       ', 'l_name': '         ', 'gender': 'F', 'dead': true, 'price': 165, 'stock': 2, 'courses': ['Tatooine'] },
    { 'id': 014, 'f_name': 'Shmi      ', 'l_name': 'Skywalker ', 'gender': 'F', 'dead': false, 'price': 150, 'stock': 1, 'courses': ['Naboo', 'Corellia'] },
    { 'id': 015, 'f_name': 'Zam       ', 'l_name': 'Wesell    ', 'gender': 'F', 'dead': true, 'price': 145, 'stock': 1, 'courses': ['Kamino'] },
    { 'id': 016, 'f_name': 'Jocasta   ', 'l_name': 'Nu        ', 'gender': 'F', 'dead': false, 'price': 130, 'stock': 2, 'courses': ['Naboo', 'Kamino'] },
    { 'id': 017, 'f_name': 'RC-3PO    ', 'l_name': '         ', 'gender': 'R', 'dead': false, 'price': 250, 'stock': 1, 'courses': ['Naboo'] },
    { 'id': 020, 'f_name': 'R2-D2     ', 'l_name': '         ', 'gender': 'R', 'dead': false, 'price': 100, 'stock': 2, 'courses': ['Naboo', 'Kamino'] },
    { 'id': 021, 'f_name': 'R5-D4     ', 'l_name': '         ', 'gender': 'R', 'dead': false, 'price': 150, 'stock': 0, 'courses': ['Stewjon'] },
];

let ContinueOrClose = "N";
let text;

var var_user = prompt("Please enter the username");
var var_password = prompt("Please enter the password");

var valid = false;
validate(var_user, var_password);

function validate(username, password) {
    for (var i = 0; i < usernames.length; i++) {
        if ((username == usernames[i]) && (password == passwords[i])) {
            valid = true;
            break;
        }
    }
}

if (valid) {
    alert("valid credentials");

    //do
    do {

        let MenuOption = prompt("Star Wars, Options: \n 1-Filtro x Genero M \n 2-Filtro x Genero F \n 3- Unir Full Name \n 4- Acumulador de  \n 5-Logic stock  \n 6-List price  \n 7-Logic Lenght \n 8-Actualizacion de inventario  ");

        switch (MenuOption) {
            case "1":
                text = "Este es un filtro de Records de tipo Genero Femenino";
                alert(text);

                const femaleStarWCharacter = StarWCharacter.filter((element, index) => {
                    return element.gender === 'F';
                })
                console.log(femaleStarWCharacter);
                //console.log('array ' + JSON.stringify(femaleStarWCharacter));
                break;



            case "2":
                text = "Este es un filtro de Records de tipo Genero Masculino";
                alert(text);

                const MasculineStarWCharacter = StarWCharacter.filter((element, index) => {
                    return element.gender === 'M';
                })
                console.log(MasculineStarWCharacter);
                break;

            case "3":
                text = "Muestar La Lista de Nombres Completos";
                alert(text);

                const fullNames = StarWCharacter.map((element, index) => {
                    return { 'fullName': element['f_name'] + ' ' + element['l_name'] }
                });
                console.log(fullNames);
                break;

            case "4":
                text = "Acumulador de Masa de todos los records (TOTAL)";
                alert(text);

                const total = StarWCharacter.reduce(
                    (accumulator, CharacterS, currentIndex, array) => {
                        accumulator = accumulator + CharacterS.stock;
                        return (accumulator);
                    },
                    0);
                console.log(total); // Total
                break;

            case "5":
                text = "Falso o Verdadero, Si Tenemos Stock Menor a 200 ?";
                alert(text);
                let hasCharacterSBelow30 = StarWCharacter.some((element, index) => {
                    return element.stock < 2;
                });
                console.log(hasCharacterSBelow30); // true
                break;

            case "6":
                text = "Falso o Verdadero Precio menor a 200";
                alert(text);
                const CharacterS = StarWCharacter.find((element, index) => {
                    return element.price < 200;
                });
                console.log(CharacterS);
                break;

            case "7":
                text = "Total de Personajes con mayor o igual a dos Lugares de recidencia";
                alert(text);

                const atLeastTwoCourses = StarWCharacter.every((elements, index) => {
                    return elements.courses.length >= 2;
                });
                console.log(atLeastTwoCourses); // true
                break;



            case "8":
                text = "Actualizacion de Invetario ";
                alert(text);

                var CharacterID = prompt("Ingrese el ID del Record que desea modificar: ");
                var NewInv = prompt("Ingrese la nueva cantidad de Inventario");

                function findRow(id) {
                    return StarWCharacter.find(element => element.id == id);
                }

                let template = { 'stock': NewInv, 'id': CharacterID }
                let row = findRow(CharacterID);
                //or row.Rate = template.Rate
                Object.assign(row, template)
                console.log('array ' + JSON.stringify(StarWCharacter));
                //console.log(StarWCharacter); // true
                break;


            default:
                text = "Esta opcion no es valida!";
                alert(text);

        }

        // Confirmar si desea Continuar o Salir
        ContinueOrClose = prompt("Presiona C para continuar en el programa /o cualquier otra letra para salir ")

        //alert("Seguir = " + seguir )
        // Validar si desea Salir
    } while (ContinueOrClose == "C");

    alert("Nos vemos Pronto ")

}
else {
    alert("invalid credentials");
}

// Fin del Programa
alert("End ")