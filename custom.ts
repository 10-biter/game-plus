
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="Win"
    Win,
    //% block="lose"
    Lose
}

/**
 * Custom blocks
 */
//% weight=100 color=#173d6e icon="\f140"
namespace cleanGame {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function gameOver(): void {
        music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        music.play(music.tonePlayable(Note.G, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        music.play(music.tonePlayable(Note.E, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        game.splash("GAME OVER")
        game.reset()
    }






    /**
 * TODO: describe your function here
 * @param n describe parameter here, eg: 5
 * @param s describe parameter here, eg: "Hello"
 * @param e describe parameter here
 */
    //% block
    export function gameOverLose(): void {
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

    /**
 * TODO: describe your function here
 * @param n describe parameter here, eg: 5
 * @param s describe parameter here, eg: "Hello"
 * @param e describe parameter here
 */
    //% block
    export function createSprite(): void {
        let mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . f f f f f f f . . . . . .
            . f f 1 1 1 1 1 1 1 f . . . . .
            . f 1 1 1 1 1 1 1 1 1 f . . . .
            . f 1 1 f 1 1 f 1 1 1 f . . . .
            . f 1 1 f 1 1 f 1 1 1 f . . . .
            . f 1 1 1 1 1 1 1 1 1 f . . . .
            . f 1 1 1 1 1 1 1 1 1 f . . . .
            . f 1 1 1 1 1 1 1 1 1 f . . . .
            . . f f 1 1 1 1 1 f f . . . . .
            . . . f 1 f f f 1 f . . . . . .
            . . . f 1 f . f 1 f . . . . . .
            . . . f 1 f . f 1 f . . . . . .
            . . . f 1 f . f 1 f . . . . . .
            . . . f 1 f . f 1 f . . . . . .
        `, SpriteKind.Player)
        controller.moveSprite(mySprite)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }





    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function yes(): boolean {
        return true
    }







    /**
 * TODO: describe your function here
 * @param value describe value here, eg: 5
 */
    //% block
    export function no(): boolean {
        return false
    }

}
