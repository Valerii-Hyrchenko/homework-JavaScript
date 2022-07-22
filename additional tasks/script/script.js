//1) Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
const arrayNumbers = [64, 1, 2, 3, 4, 5, 10, 25, 64, 128, 125, 7, 246, 44, 17, 145];
const getSqrtEvenNumbers  = (array) => array.reduce((acc, number) => ((number % 2 === 0 ? Math.sqrt(number) : 0) + acc), 0);
console.log(`task 1`, getSqrtEvenNumbers(arrayNumbers));

//2) Напишите функцию, которая проверяет, является ли элемент объектом или массивом.
const isElementObjectOrArray = (element) => {
    if (Array.isArray(element) === true) {
        return console.log("This element is an Array");
    } else if (typeof(element) === "object") {
        return console.log("This element is an Object");
    }
}
const data = { a: 1 };
isElementObjectOrArray(data);

//3) Напишите функцию, которая пишет в консоль массив чисел в заданном диапазоне, в случае, если оно успешно делится или не делится
//с остатком или без остатка в зависимости от параметров.
const isNegative = (number) => number < 0;
const isOddNumbers = (number) => number % 2 !== 0;
const getArrayNumbers = (from, to, callback) => {
    const arrNumbers = [];
    for (let i = from; i <= to; i++) {
        if (callback(i)) {
        arrNumbers.push(i);
        } else {
            continue;
        }
    }
    return arrNumbers;
}
console.log(`task 3`,getArrayNumbers(-10, 20, isOddNumbers));

//4) Есть ферма животных, у всех животных есть имена и возраст. Животные бывают разных типов: Кошки, Собаки, Коровы.
// У каждого животного могут быть дети. Если животное является родителем этих детей, в свою очередь глубина семейного
// древа может достигать N либо 0.
// Опишите структуры данных для фермы животных и напишите функцию, которая делает подсчёт всех возрастов животных и
// выводит общий возраст для всей фермы.
const farm = [
    {
        cats: {
            mileena: {
                name: "mileena",
                age: 5,
                child: {
                    name: "charlotte",
                    age: 1,
                },
            },
            сhristie: {
                name: "сhristie",
                age: 4,
                child: {
                    name: "afina",
                    age: 1,
                },
            },
            cleo: {
                name: "cleo",
                age: 9,
                child: {
                    name: "kitty",
                    age: 1,
                },
            },
            kitana: {
                name: "kitana",
                age: 8,
            },
        },
    },
    {
        dogs: {
            pickles: {
                name: "pickles",
                age: 4,
                child: {
                    name: "steve",
                    age: 2,
                },
            },
            benny: {
                name: "benny",
                age: 5,
                child: {
                    name: "rocky",
                    age: 2,
                },
            },
            arny: {
                name: "arny",
                age: 6,
            },
            buddy: {
                name: "buddy",
                age: 8,
                child: {
                    name: "elvin",
                    age: 3,
                },
            },
        },
    },
    {
        cows: {
            flame: {
                name: "flame",
                age: 10,
                child: {
                    name: "flower",
                    age: 3,
                },
            },
            cherry: {
                name: "cherry",
                age: 11,
                child: {
                    name: "wild",
                    age: 4,
                },
            },
            happy: {
                name: "happy",
                age: 9,
            },
        },
    },
]
let allAnimalsAgeValue = 0;
let selectedAnimalAgeValue = 0;
//После вызова функции глобальная переменная содержит некорректное задвоенное значение.
//Не могу придумать как уйти от использования глобальных переменных. Так как при повторном вызове такой функции ее результат неверен.
//Если все же использовать эти глобальные переменные, то возможно в самой функции можно прописать "обнуление" такого счетчика.

//Функция для поиска ключа возраста всех животных (для всех вложеных обьектов внутри массива).
const getAgeAllAnimals = (object) => {
    for (let key in object) {
        if (typeof object[key] !== "object") {
            allAnimalsAgeValue += object.age;
        } else {
            getAgeAllAnimals(object[key]);
        }
    }
    return allAnimalsAgeValue;
}
//Функция для подсчета возраста всех животных.
const countAnimalsAge = (arrayAnimal) => {
    for (let animal of arrayAnimal) {
        getAgeAllAnimals(animal);
    }
    return allAnimalsAgeValue / 2;//Деление на 2 так как счетчик задваивает значения возрастов из-за рекурсии.
}
//Функция для поиска ключа возраста по какому-то выбраному виду животных (для всех вложеных обьектов внутри массива).
const getAgeSelectedAnimal = (object) => {
    for (let key in object) {
        if (typeof object[key] !== "object") {
            selectedAnimalAgeValue += object.age;
        } else {
            getAgeSelectedAnimal(object[key]);
        }
    }
    return selectedAnimalAgeValue;
}
//Функция для подсчета возраста только нужного вида животных.
const countAgeSelectedAnimal = (arrayAnimal, kind) => {
    let selectedObject = {};
    for (let object of arrayAnimal) {
        selectedObject = object[kind];
    }
    return getAgeSelectedAnimal(selectedObject) / 2;//Деление на 2 так как счетчик задваивает значения возрастов из-за рекурсии.
}
console.log(`task 4 onlyCows`, countAgeSelectedAnimal(farm, "cows"));//Поиск суммы возрастов только по коровам.
console.log(`task 4 allAnimals`, countAnimalsAge(farm));//Поиск суммы возрастов всех животных.

//5) Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
const dataToSort = [0, 1, false, 2, undefined, '', 3, null];
const arrayToCorrectData = (array) => array.filter((data) => (data !== false && data > 0));
console.log(`task 5`, arrayToCorrectData(dataToSort));

//6) Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ,
//второй - значение.
const arrayToObject = [['a', 1], ['b', 2]];
const getObject = (array) => array.reduce((object, key) => {
    object[key[0]] = key[1];
    return object;
}, {});
console.log(`task 6`,getObject(arrayToObject));

//7) Напишите функцию, которая разделяет массив на части заданного размера.
const numbers = [1, 2, 3, 4, 5, 6, 7];
const getSliceArray = (array, sizeSlice) => {
    newArray = [];
    for (let i = 0; i <= array.length; i += sizeSlice) {
        let countSlice = i + sizeSlice;
        newArray.push(array.slice(i, countSlice));
    }
    return newArray;
}
console.log(`task 7`,getSliceArray(numbers, 3));

//8) Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
//Функция должна принимать 2 аргумента, массивы нужно сравнивать попарно.
const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
const uniqueValue = (array1, array2) => {
    const newArray = [];
    for (let item of array1) {
        if ((array2.some((element) => element === item))) {
            newArray.push(item);
        } else {
            continue;
        }
    }
    return newArray.filter((value, index) => newArray.indexOf(value) === index); //для исключения дубликатов
};
console.log(`task 8`,uniqueValue(arr6, arr5));