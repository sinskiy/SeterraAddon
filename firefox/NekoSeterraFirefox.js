///  Form creation for user settings.
function createForm() {
    if (!document.getElementById("NekoAddon")) {
        const nekoMain = document.createElement("div");
        nekoMain.id = "NekoAddon";
        nekoMain.style.position = "absolute";
        nekoMain.style.top = "582px";
        nekoMain.style.left = "18px";

        const nekoHeader = document.createElement("h2");
        nekoHeader.textContent = "Neko's Seterra Addons";
        nekoHeader.style.paddingBottom = "10px";
        nekoHeader.id = 'nekoheaderid';
        nekoMain.appendChild(nekoHeader);

        const nekoForm = document.createElement("form");
        nekoMain.appendChild(nekoForm);

        const checkboxes = [
            { id: 'darkModeCbxId', text: 'Enable dark mode', title: 'Changes the background to a darker color, uncheck to set it to white.' },
            { id: 'mapPaddingCbxId', text: 'Enable extra map padding', title: 'Adds extra padding below the map for a less distracting user experience.' },
            { id: 'mapResetCbxId', text: 'Quick map reset', title: 'Resets the map when the spacebar is pressed.' },
            { id: 'removeLeftPaddingCbxId', text: 'Center map', title: 'Adds space on the left side of the map to center the map.\n!!! DOES NOT WORK FOR ZOOM VALUES OVER 140%' },
            { id: 'showScoresCbxId', text: 'Show personal top 10', title: 'Shows your top 10 best scores on the left of the map.\n!!! ONLY WORKS WHEN LOGGED IN' },
            { id: 'showCursorLabelCbxId', text: 'Show cursor label', title: 'Shows or hides the label that tracks the cursor.' },
            { id: 'boldNamesCbxId', text: 'Show bold names', title: 'Shows or hides bold names.' },
            { id: 'showFlagCbxId', text: 'Show area flags', title: 'Shows or hides area flags.' },
            { id: 'showNamesCbxId', text: 'Show area names', title: 'Shows or hides area names.' },
            { id: 'remClickOnCbxId', text: 'Remove \"Click on\" text', title: 'Remove \"Click on\" text from cursor label' },
            { id: 'comicSansCbxId', text: 'Enable readable font', title: ':)' }
        ];

        // Create a style element
        var style = document.createElement('style');

        // Set the type attribute
        style.setAttribute('type', 'text/css');

        // Define the CSS rule to change the cursor for labels with the custom-label class
        var css = '.neko-help-class:hover { cursor: pointer; }'; // Changed selector here

        // Add the CSS rule to the style element
        if (style.styleSheet) {
            // For IE
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        // Append the style element to the document's head
        document.head.appendChild(style);

        checkboxes.forEach(({ id, text, title }, index) => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = id;

            const label = document.createElement('label');
            label.textContent = text;
            label.htmlFor = id;


            const helpText = document.createElement('label');
            helpText.textContent = '?';
            helpText.title = title;
            helpText.classList.add('neko-help-class');

            checkbox.style.position = 'relative';
            label.style.position = 'relative';
            helpText.style.position = 'absolute';
            label.style.left = "20px";
            helpText.style.right = "0";

            nekoForm.appendChild(checkbox);
            nekoForm.appendChild(label);
            nekoForm.appendChild(helpText);
            nekoForm.appendChild(document.createElement('br'));
        });

        const version = document.createElement("p");
        version.textContent = "v1.6.1 - 20 May 2024";
        version.style.fontSize = "12px";
        version.style.position = "absolute";
        version.style.left = "5px";
        version.id = 'versionid';
        nekoMain.appendChild(version);

        document.body.appendChild(nekoMain);
    }
}
///  Custom highscore table positioning, uses the `unset` bool for looping, as it's not loaded instantaneously.
function customTable(bool) {
    if (bool) {
        if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
            document.getElementsByClassName("highscore_table__oKrYg")[0].style.position = "absolute";
            document.getElementsByClassName("highscore_table__oKrYg")[0].style.backgroundColor = "unset";
            document.getElementsByClassName("highscore_table__oKrYg")[0].style.top = "900px";
            document.getElementsByClassName("highscore_table__oKrYg")[0].style.left = "0px";
            unset = false;
        }
    }
}
///
function remClickOn(bool) {
    if (bool) {
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
          
            if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span')) {
                document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').childNodes[0].textContent = "";
            }
        }
    }
    else {
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {

            if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span')) {
                document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').childNodes[0].textContent = "Click on ";
            }
        }
    }

}
///  Map bottom padding.
function mapPadding(bool) {
    if (bool) {
        if (document.getElementsByClassName("extra-info_extraInfo__80Tci")) {
            let a = document.getElementsByClassName("extra-info_extraInfo__80Tci");
            a[0].style.marginTop = "200px";
        }
    }
    else {
        if (document.getElementsByClassName("extra-info_extraInfo__80Tci")) {
            let a = document.getElementsByClassName("extra-info_extraInfo__80Tci");
            a[0].style.marginTop = "0px";
        }
    }
}
function zoomFunc(amnt, px, zoom) {
    if (zoom == amnt) {
        if (document.querySelectorAll("aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS")[0]) {
            document.querySelectorAll("aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS")[0].style.width = px + "px";
        }
    }
}

///  Removal of empty space next to map.
function noLeftSpace(bool) {
    if (bool) {

        let zoom = window.devicePixelRatio.toFixed(1); // 100% = 1.0, 50% = 0.5

        zoomFunc(0.5, 410, zoom) // 50%
        zoomFunc(0.6, 410, zoom) // 50%
        zoomFunc(0.7, 400, zoom) // 70%
        zoomFunc(0.8, 400, zoom) // 80%
        zoomFunc(0.9, 400, zoom) // 90%
        zoomFunc(1.0, 400, zoom) // 100%
        zoomFunc(1.1, 400, zoom) // 110%
        zoomFunc(1.2, 380, zoom) // 120%
        zoomFunc(1.3, 315, zoom) // 130%
        zoomFunc(1.4, 267, zoom) // 140%
    }
    else {
        if (document.querySelectorAll("aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS")[0]) {
            document.querySelectorAll("aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS")[0].style.width = "160px";
        }
    }

}
/////  Removal of empty space next to map.
//function noLeftSpace(bool) {
//    if (bool) {
//        if (document.querySelectorAll("aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS")[0]) {
//            document.querySelectorAll("aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS")[0].style.width = "0px";
//        }
//    }
//    else {
//        if (document.querySelectorAll("aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS")[0]) {
//            document.querySelectorAll("aside.seterra_sidebarLeft__wQo_r.seterra_sidebar__p6xf1.seterra_adContainerLeft__zTLsS")[0].style.width = "160px";
//        }
//    }

//}
///  Removes the bottom footer.
function remFooter() {
    if (document.getElementsByClassName("seterra_adFooter__4glju")[0]) {
        document.getElementsByClassName("seterra_adFooter__4glju")[0].remove();
    }
    meow();
}
///  Map reset function.
function spaceKeyDownHandler(event) {
    if (event.code == "Space") {
        event.preventDefault();
        if (document.querySelectorAll('button.button_button__aR6_e.button_variantPrimary__u3WzI')[0]) {
            document.querySelectorAll('button.button_button__aR6_e.button_variantPrimary__u3WzI')[0].click();
        }
        else {
            document.querySelectorAll("button.button_button__aR6_e.button_variantSecondaryInverted__6G2ex.button_sizeSmall__MB_qj")[1].click();
        }        
    }
}
///  Map reset check.
function mapReset(bool) {
    if (bool) {
        document.addEventListener("keydown", spaceKeyDownHandler);  
    }
    else {
        document.removeEventListener("keydown", spaceKeyDownHandler);
    }
}
///  Toggle for dark mode.
function darkMode() {
    var textElements = document.querySelectorAll(':not(a)');

    textElements.forEach(function (element) {
        element.style.color = 'white';
    });

    if (document.getElementById('nekoheaderid')) {
        document.getElementById('nekoheaderid').style.color = "#FF006E";
    }

    if (document.getElementById('versionid')) {
        document.getElementById('versionid').style.color = "#CC0058";
    }
    

    if (document.getElementsByClassName('game-area_gameArea__G2ABs')[0]) {
        document.getElementsByClassName('game-area_gameArea__G2ABs')[0].childNodes.forEach(function (element) {
            element.style.color = 'black';
        });
    }


    if (document.getElementsByClassName("game-header_wrapper__JDf24")[0]) {
        document.getElementsByClassName("game-header_wrapper__JDf24")[0].style.background = "rgba(24, 26, 27, 0.5)";
    }

    if (document.getElementsByClassName("audio-player_playButton__vwNa2")[0]) {
        document.getElementsByClassName("audio-player_playButton__vwNa2")[0].style.filter = "invert(0)";
    }

    if (document.getElementsByClassName("game-footer_settingsButton__qIHi5")[0]) {
        document.getElementsByClassName("game-footer_settingsButton__qIHi5")[0].style.filter = "invert(0)";
    }

    if (document.getElementsByClassName("modal_closeButton__DZmv4")[0]) {
        document.getElementsByClassName("modal_closeButton__DZmv4")[0].style.border = ".0625rem solid white";
    }

    if (document.querySelectorAll('button.modal_closeButton__DZmv4')[0]) {
        if (document.querySelectorAll('button.modal_closeButton__DZmv4')[0].querySelector('img')) {
            document.querySelectorAll('button.modal_closeButton__DZmv4')[0].querySelector('img').style.filter = "invert(0)"
        }
    }

    if (document.getElementsByClassName("game-container_sizeMedium__ZYDZN")[0]) {
        document.getElementsByClassName("game-container_sizeMedium__ZYDZN")[0].style.color = "#181A1B";
    }

    var buttons = document.getElementsByClassName("button_label__ERkjz");
    var borders = document.querySelectorAll("button.button_button__aR6_e.button_variantSecondaryInverted__6G2ex.button_sizeSmall__MB_qj");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "white";
    }

    for (var i = 0; i < borders.length; i++) {
        borders[i].style.border = ".0625rem solid white";
    }

    let bgc = "#181A1B";

    if (document.getElementsByClassName("game-container_content__VkRyQ")[0]) {
        document.getElementsByClassName("game-container_content__VkRyQ")[0].style.background = bgc;
    }

    if (document.getElementsByClassName("game-container_sizeSmall___C_u3")[0]) {
        document.getElementsByClassName("game-container_sizeSmall___C_u3")[0].style.background = bgc;
    }

    if (document.getElementsByClassName("seterra_main__mwfLw")[0]) {
        document.getElementsByClassName("seterra_main__mwfLw")[0].style.background = bgc;
    }

    if (document.getElementsByClassName("seterra_content__nGh5_")[0]) {
        document.getElementsByClassName("seterra_content__nGh5_")[0].style.background = bgc;
    }

    if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {

        document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].style.background = "rgba(24, 26, 27, 0.75)";

        var spanElement = document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').querySelector('strong');

        if (spanElement) {
            spanElement.style.color = "white";
            labelColor = false;
        }
    }

    if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
        document.getElementsByClassName("highscore_table__oKrYg")[0].style.backgroundColor = "rgba(0,0,0,0)";
    }
}
///  Toggle for light mode.
function lightMode() {
    var textElements = document.querySelectorAll(':not(a)');
    textElements.forEach(function (element) {
        element.style.color = 'black';
    });

    if (document.getElementById('nekoheaderid')) {
        document.getElementById('nekoheaderid').style.color = "#FF006E";
    }

    if (document.getElementById('versionid')) {
        document.getElementById('versionid').style.color = "#CC0058";
    }

    if (document.getElementsByClassName("game-header_wrapper__JDf24")[0]) {
        document.getElementsByClassName("game-header_wrapper__JDf24")[0].style.background = "rgba(255, 255, 255, 0.5)";
    }

    if (document.getElementsByClassName("audio-player_playButton__vwNa2")[0]) {
        document.getElementsByClassName("audio-player_playButton__vwNa2")[0].style.filter = "invert(1)";
    }

    if (document.getElementsByClassName("game-footer_settingsButton__qIHi5")[0]) {
        document.getElementsByClassName("game-footer_settingsButton__qIHi5")[0].style.filter = "invert(1)";
    }
    if (document.getElementsByClassName("game-container_sizeMedium__ZYDZN")[0]) {
        document.getElementsByClassName("game-container_sizeMedium__ZYDZN")[0].style.color = "white";
    }

    if (document.getElementsByClassName("modal_closeButton__DZmv4")[0]) {
        document.getElementsByClassName("modal_closeButton__DZmv4")[0].style.border = ".0625rem solid black";
    }

    if (document.querySelectorAll('button.modal_closeButton__DZmv4')[0]) {
        if (document.querySelectorAll('button.modal_closeButton__DZmv4')[0].querySelector('img')) {
            document.querySelectorAll('button.modal_closeButton__DZmv4')[0].querySelector('img').style.filter = "invert(1)"
        }
    }

    var buttons = document.getElementsByClassName("button_label__ERkjz");
    var borders = document.querySelectorAll("button.button_button__aR6_e.button_variantSecondaryInverted__6G2ex.button_sizeSmall__MB_qj");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "black";
    }

    for (var i = 0; i < borders.length; i++) {
        borders[i].style.border = ".0625rem solid black";
    }

    if (document.getElementsByClassName("game-container_content__VkRyQ")[0]) {
        document.getElementsByClassName("game-container_content__VkRyQ")[0].style.background = "white";
    }

    if (document.getElementsByClassName("game-container_sizeSmall___C_u3")[0]) {
        document.getElementsByClassName("game-container_sizeSmall___C_u3")[0].style.background = "white";
    }

    if (document.getElementsByClassName("seterra_main__mwfLw")[0]) {
        document.getElementsByClassName("seterra_main__mwfLw")[0].style.background = "white";
    }

    if (document.getElementsByClassName("seterra_content__nGh5_")[0]) {
        document.getElementsByClassName("seterra_content__nGh5_")[0].style.background = "white";
    }

    if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {

        document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].style.background = "rgba(255, 255, 255, 0.75)";

        var spanElement = document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').querySelector('strong');

        if (spanElement) {
            spanElement.style.color = "black";
            labelColor = false;
        }
    }
    if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {
        document.getElementsByClassName("highscore_table__oKrYg")[0].style.backgroundColor = "rgba(0,0,0,0)";
    }
}
///  Toggle cursor label visibility.
function cursorLabel(bool) {
    if (bool) {
        if (document.getElementsByClassName('game-area_tooltip__Ns9Yi')[0]) {
            document.getElementsByClassName('game-area_tooltip__Ns9Yi')[0].style.display = "block";
        }       
    }
    else {
        if (document.getElementsByClassName('game-area_tooltip__Ns9Yi')[0]) {
            document.getElementsByClassName('game-area_tooltip__Ns9Yi')[0].style.display = "none";
        }
    }
}
///  Toggle bold area names.
function boldNames(bool) {
    if (bool) {
        if (document.getElementsByClassName('game-header_withDivider__ZHYAO')[2]) {
            document.getElementsByClassName('game-header_withDivider__ZHYAO')[2].children[0].style.fontWeight = "bold";
        }        
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
            if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span')) {
                if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').querySelector('strong')) {
                    document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').querySelector('strong').style.fontWeight = "bold";
                    if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').querySelector('strong').style.fontWeight == "bold") {
                        boldNamesOopsie = false;
                    }
                }

            }

        }
    }
    else {
        if (document.getElementsByClassName('game-header_withDivider__ZHYAO')[2]) {
            document.getElementsByClassName('game-header_withDivider__ZHYAO')[2].children[0].style.fontWeight = "normal";
        }
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
            if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span')) {
                if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').querySelector('strong')) {
                    document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').querySelector('strong').style.fontWeight = "normal";
                    if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('span').querySelector('strong').style.fontWeight == "normal") {
                        boldNamesOopsie = false;
                    }
                    
                }

            }
        }   
    }
}
///  Toggle area flags.
function flags(bool) {
    if (bool) {
        if (document.getElementsByClassName('corner-image_wrapper__ej_p1')[0]) {
            document.getElementsByClassName('corner-image_wrapper__ej_p1')[0].style.display = "flex";
        }
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
            if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('img')) {
                document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('img').style.display = "flex";
            }
        }
    }
    else {
        if (document.getElementsByClassName('corner-image_wrapper__ej_p1')[0]) {
            document.getElementsByClassName('corner-image_wrapper__ej_p1')[0].style.display = "none";
        }
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
            if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('img')) {
                document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].querySelector('img').style.display = "none";
            }
        }
    }
}
///  Toggle area names.
function names(bool) {
    if (bool) {
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
            if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].childNodes[0]) {
                document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].childNodes[0].style.display = "block";
            }
        }
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
            document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].style.paddingLeft = "8px"; // label padding
        }
        if (document.getElementsByClassName('game-header_withDivider__ZHYAO')[2]) {
            document.getElementsByClassName('game-header_withDivider__ZHYAO')[2].style.display = "block"
        }
    }
    else {
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
            if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].childNodes[0]) {
                if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].childNodes[0].childNodes[0]) {
                    document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].childNodes[0].style.display = "none";
                }                
            }
        }
        if (document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0]) {
            document.getElementsByClassName('game-tooltip_tooltip__w_58_')[0].style.paddingLeft = "0px";
        }
        if (document.getElementsByClassName('game-header_withDivider__ZHYAO')[2]) {
            document.getElementsByClassName('game-header_withDivider__ZHYAO')[2].style.display = "none"
        }
    }
}
///  Sets data if none is present. (defaults)
function setInitialData(data) {
    return browser.storage.local.get(Object.keys(data)).then(result => {
        for (let key in data) {
            if (!(key in result)) {
                result[key] = data[key];
            }
        }
        return browser.storage.local.set(result);
    });
}
///  Dev data overwriting for testing.
function overwriteData() {
    browser.storage.local.set({
        "darkMode": true,
        "mapPadding": true,
        "quickReset": true,
        "removeLeft": true,
        "showTop10": true,
        "showCursorLabel": true,
        "boldNames": true,
        "showFlags": true
    });
}
///  Grabs data from local storage.
function retrieveData(name) {
    return browser.storage.local.get(name).then(result => {
        return result[name];
    });
}
///  Spits out readable data from local storage.
function getData(name) {
    return retrieveData(name).then(value => {
        return value;
    });
}
///  Constant loop for page checks.
function meow() {

    if (window.location.pathname.substring(0, 4) == "/vgp") {
        createForm();
        document.getElementById("NekoAddon").style.display = "block"
        var unset = true;
        var boldNamesOopsie = true;
        var labelColor = true;

        if (window.location.pathname == "/vgp/3007") {
            europecountries = true;
        }
        else {
            europecountries = false;
        }
    }
    else {
        document.getElementById("NekoAddon").style.display = "none"
    }

    if (document.querySelectorAll('div.modal_content__ZijTp.modal_colorWhite__b1Uem.modal_sizeSmall__gHON2')[0]) {
        getData("darkMode").then(beans0 => {
            if (beans0) {
                document.querySelectorAll('div.modal_content__ZijTp.modal_colorWhite__b1Uem.modal_sizeSmall__gHON2')[0].style.background = "rgba(24, 26, 27, 0.55)";
            }
            else {
                document.querySelectorAll('div.modal_content__ZijTp.modal_colorWhite__b1Uem.modal_sizeSmall__gHON2')[0].style.background = "rgba(255, 255, 255, 0.55)";
            }
        });

    }

    if (labelColor) {
        getData("darkMode").then(beans1 => {
            if (beans1) {
                document.getElementById("darkModeCbxId").checked = true;
                darkMode();
            }
            else {
                document.getElementById("darkModeCbxId").checked = false;
                lightMode();
            }
        });
    }
    if (unset) {
        getData("mapPadding").then(beans2 => {
            if (beans2) {
                document.getElementById("mapPaddingCbxId").checked = true;
                mapPadding(true);
            }
            else {
                document.getElementById("mapPaddingCbxId").checked = false;
                mapPadding(false);
            }
        });
        getData("quickReset").then(beans3 => {
            if (beans3) {
                document.getElementById("mapResetCbxId").checked = true;
                mapReset(true);
            }
            else {
                document.getElementById("mapResetCbxId").checked = false;
                mapReset(false);
            }
        });
        getData("removeLeft").then(beans4 => {
            if (beans4) {
                document.getElementById("removeLeftPaddingCbxId").checked = true;
                noLeftSpace(true);
            }
            else {
                document.getElementById("removeLeftPaddingCbxId").checked = false;
                noLeftSpace(false);
            }
        });
        getData("showTop10").then(beans5 => {
            if (beans5) {
                document.getElementById("showScoresCbxId").checked = true;
                customTable(true);
            }
        });
        getData("showCursorLabel").then(beans6 => {
            if (beans6) {
                document.getElementById("showCursorLabelCbxId").checked = true;
                cursorLabel(true);
            }
            else {
                document.getElementById("showCursorLabelCbxId").checked = false;
                cursorLabel(false);
            }
        });
        getData("showFlags").then(beans7 => {
            if (beans7) {
                document.getElementById("showFlagCbxId").checked = true;
                flags(true);
            }
            else {
                document.getElementById("showFlagCbxId").checked = false;
                flags(false);
            }
        });
        getData("showNames").then(beans8 => {
            if (beans8) {
                document.getElementById("showNamesCbxId").checked = true;
                names(true);
            }
            else {
                document.getElementById("showNamesCbxId").checked = false;
                names(false);
            }
        });
        getData("removeClickOn").then(beans8 => {
            if (beans8) {
                document.getElementById("remClickOnCbxId").checked = true;
                remClickOn(true);
            }
            else {
                document.getElementById("remClickOnCbxId").checked = false;
                remClickOn(false);
            }
        });
        getData("comicSans").then(beans8 => {
            if (beans8) {
                document.getElementById("comicSansCbxId").checked = true;
                readableFont(true);
            }
            else {
                document.getElementById("comicSansCbxId").checked = false;
                readableFont(false);
            }
        });
    }
    if (boldNamesOopsie) {
        getData("boldNames").then(beans9 => {
            if (beans9) {
                document.getElementById("boldNamesCbxId").checked = true;
                boldNames(true);
            }
            else {
                document.getElementById("boldNamesCbxId").checked = false;
                boldNames(false);
            }
        });
    }
    if (europecountries && !toggled) {
        toggled = true;
        setInterval(compareBestTime, 2000);
    }

    getData("initialReload").then(beans9 => {
        if (!beans9) {
            chrome.storage.local.set({
                "initialReload": true
            });
            location.reload();
        }
    });
}
///  Applies the user's stored settings. (executes functions)
function setSettings() {

    if (window.find("Uh oh! Got lost on your way?", true)) {
        location.reload();
    }

    document.getElementById("darkModeCbxId").addEventListener("change", function () {
        if (document.getElementById("darkModeCbxId").checked) {

            browser.storage.local.set({
                "darkMode": true
            });
            darkMode();
        }
        else {

            browser.storage.local.set({
                "darkMode": false
            });
            lightMode();
        }
    })

    document.getElementById("mapPaddingCbxId").addEventListener("change", function () {
        if (document.getElementById("mapPaddingCbxId").checked) {
            mapPadding(true);
            browser.storage.local.set({
                "mapPadding": true
            });
        }
        else {
            mapPadding(false);
            browser.storage.local.set({
                "mapPadding": false
            });
        }
    })

    document.getElementById("mapResetCbxId").addEventListener("change", function () {
        if (document.getElementById("mapResetCbxId").checked) {
            mapReset(true);
            browser.storage.local.set({
                "quickReset": true
            });
        }
        else {
            mapReset(false);
            browser.storage.local.set({
                "quickReset": false
            });
        }
    })

    document.getElementById("removeLeftPaddingCbxId").addEventListener("change", function () {
        if (document.getElementById("removeLeftPaddingCbxId").checked) {
            noLeftSpace(true);
            browser.storage.local.set({
                "removeLeft": true
            });
        }
        else {
            noLeftSpace(false);
            browser.storage.local.set({
                "removeLeft": false
            });
        }
    })

    document.getElementById("showScoresCbxId").addEventListener("change", function () {
        if (document.getElementById("showScoresCbxId").checked) {
            customTable(true);
            browser.storage.local.set({
                "showTop10": true
            });
        }
        else {
			if (document.getElementsByClassName("highscore_table__oKrYg")[0]){
                browser.storage.local.set({
                    "showTop10": false
                });
                location.reload();
			}
        }
    })

    document.getElementById("showCursorLabelCbxId").addEventListener("change", function () {
        if (document.getElementById("showCursorLabelCbxId").checked) {
            cursorLabel(true);
            browser.storage.local.set({
                "showCursorLabel": true
            });
        }
        else {
            cursorLabel(false);
            browser.storage.local.set({
                "showCursorLabel": false
            });
        }
    })

    document.getElementById("boldNamesCbxId").addEventListener("change", function () {
        if (document.getElementById("boldNamesCbxId").checked) {
            boldNames(true);
            browser.storage.local.set({
                "boldNames": true
            });
        }
        else {
            browser.storage.local.set({
                "boldNames": false
            });
            boldNames(false);
        }
    })

    document.getElementById("showFlagCbxId").addEventListener("change", function () {
        if (document.getElementById("showFlagCbxId").checked) {
            browser.storage.local.set({
                "showFlags": true
            });
            flags(true);
        }
        else {
            browser.storage.local.set({
                "showFlags": false
            });
            flags(false);
        }
    })

    document.getElementById("showNamesCbxId").addEventListener("change", function () {
        if (document.getElementById("showNamesCbxId").checked) {

            browser.storage.local.set({
                "showNames": true
            });
            names(true);
        }
        else {

            browser.storage.local.set({
                "showNames": false
            });
            names(false);
        }
    })

    document.getElementById("remClickOnCbxId").addEventListener("change", function () {
        if (document.getElementById("remClickOnCbxId").checked) {

            browser.storage.local.set({
                "removeClickOn": true
            });
            remClickOn(true);
        }
        else {

            browser.storage.local.set({
                "removeClickOn": false
            });
            remClickOn(false);
        }
    })

    document.getElementById("comicSansCbxId").addEventListener("change", function () {
        if (document.getElementById("comicSansCbxId").checked) {

            browser.storage.local.set({
                "comicSans": true
            });
            readableFont(true);
        }
        else {

            browser.storage.local.set({
                "comicSans": false
            });
            readableFont(false);
        }
    })
    remFooter();
}

function readableFont(bool) {
    var textElements = document.querySelectorAll('*');

    if (bool) {
        textElements.forEach(function (element) {
            element.style.fontFamily = 'comic sans ms';
        });
    }
    else {
        textElements.forEach(function (element) {
            element.style.fontFamily = 'neo-sans';
        });
    }
}

setInitialData({
    "darkMode": true,
    "mapPadding": true,
    "quickReset": true,
    "removeLeft": true,
    "showTop10": true,
    "showCursorLabel": true,
    "boldNames": true,
    "showFlags": true,
    "showNames": true,
    "removeClickOn": false,
    "comicSans": false,
    "initialReload": false,

}).then(() => {
    console.log("Data saved successfully.");
}).catch(error => {
    console.error("Error saving data:", error);
});

function findMS(value) {
    const dotPosition = value.indexOf('.');

    if (dotPosition === -1) {
        return 0;
    }

    const substringAfterDot = value.substring(dotPosition + 1);

    return substringAfterDot.length;
}

function compareBestTime() {
    // Fetch the leaderboard data from the API
    fetch('https://www.speedrun.com/api/v1/leaderboards/nd28p43d/category/jdz0yzv2')
        .then(response => response.json())
        .then(leaderboardData => {
            const specificKey = "7893xeq8";
            const pinValue = "qj77360q";

            const filteredRuns = leaderboardData.data.runs.filter(run => run.run.values[specificKey] === pinValue);

            let j = 1;
            let num = 0;
            

            if (document.getElementsByClassName("highscore_table__oKrYg")[0]) {

                let timeString = document.getElementsByClassName('highscore_table__oKrYg')[0].childNodes[1].childNodes[0].childNodes[2].innerText;
                let pb = parseFloat(timeString.split(":")[1]);

                for (let i = 0; i < filteredRuns.length; i++) {
                    if (findMS(filteredRuns[i].run.times.primary_t.toString()) <= 2) {
                        num = pb - parseFloat(filteredRuns[i].run.times.primary_t + `0`);
                    }
                    else {
                        num = pb - parseFloat(filteredRuns[i].run.times.primary_t);
                    }

                    j++;                    

                    if (num < 0 && !document.getElementsByClassName('highscore_table__oKrYg')[0].childNodes[1].childNodes[0].childNodes[2].innerText.includes("(#")) {
                        document.getElementsByClassName('highscore_table__oKrYg')[0].childNodes[1].childNodes[0].childNodes[2].innerText += ` (#` + j + `)`;
                    }

                }
            }
        })
        .catch(error => console.error('Error fetching leaderboard data:', error));
}

///  Bools for existance checks.
var unset = true;
var boldNamesOopsie = true;
var labelColor = true;
var europecountries = false;
var toggled = false;

/// setSettings => remFooter => meow
createForm();
setSettings();

setInterval(setSettings, 250);