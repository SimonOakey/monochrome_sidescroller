controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    a_btndown = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    a_btndown = false
})
let a_btndown = false
let mySprite = sprites.create(img`
    . 1 1 1 1 1 1 1 1 1 1 1 . . 
    1 f f f f f f f f f f f 1 . 
    1 f 1 1 1 1 f 1 1 1 1 f 1 . 
    1 f 1 f f 1 f 1 f f 1 f 1 . 
    1 f 1 f f 1 f 1 f f 1 f 1 . 
    1 f 1 1 f 1 f 1 1 f 1 f 1 . 
    1 f 1 f f 1 f 1 f f 1 f 1 . 
    1 f 1 f f 1 f 1 f f 1 f 1 . 
    1 f 1 f f 1 f 1 f f 1 f 1 . 
    1 f 1 1 1 1 f 1 1 1 1 f 1 . 
    1 f f f f f f f f f f f 1 . 
    1 f 2 2 2 2 2 2 2 2 2 f 1 . 
    1 f 2 f f 1 f 1 f f 2 f 1 . 
    1 f f 2 2 2 2 2 2 2 f f 1 . 
    1 f f f f f f f f f f f 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level`)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
animation.runImageAnimation(
mySprite,
[img`
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    1 f f f f f f f f f f f 1 . . . 
    1 f 1 1 1 1 f 1 1 1 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 1 f 1 f 1 1 f 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 1 1 1 f 1 1 1 1 f 1 . . . 
    1 f f f f f f f f f f f 1 . . . 
    1 f 2 2 2 2 2 2 2 2 2 f 1 . . . 
    1 f 2 f f 1 f 1 f f 2 f 1 . . . 
    1 f f 2 2 2 2 2 2 2 f f 1 . . . 
    1 f f f f f f f f f f f 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    `,img`
    . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
    1 f f f f f f f f f f f 1 . . . 
    1 f 1 1 1 1 f 1 1 1 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 1 f 1 f 1 1 f 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 f f 1 f 1 f f 1 f 1 . . . 
    1 f 1 1 1 1 f 1 1 1 1 f 1 . . . 
    1 f f f f f f f f f f f 1 . . . 
    1 f 2 2 2 2 2 2 2 2 2 f 1 . . . 
    1 f 2 f 1 f f f 1 f 2 f 1 . . . 
    1 f f 2 f 4 4 4 f 2 f f 1 . . . 
    1 f f f f 4 4 4 f f f f 1 . . . 
    . 1 1 1 f 4 4 4 f 1 1 1 . . . . 
    `],
800,
true
)
game.onUpdate(function () {
    if (a_btndown) {
        mySprite.setVelocity(0, -60)
    } else {
        mySprite.setVelocity(0, 50)
    }
})
