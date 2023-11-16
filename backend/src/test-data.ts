import { DBConnection } from "./utils/db-connection"

const SetTestData = async () => {
    const client = DBConnection.instance.client

    await client.capacity.create({ data: { percentage: 50 } })
    await client.roles.createMany({
        data: [
            { name: "STUDENT" },
            { name: "ADMIN" },
            { name: "SCANNER" }
        ]
    })
    await client.users.createMany({
        data: [
            { email: 'miguelhumberto522@gmail.com', id_role: 1, password: "1", },
            { email: 'admin@correo.com', id_role: 2, password: "1", },
            { email: 'escaner@correo.com', id_role: 3, password: "1", }
        ]
    })
    await client.students.createMany({ data: [{ name: 'Alberto Jesus Chacon Marx', id_user: 1, plate: 'a16001614' }] })
    await client.days.createMany({ data: [{ name: 'LUNES' }, { name: 'MARTES' }, { name: 'MIERCOLES' }, { name: 'JUEVES' }, { name: 'VIERNES' }] })
    await client.subjects.createMany({ data: [{ name: 'Admin. Proys 2', }, { name: 'Salesforce', }, { name: 'Clean Architecture', }, { name: 'Servicio social', },] })
    await client.hours.createMany({
        data: [
            { end_hour: '19:00', start_hour: '17:00', id_day: 3, id_subject: 1, }, //ADPRO2
            { end_hour: '19:00', start_hour: '17:00', id_day: 5, id_subject: 1, }, //ADPRO2
            { end_hour: '13:30', start_hour: '15:30', id_day: 2, id_subject: 3, }, //CLEAN
            { end_hour: '13:30', start_hour: '15:30', id_day: 4, id_subject: 3, }, //CLEAN
            { end_hour: '19:00', start_hour: '21:00', id_day: 2, id_subject: 2, }, //SF
            { end_hour: '19:00', start_hour: '21:00', id_day: 4, id_subject: 2, }, //SF
            { end_hour: '8:00', start_hour: '11:00', id_day: 3, id_subject: 4, }, //SS

        ]
    })
    await client.builds.createMany({
        data: [
            { name: 'Edificio C' },
            { name: 'Edificio D' }
        ]
    })
    await client.classRooms.createMany({
        data: [{
            name: 'D2',
            capacity: 2,
            id_build: 2
        }, {
            name: 'CC2',
            capacity: 2,
            id_build: 1
        }, {
            name: 'CC3',
            capacity: 2,
            id_build: 1
        }, {
            name: 'D7',
            capacity: 2,
            id_build: 2
        }]
    })
    await client.groups.createMany({
        data: [
            { name: 'G. A', id_classroom: 1, id_subject: 1 },
            { name: 'G. B', id_classroom: 2, id_subject: 2 },
            { name: 'G. A', id_classroom: 3, id_subject: 3 },
            { name: 'G. A', id_classroom: 4, id_subject: 4 },
        ]
    })
    await client.subscriptions.createMany({
        data: [
            { id_group: 1, id_student: 1 },
            { id_group: 2, id_student: 1 },
            { id_group: 3, id_student: 1 },
            { id_group: 4, id_student: 1 },
        ]
    })
}

SetTestData()
    .then(() => {
        console.log('Success')
    })
    .catch((err) => {
        console.log(err)
    })