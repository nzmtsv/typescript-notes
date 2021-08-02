type RecordingType = 'studio' | 'live'

interface Album {
    artist: string,
    title: string,
    releaseDate: Date,
    recordingType: RecordingType
}

// извлекает все значения по ключу
function pluck(records: any[], key: string): any[] {
    return records.map(record => record[key])
}

// Введение обобщенного типа
function pluckGeneric<T>(record: T[], key: keyof T): T[keyof T][] {
    return record.map(r => r[key])
}

// Хотя тип keyof T гораздо уже чем string , он всё еще слишком обширен

