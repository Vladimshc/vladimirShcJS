'use strict';

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];


function capsLock(str) {
    var resStr = str.toString().split(" ");
    for (var i = 0; i < resStr.length; i++) {
        var resStrI = resStr[i].toString();
        var isUpperCase0 = resStrI.substring(0, 1).toUpperCase() == resStrI.substring(0, 1);
        var isUpperCase1 = resStrI.substring(1, 2).toUpperCase() == resStrI.substring(1, 2);
        var isUpperCase2 = resStrI.substring(2, 3).toUpperCase() == resStrI.substring(2, 3);

        var q = (!isUpperCase0 && isUpperCase1);
        var w = (isUpperCase0 && isUpperCase1);
        var e = (!isUpperCase0 && isUpperCase1 && !isUpperCase2);
        if (q && !e) {
            resStr[i] = resStrI.substring(0, 1).toUpperCase() + resStrI.substring(1).toLowerCase();
        }
        else if (w){
            resStr[i] = resStrI.toLowerCase();
        }
    }
    return resStr.join(" ");
}


tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});
