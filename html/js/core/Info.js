export default class Info{
    
    static getDiv(title, addressText, img){
        const infoBlock = document.createElement("div");
        infoBlock.classList.add("max-w-[300px]", "bg-white");

        const closeButton = document.createElement("span")
        closeButton.textContent = "X";
        closeButton.classList.add("pointer", "text-lg");

        closeButton.addEventListener("click", () => {
            closeButton.parentElement.dispatchEvent(new CustomEvent("close"));
        })

        const eventTitle = document.createElement("h2");
        eventTitle.classList.add("text-[18px]", "pb-3", "font-semibold");
        eventTitle.textContent = title;

        const address = document.createElement("p");
        address.textContent = addressText;

        const photo_link = document.createElement("img");
        photo_link.src = img;

        infoBlock.appendChild(closeButton);
        infoBlock.appendChild(eventTitle);
        infoBlock.appendChild(address);
        infoBlock.appendChild(photo_link);

        return infoBlock;
    }
}

// AIzaSyCwRlYsm_3KSv8r8or-DLKZV8f3rDWdLpo