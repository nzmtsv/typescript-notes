// Более точные альтернативы string

type RecordingType = 'studio' | 'live'

interface Album {
    artist: string
    title: string
    releaseDate: Date
    recordingType: RecordingType
}

const bluesAlbum: Album = {
    artist: 'Jimmy Hendrix',
    title: 'foo',
    releaseDate: new Date('1963-08-17'),
    recordingType: 'studio',
}

const albums = [bluesAlbum, bluesAlbum, bluesAlbum]

// извлекает все значения по ключу
function pluck(records: any[], key: string): any[] {
    return records.map(record => record[key])
}

// Введение обобщенного типа
function pluckGeneric<T>(records: T[], key: keyof T): T[keyof T][] {
    return records.map(r => r[key])
}

const releaseDates = pluckGeneric(albums, 'releaseDate') // returns string | date

// Хотя тип keyof T гораздо уже чем string , он всё еще слишком обширен
function pluckGenericExtends<T, K extends keyof T>(records: T[], key: K): T[K][] {
    return records.map(r => r[key])
}

const releaseStringDates = pluckGenericExtends(albums, 'releaseDate') // returns date
