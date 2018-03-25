var app = {
    
    // Propriété stockant le nom et le prénom
    partsName: {
        firstName: null,
        lastName: null
    },
    
    init: function () {
        console.log('init: OK');
        $('#btn-ajax-only').on('click', app.ajaxOnly);
        $('#btn-ajax-data').on('click', app.ajaxData);
        
        // On simule le remplissage de data dans les 2 champs
        console.log($('#firstName').val('Pierre'));
        console.log($('#lastName').val('DUPONT'));
    },
    
    /**
     * Pour les methods "ajaxData" et "getPartsName" ci-dessous, 
     * evt et sa method preventDefault() sont nécessaires 
     * uniquement dans le cas où l'on utilise les balises 
     * HTML <form></form> ET QUE l'URL d'envoi soit 
     * identique à l'URL de réception (même page).
     */
    
    /**
     * Method remplaçant le contenu textuel de la page
     */
    ajaxOnly: function (evt) {
        evt.preventDefault();
        console.log('ajaxOnly: OK');
        
        // On souhaite faire un appel Ajax sur la page ajax/data.php
        $.ajax(
            {
            url: 'ajax/data.php',
            method: 'GET',
            dataType: 'html'
            }
        ).done(function (response) {
            $('#presentation').html(response);          
        }).fail(function() {
            alert('Réponse ajax incorrecte');            
        });
    },
    
    /**
     * On veut faire un appel Ajax et recevoir les données au format JSON,
     * on souhaite aussi envoyer des données au script PHP.
     */
    ajaxData: function(evt) {
        evt.preventDefault();
        console.log('ajaxData: OK');
        // On récupère le prénom et le nom
        app.getPartsName();
        
        // On souhaite faire un appel Ajax sur la page ajax/data.php
        $.ajax({
            url: 'ajax/data_json.php',
            method: 'POST',
            dataType: 'json',
            data: {
                firstName: app.partsName.firstName,
                lastName: app.partsName.lastName
            }
        }).done(function (response) {
            $('#presentation').html(response.presentation);          
        }).fail(function() {
            alert('Réponse ajax incorrecte');            
        });
    },
    
    /**
     * Method de récupération des datas de chaque champ du formulaire
     */
    getPartsName: function () {
        this.partsName.firstName = $('#firstName').val();
        this.partsName.lastName = $('#lastName').val();
    }
};

$(app.init);

