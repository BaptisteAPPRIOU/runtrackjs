$(document).ready(async function(){
    const chain_json_og = await fetch("pokemon.json").then(response => response.json());

    async function filterByType(chain_json, type_chosen) {
        let list_choices = chain_json.filter(pokemon => pokemon.type.includes(type_chosen));
        list_choices = list_choices.map(pokemon => pokemon.id + " - " + pokemon.name.french + " - " + pokemon.type);
        $('#result').html(list_choices.join("<br>"));
    }

    async function showByID(chain_json, id) {
        let list_choices = chain_json.filter(pokemon => pokemon.id == id);
        list_choices = list_choices.map(pokemon => "ID du Pokémon :" + pokemon.id + 
                "<br> Son nom français : " + pokemon.name.french + "<br> Son(ses) type(s) : " + pokemon.type + 
                "<br> Ses stats : HP = " + pokemon.base.HP + 
                "<br>&emsp;&emsp;&emsp;&emsp; Attack = " + pokemon.base.Attack +
                "<br>&emsp;&emsp;&emsp;&emsp; Defense = " + pokemon.base.Defense + 
                "<br>&emsp;&emsp;&emsp;&emsp; Sp. Attack = " + pokemon.base["Sp. Attack"] +
                "<br>&emsp;&emsp;&emsp;&emsp; Sp. Defense = " + pokemon.base["Sp. Defense"] + 
                "<br>&emsp;&emsp;&emsp;&emsp; Speed = " + pokemon.base.Speed);
        $('#result').html(list_choices.join("<br>"));
    }

    async function showByNames(chain_json, name_chosen) {
        let list_choices = chain_json.filter(pokemon => pokemon.name.french.toLowerCase() == name_chosen.toLowerCase());
        if (list_choices.length == 0) {
            alert("1");
            $('#result').html("Aucun résultat trouvé");
        }
        else if (list_choices.length == 1) {
            alert("2");
            list_choices = list_choices.map(pokemon => "ID du Pokémon :" + pokemon.id + 
                "<br> Son nom français : " + pokemon.name.french + "<br> Son(ses) type(s) : " + pokemon.type + 
                "<br> Ses stats : HP = ;" + pokemon.base.HP + 
                "<br>&emsp;&emsp;&emsp;&emsp; Attack = " + pokemon.base.Attack +
                "<br>&emsp;&emsp;&emsp;&emsp; Defense = " + pokemon.base.Defense + 
                "<br>&emsp;&emsp;&emsp;&emsp; Sp. Attack = " + pokemon.base["Sp. Attack"] +
                "<br>&emsp;&emsp;&emsp;&emsp; Sp. Defense = " + pokemon.base["Sp. Defense"] + 
                "<br>&emsp;&emsp;&emsp;&emsp; Speed = " + pokemon.base.Speed);
            $('#result').html(list_choices.join("<br>"));
        }
    }

    $('#button').click(async function(){
        if (($('#input1').val() == "") && ($('#input2').val() == "") && ($('#select').val() != "")) {
            let selectedType = $('#select').val();
            await filterByType(chain_json_og, selectedType);}
        else if ($('#input1').val() != "" && ($('#input2').val() == "") && ($('#select').val() == "")) {
            let selectedID = $('#input1').val();
            await showByID(chain_json_og, selectedID);
        }
        else if ($('#input1').val() == "" && ($('#input2').val() != "") && ($('#select').val() == "")) {
            let selectedName = $('#input2').val();
            await showByNames(chain_json_og, selectedName);
        }
        else if (($('#input1').val() == "") && ($('#input2').val() == "") && ($('#select').val() == "")){
            alert("Veuillez renseigner au moins un champ");
        }
        else if (($('#input1').val() != "") && ($('#input2').val() != "") && ($('#select').val() != "")){
            let selectedID = $('#input1').val();
            let selectedName = $('#input2').val();
            let selectedType = $('#select').val();
            if (selectedID == chain_json_og[selectedID-1].id && selectedName == chain_json_og[selectedID-1].name.french && chain_json_og[selectedID-1].type.includes(selectedType)) {
                showByID(chain_json_og, selectedID);
            }
            else {
                $('#result').html("Aucun résultat trouvé");
            }
        }
    });
});