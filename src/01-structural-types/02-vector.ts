// ковариантность
interface Vector2D {
    x: number;
    y: number;
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y + v.y)
}

interface NamedVector {
    name: string;
    x: number;
    y: number;
}

const vector: NamedVector = {x: 3, y: 4, name: 'foo'}
calculateLength(vector)

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function normalize(v: Vector3D) {
    const length = calculateLength(v); // !
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    }
}

normalize({x: 3, y: 4, z: 5}) // ok?!


