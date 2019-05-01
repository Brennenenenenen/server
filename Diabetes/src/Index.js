var myUrl = require('url');
const request = require('request');
const axios = require('axios');
const cheerio = require('cheerio');
var Nightmare = require('nightmare'),
vo = require('vo'),
nightmare = Nightmare({ show: true});
//const url = 'https://online.epocrates.com/drugs';

var urls = [ 'https://online.epocrates/drugs',
    'https://online.epocrates.com/drugs/111910/acarbose/Monograph',
    'https://online.epocrates.com/drugs/79310/Glyset/Monograph',
    'https://online.epocrates.com/drugs/112010/Precose/Monograph',
    'https://online.epocrates.com/drugs/413210/Symlin/Monograph',
    'https://online.epocrates.com/drugs/423710/ACTOplus-met/Monograph',
    'https://online.epocrates.com/drugs/575210/ACTOplus-met-XR/Monograph',
    'https://online.epocrates.com/drugs/655310/alogliptin-metformin/Monograph',
    'https://online.epocrates.com/drugs/325610/Avandamet/Monograph',
    'https://online.epocrates.com/drugs/369710/Fortamet/Monograph',
    'https://online.epocrates.com/drugs/325110/glipizide-metformin/Monograph',
    'https://online.epocrates.com/drugs/78810/Glucophage/Monograph',
    'https://online.epocrates.com/drugs/230810/Glucophage-XR/Monograph',
    'https://online.epocrates.com/drugs/231210/Glucovance/Monograph',
    'https://online.epocrates.com/drugs/415910/Glumetza/Monograph',
    'https://online.epocrates.com/drugs/231110/glyburide-metformin/Monograph',
    'https://online.epocrates.com/drugs/694510/Invokamet/Monograph',
    'https://online.epocrates.com/drugs/757710/Invokamet-XR/Monograph',
    'https://online.epocrates.com/drugs/465710/Janumet/Monograph',
    'https://online.epocrates.com/drugs/631710/Janumet-XR/Monograph',
    'https://online.epocrates.com/drugs/631510/Jentadueto/Monograph',
    'https://online.epocrates.com/drugs/754710/Jentadueto-XR/Monograph',
    'https://online.epocrates.com/drugs/655410/Kazano/Monograph',
    'https://online.epocrates.com/drugs/594810/Kombiglyze-XR/Monograph',
    'https://online.epocrates.com/drugs/325210/Metaglip/Monograph',
    'https://online.epocrates.com/drugs/78710/metformin/Monograph',
    'https://online.epocrates.com/drugs/423610/pioglitazone-metformin/Monograph',
    'https://online.epocrates.com/drugs/491110/PrandiMet/Monograph',
    'https://online.epocrates.com/drugs/491010/repaglinide-metformin/Monograph',
    'https://online.epocrates.com/drugs/357910/Riomet/Monograph',
    'https://online.epocrates.com/drugs/797510/Segluromet/Monograph',
    'https://online.epocrates.com/drugs/730510/Synjardy/Monograph',
    'https://online.epocrates.com/drugs/766010/Synjardy-XR/Monograph',
    'https://online.epocrates.com/drugs/698910/Xigduo-XR/Monograph',
    'https://online.epocrates.com/drugs/233010/colesevelam/Monograph',
    'https://online.epocrates.com/drugs/233110/Welchol/Monograph',
    'https://online.epocrates.com/drugs/593810/Cycloset/Monograph',
    'https://online.epocrates.com/drugs/655710/alogliptin/Monograph',
    'https://online.epocrates.com/drugs/655310/alogliptin-metformin/Monograph',
    'https://online.epocrates.com/drugs/655510/alogliptin-pioglitazone/Monograph',
    'https://online.epocrates.com/drugs/705210/Glyxambi/Monograph',
    'https://online.epocrates.com/drugs/465710/Janumet/Monograph',
    'https://online.epocrates.com/drugs/631710/Janumet-XR/Monograph',
    'https://online.epocrates.com/drugs/442110/Januvia/Monograph',
    'https://online.epocrates.com/drugs/631510/Jentadueto/Monograph',
    'https://online.epocrates.com/drugs/754710/Jentadueto-XR/Monograph',
    'https://online.epocrates.com/drugs/622210/Juvisync/Monograph',
    'https://online.epocrates.com/drugs/655410/Kazano/Monograph',
    'https://online.epocrates.com/drugs/594810/Kombiglyze-XR/Monograph',
    'https://online.epocrates.com/drugs/655810/Nesina/Monograph',
    'https://online.epocrates.com/drugs/546410/Onglyza/Monograph',
    'https://online.epocrates.com/drugs/655610/Oseni/Monograph',
    'https://online.epocrates.com/drugs/794910/Qtern/Monograph',
    'https://online.epocrates.com/drugs/797010/Steglujan/Monograph',
    'https://online.epocrates.com/drugs/606810/Tradjenta/Monograph',
    'https://online.epocrates.com/drugs/764710/Adlyxin/Monograph',
    'https://online.epocrates.com/drugs/630210/Bydureon/Monograph',
    'https://online.epocrates.com/drugs/794510/Bydureon-BCise/Monograph',
    'https://online.epocrates.com/drugs/415410/Byetta/Monograph',
    'https://online.epocrates.com/drugs/797810/Ozempic/Monograph',
    'https://online.epocrates.com/drugs/762110/Soliqua-100-33/Monograph',
    'https://online.epocrates.com/drugs/693010/Tanzeum/Monograph',
    'https://online.epocrates.com/drugs/697710/Trulicity/Monograph',
    'https://online.epocrates.com/drugs/562810/Victoza/Monograph',
    'https://online.epocrates.com/drugs/767010/Xultophy-100-36/Monograph',
    'https://online.epocrates.com/drugs/808910/Admelog/Monograph',
    'https://online.epocrates.com/drugs/704910/Afrezza/Monograph',
    'https://online.epocrates.com/drugs/434110/Apidra/Monograph',
    'https://online.epocrates.com/drugs/761610/Basaglar/Monograph',
    'https://online.epocrates.com/drugs/797610/Fiasp/Monograph',
    'https://online.epocrates.com/drugs/171010/Humalog/Monograph',
    'https://online.epocrates.com/drugs/474610/Humalog-Mix-50-50/Monograph',
    'https://online.epocrates.com/drugs/224010/Humalog-Mix-75-25/Monograph',
    'https://online.epocrates.com/drugs/474710/Humulin-50-50/Monograph',
    'https://online.epocrates.com/drugs/171210/Humulin-70-30/Monograph',
    'https://online.epocrates.com/drugs/171410/Humulin-N/Monograph',
    'https://online.epocrates.com/drugs/171510/Humulin-R/Monograph',
    'https://online.epocrates.com/drugs/170910/insulin-lispro/Monograph',
    'https://online.epocrates.com/drugs/239710/Lantus/Monograph',
    'https://online.epocrates.com/drugs/433710/Levemir/Monograph',
    'https://online.epocrates.com/drugs/344010/Novolin-70-30/Monograph',
    'https://online.epocrates.com/drugs/343810/Novolin-N/Monograph',
    'https://online.epocrates.com/drugs/201910/Novolin-R/Monograph',
    'https://online.epocrates.com/drugs/244010/NovoLog/Monograph',
    'https://online.epocrates.com/drugs/344610/NovoLog-Mix-70-30/Monograph',
    'https://online.epocrates.com/drugs/762110/Soliqua-100-33/Monograph',
    'https://online.epocrates.com/drugs/813410/Toujeo-Max-Solostar/Monograph',
    'https://online.epocrates.com/drugs/708010/Toujeo-Solostar/Monograph',
    'https://online.epocrates.com/drugs/733110/Tresiba/Monograph',
    'https://online.epocrates.com/drugs/767010/Xultophy-100-36/Monograph',
    'https://online.epocrates.com/drugs/233410/nateglinide/Monograph',
    'https://online.epocrates.com/drugs/491110/PrandiMet/Monograph',
    'https://online.epocrates.com/drugs/111610/Prandin/Monograph',
    'https://online.epocrates.com/drugs/111510/repaglinide/Monograph',
    'https://online.epocrates.com/drugs/491010/repaglinide-metformin/Monograph',
    'https://online.epocrates.com/drugs/233510/Starlix/Monograph',
    'https://online.epocrates.com/drugs/684510/Farxiga/Monograph',
    'https://online.epocrates.com/drugs/705210/Glyxambi/Monograph',
    'https://online.epocrates.com/drugs/694510/Invokamet/Monograph',
    'https://online.epocrates.com/drugs/757710/Invokamet-XR/Monograph',
    'https://online.epocrates.com/drugs/661610/Invokana/Monograph',
    'https://online.epocrates.com/drugs/694110/Jardiance/Monograph',
    'https://online.epocrates.com/drugs/794910/Qtern/Monograph',
    'https://online.epocrates.com/drugs/797510/Segluromet/Monograph',
    'https://online.epocrates.com/drugs/796410/Steglatro/Monograph',
    'https://online.epocrates.com/drugs/797010/Steglujan/Monograph',
    'https://online.epocrates.com/drugs/730510/Synjardy/Monograph',
    'https://online.epocrates.com/drugs/766010/Synjardy-XR/Monograph',
    'https://online.epocrates.com/drugs/698910/Xigduo-XR/Monograph',
    'https://online.epocrates.com/drugs/38210/Amaryl/Monograph',
    'https://online.epocrates.com/drugs/430110/Avandaryl/Monograph',
    'https://online.epocrates.com/drugs/17810/chlorpropamide/Monograph',
    'https://online.epocrates.com/drugs/62610/DiaBeta/Monograph',
    'https://online.epocrates.com/drugs/62710/Diabinese/Monograph',
    'https://online.epocrates.com/drugs/460910/Duetact/Monograph',
    'https://online.epocrates.com/drugs/38110/glimepiride/Monograph',
    'https://online.epocrates.com/drugs/21310/glipizide/Monograph',
    'https://online.epocrates.com/drugs/325110/glipizide-metformin/Monograph',
    'https://online.epocrates.com/drugs/78910/Glucotrol/Monograph',
    'https://online.epocrates.com/drugs/79010/Glucotrol-XL/Monograph',
    'https://online.epocrates.com/drugs/231210/Glucovance/Monograph',
    'https://online.epocrates.com/drugs/3310/glyburide/Monograph',
    'https://online.epocrates.com/drugs/265810/glyburide-micronized/Monograph',
    'https://online.epocrates.com/drugs/231110/glyburide-metformin/Monograph',
    'https://online.epocrates.com/drugs/79110/Glynase-PresTab/Monograph',
    'https://online.epocrates.com/drugs/325210/Metaglip/Monograph',
    'https://online.epocrates.com/drugs/96710/Micronase/Monograph',
    'https://online.epocrates.com/drugs/460810/pioglitazone-glimepiride/Monograph',
    'https://online.epocrates.com/drugs/29410/tolazamide/Monograph',
    'https://online.epocrates.com/drugs/29510/tolbutamide/Monograph',
    'https://online.epocrates.com/drugs/423710/ACTOplus-met/Monograph',
    'https://online.epocrates.com/drugs/575210/ACTOplus-met-XR/Monograph',
    'https://online.epocrates.com/drugs/205010/Actos/Monograph',
    'https://online.epocrates.com/drugs/655510/alogliptin-pioglitazone/Monograph',
    'https://online.epocrates.com/drugs/325610/Avandamet/Monograph',
    'https://online.epocrates.com/drugs/430110/Avandaryl/Monograph',
    'https://online.epocrates.com/drugs/204810/Avandia/Monograph',
    'https://online.epocrates.com/drugs/460910/Duetact/Monograph',
    'https://online.epocrates.com/drugs/655610/Oseni/Monograph',
    'https://online.epocrates.com/drugs/204910/pioglitazone/Monograph',
    'https://online.epocrates.com/drugs/460810/pioglitazone-glimepiride/Monograph',
    'https://online.epocrates.com/drugs/423610/pioglitazone-metformin/Monograph'
]


var run = function * () {
    
    var results = [];
    var j = 0;
    const classes = ["a#drugClass281", "a#drugClass582","a#drugClass282","a#drugClass602", "a#drugClass583", "a#drugClass341", "a#drugClass346", "a#drugClass35", "a#drugClass285", 'a#drugClass354', 'a#drugClass284', 'a#drugClass283'];

        nightmare.goto('https://online.epocrates.com')
        .wait('body')
        .click('div.account a')
        .type('div#login input[name=emailuser]', 'DiabetesShoppingCart@gmail.com')
        .wait(1000)
        .type('div#login input[name=emailpassword]', 'Bitsnbytes1')
        .wait(1000)
        .click('div#login input[name=email_submit_button]')
        .wait(7000)

    for(var i = 1; i < urls.length; i++) {
        var result = yield nightmare.goto(urls[i])
        .wait('body')
        /*.click('a#drugClass36')
        .wait(1000)
        .click(classes[i])
        .wait(1000)*/
        .evaluate(() => document.querySelector('body').innerHTML)
        .then(response => {
            results.push(response);
            //nightmare.end();
        }).catch(err => {
            console.log(err);
        })
    };
    return results;
}

vo(run)(function(err, results) {
    //signIn();
    for(var i = 0; i < results.length; i++){
    console.log(getData(results[i]));
    }
});

// Parsing data using cheerio
let getData = html => {
  data = [];
  const $ = cheerio.load(html);
      $('html').each((i, elem) => {
        /*var linkConcat = "drugs";
        $('table.drugTable.newDrugTable tbody tr td a').each( function () {
            var links = $(this).attr('href');
            linkSplit = links.split("/");
            for (let i = 1; i < linkSplit.length; i++) {
                linkConcat = linkConcat + "/" + linkSplit[i];   
                if(i == 2)
                {
                    linkConcat = linkConcat + "10";
                } 
            }
            linkConcat = "https://online.epocrates.com" + linkConcat;
            linkConcat = linkConcat + "/Monograph";
            data.push(linkConcat);
            linkConcat = "drugs";
         });*/
        //console.log("output " + linkConcat);
        data.push({
        name : $(elem).find('div.rxHeaderOne h1').text(),
        class : $(elem).find('p#pharmacologictext').text(),
        generics : $(elem).find('div.rxHeaderOne h2').text(),
        dqp : $(elem).find('div#f ul').text().replace(/\n+/g, ',').replace(/\s+/g, ''),
        link : urls[i+1],
        action: $(elem).find('div.msection > p:nth-child(5)').text().replace("Mechanism of Action", '')
        });
    });

  return data;
}

/*let getData2 = html => {
    data.push({
        name : $(elem).find('div.rxHeaderOne h1').text(),
        class : $(elem).find('p#pharmacologictext').text(),
        generics : $(elem).find('div.rxHeaderOne h2').text(),
        dqp : $(elem).find('div#f ul').text().replace(/\n+/g, ',').replace(/\s+/g, '')
        //link : linkConcat
        //action: $(elem).find('div.msection > p:nth-child(5)').text().replace("Mechanism of Action", '')
    });
  
    return data;
}*/
