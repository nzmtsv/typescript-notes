// будьте либеральны в том, что берете, но консервативны в том, что даете

declare function setCamera(camera: CameraOptions): void
declare function getCameraOptions(bounds: LngLatBounds): CameraOptions

type LngLat =
    | { lng: number; lat: number }
    | { lon: number; lat: number }
    | [number, number]

type LngLatBounds =
    | { northEast: LngLat, southwest: LngLat }
    | [LngLat, LngLat]
    | [number, number, number, number]


// Возвращаемый тип со множеством опциональных свойств и типов объединения
interface CameraOptions {
    center?: LngLat
    zoom?: number
    bearing?: number
    pitch?: number
}


// declare function setCamera(camera: CameraOptions): void
// declare function getCameraOptions(bounds: LngLatBounds): Camera
//
// interface LngLat { lng: number; lat: number }
// type LngLatLike =
//     | LngLat
//     | { lon: number, lat: number }
//     | [number, number]
//
// interface Camera {
//     center: LngLat
//     zoom: number
//     bearing: number
//     pitch: number
// }
//
// interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
//     center?: LngLatLike
// }
//
// type LngLatBounds =
//     | { northEast: LngLatLike, southwest: LngLatLike }
//     | [LngLatLike, LngLatLike]
//     | [number, number, number, number]

