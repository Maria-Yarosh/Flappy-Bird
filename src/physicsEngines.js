class PhysicsEngine {
    constructor({ gravity }) {
        this._gravity = 100
    }

    update(entity, delta) {
        if (entity.falling) {
            entity.speed += this._gravity * delta
            entity.y += entity.speed * delta
        }
    }
}