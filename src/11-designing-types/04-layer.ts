// Предпочитайте объединения интерфейсов интерфейсам объединений

interface FillLayout {}
interface LineLayout {}
interface PointLayout {}

interface FillPaint {}
interface LinePaint {}
interface PointPaint {}


interface Layer {
    type: 'fill' | 'line' | 'point'
    layout: FillLayout | LineLayout | PointLayout
    paint:  FillPaint | LinePaint | PointLayout
}

// Есть ли смысл создавать слой, где лэйаут LineLayout, а paint FillPaint?
interface FillLayer { // слой заливки
    layout: FillLayout
    paint: FillPaint
}

interface LineLayer {
    layout: LineLayout
    paint: LinePaint
}

interface PointLayer {
    layout: PointLayout
    paint: PointPaint
}

type LayerType = FillLayer | LineLayer | PointLayer
