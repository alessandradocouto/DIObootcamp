/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\n// // Como podemos melhorar o esse código usando TS? \n;\nlet employee = {\n    code: 10,\n    name: 'John'\n};\n// console.log( employee.code, employee.name );\n// Desafio 2\nvar Trabalho;\n(function (Trabalho) {\n    Trabalho[Trabalho[\"Atriz\"] = 0] = \"Atriz\";\n    Trabalho[Trabalho[\"Padeiro\"] = 1] = \"Padeiro\";\n})(Trabalho || (Trabalho = {}));\nlet pessoa1 = {\n    nome: \"maria\",\n    idade: 29,\n    profissao: Trabalho.Atriz\n};\nlet pessoa2 = {\n    nome: \"roberto\",\n    idade: 19,\n    profissao: Trabalho.Padeiro\n};\nlet pessoa3 = {\n    nome: \"laura\",\n    idade: 32,\n    profissao: Trabalho.Atriz\n};\nlet pessoa4 = {\n    nome: \"carlos\",\n    idade: 19,\n    profissao: Trabalho.Padeiro\n};\n// Desafio 3\n// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?\nlet botaoAtualizar = document.getElementById('atualizar-saldo');\nlet botaoLimpar = document.getElementById('limpar-saldo');\nlet soma = document.getElementById('soma');\nlet campoSaldo = document.getElementById('campo-saldo');\nlet total = 0;\nfunction somarAoSaldo(soma) {\n    if (campoSaldo) {\n        total += soma;\n        campoSaldo.innerHTML = total.toString();\n        limparSoma();\n    }\n}\nfunction limparSoma() {\n    soma.value = '';\n}\nfunction limparSaldo() {\n    if (campoSaldo) {\n        total = 0;\n        campoSaldo.innerHTML = total.toString();\n    }\n}\nbotaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {\n    somarAoSaldo(parseFloat(soma.value));\n});\nbotaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {\n    limparSaldo();\n});\n/**\n    <h4>Valor a ser adicionado: <input id=\"soma\"> </h4>\n    <button id=\"atualizar-saldo\">Atualizar saldo</button>\n    <button id=\"limpar-saldo\">Limpar seu saldo</button>\n    <h1>\"Seu saldo é: \" <span id=\"campo-saldo\"></span></h1>\n */\n// const button = document.querySelector('.task-button');\n// const input1 = document.querySelector('.task-input1') as HTMLInputElement;\n// const input2 = document.querySelector('.task-input2') as HTMLInputElement;\n// function sum(num1: number, num2: number, callback: (num: number) => number): number {\n//     let result = num1 + num2;\n//     return callback(result);\n// }\n// function aoQuad(numero: number): number {\n//     return numero * numero;\n// }\n// console.log( sum(2,2, aoQuad) );\n\n\n//# sourceURL=webpack://task/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;