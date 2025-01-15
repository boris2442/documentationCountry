// chargement de la page

window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').style.transition='5s ease-out'
  };
 
document.getElementById("countryPays").addEventListener("input", function(){
    const countryData = {
        'Algérie': {
            name: 'Algérie',
            capital: 'Alger',
            population: '43 millions',
            currency: 'Dinar Algérien',
            phone: '+213'
        },
        'Angola': {
            name: 'Angola',
            capital: 'Luanda',
            population: '32 millions',
            currency: 'Kwanza',
            phone: '+244'
        },
        'Bénin': {
            name: 'Bénin',
            capital: 'Porto-Novo',
            population: '12 millions',
            currency: 'Franc CFA',
            phone: '+229'
        },
        'Cameroun': {
            name: 'Cameroun',
            capital: 'Yaoundé',
            population: '27 millions',
            currency: 'Franc CFA',
            phone: '+237'
        },
        'Nigeria': {
            name: 'Nigeria',
            capital: 'Abuja',
            population: '211 millions',
            currency: 'Naira',
            phone: '+234'
        },
        'Afrique du Sud': {
            name: 'Afrique du Sud',
            capital: 'Pretoria',
            population: '60 millions',
            currency: 'Rand',
            phone: '+27'
        },
        'Gambie':{
            capital: "Banjul",
            currency:"Dalasi gambien (GMD)",
            phone:"+220"
        },
        'Madagascar': {
            name: 'Madagascar',
            capital: 'Antananarivo',
            population: '28 millions',
            currency: 'Ariary',
            phone: '+261'
        },
        'Kenya': {
            name: 'Kenya',
            capital: 'Nairobi',
            population: '54 millions',
            currency: 'Shilling kényan',
            phone: '+254'
        },
        'Égypte': {
            name: 'Égypte',
            capital: 'Le Caire',
            population: '104 millions',
            currency: 'Livre égyptienne',
            phone: '+20'
        },
        'Ghana': {
            name: 'Ghana',
            capital: 'Accra',
            population: '32 millions',
            currency: 'Cedi',
            phone: '+233'
        },
        'Sénégal': {
            name: 'Sénégal',
            capital: 'Dakar',
            population: '17 millions',
            currency: 'Franc CFA',
            phone: '+221'
        },
        'Mali': {
            name: 'Mali',
            capital: 'Bamako',
            population: '20 millions',
            currency: 'Franc CFA',
            phone: '+223'
        },
        'Liberia': {
            name: 'Liberia',
            capital: 'Monrovia',
            population: '5 millions',
            currency: 'Dollar libérien',
            phone: '+231'
        },
        'Malawi': {
            name: 'Malawi',
            capital: 'Lilongwe',
            population: '20 millions',
            currency: 'Kwacha malawien',
            phone: '+265'
        },
        'Burkina Faso': {
            name: 'Burkina Faso',
            capital: 'Ouagadougou',
            population: '21 millions',
            currency: 'Franc CFA',
            phone: '+226'
        },
        'Côte d\'Ivoire': {
            name: 'Côte d\'Ivoire',
            capital: 'Yamoussoukro',
            population: '26 millions',
            currency: 'Franc CFA',
            phone: '+225'
        },
        'Togo': {
            name: 'Togo',
            capital: 'Lomé',
            population: '8 millions',
            currency: 'Franc CFA',
            phone: '+228'
        },
        'Rwanda': {
            name: 'Rwanda',
            capital: 'Kigali',
            population: '13 millions',
            currency: 'Franc rwandais',
            phone: '+250'
        },
        'Gabon': {
            name: 'Gabon',
            capital: 'Libreville',
            population: '2 millions',
            currency: 'Franc CFA',
            phone: '+241'
        },
        'Zambie': {
            name: 'Zambie',
            capital: 'Lusaka',
            population: '18 millions',
            currency: 'Kwacha zambienne',
            phone: '+260'
        },
        'Mozambique': {
            name: 'Mozambique',
            capital: 'Maputo',
            population: '31 millions',
            currency: 'Metical',
            phone: '+258'
        },
        'Tanzanie': {
            name: 'Tanzanie',
            capital: 'Dodoma',
            population: '61 millions',
            currency: 'Shilling tanzanien',
            phone: '+255'
        },
        'Soudan': {
            name: 'Soudan',
            capital: 'Khartoum',
            population: '44 millions',
            currency: 'Livre soudanaise',
            phone: '+249'
        },
        'Zimbabwe': {
            name: 'Zimbabwe',
            capital: 'Harare',
            population: '15 millions',
            currency: 'Dollar zimbabwéen',
            phone: '+263'
        },
        'Zambie': {
            name: 'Zambie',
            capital: 'Lusaka',
            population: '18 millions',
            currency: 'Kwacha zambien',
            phone: '+260'
        },
        'Éthiopie': {
            name: 'Éthiopie',
            capital: 'Addis-Abeba',
            population: '118 millions',
            currency: 'Birr éthiopien',
            phone: '+251'
        },
        'Lesotho': {
            name: 'Lesotho',
            capital: 'Maseru',
            population: '2,2 millions',
            currency: 'Loti',
            phone: '+266'
        },
        'Seychelles': {
            name: 'Seychelles',
            capital: 'Victoria',
            population: '100,000',
            currency: 'Roupie seychelloise',
            phone: '+248'
        },
        'Sierra Leone': {
            name: 'Sierra Leone',
            capital: 'Freetown',
            population: '8 millions',
            currency: 'Leone',
            phone: '+232'
        },
        'Somalie': {
            name: 'Somalie',
            capital: 'Mogadiscio',
            population: '16 millions',
            currency: 'Shilling somalien',
            phone: '+252'
        },
        'Tanzanie': {
            name: 'Tanzanie',
            capital: 'Dodoma',
            population: '64 millions',
            currency: 'Shilling tanzanien',
            phone: '+255'
        },
        'Tchad': {
            name: 'Tchad',
            capital: 'N\'Djaména',
            population: '17 millions',
            currency: 'Franc CFA',
            phone: '+235'
        },
        'Tunisie': {
            name: 'Tunisie',
            capital: 'Tunis',
            population: '12 millions',
            currency: 'Dinar tunisien',
            phone: '+216'
        },
        'Ouganda': {
            name: 'Ouganda',
            capital: 'Kampala',
            population: '45 millions',
            currency: 'Shilling ougandais',
            phone: '+256'
        },
        'Maurice': {
            name: 'Maurice',
            capital: 'Port-Louis',
            population: '1,3 million',
            currency: 'Roupie mauricienne',
            phone: '+230'
        },
        'Botswana': {
            name: 'Botswana',
            capital: 'Gaborone',
            population: '2,4 millions',
            currency: 'Pula',
            phone: '+267'
        },
        'Cap-Vert': {
            name: 'Cap-Vert',
            capital: 'Praia',
            population: '560 000',
            currency: 'Escudo capverdien',
            phone: '+238'
        },
        'Comores': {
            name: 'Comores',
            capital: 'Moroni',
            population: '870 000',
            currency: 'Franc comorien',
            phone: '+269'
        },
        'Djibouti': {
            name: 'Djibouti',
            capital: 'Djibouti',
            population: '1 million',
            currency: 'Franc djiboutien',
            phone: '+253'
        },
        'Érythrée': {
            name: 'Érythrée',
            capital: 'Asmara',
            population: '6 millions',
            currency: 'Nakfa',
            phone: '+291'
        },
        'Eswatini': {
            name: 'Eswatini',
            capital: 'Mbabane',
            population: '1,2 million',
            currency: 'Lilangeni',
            phone: '+268'
        },
        'Guinée': {
            name: 'Guinée',
            capital: 'Conakry',
            population: '13 millions',
            currency: 'Franc guinéen',
            phone: '+224'
        },
        'Guinée-Bissau': {
            name: 'Guinée-Bissau',
            capital: 'Bissau',
            population: '2 millions',
            currency: 'Franc CFA',
            phone: '+245'
        },
        'Libye': {
            name: 'Libye',
            capital: 'Tripoli',
            population: '7 millions',
            currency: 'Dinar libyen',
            phone: '+218'
        },
        'Mauritanie': {
            name: 'Mauritanie',
            capital: 'Nouakchott',
            population: '4,5 millions',
            currency: 'Ouguiya',
            phone: '+222'
        },
        'Soudan du Sud': {
            name: 'Soudan du Sud',
            capital: 'Juba',
            population: '11 millions',
            currency: 'Livre sud-soudanaise',
            phone: '+211'
        },
        'Sao Tomé-et-Principe': {
            name: 'Sao Tomé-et-Principe',
            capital: 'São Tomé',
            population: '200 000',
            currency: 'Dobra',
            phone: '+239'
        },
        'Guinée équatoriale': {
            name: 'Guinée équatoriale',
            capital: 'Malabo',
            population: '1,4 million',
            currency: 'Franc CFA',
            phone: '+240'
        },
        'République du Congo': {
            name: 'République du Congo',
            capital: 'Brazzaville',
            population: '6 millions',
            currency: 'Franc CFA',
            phone: '+242'
        },
        'République démocratique du Congo': {
            name: 'République démocratique du Congo',
            capital: 'Kinshasa',
            population: '90 millions',
            currency: 'Franc congolais',
            phone: '+243'
        },
        'Niger': {
            name: 'Niger',
            capital: 'Niamey',
            population: '24 millions',
            currency: 'Franc CFA',
            phone: '+227'
        },
        'Namibie': {
            name: 'Namibie',
            capital: 'Windhoek',
            population: '2,5 millions',
            currency: 'Dollar namibien',
            phone: '+264'
        },
    };
    const selectedCountry = this.value;
    const countryInfo = countryData[selectedCountry];
    if (countryInfo) {
        document.getElementById('country-name').textContent = selectedCountry;
        document.getElementById('country-capital').textContent = countryInfo.capital;
        document.getElementById('country-population').textContent = countryInfo.population;
        document.getElementById('country-currency').textContent = countryInfo.currency;
        document.getElementById('country-phone').textContent = countryInfo.phone;
    } else {
        // Remettre à zéro si le pays n'est pas dans la liste
        document.getElementById('country-name').textContent = '';
        document.getElementById('country-capital').textContent = '';
        document.getElementById('country-population').textContent = '';
        document.getElementById('country-currency').textContent = '';
        document.getElementById('country-phone').textContent = '';
    }
    // const country = this.ariaValue;
    // const info = getCountryInfo(country)
    
    // if(info){
    //     document.getElementById('country-name').textContent = info.name;
    //     document.getElementById('country-capital').textContent = info.capital;
    //     document.getElementById('country-population').textContent = info.population;
    //     document.getElementById('country-currency').textContent = info.currency;
    //     document.getElementById('country-phone').textContent = info.phone;
        
      
    //     document.querySelector('.country-info').style.display = 'block';
    // }else{
    //     document.querySelector('.country-info').style.display = 'none';
    // }
});


// function getCountryInfo(country) {
    
//     // Retourne les informations du pays ou null si non trouvé
//     return countries[country] || null;
// }
  