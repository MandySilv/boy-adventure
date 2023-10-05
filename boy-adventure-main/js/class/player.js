export class Player {
    constructor(x, y, width, height) {
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.dx = 0
        self.dy = 0
    }

    collide() {

    }

    update() {

    }

    render() {
        const entity = document.createElement('div');
        entity.id = "player";
        document.body.appendChild(entity);
        entity.style.backgroundPositionX = self.x + "px";
        entity.style.backgroundPositionY = self.y + "px";
        entity.style.height = self.height + "px";
    }
}
