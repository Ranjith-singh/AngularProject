export interface Rooms {
    totalRooms?: number;
    bookedRooms?: number;
    availableRooms?: number;
}

export enum RoomType {
    'general',
    'deluxe',
    'luxury'
}

export interface RoomList {
    roomNumber: number,
    roomType: RoomType,
    price: number,
    checkIn: Date,
    checkOut: Date
    rating: number
}