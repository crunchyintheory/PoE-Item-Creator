/*eslint no-unused-vars:"off"*/

var item = document.getElementById('item');
var itemheader = document.getElementById('itemheader');
var itembody = document.getElementById('itembody');
var name1o = document.getElementById('name1o');
var name2o = document.getElementById('name2o');
var imageo = document.getElementById('imageo');

var importmodal = document.getElementById('importmodal');

const singRar = ['normal', 'magic', 'gem', 'prophecy', 'currency'];
const doubRar = ['rare', 'unique'];

/*eslint-disable quotes*/
const templates = [
    { "rarity": "unique", "name": "Belly of the Beast", "base": "Full Wyrmscale", "image": "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/2/2e/Belly_of_the_Beast_inventory_icon.png?version=356c53ab20ed857245ce668808759bc6", "properties": [{ "type": "augquant", "name": "Quality", "value": "+20%" }, { "type": "augquant", "name": "Armour", "value": "767" }, { "type": "augquant", "name": "Evasion Rating", "value": "305" }, { "type": "sep", "name": "", "value": "" }, { "type": "statreq", "name": "", "value": "Requires Level 46, 68 Str, 68 Dex" }, { "type": "sep", "name": "", "value": "" }, { "type": "qual", "name": "", "value": "182% increased Armour" }, { "type": "qual", "name": "", "value": "40% increased maximum Life" }, { "type": "qual", "name": "", "value": "+15% to all Elemental Resistances" }, { "type": "qual", "name": "", "value": "50% increased Flask Life Recovery Rate" }, { "type": "qual", "name": "", "value": "Extra gore" }, { "type": "sep", "name": "", "value": "" }, { "type": "flavor", "name": "", "value": "There is no safer place" }, { "type": "flavor", "name": "", "value": "Than the Belly of the Beast" }] },
    { "rarity": "rare", "name": "Kraken Caress", "base": "Hydrascale Gauntlets", "image": "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/9/9f/Hydrascale_Gauntlets_inventory_icon.png?version=5a90a8b9760af83492d37622e8138c58", "properties": [{ "type": "augquant", "name": "Quality", "value": "+20%" }, { "type": "augquant", "name": "Armour", "value": "237" }, { "type": "augquant", "name": "Evasion Rating", "value": "237" }, { "type": "sep", "name": "", "value": "" }, { "type": "statreq", "name": "", "value": "Requires Level 59, 45 Str, 45 Dex" }, { "type": "sep", "name": "", "value": "" }, { "type": "master", "name": "", "value": "Trigger Decree of Force on Hit" }, { "type": "sep", "name": "", "value": "" }, { "type": "qual", "name": "", "value": "36% increased Armour and Evasion" }, { "type": "qual", "name": "", "value": "+45 to maximum Life" }, { "type": "qual", "name": "", "value": "+29% to Fire Resistance" }, { "type": "qual", "name": "", "value": "+20% to Cold Resistance" }, { "type": "qual", "name": "", "value": "+23% to Chaos Resistance" }, { "type": "qual", "name": "", "value": "15% increased Stun and Block Recovery" }, { "type": "master", "name": "", "value": "68% increased Armour and Evasion" }] },
    { "rarity": "currency", "name": "Exalted Orb", "base": "", "image": "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/2/26/Exalted_Orb_inventory_icon.png?version=3e044303cbcd152c6a69336feb5bcd24", "properties": [{ "type": "quant", "name": "Stack Size", "value": "2/10" }, { "type": "sep", "name": "", "value": "" }, { "type": "qual", "name": "", "value": "Enchants a rare item with a new random property" }, { "type": "sep", "name": "", "value": "" }, { "type": "gflavor", "name": "", "value": "Right click this item then left click a rare item to" }, { "type": "gflavor", "name": "", "value": "apply it. Rare items can have up to six random" }, { "type": "gflavor", "name": "", "value": "properties." }, { "type": "gflavor", "name": "", "value": "Shift click to unstack." }] },
    { "rarity": "rare", "name": "Beast Tread", "base": "Titan Greaves", "image": "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/b/b8/Titan_Greaves_inventory_icon.png?version=5b96e63b3c3f375f9c5b97d79a553232", "properties": [{ "type": "augquant", "name": "Quality", "value": "+20%" }, { "type": "augquant", "name": "Armour", "value": "441" }, { "type": "sep", "name": "", "value": "" }, { "type": "statreq", "name": "", "value": "Requires Level 68, 120 Str" }, { "type": "sep", "name": "", "value": "" }, { "type": "master", "name": "", "value": "Adds 45 to 68 Cold Damage if you've been Hit Recently" }, { "type": "sep", "name": "", "value": "" }, { "type": "qual", "name": "", "value": "+77 to maximum Life" }, { "type": "qual", "name": "", "value": "+37% to Cold Resistance" }, { "type": "qual", "name": "", "value": "+26% to Lightning Resistance" }, { "type": "qual", "name": "", "value": "20% increased Movement Speed" }, { "type": "qual", "name": "", "value": "19% increased Stun and Block Recovery" }, { "type": "master", "name": "", "value": "63% increased Armour" }, { "type": "vaal", "name": "", "value": "Corrupted" }] },
    { "rarity": "gem", "name": "Cyclone", "base": "", "image": "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/8/8d/Cyclone_inventory_icon.png?version=2afbacb623166489befaabe8b10f4675", "properties": [{ "type": "desc", "name": "", "value": "Attack, AoE, Movement, Melee" }, { "type": "quant", "name": "Level", "value": "18" }, { "type": "quant", "name": "Mana Cost", "value": "12" }, { "type": "quant", "name": "Efectiveness of Added Damage", "value": "55%" }, { "type": "augquant", "name": "Quality", "value": "+20%" }, { "type": "sep", "name": "", "value": "" }, { "type": "statreq", "name": "", "value": "Requires Level 66, 64 Str, 92 Dex" }, { "type": "sep", "name": "", "value": "" }, { "type": "flavor", "name": "", "value": "Damage enemies around you, then perform a" }, { "type": "flavor", "name": "", "value": "spinning series of attacks as you travel to a" }, { "type": "flavor", "name": "", "value": "target location. Cannot be supported by" }, { "type": "flavor", "name": "", "value": "Multistrike" }, { "type": "sep", "name": "", "value": "" }, { "type": "qual", "name": "", "value": "Deals 55.2% of Base Damage" }, { "type": "qual", "name": "", "value": "10% increased Area of Effect" }, { "type": "qual", "name": "", "value": "30% less Movement Speed" }, { "type": "qual", "name": "", "value": "50% more Attack Speed" }, { "type": "qual", "name": "", "value": "+3 to Melee range" }, { "type": "qual", "name": "", "value": "First Hit deals 50% less Damage" }] },
    { "rarity": "prophecy", "name": "A Master Seeks Help", "base": "", "image": "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/3/31/Prophecy_inventory_icon.png?version=9b3d001a304c80697c0c17fbed36a0f9", "properties": [{ "type": "flavor", "name": "", "value": "Carried by the southern winds, a master of" }, { "type": "flavor", "name": "", "value": "metal seeks aid." }, { "type": "sep", "name": "", "value": "" }, { "type": "qual", "name": "", "value": "You will find Haku and complete his" }, { "type": "qual", "name": "", "value": "mission. He will reward you with extra" }, { "type": "qual", "name": "", "value": "reputation and favour." }, { "type": "sep", "name": "", "value": "" }, { "type": "gflavor", "name": "", "value": "Right-click to add this prophecy to your character." }] },
    { "rarity": "magic", "name": "Panicked Divine Life Flask of Grounding", "base": "", "image": "https://d1u5p3l4wpay3k.cloudfront.net/pathofexile_gamepedia/a/a3/Divine_Life_Flask_inventory_icon.png?version=05c864505974235fffd3a9eb89be5881", "properties": [{ "type": "statreq", "name": "", "value": "Recovers <b>1800</b> Life over 7.00 Seconds" }, { "type": "statreq", "name": "", "value": "Consumes 15 of 45 Charges on use" }, { "type": "statreq", "name": "", "value": "Currently has 0 Charges" }, { "type": "sep", "name": "", "value": "" }, { "type": "statreq", "name": "", "value": "Requires Level 60" }, { "type": "sep", "name": "", "value": "" }, { "type": "qual", "name": "", "value": "25% reduced Amount Recovered" }, { "type": "qual", "name": "", "value": "Instant Recovery when on Low Life" }, { "type": "qual", "name": "", "value": "Immunity to Shock during Flask effect" }, { "type": "qual", "name": "", "value": "Removes Shock on use" }, { "type": "sep", "name": "", "value": "" }, { "type": "gflavor", "name": "", "value": "Right click to drink. Can only hold charges" }, { "type": "gflavor", "name": "", "value": "while in belt. Refills as you kill monsters." }] }
];
/*eslint-enable quotes*/

function filter(item) {
    return item.tagName !== 'i';
}

var save = function () {
    if (imageo.src != '') {
        let r = confirm('The built-in screenshotting feature does not currently work with item images. To keep the image, use a screenshotting tool like Snipping Tool or Grab.\nDo you want to remove the image and use the built-in screenshotting tool?');
        if (r == true) {
            imageo.src = '';
            setTimeout(() => {
                html2canvas(item, {
                    onrendered: function (canvas) {
                        let win = window.open(canvas.toDataURL(), '_blank');
                        win.focus();
                    }
                });
            }, 2);
        }
    }
};

var render = function () {
    let rarity = document.getElementById('itemrarity').value;
    item.className = `item ${rarity}`;
    if (singRar.includes(rarity)) {
        itemheader.className = 'itemheader single';
    }
    else if (doubRar.includes(rarity)) {
        itemheader.className = 'itemheader double';
    }
    name1o.innerText = document.getElementById('name1').value;
    name2o.innerText = document.getElementById('name2').value;
    imageo.src = document.getElementById('image').value;

    let props = document.getElementById('properties');
    itembody.innerHTML = '';
    for (var i = 0; i < props.children.length - 1; i++) {
        let prop = props.children[i];
        let index = prop.id.substr(1);
        let type = prop.querySelector(`select#proptype${index}`).value;
        let name = prop.querySelector(`input#name${index}`).value;
        let value = prop.querySelector(`input#value${index}`).value;
        let div1;

        if (type == 'desc') {
            div1 = document.createElement('div');
            div1.className = 'property gray';

            let span1 = document.createElement('span');
            span1.className = 'prop-gray';
            span1.innerText = value;
            div1.appendChild(span1);
        }
        if (type == 'qual') {
            div1 = document.createElement('div');
            div1.className = 'property blue';

            let span1 = document.createElement('span');
            span1.className = 'prop-blue';
            span1.innerText = value;
            div1.appendChild(span1);
        }
        else if (type == 'master') {
            div1 = document.createElement('div');
            div1.className = 'property crafted';

            let span1 = document.createElement('span');
            span1.className = 'prop-crafted';
            span1.innerText = value;
            div1.appendChild(span1);
        }
        else if (type == 'quant') {
            div1 = document.createElement('div');
            div1.className = 'property gray-white';

            let span1 = document.createElement('span');
            span1.className = 'prop-gray prop-name';
            span1.innerText = name;
            div1.appendChild(span1);

            let span2 = document.createElement('span');
            span2.className = 'prop-white prop-value';
            span2.innerText = value;
            div1.appendChild(span2);
        }
        else if (type == 'augquant') {
            div1 = document.createElement('div');
            div1.className = 'property gray-blue';

            let span1 = document.createElement('span');
            span1.className = 'prop-gray prop-name';
            span1.innerText = name;
            div1.appendChild(span1);

            let span2 = document.createElement('span');
            span2.className = 'prop-blue prop-value';
            span2.innerText = value;
            div1.appendChild(span2);
        }
        else if (type == 'flavor') {
            div1 = document.createElement('div');
            div1.className = 'unique-flavor';
            div1.innerText = value;
        }
        else if (type == 'gflavor') {
            div1 = document.createElement('div');
            div1.className = 'prop-gray gray-flavor';
            div1.innerText = value;
        }
        else if (type == 'sep') {
            div1 = document.createElement('div');
            div1.className = 'sep';
        }
        else if (type == 'statreq') {
            div1 = document.createElement('div');
            div1.className = 'statreq';

            let span1 = document.createElement('span');
            span1.className = 'prop-gray statreq';
            let val = value.replace(/(\d+)/g, '<span class="prop-white">$1</span>');
            span1.innerHTML = val;
            div1.appendChild(span1);
        }
        else if (type == 'vaal') {
            div1 = document.createElement('div');
            div1.className = 'property red';

            let span1 = document.createElement('span');
            span1.className = 'prop-red';
            if (value) span1.innerText = value;
            else span1.innerText = 'Corrupted';
            div1.appendChild(span1);
        }
        itembody.appendChild(div1);
    }
};

var remove = function (index) {
    document.querySelector(`li#i${index}`).remove();
};

var add = function (o, i) {
    let inde = document.querySelector('#properties li:last-of-type');
    let ind;
    if (i) ind = i;
    else if (inde == null) {
        ind = 0;
    }
    else {
        ind = inde.id.substr(1);
    }
    console.log(ind);
    let optsvals = ['desc', 'qual', 'quant', 'augquant', 'flavor', 'gflavor', 'sep', 'master', 'statreq', 'vaal'];
    let optsnames = ['Item Type', 'Affix', 'Stat', 'Augmented Stat', 'Unique Flavor Text', 'Gray Flavor Text', 'Separator', 'Crafted Mod', 'Stat Requirements', 'Corrupted'];

    let li = document.createElement('li');
    let index = parseInt(ind) + 1;
    li.id = `i${index}`;

    let rembtn = document.createElement('button');
    rembtn.setAttribute('onclick', `remove(${index})`);
    rembtn.className = 'nostyle';
    rembtn.style = 'width: 36px; height: 36px; padding: 0;';

    let rembtnimg = document.createElement('img');
    rembtnimg.src = 'resources/ic_close_black_24px.svg';
    rembtnimg.alt = 'X';
    rembtn.appendChild(rembtnimg);
    li.appendChild(rembtn);

    let spacer = document.createElement('div');
    spacer.className = 'spacing-30';

    let proptype = document.createElement('select');
    proptype.id = `proptype${index}`;
    proptype.setAttribute('onchange', `updateval(${index})`);
    proptype.setAttribute('val', 'desc');
    for (var i = 0; i < optsvals.length; i++) {
        let opt = document.createElement('option');
        opt.value = optsvals[i];
        opt.innerText = optsnames[i];
        proptype.appendChild(opt);
    }
    spacer.appendChild(proptype);

    let nameinput = document.createElement('input');
    nameinput.type = 'text';
    nameinput.id = `name${index}`;
    spacer.appendChild(nameinput);

    let valueinput = document.createElement('input');
    valueinput.type = 'text';
    valueinput.id = `value${index}`;
    spacer.appendChild(valueinput);
    li.appendChild(spacer);

    if (!o) {
        let btn = document.querySelector('ul#properties > button');
        let props = document.querySelector('ul#properties');
        props.removeChild(btn);
        props.appendChild(li);
        props.appendChild(btn);
    }
    else {
        return li;
    }
};

var reset = function (o) {
    let sel = document.querySelectorAll('select#itemrarity option[selected]');
    for (var i = 0; i < sel.length; i++) {
        sel[i].removeAttribute('selected');
    }
    document.querySelector('select#itemrarity option[value=unique]').setAttribute('selected', 'true');
    document.getElementById('name1').value = 'Tabula Rasa';
    document.getElementById('name2').value = 'Simple Robe';
    document.querySelectorAll('ul#properties > li').forEach((el) => {
        el.remove();
    });
    if (!o) render();
};

var updateval = function (index) {
    let proptype = document.querySelector(`#proptype${index}`);
    proptype.setAttribute('val', proptype.value);
};

var im = function (json) {
    let rarity, name, base;
    let item = json;
    rarity = item.rarity;
    name = item.name;
    base = item.base;
    image = item.image;

    reset(true);

    document.querySelector(`select#itemrarity option[value=${rarity}]`).setAttribute('selected', 'true');
    document.querySelector('input#name1').value = name;
    document.querySelector('input#name2').value = base;
    document.querySelector('input#image').value = image;

    let btn = document.querySelector('ul#properties > button');
    let props = document.querySelector('ul#properties');
    props.removeChild(btn);
    for (var i = 0; i < item.properties.length; i++) {
        let li = add(true, i - 1);
        props.appendChild(li);
        li.querySelector(`select#proptype${i} option[value=${item.properties[i].type}]`).setAttribute('selected', 'true');
        if (item.properties[i].name) {
            li.querySelector(`input#name${i}`).value = item.properties[i].name;
        }
        if (item.properties[i].value) {
            li.querySelector(`input#value${i}`).value = item.properties[i].value;
        }
        updateval(i);
    }
    props.appendChild(btn);
    render();
};

var popupimport = function () {
    importmodal.style.display = 'initial';
};

var closeimport = function () {
    importmodal.style.display = 'none';
};

var importbtn = function () {
    let text = document.querySelector('#importmodal textarea').value;
    let json;
    try {
        json = JSON.parse(text);
    } catch (e) {
        alert(e);
    } finally {
        if (json) im(json);
    }
};

var exp = function () {
    let json = {};

    json.rarity = document.getElementById('itemrarity').value;
    json.name = document.getElementById('name1').value;
    json.base = document.getElementById('name2').value;
    json.properties = [];

    let props = document.getElementById('properties');
    for (var i = 0; i < props.children.length - 1; i++) {
        let prop = props.children[i];
        json.properties[i] = {};
        let index = prop.id.substr(1);
        json.properties[i].type = prop.querySelector(`select#proptype${index}`).value;
        json.properties[i].name = prop.querySelector(`input#name${index}`).value;
        json.properties[i].value = prop.querySelector(`input#value${index}`).value;
    }

    document.querySelector('#importmodal textarea').value = JSON.stringify(json);
};


let randomsel = Math.round(Math.random() * (templates.length - 1) + 0);
im(templates[randomsel]);