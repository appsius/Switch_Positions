console.log('DOM Helper executing!');

export class DOMHelper {
	static clearEventListeners(element) {
		const clonedElement = element.cloneNode(true);

		element.replaceWith(clonedElement);

		return clonedElement;
	}

	static moveElement(elementID, newDestinationSelector) {
		const element = document.getElementById(elementID);
		const destinationElement = document.querySelector(newDestinationSelector);

		destinationElement.append(element);
		element.scrollIntoView();
	}
}

export function clearEventListeners(element) {
	const clonedElement = element.cloneNode(true);

	element.replaceWith(clonedElement);

	return clonedElement;
}

export function moveElement(elementID, newDestinationSelector) {
	const element = document.getElementById(elementID);
	const destinationElement = document.querySelector(newDestinationSelector);

	destinationElement.append(element);
	element.scrollIntoView();
}
