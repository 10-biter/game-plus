let padlle = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 d d d d d d d d d d d d d d 1
    1 d d d d d d d d d d d d d d 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, SpriteKind.Player)
padlle.setBounceOnWall(true)
gamePlus.move(padlle, "left", 50)
let ball = sprites.create(img`
    d c c
    1 b d
    d c d
`, SpriteKind.Player)
gamePlus.move(ball, "up", 30)
gamePlus.move(ball, "right", 30)
ball.setBounceOnWall(true)