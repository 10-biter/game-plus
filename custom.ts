
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
//% weight=100 color=#173d6e icon=""
namespace cleanGame {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function gameOver(): void {
        music.play(music.tonePlayable(Note.E, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        game.splash("GAME OVER")
        game.reset()
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }

}
