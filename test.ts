

let padlle = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 d d d d d d d d d d d d d d 1
    1 d d d d d d d d d d d d d d 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, SpriteKind.Player)
let ball = sprites.create(img`
    d 1 1
    1 1 d
    d 1 d
`, SpriteKind.Enemy)
gamePlus.move(ball, "up", 30)
gamePlus.move(ball, "right", 30)
ball.setBounceOnWall(true)
gamePlus.folowJustWith("x", 100, padlle, ball)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    ball.setVelocity(-30, -30)
})
