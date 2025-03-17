basic.forever(function () {
    let sprite: game.LedSprite = null
    basic.showIcon(IconNames.Ghost)
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Ghost)
    sprite.move(1)
})
