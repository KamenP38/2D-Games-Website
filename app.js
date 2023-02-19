const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var games = [
    {title: 'Cut The Rope',
    creator: 'KP Fresh 24',
    width: 800,
    height: 800,
    thumbnailFile: "cut-the-rope_sp.png",
    src: "https://www.addictinggames.com/embed/html5-games/19569"
    },
    {
    title: 'Cursor.io',
    creator: 'KP Fresh 24',
    width: 800,
    height: 800,
    thumbnailFile: "cursorio.png",
    src: "https://www.addictinggames.com/embed/html5-games/10000193"
    },
    {
    title: 'Bunny Goes Boom!',
    creator: 'IDK',
    width: 800,
    height: 800,
    thumbnailFile: "bunny-goes-boom_sp.png",
    src: "https://www.addictinggames.com/embed/html5-games/18194"
    },
    {
    title: 'Mahjong Wizard',
    creator: 'IDK',
    width: 800,
    height: 800,
    thumbnailFile: "mahjong-wizard.png",
    src: "https://www.addictinggames.com/embed/html5-games/19661"
    }
    ];
    

app.set("view engine", "ejs");

app.get("/game/:title/:creator/:width/:height/:thumbnailFile", function(req, res){
    var title = req.params.title;
    var creator = req.params.creator;
    var width = req.params.width;
    var height = req.params.height;
    var thumbnailFile = req.params.thumbnailFile;
    var src = "";

    for(var i = 0; i < games.length; i++){
        if(games[i].title == title){
            src = games[i].src;
        } 
    }
    
    res.render("game",{
        title: title,
        creator: creator,
        width: width,
        height: height,
        thumbnailFile: thumbnailFile,
        src: src
    });
});

app.get("/", function(req, res){
    
    res.render("list", {
        gameList: games
    }
    )
});

app.get("/addgame", function(req, res){
    res.render("addgame")
});

app.post("/addgame", function(req, res){
    var data = req.body;
    games.push(data);
    console.log(data);
    res.redirect("/");
})

app.listen("3000", function(){
    console.log("Kamen's Website is now online.");
});

//r-zDHTnGraGoq5Sw3BIz4Vfyyki5lv04qFtQA5UtO4w --> For unsplash