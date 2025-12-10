


namespace cleanGame {
    //%groups="bolleans, gameover, sprite"




    //% block
    //%group="gameover"
    export function gameOver(): void {
        music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        music.play(music.tonePlayable(Note.G, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        music.play(music.tonePlayable(Note.E, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        game.splash("GAME OVER")
        game.reset()
    }






    //% block
    //%group="gameover"
    export function gameOverWinOrLose(win:boolean): void {
        if (win) {
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
            game.setDialogFrame(img`
                999999999999999999999999999999999999999999999999
                999999999999999999999999999999999999999999999999
                999911119999119991111999111199999999119999999999
                999111111191111911111191111119911191111991111999
                999111111111111111111111111111111111111911111199
                999111111111111111111111111111111111111111111199
                999111111111111111111111111111111111111111111199
                999911111111111111111111111111111111111111111199
                999991111111111111111111111111111111111111111999
                999111111111111111111111111111111111111111111999
                991111111111111111111111111111111111111111119999
                991111111111111111111111111111111111111111111999
                999111111111111111111111111111111111111111111199
                999911111111111111111111111111111111111111111199
                999111111111111111111111111111111111111111111999
                999111111111111111111111111111111111111111119999
                999111111111111111111111111111111111111111111999
                999911111111111111111111111111111111111111111199
                999911111111111111111111111111111111111111111199
                999111111111111111111111111111111111111111111199
                991111111111111111111111111111111111111111111199
                991111111111111111111111111111111111111111111999
                991111111111111111111111111111111111111111119999
                991111111111111111111111111111111111111111111999
                999111111111111111111111111111111111111111111199
                999911111111111111111111111111111111111111111199
                999111111111111111111111111111111111111111111199
                991111111111111111111111111111111111111111111199
                991111111111111111111111111111111111111111111999
                991111111111111111111111111111111111111111119999
                991111111111111111111111111111111111111111119999
                999111111111111111111111111111111111111111111999
                99d1111111111111111111111111111111111dd111111199
                9ddd111111111111111111111111111111111dd111111199
                9ddd1111111111dd111111111111111111111dd1111dd199
                9d1d111111111ddddd11111111111ddddd111ddd111ddd99
                9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
                9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
                9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
                9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
                dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
                dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
                dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
                dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
                ddddddddddddddddddddddd1dddddddddddddddddddddddd
                ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
                .dddddddddddddddddddddddddddddddddddddddddddddd.
                ..dddddddddddddddddddddddddddddddddddddddddddd..
            `)
            effects.confetti.startScreenEffect()
            game.showLongText("you win!!!", DialogLayout.Center)
            game.reset()
        } else {
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
            game.setDialogFrame(img`
                248888888888888888888842
                42dddddddddddddddddddd24
                bcddddddddddddddddddddcb
                b6622222222222222222266b
                b6255555555555555555526b
                b2597777777777777777952b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2577777777777777777752b
                b2597777777777777777952b
                b6255555555555555555526b
                b6622222222222222222266b
                bccccccccccccccccccccccb
                cccccccccccccccccccccccc
            `)
            game.showLongText("you lose!!!", DialogLayout.Center)
            game.reset()
        }
    }

    //% block
    //%group="sprites"
    //%i.shadow=Screen_image_picker
    export function createSprite(i:Image): void {
        let mySprite = sprites.create(i, SpriteKind.Player)
        controller.moveSprite(mySprite)
    }




    export function setPlatformerModeIn(s:Sprite): void {

    }







    //% block
    //%group="bolleans"
    export function yes(): boolean {
        return true
    }








    //% block
    //%group="bolleans"
    export function no(): boolean {
        return false
    }








    

}
