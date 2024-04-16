export interface Person {
    id: number,
    name: string,
    childrens?: Person[],
    phone: string,
    age?: number
}
export const NoteObject: Partial<Person> = {};

export const Mockup: Person[] = [
        {
            "id": 1,
            "name": "Алексей",
            "childrens": [
                {
                    "id": 11,
                    "name": "Елена",
                    "phone": "123-456-7890",
                    "childrens": [
                        {
                            "id": 13,
                            "name": "Вика",
                            "phone": "123-456-7890",
                            "childrens": [{
                                "id": 133,
                                "name": "Кирилл",
                                "phone": "123-456-7890",
                                "age": 25
                            }],
                            "age": 25
                        }
                    ],
                    "age": 25
                },
                {
                    "id": 12,
                    "name": "Иван",
                    "phone": "987-654-3210",
                    "age": 22
                }
            ],
            "phone": "555-123-4567",
            "age": 50
        },
        {
            "id": 2,
            "name": "Мария",
            "phone": "555-987-6543",
            "age": 45
        },
        {
            "id": 3,
            "name": "Андрей",
            "phone": "555-111-2222",
            "age": 30
        },
        {
            "id": 4,
            "name": "Елена",
            "childrens": [
                {
                    "id": 41,
                    "name": "Ольга",
                    "phone": "555-333-4444",
                    "age": 20
                }
            ],
            "phone": "555-555-5555",
            "age": 40
        },
        {
            "id": 5,
            "name": "Иван",
            "childrens": [
                {
                    "id": 51,
                    "name": "Петр",
                    "phone": "555-777-8888",
                    "age": 18
                },
                {
                    "id": 52,
                    "name": "Светлана",
                    "phone": "555-999-0000",
                    "age": 16
                }
            ],
            "phone": "555-666-6666",
            "age": 35
        },
        {
            "id": 6,
            "name": "Ольга",
            "phone": "555-444-3333",
            "age": 60
        },
        {
            "id": 7,
            "name": "Петр",
            "phone": "555-222-1111",
            "age": 55
        },
        {
            "id": 8,
            "name": "Светлана",
            "phone": "555-888-9999",
            "age": 30
        }
]
