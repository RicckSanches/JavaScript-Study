//switch-case нужен для выборочных элементов когда нужна конкретика


let lang = 'ru';

if (lang === 'ru') {
    console.log('рус');
} else if (lang === 'en') {
    console.log('анг');
} else if (lang === 'de') {
    console.log('нем');
} else {
    console.log('язык не поддерживается');
}

switch (lang) {     //переменная
    case "ru":      //значение
        console.log('рус');     //действие
        break;      //конец
    case "en":
        console.log('анг');
        break; //оманда break в конструкции switch-case не является обязательной. При отсутствии break после выполнения задуманного case, выполнятся и все case ниже него.
    case "de":
        console.log('нем');
        break;
    default:        //если ни одно не подошло
        console.log('язык не поддерживается');
        break;
}