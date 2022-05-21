document.addEventListener('DOMContentLoaded', () => {

	console.log("Hello World");

});

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {  
//   name: 'Google',   
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };
// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook

const obj = {
	name: 'Roman',
	info: {
		employees: ['‘Vlad’', '‘Olga’'],
		partners: ['Microsoft', 'Facebook', 'Xing']
	}
}

function getInfo({ name = "unknown", info: [first, secondary] }) {

	console.log(name);
}

console.log(getInfo(info));