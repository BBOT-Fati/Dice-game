<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./game.css">
    <title>Dice Game</title>
</head>
<body>
    <div id="container">
        <div id="player1">
            <h2>PLAYER 1</h2>
            <img class="stat" src="./images/active.png" alt="player status">
            <h3 id="score1">0</h3>
            <div class="current">
                <h4>CURRENT</h4>
                <p id="cscore1">0</p>
            </div>
        </div>
        <div id="center">
            <button id="new">NEW GAME</button>
            <img id="dice" src="./images/dice.png" alt="a dice">
            <button id="roll">ROLL</button>
            <button id="pass">PASS</button>
            <input type="text" placeholder="FINAL SCORE">
        </div>
        <div id="player2">
            <h2>PLAYER 2</h2>
                <img class="stat" src="./images/inactive.png" alt="player status">
                <h3 id="score2">0</h3>
                <div class="current">
                    <h4>CURRENT</h4>
                    <p id="cscore2">0</p>
                </div>
        </div>
    </div>
    <script src="./game.js"></script>
</body>
</html>