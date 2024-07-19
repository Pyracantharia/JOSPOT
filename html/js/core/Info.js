export default class Info{
    
    static getDiv(title, addressText, img){

        const popupBubble = document.createElement("div");
        popupBubble.classList.add("bg-white", "rounded-md", "p-2", "flex", "absolute", "top-0", "left-0", "translate-x-[-50%]", "translate-y-[-100%]");

        const closeButtonDiv = document.createElement("div")
        const closeIcon = document.createElement("img");
        closeIcon.src = "../../img/close_icon.svg";
        closeButtonDiv.appendChild(closeIcon);
        closeButtonDiv.classList.add("pointer", "w-[30px]", "h-[30px]");

        closeButtonDiv.addEventListener("click", () => {
            document.dispatchEvent(new CustomEvent("close"));
        })

        const eventTitle = document.createElement("h2");
        eventTitle.classList.add("text-[18px]", "pb-3", "font-semibold");
        eventTitle.textContent = title;

        const address = document.createElement("p");
        address.textContent = addressText;

        const photo_link = document.createElement("img");
        photo_link.src = img;
        photo_link.classList.add("w-full", "h-full", "object-cover", "object-center");

        const rightDiv = document.createElement("div");
        const leftDiv = document.createElement("div");
        rightDiv.classList.add("basis-1/2");
        leftDiv.classList.add("h-full", "basis-1/2", "relative", "top-0", "bottom-0");

        const rightLeftDiv = document.createElement("div");
        const rightRightDiv = document.createElement("div");
        rightRightDiv.appendChild(closeButtonDiv);
        rightLeftDiv.appendChild(eventTitle);
        rightLeftDiv.appendChild(address);

        rightLeftDiv.classList.add("p-2")

        rightDiv.appendChild(rightLeftDiv);
        rightDiv.appendChild(rightRightDiv);
        rightDiv.classList.add("flex", "items-start")
        leftDiv.appendChild(photo_link);

        popupBubble.appendChild(leftDiv);
        popupBubble.appendChild(rightDiv)

        const anchor = document.createElement("div");
        anchor.classList.add("absolute", "w-full", "bottom-[8px]", "left-0", "after:content-[*]", "after:absolute", "after:top-0", "after:left-0", "after:translate-x-[-50%]", "after:translate-y-[0]", "after:w-0", "after:h-0", "after:border-x-[6px]", "after:border-x-solid", "after:border-x-transparent", "after:border-t-8px", "after:border-t-solid", "after:border-t-white");
        anchor.appendChild(popupBubble);

        const popup_container = document.createElement("div");
        popup_container.classList.add("h-0", "absolute", "w-[450px]");

        popup_container.appendChild(anchor);


        return popup_container;
    }
}

// AIzaSyCwRlYsm_3KSv8r8or-DLKZV8f3rDWdLpo