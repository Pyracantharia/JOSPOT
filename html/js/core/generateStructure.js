import Component from "./Component.js";

export default function generateStructure(structure) {
	const elem = document.createElement(structure.tag);
	if (structure.attributes) {
		for (const attributeName in structure.attributes) {
			if(attributeName === "class"){
				for(const classNameAttribute of structure.attributes[attributeName]){
					// console.log(classNameAttribute)
					elem.classList.add(classNameAttribute.trim())
				}
			} else if (typeof structure.attributes[attributeName] === "boolean") {
					if(structure.attributes[attributeName]){
						const attributeNode = document.createAttribute(attributeName)
						attributeNode.value = structure.attributes[attributeName];
					elem.setAttributeNode(attributeNode);
					}
			} else {
				elem.setAttribute(attributeName, structure.attributes[attributeName]);
			}
		}
	}
	if (structure.events) {
		for (const eventName in structure.events) {
			elem.addEventListener(eventName, structure.events[eventName]);
		}
	}
	if (structure.children) {
		for (const child of structure.children) {
			let subChild;
			if (typeof child === "string") {
				subChild = document.createTextNode(child);
			} else if(child instanceof Component){
				subChild = generateStructure(child.render());
			} else {
				subChild = generateStructure(child);
			}
			elem.appendChild(subChild);
		}
	}
	return elem;
}

