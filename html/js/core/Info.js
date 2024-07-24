export default class Info {
    static getDiv(title, addressText, img) {
        const container = document.createElement('div');
        container.classList.add('relative', 'bg-white', 'rounded-lg', 'shadow-lg', 'p-4', 'max-w-xs', 'z-10');

        const closeButton = document.createElement('button');
        closeButton.classList.add('close-icon', 'float-right', 'text-gray-400', 'hover:text-gray-600', 'close-btn');

        const closeIcon = document.createElement("img");
        closeIcon.src = "../../img/close_icon.svg";
        closeIcon.classList.add("w-6", "h-6");
        closeButton.appendChild(closeIcon);

        const titleElement = document.createElement('h2');
        titleElement.classList.add('text-lg', 'font-semibold', 'text-gray-800', 'mb-2');
        titleElement.textContent = title;

        const addressElement = document.createElement('p');
        addressElement.classList.add('text-sm', 'text-gray-600', 'mb-2');
        addressElement.textContent = addressText;

        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.classList.add('w-full', 'h-32', 'object-cover', 'rounded-md', 'mb-2');

        const LogButton = document.createElement('button');
        LogButton.id = "log-button";
        LogButton.textContent = "Voir les détails";

        container.appendChild(closeButton);
        container.appendChild(titleElement);
        container.appendChild(addressElement);
        container.appendChild(imgElement);
        container.appendChild(LogButton);

        // Arrow element
        const arrow = document.createElement('div');
        arrow.classList.add('absolute', 'bottom-[-10px]', 'left-1/2', 'transform', '-translate-x-1/2', 'w-0', 'h-0', 'border-l-[10px]', 'border-l-transparent', 'border-r-[10px]', 'border-r-transparent', 'border-t-[10px]', 'border-t-white');

        const wrapper = document.createElement('div');
        wrapper.classList.add('relative');
        wrapper.appendChild(container);
        wrapper.appendChild(arrow);

        return wrapper.outerHTML;
    }
}

// AIzaSyCwRlYsm_3KSv8r8or-DLKZV8f3rDWdLpo

//ajotu dun bouton helloworld dans la console



