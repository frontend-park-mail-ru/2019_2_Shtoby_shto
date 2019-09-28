const application = document.getElementById("application");
// const application = document.getElementById("contentID")

const tabsName = {
    more: `Профиль и доступ`,
    actions: `Действия`,
    cards: `Карточки`,
    settings: `Настройки`
};


function createTabs() {
    application.className = "tab";
    Object.keys(tabsName).forEach(function (key) {
        const tabItem = document.createElement("button");
        tabItem.className = "tablinks";
        tabItem.textContent = tabsName[key];
        tabItem.id = key;

        application.appendChild(tabItem);
    });
}

createTabs();

const currentTab = document.getElementById("more");

currentTab.addEventListener('click', function (evt) {
    application.innerHTML = '';
    openProfileTab();
});

function openProfileTab(){
    let elem = document.createElement("a");
    let headcontent = document.createTextNode("Управление персональными данными");
    elem.innerHTML=`<p>Вы можете менять настройки доступа к информации и улучшениям. Чтобы
            <wbr>
            узнать больше, читайте следующие документы:
            <a href="/">
                Условия использования</a> и
            <a href="/">Политика конфиденциальности</a>.
        </p>`;

    const profile = document.createElement('h2');
    profile.style = "margin-top: 60px; text-align-last: left";
    const aboutinfo= document.createTextNode("О нас");
    const line = document.createElement("hr");


    const container = document.createElement("section");
    container.className="container row";
    const leftSide = document.createElement("h3");

    leftSide.className = "col-2-3";

    const name = document.createTextNode("Полное имя");
    const showName = document.createElement("input");
    showName.type = "text";
    showName.value = "Username";

    const shortForm = document.createTextNode("Инициалы");
    const showShortForm = document.createElement("input");
    showShortForm.type = "text";
    showShortForm.value = "U";

    const about = document.createTextNode("О себе");
    const showAbout = document.createElement("input");
    showAbout.className= "aboutYou";
    showAbout.type = "text";
    showAbout.value = "Something";

    leftSide.appendChild(name);
    leftSide.appendChild(showName);
    leftSide.appendChild(about);
    leftSide.appendChild(showAbout);
    leftSide.appendChild(shortForm);
    leftSide.appendChild(showShortForm);

    const rightSide = document.createElement("h3");
    rightSide.className = "col-1-3";


    container.appendChild(leftSide);
    profile.appendChild(aboutinfo);
    profile.appendChild(line);

   application.className = "word";

   application.appendChild(headcontent);
   application.appendChild(elem);
   application.appendChild(profile);
   application.appendChild(container);}

    function openActionTab() {

    }
// addEventListener('click', function openTab (evt, Action) {
//     let i, tabcontent, tablinks;
//
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//
//     document.getElementById(Action).style.display = "block";
//     evt.currentTarget.className += " active";
//
// });

