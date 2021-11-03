export interface ActivityType {
    important: boolean,
    bgColor: string,
    text: string,
    state: 'Finalizada' | 'Pendiente' | 'En curso' | 'Asignada' | 'Por asignar',
}