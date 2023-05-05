//WAP to print the employee data table using traditional way (i.e) for loop()

let emp =[{"id":1,"first_name":"Emile","last_name":"Mandeville","email":"emandeville0@yale.edu","gender":"Male"},
{"id":2,"first_name":"Mona","last_name":"Higgen","email":"mhiggen1@theglobeandmail.com","gender":"Female"},
{"id":3,"first_name":"Trisha","last_name":"Mayer","email":"tmayer2@nps.gov","gender":"Bigender"},
{"id":4,"first_name":"Tull","last_name":"Bourke","email":"tbourke3@samsung.com","gender":"Male"},
{"id":5,"first_name":"Mable","last_name":"Bunney","email":"mbunney4@oracle.com","gender":"Female"},
{"id":6,"first_name":"Galvin","last_name":"Whifen","email":"gwhifen5@europa.eu","gender":"Male"},
{"id":7,"first_name":"Stace","last_name":"Krikorian","email":"skrikorian6@angelfire.com","gender":"Female"},
{"id":8,"first_name":"Anthe","last_name":"Westmorland","email":"awestmorland7@php.net","gender":"Female"},
{"id":9,"first_name":"Celestyn","last_name":"Piburn","email":"cpiburn8@usatoday.com","gender":"Female"},
{"id":10,"first_name":"Mort","last_name":"Halloran","email":"mhalloran9@csmonitor.com","gender":"Male"},
{"id":11,"first_name":"Bale","last_name":"Neiland","email":"bneilanda@guardian.co.uk","gender":"Male"},
{"id":12,"first_name":"Ashlin","last_name":"Davidowsky","email":"adavidowskyb@constantcontact.com","gender":"Male"},
{"id":13,"first_name":"Montague","last_name":"Houlton","email":"mhoultonc@bluehost.com","gender":"Male"},
{"id":14,"first_name":"Barrett","last_name":"Dyson","email":"bdysond@webnode.com","gender":"Male"},
{"id":15,"first_name":"Jenn","last_name":"Watton","email":"jwattone@google.fr","gender":"Female"},
{"id":16,"first_name":"Pier","last_name":"Bidgood","email":"pbidgoodf@angelfire.com","gender":"Female"},
{"id":17,"first_name":"Barbee","last_name":"Maryin","email":"bmarying@pbs.org","gender":"Female"},
{"id":18,"first_name":"Vincenz","last_name":"Tuckwell","email":"vtuckwellh@oaic.gov.au","gender":"Male"},
{"id":19,"first_name":"Ferne","last_name":"Gowry","email":"fgowryi@instagram.com","gender":"Female"},
{"id":20,"first_name":"Austin","last_name":"Aimable","email":"aaimablej@wikimedia.org","gender":"Female"},
{"id":21,"first_name":"Iseabal","last_name":"Maclaine","email":"imaclainek@kickstarter.com","gender":"Agender"},
{"id":22,"first_name":"Kayne","last_name":"Fairfoul","email":"kfairfoull@blogtalkradio.com","gender":"Male"},
{"id":23,"first_name":"Marietta","last_name":"Dodwell","email":"mdodwellm@opera.com","gender":"Male"},
{"id":24,"first_name":"Mab","last_name":"Slite","email":"msliten@quantcast.com","gender":"Female"},
{"id":25,"first_name":"Leonerd","last_name":"Bartoszek","email":"lbartoszeko@columbia.edu","gender":"Male"},
{"id":26,"first_name":"Pearline","last_name":"Plewman","email":"pplewmanp@utexas.edu","gender":"Female"},
{"id":27,"first_name":"Ruthe","last_name":"Lukasen","email":"rlukasenq@ebay.com","gender":"Female"},
{"id":28,"first_name":"Palmer","last_name":"Randell","email":"prandellr@hao123.com","gender":"Male"},
{"id":29,"first_name":"Violetta","last_name":"Belsham","email":"vbelshams@telegraph.co.uk","gender":"Female"},
{"id":30,"first_name":"Talyah","last_name":"Hamby","email":"thambyt@php.net","gender":"Female"},
{"id":31,"first_name":"Amie","last_name":"Herche","email":"ahercheu@imageshack.us","gender":"Female"},
{"id":32,"first_name":"Priscella","last_name":"Cork","email":"pcorkv@smh.com.au","gender":"Female"},
{"id":33,"first_name":"Charmine","last_name":"McGuiness","email":"cmcguinessw@4shared.com","gender":"Female"},
{"id":34,"first_name":"Yorker","last_name":"MacRanald","email":"ymacranaldx@bbc.co.uk","gender":"Male"},
{"id":35,"first_name":"Morgan","last_name":"Huzzey","email":"mhuzzeyy@unesco.org","gender":"Female"},
{"id":36,"first_name":"Mable","last_name":"Strank","email":"mstrankz@ed.gov","gender":"Female"},
{"id":37,"first_name":"Heath","last_name":"Wherry","email":"hwherry10@creativecommons.org","gender":"Female"},
{"id":38,"first_name":"Glendon","last_name":"Shillingford","email":"gshillingford11@wp.com","gender":"Male"},
{"id":39,"first_name":"Kary","last_name":"Joppich","email":"kjoppich12@rediff.com","gender":"Agender"},
{"id":40,"first_name":"Carlin","last_name":"Woodnutt","email":"cwoodnutt13@intel.com","gender":"Male"},
{"id":41,"first_name":"Nilson","last_name":"Hadlee","email":"nhadlee14@surveymonkey.com","gender":"Male"},
{"id":42,"first_name":"Kalvin","last_name":"Genese","email":"kgenese15@soundcloud.com","gender":"Male"},
{"id":43,"first_name":"Kenna","last_name":"Rouff","email":"krouff16@paypal.com","gender":"Agender"},
{"id":44,"first_name":"Shena","last_name":"Kingsworth","email":"skingsworth17@ameblo.jp","gender":"Female"},
{"id":45,"first_name":"Vittoria","last_name":"Vowdon","email":"vvowdon18@va.gov","gender":"Female"},
{"id":46,"first_name":"Liza","last_name":"Bartot","email":"lbartot19@soundcloud.com","gender":"Non-binary"},
{"id":47,"first_name":"Iver","last_name":"Hollerin","email":"ihollerin1a@squarespace.com","gender":"Male"},
{"id":48,"first_name":"Hew","last_name":"Garstan","email":"hgarstan1b@miibeian.gov.cn","gender":"Male"},
{"id":49,"first_name":"Jozef","last_name":"Bourget","email":"jbourget1c@edublogs.org","gender":"Male"},
{"id":50,"first_name":"Fredelia","last_name":"McInnerny","email":"fmcinnerny1d@goo.gl","gender":"Female"},
{"id":51,"first_name":"Georas","last_name":"Esselin","email":"gesselin1e@mapy.cz","gender":"Male"},
{"id":52,"first_name":"Constantin","last_name":"Willcox","email":"cwillcox1f@webeden.co.uk","gender":"Male"},
{"id":53,"first_name":"Malia","last_name":"Sherrock","email":"msherrock1g@reuters.com","gender":"Female"},
{"id":54,"first_name":"Baillie","last_name":"Parncutt","email":"bparncutt1h@tinypic.com","gender":"Male"},
{"id":55,"first_name":"Renata","last_name":"Keenlyside","email":"rkeenlyside1i@army.mil","gender":"Female"},
{"id":56,"first_name":"Galina","last_name":"Coyle","email":"gcoyle1j@dyndns.org","gender":"Female"},
{"id":57,"first_name":"Dianemarie","last_name":"Razzell","email":"drazzell1k@t.co","gender":"Female"},
{"id":58,"first_name":"Fremont","last_name":"Stranks","email":"fstranks1l@bluehost.com","gender":"Male"},
{"id":59,"first_name":"Rhonda","last_name":"Lushey","email":"rlushey1m@shareasale.com","gender":"Female"},
{"id":60,"first_name":"Paco","last_name":"Wheldon","email":"pwheldon1n@furl.net","gender":"Male"},
{"id":61,"first_name":"Tabby","last_name":"Hammatt","email":"thammatt1o@deliciousdays.com","gender":"Female"},
{"id":62,"first_name":"Elton","last_name":"Skerme","email":"eskerme1p@instagram.com","gender":"Male"},
{"id":63,"first_name":"Elvina","last_name":"Copelli","email":"ecopelli1q@clickbank.net","gender":"Female"},
{"id":64,"first_name":"Idalina","last_name":"Heggadon","email":"iheggadon1r@i2i.jp","gender":"Female"},
{"id":65,"first_name":"Karylin","last_name":"Rodge","email":"krodge1s@vkontakte.ru","gender":"Female"},
{"id":66,"first_name":"Lori","last_name":"Gunton","email":"lgunton1t@jigsy.com","gender":"Female"},
{"id":67,"first_name":"Boote","last_name":"Dicty","email":"bdicty1u@spiegel.de","gender":"Male"},
{"id":68,"first_name":"Elwood","last_name":"Goulter","email":"egoulter1v@vinaora.com","gender":"Male"},
{"id":69,"first_name":"Gary","last_name":"Jakoviljevic","email":"gjakoviljevic1w@elegantthemes.com","gender":"Male"},
{"id":70,"first_name":"Hadlee","last_name":"Hendrickx","email":"hhendrickx1x@phpbb.com","gender":"Male"},
{"id":71,"first_name":"Hershel","last_name":"Glennon","email":"hglennon1y@people.com.cn","gender":"Male"},
{"id":72,"first_name":"Freddy","last_name":"Prodrick","email":"fprodrick1z@seesaa.net","gender":"Female"},
{"id":73,"first_name":"Idette","last_name":"Swatton","email":"iswatton20@toplist.cz","gender":"Female"},
{"id":74,"first_name":"Geoffrey","last_name":"Hulk","email":"ghulk21@bizjournals.com","gender":"Male"},
{"id":75,"first_name":"Jarrett","last_name":"Lippatt","email":"jlippatt22@nbcnews.com","gender":"Male"},
{"id":76,"first_name":"Welch","last_name":"Brou","email":"wbrou23@seattletimes.com","gender":"Male"},
{"id":77,"first_name":"Helenka","last_name":"Jinda","email":"hjinda24@globo.com","gender":"Non-binary"},
{"id":78,"first_name":"Brittne","last_name":"Duckit","email":"bduckit25@abc.net.au","gender":"Female"},
{"id":79,"first_name":"Dominic","last_name":"Dorrins","email":"ddorrins26@archive.org","gender":"Male"},
{"id":80,"first_name":"Dominga","last_name":"Northway","email":"dnorthway27@mapquest.com","gender":"Female"},
{"id":81,"first_name":"Muhammad","last_name":"Losemann","email":"mlosemann28@nasa.gov","gender":"Male"},
{"id":82,"first_name":"Cobb","last_name":"Kanzler","email":"ckanzler29@shareasale.com","gender":"Male"},
{"id":83,"first_name":"Minni","last_name":"Caffrey","email":"mcaffrey2a@unesco.org","gender":"Female"},
{"id":84,"first_name":"Sada","last_name":"Grundle","email":"sgrundle2b@usda.gov","gender":"Female"},
{"id":85,"first_name":"Ashien","last_name":"Lamburn","email":"alamburn2c@tamu.edu","gender":"Female"},
{"id":86,"first_name":"Tully","last_name":"Celiz","email":"tceliz2d@printfriendly.com","gender":"Male"},
{"id":87,"first_name":"York","last_name":"Scutt","email":"yscutt2e@army.mil","gender":"Male"},
{"id":88,"first_name":"Elyse","last_name":"Wattingham","email":"ewattingham2f@imageshack.us","gender":"Female"},
{"id":89,"first_name":"Brucie","last_name":"Morphew","email":"bmorphew2g@adobe.com","gender":"Male"},
{"id":90,"first_name":"Grantham","last_name":"Bonevant","email":"gbonevant2h@yandex.ru","gender":"Male"},
{"id":91,"first_name":"Lanita","last_name":"Brabben","email":"lbrabben2i@zdnet.com","gender":"Female"},
{"id":92,"first_name":"Corny","last_name":"Piotr","email":"cpiotr2j@kickstarter.com","gender":"Female"},
{"id":93,"first_name":"Mark","last_name":"Peasee","email":"mpeasee2k@constantcontact.com","gender":"Male"},
{"id":94,"first_name":"Ilka","last_name":"McEnery","email":"imcenery2l@umn.edu","gender":"Genderfluid"},
{"id":95,"first_name":"Mattie","last_name":"Voaden","email":"mvoaden2m@tiny.cc","gender":"Male"},
{"id":96,"first_name":"Fran","last_name":"Jenicke","email":"fjenicke2n@chron.com","gender":"Male"},
{"id":97,"first_name":"Jo","last_name":"Kilpatrick","email":"jkilpatrick2o@ocn.ne.jp","gender":"Male"},
{"id":98,"first_name":"Shaylyn","last_name":"Schroeder","email":"sschroeder2p@cargocollective.com","gender":"Female"},
{"id":99,"first_name":"Lionello","last_name":"Fydoe","email":"lfydoe2q@naver.com","gender":"Male"},
{"id":100,"first_name":"Alethea","last_name":"Leupoldt","email":"aleupoldt2r@symantec.com","gender":"Female"}]

function displaydata(){
   let row = ""  
   for(emp of emp) {
                         //doubt to be clarified
    row = row + `<tr>
                <td>${emp.id}</td>
                <td>${emp.first_name}</td>
                <td>${emp.last_name}</td>
                <td>${emp.email}</td>
                <td>${emp.gender}</td>
                </tr>`
   }
   document.getElementById('tbody_data').innerHTML = row
}