function createPopupContent(pewFab) {




    const htmlContent = `
        <div class="pfm-popup">
            <h1>${pewFab.title}</h1>
            <p>${pewFab.description}</p>
            <!-- list of links -->
            <div id="links"></div>
            <div id="map-links" class="pfm-popup-map-links-row"></div>
        </div>
    `;

    const popupContent = document.createElement('div');
    popupContent.innerHTML = htmlContent;

    if (pewFab.commingSoon) {
        const comingSoonElement = document.createElement('div');
        comingSoonElement.className = 'pfm-popup-coming-soon';
        comingSoonElement.textContent = 'COMING SOON';
        popupContent.prepend(comingSoonElement);
    }

    const linksList = popupContent.querySelector('#links');
    pewFab.links.forEach(link => {
        const listItem = document.createElement('a');
        listItem.className = 'pfm-popup-link';
        listItem.href = link.url;
        if (link.icon) {
            const iconElement = document.createElement('i');
            iconElement.className = `fa-brands fa-${link.icon} pfm-popup-link-icon`;
            listItem.appendChild(iconElement);
        }

        const textNode = document.createTextNode(link.text);
        const textElement = document.createElement('span');
        textElement.className = 'pfm-popup-link-text';
        textElement.textContent = link.text;

        listItem.appendChild(textElement);
        linksList.appendChild(listItem);



    });



    return popupContent;
}